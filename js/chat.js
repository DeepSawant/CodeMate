// Lightweight rule-based chat to simulate "AI" answers
(function(){
  window.Auth?.guard?.();

  const win = document.getElementById('chatWindow');
  const input = document.getElementById('chatText');
  const send = document.getElementById('sendBtn');

  function addMsg(text, who){
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    div.innerHTML = text;
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
  }

  function codeBlock(lang, code){
    return `<pre><code>${code.replace(/</g,'&lt;')}</code></pre>`;
  }

  function reply(q){
    const s = q.toLowerCase();
    // Simple patterns
    if(/java/.test(s) && /for/.test(s)){
      return `Here's a Java for-loop example:${codeBlock('java', 'for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}')}<p>Tip: Use <code>i++</code> to increment and a stop condition like <code>i &lt; 5</code>.</p>`;
    }
    if(/python/.test(s) && /list/.test(s)){
      return `Lists in Python are dynamic arrays.${codeBlock('python', 'nums = [1,2,3]\nnums.append(4)\nprint(nums)  # [1,2,3,4]')}`;
    }
    if(/c\b/.test(s) && /(pointer|\*)/.test(s)){
      return `Pointers reference memory addresses in C.${codeBlock('c', '#include <stdio.h>\nint x = 5; int *p = &x; printf("%d\\n", *p);')}`;
    }
    if(/array/.test(s) && /java/.test(s)){
      return `Fixed-size arrays in Java:${codeBlock('java', 'int[] a = {1,2,3};\nSystem.out.println(a[0]);')}`;
    }
    if(/string/.test(s) && /c\b/.test(s)){
      return `C strings are char arrays terminated by \0.${codeBlock('c', 'char s[6] = "hello";\nprintf("%s\\n", s);')}`;
    }
    // General fallback
    return `I couldn't find an exact match, but here are tips to get a better answer:
      <ul>
        <li>Mention the language (Java / C / Python)</li>
        <li>Describe the topic (e.g., loops, arrays, functions)</li>
        <li>Include an error message if you have one</li>
      </ul>`;
  }

  function handleSend(){
    const text = (input.value || '').trim();
    if(!text) return;
    addMsg(text, 'user');
    setTimeout(() => addMsg(reply(text), 'bot'), 200);
    input.value='';
  }

  send?.addEventListener('click', handleSend);
  input?.addEventListener('keydown', (e) => { if(e.key === 'Enter') handleSend(); });

  document.getElementById('logoutBtn')?.addEventListener('click', () => { window.Auth.logout(); window.location.href = 'index.html'; });

  addMsg('Hi! I\'m CodeMate. Ask me something like: "Java for loop example" or "Python list methods".', 'bot');
})();
