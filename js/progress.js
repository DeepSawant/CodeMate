// Progress tracking per user and language
(function(){
  function key(email){ return 'codemate_progress_' + email; }

  function load(email){
    try { return JSON.parse(localStorage.getItem(key(email))) || { languages: {} }; }
    catch { return { languages: {} }; }
  }

  function save(email, data){ localStorage.setItem(key(email), JSON.stringify(data)); }

  function ensureLang(store, lang){ store.languages[lang] = store.languages[lang] || { lessonsCompleted: [], quizHistory: [] }; }

  function markLesson(email, lang, lessonId){
    const s = load(email); ensureLang(s, lang);
    if(!s.languages[lang].lessonsCompleted.includes(lessonId)) s.languages[lang].lessonsCompleted.push(lessonId);
    save(email, s);
    try { window.Bus?.broadcast?.('progress-updated', { email, lang }); } catch {}
  }

  function hasCompleted(email, lang, lessonId){
    const s = load(email); ensureLang(s, lang);
    return s.languages[lang].lessonsCompleted.includes(lessonId);
  }

  function recordQuiz(email, lang, score, total){
    const s = load(email); ensureLang(s, lang);
    s.languages[lang].quizHistory.push({ score, total, ts: Date.now() });
    save(email, s);
    try { window.Bus?.broadcast?.('progress-updated', { email, lang }); } catch {}
  }

  function lessonCount(lang){
    return (window.CODEMATE_CONTENT?.[lang]?.lessons || []).length;
  }

  function completedCount(email, lang){
    const s = load(email); ensureLang(s, lang);
    return s.languages[lang].lessonsCompleted.length;
  }

  function percentComplete(email, lang){
    const lessons = lessonCount(lang);
    if(!lessons) return 0;
    const done = completedCount(email, lang);
    return Math.min(100, Math.round((done / lessons) * 100));
  }

  window.Progress = { markLesson, hasCompleted, recordQuiz, percentComplete, lessonCount, completedCount };
})();
