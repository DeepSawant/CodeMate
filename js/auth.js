// Simple local auth with WebCrypto password hashing and localStorage persistence
(function(){
  const USERS_KEY = 'codemate_users_v1';
  const CURRENT_KEY = 'codemate_current_user_v1';

  async function sha256(text){
    const enc = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  }

  function loadUsers(){
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; } catch { return {}; }
  }
  function saveUsers(obj){ localStorage.setItem(USERS_KEY, JSON.stringify(obj)); }

  function requireSecureContext(){
    // WebCrypto works on https or localhost; for file:// it still works in many browsers.
    // We'll no-op here but keep as a hook.
  }

  async function signup({ name, email, password }){
    requireSecureContext();
    if(!name || !email || !password) throw new Error('All fields are required');
    const users = loadUsers();
    if(users[email]) throw new Error('An account with this email already exists');
    const hash = await sha256(password);
    users[email] = { name, email, pass: hash, createdAt: Date.now() };
    saveUsers(users);
  }

  async function login(email, password){
    requireSecureContext();
    const users = loadUsers();
    const u = users[email];
    if(!u) throw new Error('No account found for this email');
    const hash = await sha256(password);
    if(hash !== u.pass) throw new Error('Incorrect password');
    localStorage.setItem(CURRENT_KEY, JSON.stringify({ email: u.email, name: u.name }));
    // initialize progress store if needed
    if(!localStorage.getItem('codemate_progress_' + email)){
      localStorage.setItem('codemate_progress_' + email, JSON.stringify({ languages: {} }));
    }
  }

  function logout(){ localStorage.removeItem(CURRENT_KEY); }

  function currentUser(){
    const raw = localStorage.getItem(CURRENT_KEY);
    if(!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  function guard(){
    const u = currentUser();
    if(!u){
      window.location.replace('index.html');
    }
  }

  window.Auth = { signup, login, logout, currentUser, guard };
})();
