// Practice page logic
(function(){
  window.Auth.guard();
  const user = window.Auth.currentUser();
  const listEl = document.getElementById('practiceList');
  const langSel = document.getElementById('langSel');
  const diffSel = document.getElementById('diffSel');

  function key(email){ return 'codemate_practice_' + email; }
  function load(){ try{ return JSON.parse(localStorage.getItem(key(user.email))) || {}; } catch { return {}; } }
  function save(data){ localStorage.setItem(key(user.email), JSON.stringify(data)); }

  function solvedSet(lang){ const s = load(); s[lang] = s[lang] || []; return new Set(s[lang]); }
  function markSolved(lang, id){ const s = load(); s[lang] = s[lang] || []; if(!s[lang].includes(id)) s[lang].push(id); save(s); try{ window.Bus?.broadcast?.('progress-updated', { email: user.email, lang }); }catch{} try{ window.Achievements?.ensure?.(user.email); }catch{} }

  function render(){
    const lang = langSel.value;
    const diff = diffSel.value;
    const items = (window.PRACTICE?.[lang] || []).filter(i => !diff || i.difficulty === diff);
    const solved = solvedSet(lang);
    listEl.innerHTML = '';
    items.forEach(i => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
        <h4 style="margin:0;">${i.title}</h4>
        <span class="badge ${i.difficulty==='easy'?'':'badge--blue'}">${i.difficulty}</span>
      </div>
      <p class="muted" style="margin:6px 0 10px;">${i.prompt}</p>
      <details class="small"><summary>Show hint/answer</summary><pre><code>${(i.answer||'').replace(/</g,'&lt;')}</code></pre></details>
      <div style="display:flex;gap:8px;margin-top:10px;">
        <button class="btn btn-primary" data-id="${i.id}">${solved.has(i.id) ? 'Solved ✓' : 'Mark as solved'}</button>
        <a class="btn" href="chat.html">Ask CodeMate</a>
      </div>`;
      card.querySelector('button').addEventListener('click', (e) => {
        markSolved(lang, i.id);
        e.target.textContent = 'Solved ✓';
      });
      listEl.appendChild(card);
    });
  }

  langSel.addEventListener('change', render);
  diffSel.addEventListener('change', render);
  render();

  document.getElementById('logoutBtn')?.addEventListener('click', () => { window.Auth.logout(); window.location.href = 'index.html'; });
})();
