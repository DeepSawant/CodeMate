// Simple cross-tab event bus using BroadcastChannel with storage fallback
(function(){
  const CHANNEL_NAME = 'codemate_bus_v1';
  const STORAGE_KEY = 'codemate_bus_ping_v1';

  let bc = null;
  const listeners = new Map(); // event -> Set(handlers)

  function on(event, handler){
    if(!listeners.has(event)) listeners.set(event, new Set());
    listeners.get(event).add(handler);
    return () => listeners.get(event)?.delete(handler);
  }

  function emitLocal(event, payload){
    const set = listeners.get(event);
    if(!set) return;
    for(const h of set) try { h(payload); } catch(e){ console.error(e); }
  }

  function broadcast(event, payload){
    const msg = { event, payload, ts: Date.now() };
    if(bc){
      bc.postMessage(msg);
    } else {
      // storage fallback broadcasts to other tabs (storage event doesn't fire on same tab)
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(msg)); } catch {}
    }
    // Also emit locally so current page updates immediately
    emitLocal(event, payload);
  }

  function init(){
    if('BroadcastChannel' in window){
      bc = new BroadcastChannel(CHANNEL_NAME);
      bc.onmessage = (e) => {
        const { event, payload } = e.data || {};
        if(event) emitLocal(event, payload);
      };
    } else {
      window.addEventListener('storage', (e) => {
        if(e.key !== STORAGE_KEY || !e.newValue) return;
        try {
          const data = JSON.parse(e.newValue);
          if(data?.event) emitLocal(data.event, data.payload);
        } catch {}
      });
    }
  }

  init();
  window.Bus = { on, broadcast };
})();