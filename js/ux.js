// UX helper functions: streak, next lesson, last quiz
(function(){
  function metaKey(email){ return 'codemate_meta_' + email; }
  function loadMeta(email){ try { return JSON.parse(localStorage.getItem(metaKey(email))) || {}; } catch { return {}; } }
  function saveMeta(email, data){ localStorage.setItem(metaKey(email), JSON.stringify(data)); }

  function todayKey(){ const d = new Date(); return d.toISOString().slice(0,10); }
  function yesterdayKey(){ const d = new Date(Date.now() - 86400000); return d.toISOString().slice(0,10); }

  function updateDailyStreak(email){
    const m = loadMeta(email);
    const today = todayKey();
    if(m.lastActive === today) return m.streak || 1;
    if(m.lastActive === yesterdayKey()) m.streak = (m.streak || 0) + 1; else m.streak = 1;
    m.lastActive = today;
    saveMeta(email, m);
    return m.streak;
  }

  function getStreak(email){ return (loadMeta(email).streak || 0); }

  function nextLesson(email, lang){
    const lessons = window.CODEMATE_CONTENT?.[lang]?.lessons || [];
    for(const l of lessons){ if(!window.Progress.hasCompleted(email, lang, l.id)) return l; }
    return null;
  }

  function lastQuiz(email, lang){
    try {
      const s = JSON.parse(localStorage.getItem('codemate_progress_' + email)) || { languages: {} };
      const arr = s.languages?.[lang]?.quizHistory || [];
      return arr.length ? arr[arr.length - 1] : null;
    } catch { return null; }
  }

  window.UX = { updateDailyStreak, getStreak, nextLesson, lastQuiz };
})();
