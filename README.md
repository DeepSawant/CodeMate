# CodeMate – AI-Powered Coding Buddy

A multi-page, client-side web app that teaches Java, C, and Python with lessons, quizzes, a chat helper, and progress tracking.

Features
- Login/Signup (local, using WebCrypto hashing and localStorage)
- Dashboard with progress bars for Java, C, Python
- Course pages with lesson list and completion tracking
- Quizzes per language with instant scoring and recorded history
- “Ask CodeMate” chat with rule-based answers for common topics
- Professional dark UI, responsive layout, no server required

Tech
- HTML, CSS, JavaScript (no framework)
- LocalStorage for persistence, WebCrypto for password hashing
- Data embedded in JS to avoid CORS issues

Run locally
Option 1: Open index.html directly in your browser.
Option 2 (recommended to avoid any browser restrictions): Serve over localhost
- Python 3: python -m http.server 5173
- Node (if installed): npx serve -l 5173
Then open http://localhost:5173 in a browser.

Structure
- index.html – Login
- signup.html – Registration
- dashboard.html – Home and course cards
- course.html – Lesson reader for a specific language
- quiz.html – Quiz for a specific language
- chat.html – CodeMate helper
- profile.html – User info and progress
- css/styles.css – Styling
- js/auth.js – Auth and route guard
- js/progress.js – Progress persistence and calculations
- js/data.js – Lessons and quizzes (Java, C, Python)
- js/courses.js – Course page logic
- js/quiz.js – Quiz page logic
- js/chat.js – Chat helper logic
- assets/logo.svg – App logo

Notes
- This implementation is client-side only. For a Java backend (e.g., Spring Boot) with database-backed auth and progress, we can extend this later.
- The chat is a lightweight rule-based demo. We can integrate a real AI API behind a secure backend in the future.

GitHub
- I can push this to GitHub for you. Please share:
  - The repository URL (e.g., https://github.com/<user>/<repo>.git), or
  - Confirm that I should create a new repo using the GitHub CLI (gh) if available on your machine.

