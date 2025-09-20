// Course page logic
(function(){
  window.Auth.guard();
  const user = window.Auth.currentUser();

  const params = new URLSearchParams(window.location.search);
  const lang = (params.get('lang') || '').toLowerCase();
  const content = window.CODEMATE_CONTENT[lang];
  if(!content){
    document.body.innerHTML = '<main class="container"><div class="card"><h2>Unknown course</h2><p>Invalid language. Go back to <a href="dashboard.html">dashboard</a>.</p></div></main>';
    return;
  }

  document.getElementById('courseTitle').textContent = content.title + ' Course';
  document.getElementById('courseSubtitle').textContent = content.subtitle;
  document.getElementById('courseProgress').style.width = window.Progress.percentComplete(user.email, lang) + '%';

  const lessonsList = document.getElementById('lessonsList');
  const article = document.getElementById('lessonContent');
  const markBtn = document.getElementById('markCompleteBtn');
  const quizLink = document.getElementById('quizLink');
  quizLink.href = `quiz.html?lang=${encodeURIComponent(lang)}`;

  let currentLessonId = null;

  function renderLessons(){
    lessonsList.innerHTML = '';
    content.lessons.forEach((lsn, idx) => {
      const li = document.createElement('li');
      const done = window.Progress.hasCompleted(user.email, lang, lsn.id);
      li.className = done ? 'done' : '';
      li.textContent = `${idx+1}. ${lsn.title}`;
      li.addEventListener('click', () => {
        currentLessonId = lsn.id;
        article.innerHTML = lsn.body;
        markBtn.disabled = false;
        markBtn.textContent = done ? 'Completed ✓' : 'Mark lesson as complete';
      });
      lessonsList.appendChild(li);
    });
  }

  markBtn.addEventListener('click', () => {
    if(!currentLessonId) return;
    window.Progress.markLesson(user.email, lang, currentLessonId);
    document.getElementById('courseProgress').style.width = window.Progress.percentComplete(user.email, lang) + '%';
    renderLessons();
    markBtn.textContent = 'Completed ✓';
  });

  document.getElementById('logoutBtn')?.addEventListener('click', () => { window.Auth.logout(); window.location.href = 'index.html'; });

  renderLessons();
})();
