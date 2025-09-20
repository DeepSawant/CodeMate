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
  }

  function hasCompleted(email, lang, lessonId){
    const s = load(email); ensureLang(s, lang);
    return s.languages[lang].lessonsCompleted.includes(lessonId);
  }

  function recordQuiz(email, lang, score, total){
    const s = load(email); ensureLang(s, lang);
    s.languages[lang].quizHistory.push({ score, total, ts: Date.now() });
    save(email, s);
  }

  function percentComplete(email, lang){
    // We need data about number of lessons to compute percentage; expose setter from data module
    if(!window.CODEMATE_CONTENT) return 0;
    const lessons = (window.CODEMATE_CONTENT[lang]?.lessons || []).length;
    if(!lessons) return 0;
    const s = load(email); ensureLang(s, lang);
    const done = s.languages[lang].lessonsCompleted.length;
    return Math.min(100, Math.round((done / lessons) * 100));
  }

  window.Progress = { markLesson, hasCompleted, recordQuiz, percentComplete };
})();
