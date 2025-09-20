// Practice exercises data
window.PRACTICE = {
  java: [
    { id: 'j-p1', title: 'Sum of array', difficulty: 'easy', prompt: 'Write a method sum(int[] a) that returns the sum of all elements.', answer: 'int sum(int[] a){ int s=0; for(int x:a) s+=x; return s; }' },
    { id: 'j-p2', title: 'Reverse string', difficulty: 'easy', prompt: 'Implement reverse(String s) to return the string reversed.', answer: 'String reverse(String s){ return new StringBuilder(s).reverse().toString(); }' },
    { id: 'j-p3', title: 'Max of two', difficulty: 'easy', prompt: 'Return the larger of two ints without using Math.max.', answer: 'int max(int a,int b){ return a>b?a:b; }' },
    { id: 'j-p4', title: 'Fibonacci', difficulty: 'medium', prompt: 'Return the n-th Fibonacci number (0-indexed).', answer: 'int fib(int n){ if(n<2) return n; int a=0,b=1; for(int i=2;i<=n;i++){ int c=a+b; a=b; b=c;} return b; }' },
    { id: 'j-p5', title: 'Valid parentheses', difficulty: 'medium', prompt: 'Given ()[]{} string, check if it is valid using a stack.', answer: '// use Stack<Character> and push/pop matching pairs' }
  ],
  c: [
    { id: 'c-p1', title: 'Array average', difficulty: 'easy', prompt: 'Write a function to compute average of an int array and length.', answer: 'double avg(int* a,int n){ long s=0; for(int i=0;i<n;i++) s+=a[i]; return (double)s/n; }' },
    { id: 'c-p2', title: 'String length', difficulty: 'easy', prompt: 'Implement strlen(const char*) without <string.h>.', answer: 'int mylen(const char*s){ int n=0; while(s && *s++){ n++; } return n; }' },
    { id: 'c-p3', title: 'Swap', difficulty: 'easy', prompt: 'Swap two integers via pointers.', answer: 'void swap(int* a,int* b){ int t=*a; *a=*b; *b=t; }' },
    { id: 'c-p4', title: 'Count vowels', difficulty: 'medium', prompt: 'Count vowels in a string.', answer: '// iterate chars and compare to a,e,i,o,u (upper/lower)' },
    { id: 'c-p5', title: 'Matrix add', difficulty: 'medium', prompt: 'Add two 2D matrices A and B into C.', answer: '// nested loops over rows and cols' }
  ],
  python: [
    { id: 'p-p1', title: 'Palindrome', difficulty: 'easy', prompt: 'Check if a string is a palindrome (ignore case).', answer: 'def pal(s): s=s.lower(); return s==s[::-1]' },
    { id: 'p-p2', title: 'Unique elements', difficulty: 'easy', prompt: 'Return unique elements of a list in order.', answer: 'def uniq(a): seen=set(); out=[]; [out.append(x) or seen.add(x) for x in a if x not in seen]; return out' },
    { id: 'p-p3', title: 'FizzBuzz', difficulty: 'easy', prompt: 'Print 1..n; Fizz for multiples of 3, Buzz for 5.', answer: '# classic fizzbuzz' },
    { id: 'p-p4', title: 'Two sum', difficulty: 'medium', prompt: 'Return indices of two numbers adding to target.', answer: '# use hashmap of value->index' },
    { id: 'p-p5', title: 'Anagrams', difficulty: 'medium', prompt: 'Group anagrams from a list of words.', answer: '# use dict with sorted key' }
  ]
};
