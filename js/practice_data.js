// Comprehensive practice data with exercises and projects
window.PRACTICE = {
  java: [
    { id: 'j-p1', title: 'Sum of array', difficulty: 'easy', prompt: 'Write a method sum(int[] a) that returns the sum of all elements.', answer: 'int sum(int[] a){ int s=0; for(int x:a) s+=x; return s; }' },
    { id: 'j-p2', title: 'Reverse string', difficulty: 'easy', prompt: 'Implement reverse(String s) to return the string reversed.', answer: 'String reverse(String s){ return new StringBuilder(s).reverse().toString(); }' },
    { id: 'j-p3', title: 'Max of two', difficulty: 'easy', prompt: 'Return the larger of two ints without using Math.max.', answer: 'int max(int a,int b){ return a>b?a:b; }' },
    { id: 'j-p4', title: 'Fibonacci', difficulty: 'medium', prompt: 'Return the n-th Fibonacci number (0-indexed).', answer: 'int fib(int n){ if(n<2) return n; int a=0,b=1; for(int i=2;i<=n;i++){ int c=a+b; a=b; b=c;} return b; }' },
    { id: 'j-p5', title: 'Valid parentheses', difficulty: 'medium', prompt: 'Given ()[]{} string, check if it is valid using a stack.', answer: '// use Stack<Character> and push/pop matching pairs' },
    { id: 'j-p6', title: 'Binary Search', difficulty: 'medium', prompt: 'Implement binary search on a sorted array.', answer: 'int binarySearch(int[] arr, int target) { int left = 0, right = arr.length - 1; while (left <= right) { int mid = left + (right - left) / 2; if (arr[mid] == target) return mid; if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }' },
    { id: 'j-p7', title: 'Merge Sorted Lists', difficulty: 'hard', prompt: 'Merge two sorted LinkedLists into one sorted list.', answer: '// Use two pointers to compare and merge nodes' },
    { id: 'j-p8', title: 'Thread-Safe Counter', difficulty: 'hard', prompt: 'Create a thread-safe counter using synchronization.', answer: 'class Counter { private int count = 0; public synchronized void increment() { count++; } public synchronized int get() { return count; } }' }
  ],
  c: [
    { id: 'c-p1', title: 'Array average', difficulty: 'easy', prompt: 'Write a function to compute average of an int array and length.', answer: 'double avg(int* a,int n){ long s=0; for(int i=0;i<n;i++) s+=a[i]; return (double)s/n; }' },
    { id: 'c-p2', title: 'String length', difficulty: 'easy', prompt: 'Implement strlen(const char*) without <string.h>.', answer: 'int mylen(const char*s){ int n=0; while(s && *s++){ n++; } return n; }' },
    { id: 'c-p3', title: 'Swap', difficulty: 'easy', prompt: 'Swap two integers via pointers.', answer: 'void swap(int* a,int* b){ int t=*a; *a=*b; *b=t; }' },
    { id: 'c-p4', title: 'Count vowels', difficulty: 'medium', prompt: 'Count vowels in a string.', answer: '// iterate chars and compare to a,e,i,o,u (upper/lower)' },
    { id: 'c-p5', title: 'Matrix add', difficulty: 'medium', prompt: 'Add two 2D matrices A and B into C.', answer: '// nested loops over rows and cols' },
    { id: 'c-p6', title: 'Dynamic Array', difficulty: 'medium', prompt: 'Implement a dynamic array that grows automatically.', answer: '// Use malloc/realloc to resize array when needed' },
    { id: 'c-p7', title: 'Linked List', difficulty: 'hard', prompt: 'Implement a complete linked list with insert, delete, search.', answer: '// Create struct Node with data and next pointer' },
    { id: 'c-p8', title: 'Memory Pool', difficulty: 'hard', prompt: 'Create a memory pool allocator for fixed-size blocks.', answer: '// Pre-allocate large chunk, maintain free list' }
  ],
  python: [
    { id: 'p-p1', title: 'Palindrome', difficulty: 'easy', prompt: 'Check if a string is a palindrome (ignore case).', answer: 'def pal(s): s=s.lower(); return s==s[::-1]' },
    { id: 'p-p2', title: 'Unique elements', difficulty: 'easy', prompt: 'Return unique elements of a list in order.', answer: 'def uniq(a): seen=set(); out=[]; [out.append(x) or seen.add(x) for x in a if x not in seen]; return out' },
    { id: 'p-p3', title: 'FizzBuzz', difficulty: 'easy', prompt: 'Print 1..n; Fizz for multiples of 3, Buzz for 5.', answer: '# classic fizzbuzz' },
    { id: 'p-p4', title: 'Two sum', difficulty: 'medium', prompt: 'Return indices of two numbers adding to target.', answer: '# use hashmap of value->index' },
    { id: 'p-p5', title: 'Anagrams', difficulty: 'medium', prompt: 'Group anagrams from a list of words.', answer: '# use dict with sorted key' },
    { id: 'p-p6', title: 'Web Scraper', difficulty: 'medium', prompt: 'Build a web scraper using requests and BeautifulSoup.', answer: '# Use requests.get() and soup.find_all()' },
    { id: 'p-p7', title: 'Decorator Pattern', difficulty: 'hard', prompt: 'Create a timing decorator that measures function execution time.', answer: 'import time; from functools import wraps; def timer(func): @wraps(func); def wrapper(*args, **kwargs): start = time.time(); result = func(*args, **kwargs); print(f"{func.__name__} took {time.time() - start:.4f}s"); return result; return wrapper' },
    { id: 'p-p8', title: 'Async File Processor', difficulty: 'hard', prompt: 'Process multiple files concurrently using asyncio.', answer: '# Use async def, await, and asyncio.gather()' }
  ],
  javascript: [
    { id: 'js-p1', title: 'Array Sum', difficulty: 'easy', prompt: 'Sum all numbers in an array using reduce.', answer: 'const sum = arr => arr.reduce((acc, num) => acc + num, 0);' },
    { id: 'js-p2', title: 'Object Deep Clone', difficulty: 'easy', prompt: 'Create a deep clone function for objects.', answer: 'const deepClone = obj => JSON.parse(JSON.stringify(obj));' },
    { id: 'js-p3', title: 'Debounce Function', difficulty: 'medium', prompt: 'Implement a debounce function that delays execution.', answer: 'const debounce = (func, delay) => { let timeoutId; return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => func.apply(this, args), delay); }; };' },
    { id: 'js-p4', title: 'Promise All Sequential', difficulty: 'medium', prompt: 'Execute promises sequentially (not parallel).', answer: 'const sequential = async (promises) => { const results = []; for (const promise of promises) { results.push(await promise()); } return results; };' },
    { id: 'js-p5', title: 'Custom Event Emitter', difficulty: 'hard', prompt: 'Build an event emitter with on, off, and emit methods.', answer: 'class EventEmitter { constructor() { this.events = {}; } on(event, listener) { if (!this.events[event]) this.events[event] = []; this.events[event].push(listener); } emit(event, ...args) { if (this.events[event]) this.events[event].forEach(listener => listener(...args)); } }' }
  ],
  typescript: [
    { id: 'ts-p1', title: 'Generic Function', difficulty: 'easy', prompt: 'Create a generic identity function with proper typing.', answer: 'function identity<T>(arg: T): T { return arg; }' },
    { id: 'ts-p2', title: 'Interface Implementation', difficulty: 'medium', prompt: 'Define and implement a Shape interface with area calculation.', answer: 'interface Shape { area(): number; } class Circle implements Shape { constructor(private radius: number) {} area(): number { return Math.PI * this.radius ** 2; } }' },
    { id: 'ts-p3', title: 'Type Guards', difficulty: 'medium', prompt: 'Create type guards for different object types.', answer: 'function isString(value: unknown): value is string { return typeof value === "string"; }' },
    { id: 'ts-p4', title: 'Advanced Utility Types', difficulty: 'hard', prompt: 'Create a DeepReadonly type that makes nested properties readonly.', answer: 'type DeepReadonly<T> = { readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]; };' }
  ]
};

// Practical projects for hands-on learning
window.PRACTICE_PROJECTS = {
  java: [
    {
      id: "java_proj_1",
      title: "Library Management System",
      difficulty: "Beginner",
      description: "Build a simple library management system using OOP principles",
      requirements: [
        "Create Book, Author, and Library classes",
        "Implement borrowing and returning functionality",
        "Use ArrayList to store books and members",
        "Handle exceptions for invalid operations"
      ],
      starter_code: `// Starter code for Library Management System
class Book {
    // TODO: Add private fields for title, author, isbn, isAvailable
    // TODO: Add constructor and getter/setter methods
}

class Library {
    // TODO: Add ArrayList to store books
    // TODO: Implement addBook(), borrowBook(), returnBook() methods
}

public class LibrarySystem {
    public static void main(String[] args) {
        // TODO: Create library instance and test functionality
    }
}`,
      solution_hints: [
        "Use encapsulation to protect book data",
        "Implement proper error checking for book availability",
        "Use collections framework methods like contains() and remove()",
        "Consider using enum for book status"
      ]
    },
    {
      id: "java_proj_2",
      title: "Banking System with Threads",
      difficulty: "Intermediate",
      description: "Create a multi-threaded banking system with concurrent transactions",
      requirements: [
        "Implement Account class with thread-safe operations",
        "Create multiple threads for concurrent transactions",
        "Use synchronization to prevent race conditions",
        "Implement transfer functionality between accounts"
      ]
    },
    {
      id: "java_proj_3",
      title: "RESTful API with Spring Boot",
      difficulty: "Advanced",
      description: "Build a complete REST API for task management using Spring Boot",
      requirements: [
        "Create Task entity with JPA annotations",
        "Implement CRUD operations using Spring Data JPA",
        "Add proper exception handling and validation",
        "Include API documentation with Swagger"
      ]
    }
  ],
  
  c: [
    {
      id: "c_proj_1",
      title: "Student Record Management",
      difficulty: "Beginner",
      description: "Create a file-based student record system using structures and file I/O",
      requirements: [
        "Define Student structure with name, id, grades",
        "Implement functions to add, search, and display students",
        "Save and load data from binary files",
        "Handle memory allocation properly"
      ]
    },
    {
      id: "c_proj_2",
      title: "Custom Memory Allocator",
      difficulty: "Intermediate",
      description: "Implement a custom memory allocator with debugging features",
      requirements: [
        "Create custom malloc() and free() functions",
        "Track allocated memory blocks",
        "Detect memory leaks and double-free errors",
        "Implement memory pool for performance"
      ]
    }
  ],
  
  python: [
    {
      id: "python_proj_1",
      title: "Web Scraper with Data Analysis",
      difficulty: "Beginner",
      description: "Build a web scraper that analyzes data and generates reports",
      requirements: [
        "Scrape data from multiple web pages",
        "Clean and process the scraped data",
        "Generate visualizations using matplotlib",
        "Save results to CSV and JSON formats"
      ]
    },
    {
      id: "python_proj_2",
      title: "Flask REST API with Authentication",
      difficulty: "Intermediate",
      description: "Create a complete REST API with user authentication and database",
      requirements: [
        "Implement JWT-based authentication",
        "Create user registration and login endpoints",
        "Use SQLAlchemy for database operations",
        "Add input validation and error handling"
      ]
    }
  ],
  
  javascript: [
    {
      id: "js_proj_1",
      title: "Interactive Todo Application",
      difficulty: "Beginner",
      description: "Build a fully interactive todo app with local storage",
      requirements: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete/incomplete",
        "Filter tasks by status",
        "Persist data using localStorage"
      ]
    },
    {
      id: "js_proj_2",
      title: "Weather Dashboard with API",
      difficulty: "Intermediate",
      description: "Create a weather dashboard that fetches data from multiple APIs",
      requirements: [
        "Fetch weather data from external API",
        "Display current weather and forecast",
        "Implement location search with autocomplete",
        "Add weather charts using Chart.js"
      ]
    }
  ],
  
  typescript: [
    {
      id: "ts_proj_1",
      title: "Task Management CLI Tool",
      difficulty: "Beginner",
      description: "Build a command-line task management tool with TypeScript",
      requirements: [
        "Use strong typing for all data structures",
        "Implement file-based data persistence",
        "Add command-line argument parsing",
        "Include comprehensive error handling"
      ]
    }
  ]
};

// Coding challenges for interview preparation
window.CODING_CHALLENGES = {
  beginner: [
    {
      title: "FizzBuzz",
      description: "Print numbers 1-100, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'",
      languages: ["java", "c", "python", "javascript", "typescript"]
    },
    {
      title: "Palindrome Checker",
      description: "Write a function that checks if a given string is a palindrome",
      languages: ["java", "c", "python", "javascript", "typescript"]
    },
    {
      title: "Fibonacci Sequence",
      description: "Generate the first n numbers in the Fibonacci sequence",
      languages: ["java", "c", "python", "javascript", "typescript"]
    },
    {
      title: "Find Maximum",
      description: "Find the largest number in an array without using built-in max functions",
      languages: ["java", "c", "python", "javascript", "typescript"]
    }
  ],
  intermediate: [
    {
      title: "Binary Tree Traversal",
      description: "Implement in-order, pre-order, and post-order traversal of a binary tree",
      languages: ["java", "c", "python", "javascript", "typescript"]
    },
    {
      title: "Sorting Algorithms",
      description: "Implement quicksort, mergesort, and heapsort algorithms from scratch",
      languages: ["java", "c", "python", "javascript", "typescript"]
    },
    {
      title: "Graph Algorithms",
      description: "Implement breadth-first search and depth-first search for graphs",
      languages: ["java", "c", "python", "javascript", "typescript"]
    },
    {
      title: "Valid Parentheses",
      description: "Check if a string containing (), [], {} is properly balanced using a stack",
      languages: ["java", "c", "python", "javascript", "typescript"]
    }
  ],
  advanced: [
    {
      title: "Design Patterns Implementation",
      description: "Implement Singleton, Factory, Observer, and Strategy design patterns",
      languages: ["java", "python", "javascript", "typescript"]
    },
    {
      title: "Concurrent Programming",
      description: "Solve the Producer-Consumer problem with proper synchronization",
      languages: ["java", "c", "python"]
    },
    {
      title: "System Design",
      description: "Design a scalable chat application with database schema and API endpoints",
      languages: ["java", "python", "javascript", "typescript"]
    },
    {
      title: "Dynamic Programming",
      description: "Solve complex problems like longest common subsequence and knapsack problem",
      languages: ["java", "c", "python", "javascript", "typescript"]
    }
  ]
};
