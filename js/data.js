// Course data embedded to avoid fetch/CORS issues
window.CODEMATE_CONTENT = {
  java: {
    title: "Java",
    subtitle: "Object-oriented programming on the JVM",
    lessons: [
      { id: "j1", title: "Intro to Java & JVM", body: `
        <h2>Intro to Java</h2>
        <p>Java is a class-based, object-oriented language that runs on the Java Virtual Machine (JVM).</p>
        <pre><code>// HelloWorld.java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}
</code></pre>
        <p>Compile with <code>javac HelloWorld.java</code> and run with <code>java HelloWorld</code>.</p>
      `},
      { id: "j2", title: "Variables & Types", body: `
        <h2>Variables</h2>
        <p>Primitive types include <code>int</code>, <code>double</code>, <code>boolean</code>, <code>char</code>, etc.</p>
        <pre><code>int x = 10;
double price = 12.5;
boolean ok = true;
char c = 'A';
</code></pre>
      `},
      { id: "j3", title: "Control Flow & Loops", body: `
        <h2>Loops</h2>
        <pre><code>for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
</code></pre>
      `}
    ],
    quiz: [
      { q: "Which command runs a compiled Java class?", options: ["javac", "java", "jar", "jlink"], a: 1 },
      { q: "Which is NOT a primitive type?", options: ["int", "String", "boolean", "double"], a: 1 },
      { q: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Vendor Module", "Just-in-time VM", "Java Visual Manager"], a: 0 }
    ]
  },
  c: {
    title: "C",
    subtitle: "Systems programming with manual memory management",
    lessons: [
      { id: "c1", title: "Intro & Compilation", body: `
        <h2>Hello, C</h2>
        <pre><code>#include <stdio.h>

int main() {
  printf("Hello, C!\n");
  return 0;
}
</code></pre>
        <p>Compile with <code>gcc main.c -o main</code> and run <code>./main</code>.</p>
      `},
      { id: "c2", title: "Pointers", body: `
        <h2>Pointers</h2>
        <pre><code>int x = 5;
int *p = &x; // p holds address of x
printf("%d\n", *p); // dereference
</code></pre>
      `},
      { id: "c3", title: "Arrays & Strings", body: `
        <h2>Arrays</h2>
        <pre><code>int arr[3] = {1,2,3};
printf("%d\n", arr[0]);
</code></pre>
      `}
    ],
    quiz: [
      { q: "Which header is needed for printf?", options: ["stdio.h", "stdlib.h", "string.h", "math.h"], a: 0 },
      { q: "What does *p mean when p is a pointer?", options: ["Address of p", "Dereference p", "Multiply p", "Pointer type"], a: 1 }
    ]
  },
  python: {
    title: "Python",
    subtitle: "High-level language with simple syntax",
    lessons: [
      { id: "p1", title: "Getting Started", body: `
        <h2>Hello, Python</h2>
        <pre><code>print("Hello, Python!")
</code></pre>
      `},
      { id: "p2", title: "Data Types", body: `
        <h2>Types</h2>
        <pre><code>x = 10 # int
y = 3.14 # float
s = "hi" # str
ok = True # bool
</code></pre>
      `},
      { id: "p3", title: "Loops", body: `
        <h2>for loop</h2>
        <pre><code>for i in range(5):
    print(i)
</code></pre>
      `}
    ],
    quiz: [
      { q: "Which keyword defines a function?", options: ["func", "def", "fn", "function"], a: 1 },
      { q: "Which prints numbers 0..4?", options: ["for i in 5", "for i in range(5)", "for(0..5)", "range(1,5)"], a: 1 }
    ]
  }
};
