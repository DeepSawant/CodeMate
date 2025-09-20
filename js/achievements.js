// Achievement engine: define rules, compute, and persist
(function(){
  const KEY = (email) => 'codemate_achievements_' + email;

  const rules = [
    { id: 'first-lesson', name: 'First Steps', desc: 'Complete your first lesson', test: (e) => totalLessonsDone(e) >= 1 },
    { id: 'java-50', name: 'Java Novice', desc: 'Reach 50% in Java', test: (e) => pct(e,'java') >= 50 },
    { id: 'c-50', name: 'C Novice', desc: 'Reach 50% in C', test: (e) => pct(e,'c') >= 50 },
    { id: 'py-50', name: 'Python Novice', desc: 'Reach 50% in Python', test: (e) => pct(e,'python') >= 50 },
    { id: 'any-100', name: 'Completionist', desc: 'Finish any course 100%', test: (e) => ['java','c','python'].some(l => pct(e,l) === 100) },
    { id: 'quiz-80', name: 'Quiz Whiz', desc: 'Score 80%+ on any quiz', test: (e) => quiz80Plus(e) },
    { id: 'polyglot', name: 'Polyglot', desc: 'Make progress in all three languages', test: (e) => ['java','c','python'].every(l => pct(e,l) > 0) },
  ];

  function store(email){ try { return JSON.parse(localStorage.getItem(KEY(email))) || { earned: [] }; } catch { return { earned: [] }; } }
  function save(email, data){ localStorage.setItem(KEY(email), JSON.stringify(data)); }

  function pct(email, lang){ return window.Progress.percentComplete(email, lang); }
  function totalLessonsDone(email){ return ['java','c','python'].reduce((n,l)=> n + window.Progress.completedCount(email,l), 0); }
  function quiz80Plus(email){
    try {
      const s = JSON.parse(localStorage.getItem('codemate_progress_' + email)) || { languages: {} };
      return ['java','c','python'].some(l => (s.languages?.[l]?.quizHistory || []).some(q => q.total > 0 && (q.score/q.total) >= 0.8));
    } catch { return false; }
  }

  function compute(email){
    const st = store(email);
    const earned = new Set(st.earned);
    for(const r of rules){ if(r.test(email)) earned.add(r.id); }
    const list = rules.filter(r => earned.has(r.id));
    save(email, { earned: Array.from(earned) });
    return list;
  }

  function list(email){ const st = store(email); return rules.filter(r => st.earned.includes(r.id)); }

  function ensure(email){ const before = list(email).map(x=>x.id).sort().join(','); const after = compute(email).map(x=>x.id).sort().join(','); if(before !== after){ try{ window.Bus?.broadcast?.('achievements-updated', { email }); }catch{} } }

  window.Achievements = { compute, list, ensure };
})();
