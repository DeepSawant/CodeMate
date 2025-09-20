// Quiz page logic
(function(){
  window.Auth.guard();
  const user = window.Auth.currentUser();

  const params = new URLSearchParams(window.location.search);
  const lang = (params.get('lang') || '').toLowerCase();
  const content = window.CODEMATE_CONTENT[lang];
  if(!content){
    document.body.innerHTML = '<main class="container"><div class="card"><h2>Unknown quiz</h2><p>Invalid language. Go back to <a href="dashboard.html">dashboard</a>.</p></div></main>';
    return;
  }

  document.getElementById('quizTitle').textContent = content.title + ' Quiz';
  document.getElementById('quizSubtitle').textContent = content.subtitle;
  document.getElementById('backToCourse').href = `course.html?lang=${encodeURIComponent(lang)}`;

  const form = document.getElementById('quizForm');
  const result = document.getElementById('quizResult');
  const submitBtn = document.getElementById('submitQuizBtn');

  function render(){
    form.innerHTML = '';
    content.quiz.forEach((item, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'quiz-q';
      const title = document.createElement('div');
      title.innerHTML = `<strong>Q${idx+1}.</strong> ${item.q}`;
      wrap.appendChild(title);
      const opts = document.createElement('div');
      item.options.forEach((opt, oi) => {
        const id = `q_${idx}_${oi}`;
        const label = document.createElement('label');
        label.style.display = 'flex'; label.style.alignItems = 'center'; label.style.gap = '8px'; label.style.margin = '6px 0';
        const input = document.createElement('input');
        input.type = 'radio'; input.name = `q_${idx}`; input.value = oi; input.id = id;
        const span = document.createElement('span'); span.textContent = opt;
        label.appendChild(input); label.appendChild(span);
        opts.appendChild(label);
      });
      wrap.appendChild(opts);
      form.appendChild(wrap);
    });
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let score = 0;
    content.quiz.forEach((item, idx) => {
      const sel = form.querySelector(`input[name="q_${idx}"]:checked`);
      const ans = sel ? Number(sel.value) : -1;
      if(ans === item.a) score += 1;
    });
    const total = content.quiz.length;
    window.Progress.recordQuiz(user.email, lang, score, total);
    try { window.Achievements?.ensure?.(user.email); } catch {}
    result.classList.remove('hidden');
    result.textContent = `You scored ${score} / ${total}.`;
  });

  document.getElementById('logoutBtn')?.addEventListener('click', () => { window.Auth.logout(); window.location.href = 'index.html'; });

  render();
})();
