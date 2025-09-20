// Extend lessons and quizzes for Java, C, and Python without modifying data.js
(function(){
  if(!window.CODEMATE_CONTENT) return;
  const J = window.CODEMATE_CONTENT;
  function add(lang, lessons, quiz){
    if(!J[lang]) return;
    if(Array.isArray(lessons) && lessons.length){ J[lang].lessons = J[lang].lessons.concat(lessons); }
    if(Array.isArray(quiz) && quiz.length){ J[lang].quiz = J[lang].quiz.concat(quiz); }
  }

  add('java', [
    { id: 'j4', title: 'Methods & Parameters', body: `
      <h2>Methods</h2>
      <pre><code>public static int add(int a, int b){
  return a + b;
}
</code></pre>
    `},
    { id: 'j5', title: 'Classes & Objects', body: `
      <h2>Classes</h2>
      <pre><code>class Point {
  int x, y;
  Point(int x, int y){ this.x = x; this.y = y; }
}
Point p = new Point(1,2);
</code></pre>
    `},
    { id: 'j6', title: 'Inheritance & Polymorphism', body: `
      <h2>Inheritance</h2>
      <pre><code>class Animal { void speak(){ System.out.println("..."); } }
class Dog extends Animal { void speak(){ System.out.println("Woof"); } }
</code></pre>
    `},
    { id: 'j7', title: 'Collections & Generics', body: `
      <h2>List & Map</h2>
      <pre><code>List<String> names = new ArrayList<>();
names.add("Ana");
Map<String,Integer> ages = new HashMap<>();
</code></pre>
    `},
    { id: 'j8', title: 'Exceptions & Try/Catch', body: `
      <h2>Exceptions</h2>
      <pre><code>try {
  int x = 10 / 0;
} catch (ArithmeticException ex) {
  System.out.println("Can't divide by zero");
}
</code></pre>
    `}
  ], [
    { q: 'Which interface is implemented by ArrayList?', options: ['List', 'Set', 'Map', 'Queue'], a: 0 }
  ]);

  add('c', [
    { id: 'c4', title: 'Control Flow', body: `
      <h2>if/else & loops</h2>
      <pre><code>for(int i=0;i<3;i++){ printf("%d\n", i); }
</code></pre>
    `},
    { id: 'c5', title: 'Functions', body: `
      <h2>Functions</h2>
      <pre><code>int add(int a,int b){ return a+b; }
</code></pre>
    `},
    { id: 'c6', title: 'Structs', body: `
      <h2>struct</h2>
      <pre><code>struct Point { int x; int y; };
struct Point p = {1,2};
</code></pre>
    `},
    { id: 'c7', title: 'Dynamic Memory', body: `
      <h2>malloc/free</h2>
      <pre><code>int *arr = malloc(5 * sizeof(int));
if(arr){ /* use arr */ free(arr); }
</code></pre>
    `},
    { id: 'c8', title: 'File I/O', body: `
      <h2>fopen/fprintf</h2>
      <pre><code>FILE *f = fopen("out.txt", "w");
if(f){ fprintf(f, "Hi!\n"); fclose(f); }
</code></pre>
    `}
  ], [
    { q: 'Which function allocates memory?', options: ['malloc', 'printf', 'fopen', 'scanf'], a: 0 }
  ]);

  add('python', [
    { id: 'p4', title: 'Functions', body: `
      <h2>def</h2>
      <pre><code>def add(a, b):
    return a + b
</code></pre>
    `},
    { id: 'p5', title: 'Lists & Dicts', body: `
      <h2>Lists & dicts</h2>
      <pre><code>nums = [1,2,3]
user = {"name": "Ana", "age": 20}
</code></pre>
    `},
    { id: 'p6', title: 'Modules & Packages', body: `
      <h2>import</h2>
      <pre><code>import math
print(math.sqrt(9))
</code></pre>
    `},
    { id: 'p7', title: 'Exceptions', body: `
      <h2>try/except</h2>
      <pre><code>try:
    1/0
except ZeroDivisionError:
    print("Nope")
</code></pre>
    `},
    { id: 'p8', title: 'Classes', body: `
      <h2>class</h2>
      <pre><code>class Point:
    def __init__(self, x, y):
        self.x = x; self.y = y
</code></pre>
    `}
  ], [
    { q: 'Which type is a mapping?', options: ['list', 'dict', 'set', 'tuple'], a: 1 }
  ]);
})();
