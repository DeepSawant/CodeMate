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
    { id: 'j4', title: 'Methods & Parameters Deep Dive', body: `
      <h2>Methods: Building Blocks of Java Programs</h2>
      <p>Methods are reusable blocks of code that perform specific tasks. Understanding method structure, parameters, return types, and scope is crucial for writing clean, maintainable code.</p>
      
      <h3>Method Anatomy</h3>
      <pre><code>// Access modifier | static/non-static | return type | method name | parameters
public static int calculateSum(int a, int b) {
    return a + b; // return statement
}

// Instance method (non-static)
public double calculateTax(double amount, double rate) {
    if (rate < 0 || rate > 1) {
        throw new IllegalArgumentException("Rate must be between 0 and 1");
    }
    return amount * rate;
}

// Method with no return value (void)
public void displayResult(String message) {
    System.out.println("Result: " + message);
    // No return statement needed for void methods
}</code></pre>

      <h3>Method Overloading</h3>
      <p>Java allows multiple methods with the same name but different parameters (different type, number, or order).</p>
      <pre><code>public class Calculator {
    // Method overloading examples
    public int add(int a, int b) { return a + b; }
    public double add(double a, double b) { return a + b; }
    public int add(int a, int b, int c) { return a + b + c; }
    
    // Variable arguments (varargs)
    public int addAll(int... numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}</code></pre>

      <h3>Recursive Methods</h3>
      <pre><code>// Factorial calculation using recursion
public static long factorial(int n) {
    if (n <= 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive call
}

// Usage
System.out.println(factorial(5)); // Output: 120</code></pre>

      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Use descriptive method names that clearly indicate what the method does</li>
        <li>Keep methods focused on a single task (Single Responsibility Principle)</li>
        <li>Validate input parameters when necessary</li>
        <li>Use appropriate access modifiers (public, private, protected)</li>
      </ul>
    `},
    
    { id: 'j5', title: 'Object-Oriented Programming: Classes & Objects', body: `
      <h2>Classes and Objects: The Foundation of OOP</h2>
      <p>Java is fundamentally object-oriented. Understanding classes, objects, constructors, and the principles of encapsulation is essential.</p>
      
      <h3>Class Definition and Instance Variables</h3>
      <pre><code>public class Student {
    // Instance variables (fields)
    private String name;
    private int age;
    private String studentId;
    private double gpa;
    private static int totalStudents = 0; // Class variable
    
    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.age = 18;
        this.studentId = generateStudentId();
        totalStudents++;
    }
    
    // Parameterized constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.studentId = generateStudentId();
        this.gpa = 0.0;
        totalStudents++;
    }
    
    // Copy constructor
    public Student(Student other) {
        this.name = other.name;
        this.age = other.age;
        this.studentId = generateStudentId(); // New ID for copy
        this.gpa = other.gpa;
        totalStudents++;
    }
}</code></pre>

      <h3>Encapsulation: Getters and Setters</h3>
      <pre><code>    // Getter methods
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getStudentId() { return studentId; }
    public double getGpa() { return gpa; }
    
    // Setter methods with validation
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age < 16 || age > 100) {
            throw new IllegalArgumentException("Age must be between 16 and 100");
        }
        this.age = age;
    }
    
    public void setGpa(double gpa) {
        if (gpa < 0.0 || gpa > 4.0) {
            throw new IllegalArgumentException("GPA must be between 0.0 and 4.0");
        }
        this.gpa = gpa;
    }</code></pre>

      <h3>Business Logic Methods</h3>
      <pre><code>    // Method to check academic standing
    public String getAcademicStanding() {
        if (gpa >= 3.5) return "Dean's List";
        else if (gpa >= 2.0) return "Good Standing";
        else return "Academic Probation";
    }
    
    // Static method
    public static int getTotalStudents() {
        return totalStudents;
    }
    
    private String generateStudentId() {
        return "STU" + System.currentTimeMillis();
    }
    
    @Override
    public String toString() {
        return String.format("Student{name='%s', age=%d, id='%s', gpa=%.2f}", 
                           name, age, studentId, gpa);
    }
}</code></pre>

      <h3>Object Creation and Usage</h3>
      <pre><code>// Creating objects
Student student1 = new Student();
Student student2 = new Student("Alice Johnson", 20);
Student student3 = new Student(student2); // Copy constructor

// Using objects
student2.setGpa(3.8);
System.out.println(student2.getName() + " - " + student2.getAcademicStanding());
System.out.println("Total students: " + Student.getTotalStudents());</code></pre>
    `},
    
    { id: 'j6', title: 'Inheritance & Polymorphism Mastery', body: `
      <h2>Inheritance: Building Class Hierarchies</h2>
      <p>Inheritance allows classes to inherit properties and methods from other classes, promoting code reuse and establishing "is-a" relationships.</p>
      
      <h3>Single Inheritance</h3>
      <pre><code>// Base class (Parent/Superclass)
public abstract class Animal {
    protected String name;
    protected int age;
    protected String species;
    
    public Animal(String name, int age, String species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract void makeSound();
    
    // Concrete method - can be inherited or overridden
    public void sleep() {
        System.out.println(name + " is sleeping...");
    }
    
    public void eat(String food) {
        System.out.println(name + " is eating " + food);
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getSpecies() { return species; }
}</code></pre>

      <h3>Concrete Subclasses</h3>
      <pre><code>// Derived class (Child/Subclass)
public class Dog extends Animal {
    private String breed;
    private boolean isVaccinated;
    
    public Dog(String name, int age, String breed) {
        super(name, age, "Canine"); // Call parent constructor
        this.breed = breed;
        this.isVaccinated = false;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    // Method overriding with additional functionality
    @Override
    public void eat(String food) {
        super.eat(food); // Call parent method
        System.out.println("*wags tail happily*");
    }
    
    // Dog-specific methods
    public void fetch() {
        System.out.println(name + " is fetching the ball!");
    }
    
    public void vaccinate() {
        this.isVaccinated = true;
        System.out.println(name + " has been vaccinated.");
    }
    
    public String getBreed() { return breed; }
    public boolean isVaccinated() { return isVaccinated; }
}</code></pre>

      <h3>Polymorphism in Action</h3>
      <pre><code>public class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age, "Feline");
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow! Meow!");
    }
    
    public void climb() {
        System.out.println(name + " is climbing up the tree!");
    }
    
    public boolean isIndoor() { return isIndoor; }
}

// Polymorphic usage
public class AnimalShelter {
    public static void careForAnimal(Animal animal) {
        animal.eat("kibble");    // Calls appropriate eat method
        animal.makeSound();      // Calls overridden method
        animal.sleep();          // Calls inherited method
        
        // Runtime type checking
        if (animal instanceof Dog) {
            ((Dog) animal).fetch();
        } else if (animal instanceof Cat) {
            ((Cat) animal).climb();
        }
    }
    
    public static void main(String[] args) {
        Animal[] animals = {
            new Dog("Buddy", 3, "Golden Retriever"),
            new Cat("Whiskers", 2, true)
        };
        
        for (Animal animal : animals) {
            careForAnimal(animal); // Polymorphic method call
        }
    }
}</code></pre>

      <h3>Interface Implementation</h3>
      <pre><code>public interface Trainable {
    void train(String command);
    boolean isTrainable();
}

public class Dog extends Animal implements Trainable {
    // ... existing code ...
    
    @Override
    public void train(String command) {
        System.out.println(name + " is learning: " + command);
    }
    
    @Override
    public boolean isTrainable() {
        return true;
    }
}</code></pre>
    `},
    
    { id: 'j7', title: 'Collections Framework & Generics Deep Dive', body: `
      <h2>Java Collections Framework: Managing Data Efficiently</h2>
      <p>The Collections Framework provides a unified architecture for storing and manipulating groups of objects. Understanding different collection types and their use cases is crucial for efficient programming.</p>
      
      <h3>List Interface Implementations</h3>
      <pre><code>import java.util.*;

public class ListExamples {
    public static void demonstrateLists() {
        // ArrayList - Dynamic array, good for random access
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add(1, "David"); // Insert at index 1
        
        System.out.println("ArrayList: " + names);
        System.out.println("Second element: " + names.get(1));
        
        // LinkedList - Doubly-linked list, efficient insertions/deletions
        LinkedList<Integer> numbers = new LinkedList<>();
        numbers.addFirst(10);
        numbers.addLast(20);
        numbers.add(15);
        
        System.out.println("LinkedList: " + numbers);
        System.out.println("First element: " + numbers.removeFirst());
        
        // Vector - Synchronized version of ArrayList
        Vector<String> vector = new Vector<>();
        vector.add("Thread-safe");
        vector.add("But slower");
    }
}</code></pre>

      <h3>Set Interface Implementations</h3>
      <pre><code>public class SetExamples {
    public static void demonstrateSets() {
        // HashSet - No duplicates, no ordering
        Set<String> uniqueWords = new HashSet<>();
        uniqueWords.add("java");
        uniqueWords.add("python");
        uniqueWords.add("java"); // Duplicate ignored
        
        System.out.println("HashSet: " + uniqueWords);
        
        // TreeSet - Sorted set, implements SortedSet
        TreeSet<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(5);
        sortedNumbers.add(1);
        sortedNumbers.add(3);
        sortedNumbers.add(2);
        
        System.out.println("TreeSet: " + sortedNumbers); // [1, 2, 3, 5]
        System.out.println("First: " + sortedNumbers.first());
        System.out.println("Last: " + sortedNumbers.last());
        
        // LinkedHashSet - Maintains insertion order
        LinkedHashSet<String> orderedSet = new LinkedHashSet<>();
        orderedSet.add("first");
        orderedSet.add("second");
        orderedSet.add("third");
        
        System.out.println("LinkedHashSet: " + orderedSet);
    }
}</code></pre>

      <h3>Map Interface Implementations</h3>
      <pre><code>public class MapExamples {
    public static void demonstrateMaps() {
        // HashMap - Key-value pairs, no ordering
        Map<String, Integer> studentGrades = new HashMap<>();
        studentGrades.put("Alice", 95);
        studentGrades.put("Bob", 87);
        studentGrades.put("Charlie", 92);
        
        // Iterate through map
        for (Map.Entry<String, Integer> entry : studentGrades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // TreeMap - Sorted by keys
        TreeMap<String, String> sortedMap = new TreeMap<>();
        sortedMap.put("zebra", "animal");
        sortedMap.put("apple", "fruit");
        sortedMap.put("car", "vehicle");
        
        System.out.println("TreeMap (sorted): " + sortedMap);
        
        // LinkedHashMap - Maintains insertion order
        LinkedHashMap<String, Integer> orderedMap = new LinkedHashMap<>();
        orderedMap.put("first", 1);
        orderedMap.put("second", 2);
        orderedMap.put("third", 3);
    }
}</code></pre>

      <h3>Advanced Generics</h3>
      <pre><code>// Generic class with multiple type parameters
public class Pair<T, U> {
    private T first;
    private U second;
    
    public Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }
    
    public T getFirst() { return first; }
    public U getSecond() { return second; }
    
    public void setFirst(T first) { this.first = first; }
    public void setSecond(U second) { this.second = second; }
    
    @Override
    public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

// Bounded type parameters
public class NumberContainer<T extends Number> {
    private List<T> numbers = new ArrayList<>();
    
    public void add(T number) {
        numbers.add(number);
    }
    
    public double getSum() {
        return numbers.stream()
                     .mapToDouble(Number::doubleValue)
                     .sum();
    }
}</code></pre>

      <h3>Wildcards and Advanced Usage</h3>
      <pre><code>public class WildcardExamples {
    // Upper bounded wildcard
    public static double calculateSum(List<? extends Number> numbers) {
        double sum = 0;
        for (Number num : numbers) {
            sum += num.doubleValue();
        }
        return sum;
    }
    
    // Lower bounded wildcard
    public static void addNumbers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
        list.add(3);
    }
    
    // Unbounded wildcard
    public static void printList(List<?> list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
}</code></pre>
    `},
    
    { id: 'j8', title: 'Exception Handling & Error Management', body: `
      <h2>Robust Exception Handling</h2>
      <p>Exception handling is crucial for writing robust applications that can gracefully handle errors and unexpected situations.</p>
      
      <h3>Exception Hierarchy</h3>
      <pre><code>/*
Throwable
├── Error (System errors, generally unrecoverable)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception
    ├── RuntimeException (Unchecked exceptions)
    │   ├── NullPointerException
    │   ├── IllegalArgumentException
    │   ├── ArrayIndexOutOfBoundsException
    │   └── ...
    └── Checked Exceptions (must be handled)
        ├── IOException
        ├── SQLException
        ├── ClassNotFoundException
        └── ...
*/</code></pre>

      <h3>Try-Catch-Finally Blocks</h3>
      <pre><code>import java.io.*;
import java.util.Scanner;

public class ExceptionHandling {
    public static void demonstrateBasicHandling() {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Enter a number: ");
            int number = scanner.nextInt();
            int result = 100 / number;
            System.out.println("Result: " + result);
            
        } catch (ArithmeticException e) {
            System.err.println("Cannot divide by zero!");
            System.err.println("Error details: " + e.getMessage());
            
        } catch (InputMismatchException e) {
            System.err.println("Please enter a valid integer!");
            
        } catch (Exception e) {
            // Generic catch block (should be last)
            System.err.println("An unexpected error occurred: " + e.getMessage());
            e.printStackTrace();
            
        } finally {
            // Always executes (cleanup code)
            System.out.println("Closing resources...");
            scanner.close();
        }
    }
}</code></pre>

      <h3>Try-with-Resources (Automatic Resource Management)</h3>
      <pre><code>public class ResourceManagement {
    public static void readFile(String filename) {
        // Try-with-resources automatically closes resources
        try (BufferedReader reader = new BufferedReader(new FileReader(filename));
             PrintWriter writer = new PrintWriter(new FileWriter("output.txt"))) {
            
            String line;
            while ((line = reader.readLine()) != null) {
                writer.println("Processed: " + line);
            }
            
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
        } catch (IOException e) {
            System.err.println("Error reading/writing file: " + e.getMessage());
        }
        // Resources automatically closed here
    }
}</code></pre>

      <h3>Custom Exceptions</h3>
      <pre><code>// Custom checked exception
class InsufficientFundsException extends Exception {
    private double requestedAmount;
    private double availableBalance;
    
    public InsufficientFundsException(double requested, double available) {
        super(String.format("Insufficient funds: Requested %.2f, Available %.2f", 
                          requested, available));
        this.requestedAmount = requested;
        this.availableBalance = available;
    }
    
    public double getRequestedAmount() { return requestedAmount; }
    public double getAvailableBalance() { return availableBalance; }
}

// Custom unchecked exception
class InvalidAccountNumberException extends RuntimeException {
    public InvalidAccountNumberException(String accountNumber) {
        super("Invalid account number: " + accountNumber);
    }
}

public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double initialBalance) {
        if (accountNumber == null || accountNumber.length() != 10) {
            throw new InvalidAccountNumberException(accountNumber);
        }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount, balance);
        }
        balance -= amount;
        System.out.println("Withdrawn: $" + amount + ", Remaining: $" + balance);
    }
    
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
        System.out.println("Deposited: $" + amount + ", New balance: $" + balance);
    }
}</code></pre>

      <h3>Exception Handling Best Practices</h3>
      <pre><code>public class ExceptionBestPractices {
    // Method with proper exception documentation
    /**
     * Processes a payment transaction
     * @param amount the amount to process
     * @param account the account to charge
     * @throws InsufficientFundsException if account has insufficient funds
     * @throws IllegalArgumentException if amount is negative
     * @throws NullPointerException if account is null
     */
    public void processPayment(double amount, BankAccount account) 
            throws InsufficientFundsException {
        
        // Validate input parameters
        if (account == null) {
            throw new NullPointerException("Account cannot be null");
        }
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        
        try {
            account.withdraw(amount);
            logTransaction(account, amount);
            
        } catch (InsufficientFundsException e) {
            // Log the error
            logError("Payment failed: " + e.getMessage());
            // Re-throw the exception for caller to handle
            throw e;
        }
    }
    
    private void logTransaction(BankAccount account, double amount) {
        // Implementation for logging
    }
    
    private void logError(String message) {
        System.err.println("[ERROR] " + message);
    }
}</code></pre>
    `},
    
    { id: 'j9', title: 'Multithreading & Concurrency', body: `
      <h2>Java Multithreading: Concurrent Programming</h2>
      <p>Modern applications require concurrent execution for better performance. Understanding threads, synchronization, and concurrent utilities is essential.</p>
      
      <h3>Creating and Running Threads</h3>
      <pre><code>// Method 1: Extending Thread class
class MyThread extends Thread {
    private String threadName;
    
    public MyThread(String name) {
        this.threadName = name;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(threadName + " - Count: " + i);
            try {
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                System.err.println(threadName + " interrupted");
                return;
            }
        }
        System.out.println(threadName + " completed");
    }
}

// Method 2: Implementing Runnable interface (preferred)
class MyRunnable implements Runnable {
    private String taskName;
    
    public MyRunnable(String name) {
        this.taskName = name;
    }
    
    @Override
    public void run() {
        System.out.println("Task " + taskName + " started by " + 
                          Thread.currentThread().getName());
        // Simulate work
        for (int i = 0; i < 3; i++) {
            System.out.println(taskName + " working... " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        System.out.println("Task " + taskName + " completed");
    }
}

// Usage
public class ThreadExample {
    public static void main(String[] args) {
        // Method 1: Thread class
        MyThread thread1 = new MyThread("Thread-1");
        MyThread thread2 = new MyThread("Thread-2");
        
        thread1.start();
        thread2.start();
        
        // Method 2: Runnable interface
        Thread thread3 = new Thread(new MyRunnable("Task-A"));
        Thread thread4 = new Thread(new MyRunnable("Task-B"));
        
        thread3.start();
        thread4.start();
        
        // Lambda expression (Java 8+)
        Thread thread5 = new Thread(() -> {
            System.out.println("Lambda thread executing");
        });
        thread5.start();
    }
}</code></pre>

      <h3>Synchronization and Thread Safety</h3>
      <pre><code>public class BankAccountThreadSafe {
    private double balance;
    private final Object lock = new Object();
    
    public BankAccountThreadSafe(double initialBalance) {
        this.balance = initialBalance;
    }
    
    // Synchronized method
    public synchronized void deposit(double amount) {
        balance += amount;
        System.out.println(Thread.currentThread().getName() + 
                          " deposited: $" + amount + ", Balance: $" + balance);
    }
    
    // Synchronized block
    public void withdraw(double amount) {
        synchronized(lock) {
            if (balance >= amount) {
                balance -= amount;
                System.out.println(Thread.currentThread().getName() + 
                                  " withdrew: $" + amount + ", Balance: $" + balance);
            } else {
                System.out.println(Thread.currentThread().getName() + 
                                  " - Insufficient funds");
            }
        }
    }
    
    public synchronized double getBalance() {
        return balance;
    }
}</code></pre>

      <h3>Producer-Consumer Pattern</h3>
      <pre><code>import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

class Producer implements Runnable {
    private BlockingQueue<String> queue;
    
    public Producer(BlockingQueue<String> queue) {
        this.queue = queue;
    }
    
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 5; i++) {
                String item = "Item-" + i;
                queue.put(item); // Blocks if queue is full
                System.out.println("Produced: " + item);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class Consumer implements Runnable {
    private BlockingQueue<String> queue;
    
    public Consumer(BlockingQueue<String> queue) {
        this.queue = queue;
    }
    
    @Override
    public void run() {
        try {
            while (true) {
                String item = queue.take(); // Blocks if queue is empty
                System.out.println("Consumed: " + item);
                Thread.sleep(1500);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

public class ProducerConsumerExample {
    public static void main(String[] args) {
        BlockingQueue<String> queue = new LinkedBlockingQueue<>(10);
        
        Thread producer = new Thread(new Producer(queue));
        Thread consumer = new Thread(new Consumer(queue));
        
        producer.start();
        consumer.start();
    }
}</code></pre>

      <h3>ExecutorService and Thread Pools</h3>
      <pre><code>import java.util.concurrent.*;
import java.util.List;
import java.util.ArrayList;

public class ExecutorServiceExample {
    public static void main(String[] args) {
        // Fixed thread pool
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Submit tasks
        List<Future<String>> futures = new ArrayList<>();
        
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            Future<String> future = executor.submit(() -> {
                Thread.sleep(2000); // Simulate work
                return "Task " + taskId + " completed by " + 
                       Thread.currentThread().getName();
            });
            futures.add(future);
        }
        
        // Collect results
        for (Future<String> future : futures) {
            try {
                String result = future.get(); // Blocks until result is available
                System.out.println(result);
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }
        
        executor.shutdown();
        
        try {
            if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
    }
}</code></pre>
    `},
    
    { id: 'j10', title: 'Stream API & Functional Programming', body: `
      <h2>Stream API: Functional Data Processing</h2>
      <p>Java 8 introduced the Stream API, enabling functional programming paradigms for efficient and readable data processing.</p>
      
      <h3>Creating Streams</h3>
      <pre><code>import java.util.stream.*;
import java.util.*;

public class StreamCreation {
    public static void main(String[] args) {
        // From collections
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        Stream<String> streamFromList = names.stream();
        
        // From arrays
        String[] array = {"Java", "Python", "JavaScript"};
        Stream<String> streamFromArray = Arrays.stream(array);
        
        // Using Stream.of()
        Stream<Integer> streamFromValues = Stream.of(1, 2, 3, 4, 5);
        
        // Infinite streams
        Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 2);
        Stream<Double> randomStream = Stream.generate(Math::random);
        
        // Range streams
        IntStream range = IntStream.range(1, 10); // 1 to 9
        IntStream rangeClosed = IntStream.rangeClosed(1, 10); // 1 to 10
        
        // From files
        try {
            Stream<String> lines = Files.lines(Paths.get("file.txt"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}</code></pre>

      <h3>Intermediate Operations</h3>
      <pre><code>public class IntermediateOperations {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "Engineer"),
            new Person("Bob", 30, "Designer"),
            new Person("Charlie", 35, "Manager"),
            new Person("David", 28, "Engineer")
        );
        
        // Filter - select elements based on predicate
        people.stream()
              .filter(person -> person.getAge() > 27)
              .forEach(System.out::println);
        
        // Map - transform elements
        List<String> upperCaseNames = people.stream()
                                           .map(Person::getName)
                                           .map(String::toUpperCase)
                                           .collect(Collectors.toList());
        
        // FlatMap - flatten nested structures
        List<List<String>> nestedList = Arrays.asList(
            Arrays.asList("a", "b"),
            Arrays.asList("c", "d", "e"),
            Arrays.asList("f")
        );
        
        List<String> flatList = nestedList.stream()
                                         .flatMap(Collection::stream)
                                         .collect(Collectors.toList());
        
        // Distinct - remove duplicates
        List<String> jobs = people.stream()
                                 .map(Person::getJob)
                                 .distinct()
                                 .collect(Collectors.toList());
        
        // Sorted - sort elements
        List<Person> sortedByAge = people.stream()
                                        .sorted(Comparator.comparing(Person::getAge))
                                        .collect(Collectors.toList());
        
        // Limit and Skip
        List<Person> limitedList = people.stream()
                                        .skip(1)    // Skip first element
                                        .limit(2)   // Take only 2 elements
                                        .collect(Collectors.toList());
    }
}

class Person {
    private String name;
    private int age;
    private String job;
    
    public Person(String name, int age, String job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    
    // Getters and toString method
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getJob() { return job; }
    
    @Override
    public String toString() {
        return String.format("Person{name='%s', age=%d, job='%s'}", name, age, job);
    }
}</code></pre>

      <h3>Terminal Operations</h3>
      <pre><code>public class TerminalOperations {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Person> people = getPeople();
        
        // forEach - perform action on each element
        numbers.stream().forEach(System.out::println);
        
        // collect - gather results into collection
        List<Integer> evenNumbers = numbers.stream()
                                          .filter(n -> n % 2 == 0)
                                          .collect(Collectors.toList());
        
        // reduce - combine elements into single result
        int sum = numbers.stream()
                        .reduce(0, Integer::sum);
        
        Optional<Integer> max = numbers.stream()
                                      .reduce(Integer::max);
        
        // Collectors - advanced collecting
        Map<String, List<Person>> peopleByJob = people.stream()
                                                      .collect(Collectors.groupingBy(Person::getJob));
        
        Map<String, Long> jobCounts = people.stream()
                                           .collect(Collectors.groupingBy(
                                               Person::getJob,
                                               Collectors.counting()
                                           ));
        
        // Statistical operations
        IntSummaryStatistics stats = people.stream()
                                          .mapToInt(Person::getAge)
                                          .summaryStatistics();
        
        System.out.println("Average age: " + stats.getAverage());
        System.out.println("Max age: " + stats.getMax());
        System.out.println("Min age: " + stats.getMin());
        
        // anyMatch, allMatch, noneMatch
        boolean hasEngineers = people.stream()
                                    .anyMatch(p -> "Engineer".equals(p.getJob()));
        
        boolean allAdults = people.stream()
                                 .allMatch(p -> p.getAge() >= 18);
        
        // findFirst, findAny
        Optional<Person> firstEngineer = people.stream()
                                              .filter(p -> "Engineer".equals(p.getJob()))
                                              .findFirst();
    }
    
    private static List<Person> getPeople() {
        return Arrays.asList(
            new Person("Alice", 25, "Engineer"),
            new Person("Bob", 30, "Designer"),
            new Person("Charlie", 35, "Manager"),
            new Person("David", 28, "Engineer")
        );
    }
}</code></pre>
    `},
    
    { id: 'j11', title: 'Modern Java Features (Java 8-17+)', body: `
      <h2>Modern Java: Latest Language Features</h2>
      <p>Java continues to evolve with new features that improve productivity, performance, and code readability.</p>
      
      <h3>Lambda Expressions and Method References</h3>
      <pre><code>import java.util.*;
import java.util.function.*;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("hello", "world", "java", "programming");
        
        // Traditional anonymous inner class
        words.sort(new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.length() - s2.length();
  },
  
  javascript: {
    title: "JavaScript",
    subtitle: "Dynamic web programming and modern JavaScript features",
    lessons: [
      { id: "js1", title: "JavaScript Fundamentals", body: `
        <h2>JavaScript Basics: Variables, Data Types, and Functions</h2>
        <p>JavaScript is a dynamic, interpreted language that powers the modern web. Understanding its fundamentals is crucial for web development.</p>
        
        <h3>Variables and Data Types</h3>
        <pre><code>// Variable declarations
var oldStyle = "function-scoped";
let modernStyle = "block-scoped";
const immutable = "cannot be reassigned";

// Data types
let number = 42;                    // Number
let string = "Hello, JavaScript!";   // String
let boolean = true;                  // Boolean
let array = [1, 2, 3, "mixed"];     // Array
let object = { name: "Alice", age: 30 }; // Object
let nullValue = null;               // Null
let undefinedValue = undefined;     // Undefined
let symbol = Symbol("unique");       // Symbol (ES6+)

// Type checking
console.log(typeof number);    // "number"
console.log(typeof string);    // "string"
console.log(typeof boolean);   // "boolean"
console.log(typeof array);     // "object" (arrays are objects!)
console.log(typeof object);    // "object"
console.log(typeof nullValue); // "object" (historical quirk)

// Better array check
console.log(Array.isArray(array)); // true</code></pre>

        <h3>Functions</h3>
        <pre><code>// Function declaration (hoisted)
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression (not hoisted)
const greetExpression = function(name) {
    return `Hello, ${name}!`; // Template literal
};

// Arrow functions (ES6+)
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

// Concise arrow function
const greetConcise = name => `Hello, ${name}!`;

// Functions are first-class objects
const functions = [greet, greetExpression, greetArrow];
functions.forEach(fn => console.log(fn("World")));

// Higher-order functions
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15</code></pre>

        <h3>Control Flow</h3>
        <pre><code>// Conditionals
let score = 85;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}

// Ternary operator
grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';

// Switch statement
switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good!");
        break;
    case 'C':
        console.log("Average");
        break;
    default:
        console.log("Try harder");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const fruits = ["apple", "banana", "orange"];

// for...of loop (values)
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in loop (indices/keys)
for (const index in fruits) {
    console.log(index, fruits[index]);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}</code></pre>
      `},
      
      { id: "js2", title: "Objects and Arrays Deep Dive", body: `
        <h2>Working with Objects and Arrays</h2>
        <p>Objects and arrays are fundamental data structures in JavaScript. Understanding their methods and patterns is essential for effective programming.</p>
        
        <h3>Object Manipulation</h3>
        <pre><code>// Object creation
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    hobbies: ["reading", "cycling", "cooking"]
};

// Property access
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation
console.log(person["city"]);     // Dynamic property access

// Adding/modifying properties
person.job = "Developer";
person["salary"] = 75000;
person.age = 31;

// Property existence
console.log("name" in person);           // true
console.log(person.hasOwnProperty("age")); // true

// Object methods
const calculator = {
    value: 0,
    
    add(num) {
        this.value += num;
        return this; // Method chaining
    },
    
    multiply(num) {
        this.value *= num;
        return this;
    },
    
    getValue() {
        return this.value;
    }
};

// Method chaining
const result = calculator.add(10).multiply(2).add(5).getValue();
console.log(result); // 25

// Object destructuring
const { name, age, city } = person;
console.log(name, age, city);

// Nested destructuring
const { hobbies: [firstHobby, ...otherHobbies] } = person;
console.log(firstHobby);     // "reading"
console.log(otherHobbies);   // ["cycling", "cooking"]

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person));      // Property names
console.log(Object.values(person));    // Property values
console.log(Object.entries(person));   // [key, value] pairs</code></pre>

        <h3>Array Methods and Patterns</h3>
        <pre><code>const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array methods that return new arrays (immutable)
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const sliced = numbers.slice(2, 5);
console.log(sliced); // [3, 4, 5]

// Array methods that modify the original array (mutable)
const mutableArray = [1, 2, 3];
mutableArray.push(4);           // Add to end
mutableArray.unshift(0);        // Add to beginning
const last = mutableArray.pop();     // Remove from end
const first = mutableArray.shift();  // Remove from beginning
console.log(mutableArray);      // [1, 2, 3]

// Advanced array methods
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 55

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const found = numbers.find(num => num > 5);
console.log(found); // 6

const foundIndex = numbers.findIndex(num => num > 5);
console.log(foundIndex); // 5

// Array destructuring
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// Spread operator
const moreNumbers = [11, 12, 13];
const combined = [...numbers, ...moreNumbers];
console.log(combined);

// Array of objects processing
const students = [
    { name: "Alice", grade: 85, subject: "Math" },
    { name: "Bob", grade: 92, subject: "Science" },
    { name: "Charlie", grade: 78, subject: "Math" },
    { name: "Diana", grade: 96, subject: "Science" }
];

// Filter and map combination
const mathStudentsNames = students
    .filter(student => student.subject === "Math")
    .map(student => student.name);
console.log(mathStudentsNames); // ["Alice", "Charlie"]

// Calculate average grade
const averageGrade = students
    .reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(averageGrade); // 87.75</code></pre>
      `},
      
      { id: "js3", title: "Asynchronous JavaScript", body: `
        <h2>Mastering Asynchronous Programming</h2>
        <p>Asynchronous programming is crucial in JavaScript for handling operations like API calls, file operations, and timers without blocking the main thread.</p>
        
        <h3>Callbacks and Callback Hell</h3>
        <pre><code>// Simple callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(null, data); // (error, data) pattern
    }, 1000);
}

// Using the callback
fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data received:", data);
    }
});

// Callback hell example
function step1(callback) {
    setTimeout(() => callback(null, "Step 1 complete"), 1000);
}

function step2(data, callback) {
    setTimeout(() => callback(null, data + " -> Step 2 complete"), 1000);
}

function step3(data, callback) {
    setTimeout(() => callback(null, data + " -> Step 3 complete"), 1000);
}

// Nested callbacks (callback hell)
step1((err, result1) => {
    if (err) return console.error(err);
    
    step2(result1, (err, result2) => {
        if (err) return console.error(err);
        
        step3(result2, (err, result3) => {
            if (err) return console.error(err);
            console.log("Final result:", result3);
        });
    });
});</code></pre>

        <h3>Promises</h3>
        <pre><code>// Creating promises
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% success rate
            
            if (success) {
                resolve({ id: 1, name: "Sample Data" });
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

// Using promises with .then() and .catch()
fetchDataPromise()
    .then(data => {
        console.log("Success:", data);
        return data.id; // Return value becomes next .then() parameter
    })
    .then(id => {
        console.log("Processing ID:", id);
        return fetchDataPromise(); // Return another promise
    })
    .then(moreData => {
        console.log("More data:", moreData);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Promise chain completed");
    });

// Promise utilities
const promise1 = Promise.resolve("Quick result");
const promise2 = fetchDataPromise();
const promise3 = new Promise(resolve => setTimeout(() => resolve("Delayed"), 2000));

// Wait for all promises
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All results:", results);
    })
    .catch(error => {
        console.error("One or more promises failed:", error);
    });

// Wait for first successful promise
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log("First result:", result);
    });

// Wait for all promises (including failures)
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} succeeded:`, result.value);
            } else {
                console.log(`Promise ${index} failed:`, result.reason);
            }
        });
    });</code></pre>

        <h3>Async/Await</h3>
        <pre><code>// Converting promise chain to async/await
async function fetchAndProcessData() {
    try {
        const data = await fetchDataPromise();
        console.log("Success:", data);
        
        const id = data.id;
        console.log("Processing ID:", id);
        
        const moreData = await fetchDataPromise();
        console.log("More data:", moreData);
        
        return moreData;
        
    } catch (error) {
        console.error("Error:", error.message);
        throw error; // Re-throw if you want caller to handle it
    } finally {
        console.log("Async function completed");
    }
}

// Using async function
fetchAndProcessData()
    .then(result => console.log("Final result:", result))
    .catch(error => console.error("Unhandled error:", error));

// Parallel execution with async/await
async function parallelExecution() {
    try {
        // Start all promises simultaneously
        const promise1 = fetchDataPromise();
        const promise2 = fetchDataPromise();
        const promise3 = fetchDataPromise();
        
        // Wait for all to complete
        const [result1, result2, result3] = await Promise.all([
            promise1,
            promise2,
            promise3
        ]);
        
        console.log("All results:", [result1, result2, result3]);
        
    } catch (error) {
        console.error("Parallel execution error:", error);
    }
}

// Error handling with async/await
async function robustAsyncFunction() {
    const operations = [
        () => fetchDataPromise(),
        () => fetchDataPromise(),
        () => fetchDataPromise()
    ];
    
    const results = [];
    
    for (const operation of operations) {
        try {
            const result = await operation();
            results.push({ success: true, data: result });
        } catch (error) {
            results.push({ success: false, error: error.message });
        }
    }
    
    return results;
}

robustAsyncFunction().then(results => {
    console.log("Robust execution results:", results);
});</code></pre>
      `}
    ],
    quiz: [
      { q: "Which keyword declares a block-scoped variable?", options: ["var", "let", "const", "function"], a: 1 },
      { q: "What is the result of: typeof [1, 2, 3]", options: ["array", "object", "list", "undefined"], a: 1 },
      { q: "Which array method returns a new array?", options: ["push()", "pop()", "map()", "sort()"], a: 2 },
      { q: "What does 'await' do?", options: ["Waits for a promise", "Creates a promise", "Catches errors", "Loops through arrays"], a: 0 },
      { q: "Which is the correct arrow function syntax?", options: ["=> (x) { return x * 2 }", "(x) => { return x * 2 }", "(x) { return x * 2 } =>", "function => (x) { return x * 2 }"], a: 1 }
    ]
  },
  
  typescript: {
    title: "TypeScript",
    subtitle: "Typed JavaScript for scalable applications",
    lessons: [
      { id: "ts1", title: "TypeScript Fundamentals", body: `
        <h2>Getting Started with TypeScript</h2>
        <p>TypeScript adds static typing to JavaScript, making it easier to catch errors early and build maintainable applications.</p>
        
        <h3>Basic Types</h3>
        <pre><code>// Basic type annotations
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "cycling"];
let coordinates: number[] = [10, 20];

// Alternative array syntax
let scores: Array<number> = [95, 87, 92];

// Any type (avoid when possible)
let anything: any = "could be anything";
anything = 42;
anything = true;

// Unknown type (safer than any)
let userInput: unknown = "some input";
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // Type guard required
}

// Void type for functions that don't return anything
function logMessage(message: string): void {
    console.log(message);
}

// Never type for functions that never return
function throwError(message: string): never {
    throw new Error(message);
}

// Null and undefined
let nullable: string | null = null;
let optional: string | undefined = undefined;

// Type assertions
let someValue: any = "this is a string";
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;</code></pre>

        <h3>Interfaces and Types</h3>
        <pre><code>// Interface definition
interface Person {
    name: string;
    age: number;
    email?: string;        // Optional property
    readonly id: string;   // Read-only property
}

// Implementing interface
class Employee implements Person {
    readonly id: string;
    name: string;
    age: number;
    email?: string;
    department: string;
    
    constructor(id: string, name: string, age: number, department: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
    }
}

// Type aliases
type Status = "active" | "inactive" | "pending";  // Union type
type UserID = string | number;                      // Union type
type Point = { x: number; y: number };             // Object type

// Function type
type Calculator = (a: number, b: number) => number;

const add: Calculator = (x, y) => x + y;
const multiply: Calculator = (x, y) => x * y;

// Generic types
interface Container<T> {
    value: T;
    getValue(): T;
    setValue(value: T): void;
}

class Box<T> implements Container<T> {
    constructor(public value: T) {}
    
    getValue(): T {
        return this.value;
    }
    
    setValue(value: T): void {
        this.value = value;
    }
}

const stringBox = new Box<string>("hello");
const numberBox = new Box<number>(42);</code></pre>

        <h3>Advanced Types</h3>
        <pre><code>// Intersection types
type Draggable = {
    drag(): void;
};

type Resizable = {
    resize(): void;
};

type UIWidget = Draggable & Resizable; // Has both drag() and resize()

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Mapped types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Using utility types
interface User {
    id: string;
    name: string;
    email: string;
    age: number;
}

type PartialUser = Partial<User>;        // All properties optional
type ReadonlyUser = Readonly<User>;      // All properties readonly
type UserEmail = Pick<User, "email">;    // Only email property
type UserWithoutId = Omit<User, "id">;   // All properties except id

// Index signatures
interface StringDictionary {
    [key: string]: string;
}

interface NumberDictionary {
    [key: string]: number;
    length: number;    // OK, length is a number
    // name: string;   // Error, conflicts with index signature
}

// Template literal types (TypeScript 4.1+)
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvent = EventName<"click">; // "onClick"
type InputEvent = EventName<"change">; // "onChange"</code></pre>
      `},
      
      { id: "ts2", title: "Classes and Modules", body: `
        <h2>Object-Oriented Programming in TypeScript</h2>
        <p>TypeScript enhances JavaScript classes with access modifiers, abstract classes, and better type safety.</p>
        
        <h3>Classes with Access Modifiers</h3>
        <pre><code>abstract class Animal {
    protected name: string;
    private _age: number;
    public species: string;
    
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this._age = age;
        this.species = species;
    }
    
    // Getter and setter
    get age(): number {
        return this._age;
    }
    
    set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
    
    // Abstract method must be implemented by subclasses
    abstract makeSound(): string;
    
    // Concrete method
    introduce(): string {
        return `This is ${this.name}, a ${this._age} year old ${this.species}`;
    }
    
    // Static method
    static compareAges(animal1: Animal, animal2: Animal): number {
        return animal1.age - animal2.age;
    }
}

class Dog extends Animal {
    private breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age, "Dog");
        this.breed = breed;
    }
    
    makeSound(): string {
        return "Woof!";
    }
    
    // Method overriding
    introduce(): string {
        return `${super.introduce()} and I'm a ${this.breed}`;
    }
    
    // Dog-specific method
    wagTail(): void {
        console.log(`${this.name} is wagging tail happily!`);
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Cat");
    }
    
    makeSound(): string {
        return "Meow!";
    }
    
    climb(): void {
        console.log(`${this.name} is climbing`);
    }
}

// Usage
const dog = new Dog("Buddy", 3, "Golden Retriever");
const cat = new Cat("Whiskers", 2);

console.log(dog.introduce());
console.log(dog.makeSound());
dog.wagTail();

console.log(Animal.compareAges(dog, cat)); // 1</code></pre>

        <h3>Interfaces and Implementation</h3>
        <pre><code>// Multiple interface implementation
interface Flyable {
    fly(): void;
    altitude: number;
}

interface Swimmable {
    swim(): void;
    depth: number;
}

// Class implementing multiple interfaces
class Duck extends Animal implements Flyable, Swimmable {
    altitude: number = 0;
    depth: number = 0;
    
    constructor(name: string, age: number) {
        super(name, age, "Duck");
    }
    
    makeSound(): string {
        return "Quack!";
    }
    
    fly(): void {
        this.altitude = 100;
        console.log(`${this.name} is flying at ${this.altitude}m`);
    }
    
    swim(): void {
        this.depth = 2;
        console.log(`${this.name} is swimming at ${this.depth}m depth`);
    }
}

// Interface extending other interfaces
interface AquaticBird extends Flyable, Swimmable {
    dive(): void;
}

class Penguin extends Animal implements AquaticBird {
    altitude: number = 0;
    depth: number = 0;
    
    constructor(name: string, age: number) {
        super(name, age, "Penguin");
    }
    
    makeSound(): string {
        return "Squawk!";
    }
    
    fly(): void {
        console.log(`${this.name} cannot fly, but can glide underwater`);
    }
    
    swim(): void {
        this.depth = 50;
        console.log(`${this.name} is swimming at ${this.depth}m depth`);
    }
    
    dive(): void {
        this.depth = 200;
        console.log(`${this.name} dives deep to ${this.depth}m`);
    }
}</code></pre>

        <h3>Modules and Namespaces</h3>
        <pre><code>// math-utils.ts - Module with named exports
export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export const PI = 3.14159;

// Default export
class Calculator {
    private result: number = 0;
    
    add(value: number): this {
        this.result += value;
        return this;
    }
    
    multiply(value: number): this {
        this.result *= value;
        return this;
    }
    
    getResult(): number {
        return this.result;
    }
    
    reset(): this {
        this.result = 0;
        return this;
    }
}

export default Calculator;

// main.ts - Importing modules
import Calculator, { add, multiply, PI } from './math-utils';

// Using imports
console.log(add(5, 3));         // 8
console.log(multiply(4, 7));    // 28
console.log(PI);                // 3.14159

const calc = new Calculator();
const result = calc.add(10).multiply(2).add(5).getResult();
console.log(result); // 25

// Re-export from another module
export { add, multiply } from './math-utils';
export { default as Calculator } from './math-utils';

// Namespace (less common in modern TypeScript)
namespace Geometry {
    export interface Point {
        x: number;
        y: number;
    }
    
    export function distance(p1: Point, p2: Point): number {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    export namespace Circle {
        export function area(radius: number): number {
            return Math.PI * radius * radius;
        }
        
        export function circumference(radius: number): number {
            return 2 * Math.PI * radius;
        }
    }
}

// Using namespace
const point1: Geometry.Point = { x: 0, y: 0 };
const point2: Geometry.Point = { x: 3, y: 4 };
console.log(Geometry.distance(point1, point2)); // 5
console.log(Geometry.Circle.area(5)); // 78.54</code></pre>
      `}
    ],
    quiz: [
      { q: "Which TypeScript type is safer than 'any'?", options: ["unknown", "object", "void", "never"], a: 0 },
      { q: "What does the '?' symbol mean in TypeScript?", options: ["Required property", "Optional property", "Nullable type", "Generic type"], a: 1 },
      { q: "Which access modifier makes a property visible only within the class?", options: ["public", "protected", "private", "internal"], a: 2 },
      { q: "What is a union type?", options: ["Type that combines properties", "Type that can be one of several types", "Type for arrays", "Type for functions"], a: 1 },
      { q: "Which utility type makes all properties optional?", options: ["Required<T>", "Readonly<T>", "Partial<T>", "Pick<T>"], a: 2 }
    ]
  }
};
        
        // Lambda expression
        words.sort((s1, s2) -> s1.length() - s2.length());
        
        // Method reference
        words.sort(Comparator.comparing(String::length));
        
        // Different lambda syntaxes
        Runnable task1 = () -> System.out.println("Task executed");
        
        Function<String, Integer> lengthFunction = s -> s.length();
        Function<String, Integer> lengthMethodRef = String::length;
        
        Predicate<String> isEmpty = String::isEmpty;
        Consumer<String> print = System.out::println;
        Supplier<String> supplier = () -> "Hello World";
        
        // Custom functional interface
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        
        System.out.println(add.calculate(5, 3));      // 8
        System.out.println(multiply.calculate(5, 3));  // 15
    }
}

@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}</code></pre>

      <h3>Optional Class - Null Safety</h3>
      <pre><code>import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        // Creating Optional
        Optional<String> optional1 = Optional.of("Hello");
        Optional<String> optional2 = Optional.ofNullable(null);
        Optional<String> optional3 = Optional.empty();
        
        // Checking presence
        if (optional1.isPresent()) {
            System.out.println("Value: " + optional1.get());
        }
        
        // Better approach with ifPresent
        optional1.ifPresent(System.out::println);
        
        // orElse - provide default value
        String value1 = optional2.orElse("Default Value");
        
        // orElseGet - lazy evaluation
        String value2 = optional2.orElseGet(() -> "Computed Default");
        
        // orElseThrow - throw exception if empty
        try {
            String value3 = optional2.orElseThrow(() -> 
                new IllegalArgumentException("Value not found"));
        } catch (IllegalArgumentException e) {
            System.out.println("Exception: " + e.getMessage());
        }
        
        // Chaining operations
        Optional<String> result = optional1
            .filter(s -> s.length() > 3)
            .map(String::toUpperCase)
            .map(s -> s + "!");
        
        result.ifPresent(System.out::println); // HELLO!
    }
    
    public static Optional<User> findUserById(int id) {
        // Simulate database lookup
        if (id == 1) {
            return Optional.of(new User("Alice", "alice@example.com"));
        }
        return Optional.empty();
    }
    
    static class User {
        private String name;
        private String email;
        
        public User(String name, String email) {
            this.name = name;
            this.email = email;
        }
        
        public String getName() { return name; }
        public String getEmail() { return email; }
    }
}</code></pre>

      <h3>Record Classes (Java 14+)</h3>
      <pre><code>// Traditional class
class PersonOld {
    private final String name;
    private final int age;
    
    public PersonOld(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PersonOld)) return false;
        PersonOld person = (PersonOld) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    @Override
    public String toString() {
        return "PersonOld{name='" + name + "', age=" + age + "}";
    }
}

// Record class (Java 14+) - Much more concise!
public record Person(String name, int age) {
    // Constructor validation
    public Person {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }
    
    // Additional methods can be added
    public boolean isAdult() {
        return age >= 18;
    }
    
    public static Person baby(String name) {
        return new Person(name, 0);
    }
}

public class RecordExample {
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        
        System.out.println(person.name());    // Alice
        System.out.println(person.age());     // 25
        System.out.println(person.toString());
        System.out.println(person.isAdult()); // true
        
        Person baby = Person.baby("Bob");
        System.out.println(baby); // Person[name=Bob, age=0]
    }
}</code></pre>

      <h3>Switch Expressions (Java 12+)</h3>
      <pre><code>public class SwitchExpressions {
    public static void main(String[] args) {
        // Traditional switch statement
        String day = "MONDAY";
        int workingHours;
        
        switch (day) {
            case "MONDAY":
            case "TUESDAY":
            case "WEDNESDAY":
            case "THURSDAY":
            case "FRIDAY":
                workingHours = 8;
                break;
            case "SATURDAY":
                workingHours = 4;
                break;
            case "SUNDAY":
                workingHours = 0;
                break;
            default:
                throw new IllegalArgumentException("Invalid day: " + day);
        }
        
        // Modern switch expression
        int workingHours2 = switch (day) {
            case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> 8;
            case "SATURDAY" -> 4;
            case "SUNDAY" -> 0;
            default -> throw new IllegalArgumentException("Invalid day: " + day);
        };
        
        // Switch with yield (for complex logic)
        String result = switch (day) {
            case "MONDAY" -> {
                System.out.println("Start of work week");
                yield "Busy day";
            }
            case "FRIDAY" -> {
                System.out.println("End of work week");
                yield "TGIF!";
            }
            case "SATURDAY", "SUNDAY" -> "Weekend!";
            default -> "Regular day";
        };
        
        System.out.println(result);
    }
}</code></pre>

      <h3>Text Blocks (Java 13+)</h3>
      <pre><code>public class TextBlocks {
    public static void main(String[] args) {
        // Traditional string concatenation
        String html1 = "<html>\n" +
                      "  <body>\n" +
                      "    <h1>Hello World</h1>\n" +
                      "  </body>\n" +
                      "</html>";
        
        // Text block (Java 13+)
        String html2 = """
                      <html>
                        <body>
                          <h1>Hello World</h1>
                        </body>
                      </html>
                      """;
        
        // JSON example
        String json = """
                     {
                       "name": "Alice",
                       "age": 25,
                       "skills": ["Java", "Python", "JavaScript"]
                     }
                     """;
        
        // SQL query
        String sql = """
                    SELECT u.name, u.email, p.title
                    FROM users u
                    JOIN posts p ON u.id = p.user_id
                    WHERE u.active = true
                    ORDER BY u.name
                    """;
        
        System.out.println(html2);
    }
}</code></pre>
    `}
  ], [
    { q: 'Which interface is implemented by ArrayList?', options: ['List', 'Set', 'Map', 'Queue'], a: 0 },
    { q: 'What is the output of: System.out.println("Hello" + 1 + 2);', options: ['Hello12', 'Hello3', 'HelloNaN', 'Compilation error'], a: 0 },
    { q: 'Which keyword is used to prevent method overriding?', options: ['final', 'static', 'abstract', 'const'], a: 0 },
    { q: 'What happens if you don\'t handle a checked exception?', options: ['Runtime error', 'Compilation error', 'Warning only', 'Nothing'], a: 1 },
    { q: 'Which collection maintains insertion order and allows duplicates?', options: ['HashSet', 'TreeSet', 'ArrayList', 'HashMap'], a: 2 },
    { q: 'What is the difference between == and .equals() for Strings?', options: ['No difference', '== checks content, equals checks reference', '== checks reference, equals checks content', 'Both check content'], a: 2 },
    { q: 'Which is true about abstract classes?', options: ['Cannot have constructors', 'Cannot be instantiated directly', 'Cannot have concrete methods', 'Cannot have instance variables'], a: 1 },
    { q: 'What does the volatile keyword do?', options: ['Makes variables thread-safe', 'Prevents caching in CPU', 'Makes variables final', 'Creates atomic operations'], a: 1 },
    { q: 'Which design pattern ensures only one instance exists?', options: ['Factory', 'Observer', 'Singleton', 'Strategy'], a: 2 },
    { q: 'What is the purpose of the synchronized keyword?', options: ['Speed up execution', 'Prevent concurrent access', 'Optimize memory', 'Handle exceptions'], a: 1 }
  ]);

  add('c', [
    { id: 'c4', title: 'Control Flow & Advanced Loops', body: `
      <h2>Mastering Control Flow in C</h2>
      <p>Control flow statements allow you to control the execution path of your program. Understanding loops, conditionals, and jump statements is essential for effective C programming.</p>
      
      <h3>Conditional Statements</h3>
      <pre><code>#include <stdio.h>

int main() {
    int grade = 85;
    char letterGrade;
    
    // if-else chain
    if (grade >= 90) {
        letterGrade = 'A';
    } else if (grade >= 80) {
        letterGrade = 'B';
    } else if (grade >= 70) {
        letterGrade = 'C';
    } else if (grade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    
    printf("Grade: %d, Letter: %c\n", grade, letterGrade);
    
    // Ternary operator
    int age = 20;
    char *status = (age >= 18) ? "Adult" : "Minor";
    printf("Age: %d, Status: %s\n", age, status);
    
    return 0;
}</code></pre>

      <h3>Switch Statements</h3>
      <pre><code>#include <stdio.h>

int main() {
    char operation = '+';
    double a = 10.0, b = 5.0, result;
    
    switch (operation) {
        case '+':
            result = a + b;
            printf("%.2f + %.2f = %.2f\n", a, b, result);
            break;
            
        case '-':
            result = a - b;
            printf("%.2f - %.2f = %.2f\n", a, b, result);
            break;
            
        case '*':
            result = a * b;
            printf("%.2f * %.2f = %.2f\n", a, b, result);
            break;
            
        case '/':
            if (b != 0) {
                result = a / b;
                printf("%.2f / %.2f = %.2f\n", a, b, result);
            } else {
                printf("Error: Division by zero!\n");
            }
            break;
            
        default:
            printf("Error: Unknown operation '%c'\n", operation);
            break;
    }
    
    return 0;
}</code></pre>

      <h3>Loop Variations and Techniques</h3>
      <pre><code>#include <stdio.h>

int main() {
    // Standard for loop
    printf("Counting up:\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\n");
    
    // Reverse counting
    printf("Counting down:\n");
    for (int i = 5; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\n");
    
    // Step by 2
    printf("Even numbers 2-10:\n");
    for (int i = 2; i <= 10; i += 2) {
        printf("%d ", i);
    }
    printf("\n");
    
    // Nested loops - multiplication table
    printf("\n5x5 Multiplication Table:\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            printf("%3d", i * j);
        }
        printf("\n");
    }
    
    // While loop with user input
    int number, sum = 0, count = 0;
    printf("\nEnter numbers (0 to stop): ");
    while (scanf("%d", &number) && number != 0) {
        sum += number;
        count++;
        printf("Enter next number (0 to stop): ");
    }
    
    if (count > 0) {
        printf("Average: %.2f\n", (double)sum / count);
    }
    
    return 0;
}</code></pre>

      <h3>Jump Statements and Loop Control</h3>
      <pre><code>#include <stdio.h>

int main() {
    // break and continue
    printf("Numbers 1-10, skipping multiples of 3:\n");
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) {
            continue; // Skip this iteration
        }
        printf("%d ", i);
    }
    printf("\n");
    
    // Finding first even number greater than 15
    printf("\nFirst even number > 15: ");
    for (int i = 16; ; i++) { // Infinite loop
        if (i % 2 == 0) {
            printf("%d\n", i);
            break; // Exit the loop
        }
    }
    
    // goto statement (use sparingly!)
    int attempts = 0;
    int password;
    
login:
    attempts++;
    printf("\nAttempt %d - Enter password (1234): ", attempts);
    scanf("%d", &password);
    
    if (password == 1234) {
        printf("Access granted!\n");
    } else if (attempts < 3) {
        printf("Incorrect password.\n");
        goto login;
    } else {
        printf("Too many failed attempts. Access denied.\n");
    }
    
    return 0;
}</code></pre>
    `},
    
    { id: 'c5', title: 'Functions & Modular Programming', body: `
      <h2>Functions: Building Modular C Programs</h2>
      <p>Functions are the building blocks of structured C programming. They promote code reuse, improve readability, and enable modular design.</p>
      
      <h3>Function Anatomy and Prototypes</h3>
      <pre><code>#include <stdio.h>
#include <math.h>

// Function prototypes (declarations)
int factorial(int n);
double circleArea(double radius);
void printArray(int arr[], int size);
int findMax(int arr[], int size);
bool isPrime(int number);

int main() {
    // Using functions
    int num = 5;
    printf("%d! = %d\n", num, factorial(num));
    
    double radius = 3.5;
    printf("Circle area (r=%.1f): %.2f\n", radius, circleArea(radius));
    
    int numbers[] = {64, 23, 91, 47, 12, 88};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("Array: ");
    printArray(numbers, size);
    printf("Maximum value: %d\n", findMax(numbers, size));
    
    // Check if numbers are prime
    for (int i = 10; i <= 20; i++) {
        if (isPrime(i)) {
            printf("%d is prime\n", i);
        }
    }
    
    return 0;
}

// Function definitions
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1); // Recursive call
}

double circleArea(double radius) {
    return M_PI * radius * radius;
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int findMax(int arr[], int size) {
    if (size <= 0) return 0;
    
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

bool isPrime(int number) {
    if (number <= 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;
    
    for (int i = 3; i * i <= number; i += 2) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}</code></pre>

      <h3>Advanced Function Concepts</h3>
      <pre><code>#include <stdio.h>
#include <stdarg.h> // For variadic functions

// Function with default behavior using static variables
int getNextId() {
    static int currentId = 1000; // Retains value between calls
    return currentId++;
}

// Variadic function (variable number of arguments)
int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    
    va_end(args);
    return total;
}

// Function returning pointer
int* createArray(int size, int initValue) {
    int* arr = malloc(size * sizeof(int));
    if (arr != NULL) {
        for (int i = 0; i < size; i++) {
            arr[i] = initValue;
        }
    }
    return arr;
}

// Function taking function pointer as parameter
void processArray(int arr[], int size, void (*processor)(int*, int)) {
    for (int i = 0; i < size; i++) {
        processor(&arr[i], i);
    }
}

// Callback functions
void doubleValue(int* value, int index) {
    *value *= 2;
}

void addIndex(int* value, int index) {
    *value += index;
}

int main() {
    // Static variable demo
    printf("ID sequences: %d, %d, %d\n", getNextId(), getNextId(), getNextId());
    
    // Variadic function demo
    printf("Sum of 2,3,4: %d\n", sum(3, 2, 3, 4));
    printf("Sum of 1,2,3,4,5: %d\n", sum(5, 1, 2, 3, 4, 5));
    
    // Dynamic array creation
    int* dynArray = createArray(5, 10);
    if (dynArray) {
        printf("\nOriginal array: ");
        for (int i = 0; i < 5; i++) {
            printf("%d ", dynArray[i]);
        }
        printf("\n");
        
        // Using function pointers
        processArray(dynArray, 5, doubleValue);
        printf("After doubling: ");
        for (int i = 0; i < 5; i++) {
            printf("%d ", dynArray[i]);
        }
        printf("\n");
        
        free(dynArray); // Don't forget to free!
    }
    
    return 0;
}</code></pre>
    `},
    
    { id: 'c6', title: 'Structures & Data Organization', body: `
      <h2>Structures: Organizing Complex Data</h2>
      <p>Structures allow you to group related data together, creating custom data types that represent real-world entities more effectively.</p>
      
      <h3>Basic Structure Definition and Usage</h3>
      <pre><code>#include <stdio.h>
#include <string.h>
#include <stdbool.h>

// Structure definitions
struct Point {
    double x, y;
};

struct Student {
    int id;
    char name[50];
    char major[30];
    float gpa;
    bool isActive;
};

struct Date {
    int day, month, year;
};

struct Employee {
    int empId;
    char name[50];
    char department[30];
    double salary;
    struct Date joinDate; // Nested structure
};

// Function prototypes for structure operations
struct Point createPoint(double x, double y);
double distanceBetweenPoints(struct Point p1, struct Point p2);
void printStudent(struct Student s);
struct Student createStudent(int id, const char* name, const char* major, float gpa);
void printEmployee(struct Employee emp);

int main() {
    // Creating and initializing structures
    struct Point origin = {0.0, 0.0};
    struct Point p1 = createPoint(3.0, 4.0);
    struct Point p2 = {5.0, 12.0};
    
    printf("Distance from origin to p1: %.2f\n", 
           distanceBetweenPoints(origin, p1));
    printf("Distance from p1 to p2: %.2f\n", 
           distanceBetweenPoints(p1, p2));
    
    // Student structure
    struct Student students[] = {
        {1001, "Alice Johnson", "Computer Science", 3.8, true},
        {1002, "Bob Smith", "Mathematics", 3.6, true},
        {1003, "Carol Davis", "Physics", 3.9, false}
    };
    
    int numStudents = sizeof(students) / sizeof(students[0]);
    printf("\n=== Student Records ===\n");
    for (int i = 0; i < numStudents; i++) {
        printStudent(students[i]);
    }
    
    // Employee with nested date
    struct Employee emp1 = {
        .empId = 5001,
        .name = "John Doe",
        .department = "Engineering",
        .salary = 75000.0,
        .joinDate = {15, 3, 2020}
    };
    
    printf("\n=== Employee Record ===\n");
    printEmployee(emp1);
    
    return 0;
}

// Function implementations
struct Point createPoint(double x, double y) {
    struct Point p;
    p.x = x;
    p.y = y;
    return p;
}

double distanceBetweenPoints(struct Point p1, struct Point p2) {
    double dx = p2.x - p1.x;
    double dy = p2.y - p1.y;
    return sqrt(dx * dx + dy * dy);
}

void printStudent(struct Student s) {
    printf("ID: %d\n", s.id);
    printf("Name: %s\n", s.name);
    printf("Major: %s\n", s.major);
    printf("GPA: %.2f\n", s.gpa);
    printf("Status: %s\n", s.isActive ? "Active" : "Inactive");
    printf("------------------------\n");
}

struct Student createStudent(int id, const char* name, const char* major, float gpa) {
    struct Student s;
    s.id = id;
    strcpy(s.name, name);
    strcpy(s.major, major);
    s.gpa = gpa;
    s.isActive = true;
    return s;
}

void printEmployee(struct Employee emp) {
    printf("Employee ID: %d\n", emp.empId);
    printf("Name: %s\n", emp.name);
    printf("Department: %s\n", emp.department);
    printf("Salary: $%.2f\n", emp.salary);
    printf("Join Date: %02d/%02d/%04d\n", 
           emp.joinDate.day, emp.joinDate.month, emp.joinDate.year);
}</code></pre>

      <h3>Advanced Structure Concepts</h3>
      <pre><code>#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Structure with self-reference (linked list node)
struct ListNode {
    int data;
    struct ListNode* next;
};

// Union - shares memory among members
union Number {
    int intValue;
    float floatValue;
    double doubleValue;
};

// Bit fields - pack multiple values in small space
struct PackedData {
    unsigned int flag1 : 1;  // 1 bit
    unsigned int flag2 : 1;  // 1 bit
    unsigned int status : 2; // 2 bits
    unsigned int count : 4;  // 4 bits
    unsigned int reserved : 24; // remaining bits
};

// Typedef for cleaner code
typedef struct {
    char name[30];
    int age;
    double balance;
} Account;

// Function prototypes
struct ListNode* createNode(int data);
void insertAtBeginning(struct ListNode** head, int data);
void printList(struct ListNode* head);
void freeList(struct ListNode* head);
void demonstrateUnion();
void demonstrateBitFields();

int main() {
    // Linked list demonstration
    struct ListNode* head = NULL;
    
    insertAtBeginning(&head, 10);
    insertAtBeginning(&head, 20);
    insertAtBeginning(&head, 30);
    
    printf("Linked List: ");
    printList(head);
    
    // Clean up
    freeList(head);
    
    // Union demonstration
    demonstrateUnion();
    
    // Bit fields demonstration
    demonstrateBitFields();
    
    // Typedef usage
    Account acc1 = {"Alice", 25, 1500.75};
    printf("\nAccount: %s, Age: %d, Balance: $%.2f\n", 
           acc1.name, acc1.age, acc1.balance);
    
    return 0;
}

struct ListNode* createNode(int data) {
    struct ListNode* node = malloc(sizeof(struct ListNode));
    if (node) {
        node->data = data;
        node->next = NULL;
    }
    return node;
}

void insertAtBeginning(struct ListNode** head, int data) {
    struct ListNode* newNode = createNode(data);
    if (newNode) {
        newNode->next = *head;
        *head = newNode;
    }
}

void printList(struct ListNode* head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

void freeList(struct ListNode* head) {
    while (head) {
        struct ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

void demonstrateUnion() {
    union Number num;
    
    printf("\n=== Union Demonstration ===\n");
    printf("Union size: %zu bytes\n", sizeof(num));
    
    num.intValue = 42;
    printf("As int: %d\n", num.intValue);
    
    num.floatValue = 3.14f;
    printf("As float: %.2f\n", num.floatValue);
    printf("Int value now: %d (corrupted!)\n", num.intValue);
}

void demonstrateBitFields() {
    struct PackedData data;
    
    printf("\n=== Bit Fields Demonstration ===\n");
    printf("PackedData size: %zu bytes\n", sizeof(data));
    
    data.flag1 = 1;
    data.flag2 = 0;
    data.status = 3;
    data.count = 7;
    data.reserved = 0;
    
    printf("flag1: %u, flag2: %u, status: %u, count: %u\n", 
           data.flag1, data.flag2, data.status, data.count);
}</code></pre>
    `},
    
    { id: 'c7', title: 'Dynamic Memory Management Mastery', body: `
      <h2>Dynamic Memory: Mastering malloc, calloc, realloc, and free</h2>
      <p>Dynamic memory allocation is crucial for creating flexible programs that can adapt to runtime requirements. Understanding memory management prevents memory leaks and crashes.</p>
      
      <h3>Basic Dynamic Allocation</h3>
      <pre><code>#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // malloc - allocates uninitialized memory
    int* numbers = malloc(5 * sizeof(int));
    if (numbers == NULL) {
        fprintf(stderr, "Memory allocation failed!\n");
        return 1;
    }
    
    // Initialize allocated memory
    for (int i = 0; i < 5; i++) {
        numbers[i] = (i + 1) * 10;
    }
    
    printf("Numbers array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    
    // calloc - allocates zero-initialized memory
    double* grades = calloc(10, sizeof(double));
    if (grades == NULL) {
        free(numbers);
        fprintf(stderr, "Memory allocation failed!\n");
        return 1;
    }
    
    printf("Grades (initialized to 0): ");
    for (int i = 0; i < 10; i++) {
        printf("%.1f ", grades[i]);
    }
    printf("\n");
    
    // Set some grades
    grades[0] = 95.5;
    grades[1] = 87.0;
    grades[2] = 92.3;
    
    // realloc - resize existing memory block
    grades = realloc(grades, 15 * sizeof(double));
    if (grades == NULL) {
        fprintf(stderr, "Memory reallocation failed!\n");
        free(numbers);
        return 1;
    }
    
    // Initialize new elements
    for (int i = 10; i < 15; i++) {
        grades[i] = 80.0 + i;
    }
    
    printf("Expanded grades array: ");
    for (int i = 0; i < 15; i++) {
        printf("%.1f ", grades[i]);
    }
    printf("\n");
    
    // Always free allocated memory
    free(numbers);
    free(grades);
    
    return 0;
}</code></pre>

      <h3>Dynamic Arrays and Strings</h3>
      <pre><code>#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Dynamic array structure
typedef struct {
    int* data;
    size_t size;
    size_t capacity;
} DynamicArray;

// Function prototypes
DynamicArray* createArray(size_t initialCapacity);
void destroyArray(DynamicArray* arr);
int pushBack(DynamicArray* arr, int value);
void printArray(DynamicArray* arr);
char* createString(const char* source);
char* concatenateStrings(const char* str1, const char* str2);

int main() {
    // Dynamic array operations
    DynamicArray* arr = createArray(2);
    if (!arr) {
        fprintf(stderr, "Failed to create array\n");
        return 1;
    }
    
    // Add elements (will trigger resizing)
    for (int i = 1; i <= 10; i++) {
        if (pushBack(arr, i * i) != 0) {
            fprintf(stderr, "Failed to add element\n");
            destroyArray(arr);
            return 1;
        }
    }
    
    printf("Dynamic array contents: ");
    printArray(arr);
    printf("Size: %zu, Capacity: %zu\n", arr->size, arr->capacity);
    
    destroyArray(arr);
    
    // Dynamic string operations
    char* greeting = createString("Hello");
    char* name = createString(" World!");
    
    if (greeting && name) {
        char* fullGreeting = concatenateStrings(greeting, name);
        if (fullGreeting) {
            printf("\nConcatenated string: %s\n", fullGreeting);
            free(fullGreeting);
        }
    }
    
    free(greeting);
    free(name);
    
    return 0;
}

DynamicArray* createArray(size_t initialCapacity) {
    DynamicArray* arr = malloc(sizeof(DynamicArray));
    if (!arr) return NULL;
    
    arr->data = malloc(initialCapacity * sizeof(int));
    if (!arr->data) {
        free(arr);
        return NULL;
    }
    
    arr->size = 0;
    arr->capacity = initialCapacity;
    return arr;
}

void destroyArray(DynamicArray* arr) {
    if (arr) {
        free(arr->data);
        free(arr);
    }
}

int pushBack(DynamicArray* arr, int value) {
    if (!arr) return -1;
    
    // Resize if necessary
    if (arr->size >= arr->capacity) {
        size_t newCapacity = arr->capacity * 2;
        int* newData = realloc(arr->data, newCapacity * sizeof(int));
        if (!newData) return -1;
        
        arr->data = newData;
        arr->capacity = newCapacity;
        printf("Array resized to capacity %zu\n", newCapacity);
    }
    
    arr->data[arr->size++] = value;
    return 0;
}

void printArray(DynamicArray* arr) {
    if (!arr) return;
    
    for (size_t i = 0; i < arr->size; i++) {
        printf("%d ", arr->data[i]);
    }
    printf("\n");
}

char* createString(const char* source) {
    if (!source) return NULL;
    
    size_t len = strlen(source);
    char* newStr = malloc(len + 1);
    if (newStr) {
        strcpy(newStr, source);
    }
    return newStr;
}

char* concatenateStrings(const char* str1, const char* str2) {
    if (!str1 || !str2) return NULL;
    
    size_t len1 = strlen(str1);
    size_t len2 = strlen(str2);
    
    char* result = malloc(len1 + len2 + 1);
    if (result) {
        strcpy(result, str1);
        strcat(result, str2);
    }
    
    return result;
}</code></pre>

      <h3>Memory Debugging and Best Practices</h3>
      <pre><code>#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Memory leak detection (simple version)
#ifdef DEBUG_MEMORY
static size_t allocCount = 0;
static size_t freeCount = 0;

void* debugMalloc(size_t size, const char* file, int line) {
    void* ptr = malloc(size);
    if (ptr) {
        allocCount++;
        printf("ALLOC: %p (%zu bytes) at %s:%d\n", ptr, size, file, line);
    }
    return ptr;
}

void debugFree(void* ptr, const char* file, int line) {
    if (ptr) {
        freeCount++;
        printf("FREE: %p at %s:%d\n", ptr, file, line);
    }
    free(ptr);
}

void printMemoryStats() {
    printf("\n=== Memory Statistics ===\n");
    printf("Allocations: %zu\n", allocCount);
    printf("Deallocations: %zu\n", freeCount);
    printf("Potential leaks: %zu\n", allocCount - freeCount);
}

#define malloc(size) debugMalloc(size, __FILE__, __LINE__)
#define free(ptr) debugFree(ptr, __FILE__, __LINE__)
#endif

// Safe string duplication
char* safeMalloc(size_t size) {
    char* ptr = malloc(size);
    if (!ptr) {
        fprintf(stderr, "Memory allocation failed for %zu bytes\n", size);
        exit(EXIT_FAILURE);
    }
    return ptr;
}

// Safe string duplication
char* safeStrdup(const char* str) {
    if (!str) return NULL;
    
    size_t len = strlen(str) + 1;
    char* copy = malloc(len);
    if (copy) {
        memcpy(copy, str, len);
    }
    return copy;
}

// Memory pool for frequent small allocations
typedef struct MemoryPool {
    char* pool;
    size_t size;
    size_t used;
} MemoryPool;

MemoryPool* createMemoryPool(size_t size) {
    MemoryPool* pool = malloc(sizeof(MemoryPool));
    if (!pool) return NULL;
    
    pool->pool = malloc(size);
    if (!pool->pool) {
        free(pool);
        return NULL;
    }
    
    pool->size = size;
    pool->used = 0;
    return pool;
}

void* poolAlloc(MemoryPool* pool, size_t size) {
    if (!pool || pool->used + size > pool->size) {
        return NULL;
    }
    
    void* ptr = pool->pool + pool->used;
    pool->used += size;
    return ptr;
}

void destroyMemoryPool(MemoryPool* pool) {
    if (pool) {
        free(pool->pool);
        free(pool);
    }
}

int main() {
    printf("=== Memory Management Best Practices ===\n");
    
    // Example 1: Always check allocation success
    int* numbers = malloc(10 * sizeof(int));
    if (!numbers) {
        fprintf(stderr, "Failed to allocate memory\n");
        return EXIT_FAILURE;
    }
    
    // Initialize memory
    for (int i = 0; i < 10; i++) {
        numbers[i] = i * i;
    }
    
    // Example 2: Safe string operations
    const char* original = "Hello, World!";
    char* copy = safeStrdup(original);
    printf("Original: %s\n", original);
    printf("Copy: %s\n", copy);
    
    // Example 3: Memory pool usage
    MemoryPool* pool = createMemoryPool(1024);
    if (pool) {
        char* str1 = poolAlloc(pool, 50);
        char* str2 = poolAlloc(pool, 100);
        
        if (str1 && str2) {
            strcpy(str1, "Allocated from pool");
            strcpy(str2, "Another allocation from the same pool");
            
            printf("Pool string 1: %s\n", str1);
            printf("Pool string 2: %s\n", str2);
            printf("Pool usage: %zu/%zu bytes\n", pool->used, pool->size);
        }
        
        destroyMemoryPool(pool);
    }
    
    // Clean up
    free(numbers);
    free(copy);
    
#ifdef DEBUG_MEMORY
    printMemoryStats();
#endif
    
    return 0;
}</code></pre>
    `},
    
    { id: 'c8', title: 'File I/O & System Programming', body: `
      <h2>File Operations and System Interaction</h2>
      <p>File I/O is essential for persistent data storage and system interaction. Understanding different I/O methods and error handling is crucial for robust applications.</p>
      
      <h3>Basic File Operations</h3>
      <pre><code>#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>

int main() {
    // Writing to a file
    FILE* outputFile = fopen("output.txt", "w");
    if (!outputFile) {
        perror("Error opening output file");
        return 1;
    }
    
    // Write different data types
    fprintf(outputFile, "Hello, File I/O!\n");
    fprintf(outputFile, "Integer: %d\n", 42);
    fprintf(outputFile, "Float: %.2f\n", 3.14159);
    fprintf(outputFile, "Character: %c\n", 'A');
    
    // Write array of numbers
    int numbers[] = {1, 2, 3, 4, 5};
    fprintf(outputFile, "Numbers: ");
    for (int i = 0; i < 5; i++) {
        fprintf(outputFile, "%d ", numbers[i]);
    }
    fprintf(outputFile, "\n");
    
    fclose(outputFile);
    printf("Data written to output.txt\n");
    
    // Reading from a file
    FILE* inputFile = fopen("output.txt", "r");
    if (!inputFile) {
        perror("Error opening input file");
        return 1;
    }
    
    printf("\n=== File Contents ===\n");
    char buffer[256];
    while (fgets(buffer, sizeof(buffer), inputFile)) {
        printf("%s", buffer);
    }
    
    fclose(inputFile);
    return 0;
}</code></pre>

      <h3>Advanced File I/O Techniques</h3>
      <pre><code>#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Structure for student records
typedef struct {
    int id;
    char name[50];
    float gpa;
} Student;

// Function prototypes
int writeStudentsBinary(const char* filename, Student students[], int count);
int readStudentsBinary(const char* filename, Student** students);
int appendToFile(const char* filename, const char* data);
long getFileSize(const char* filename);
void demonstrateFilePositioning();

int main() {
    // Create sample students
    Student students[] = {
        {1001, "Alice Johnson", 3.8f},
        {1002, "Bob Smith", 3.6f},
        {1003, "Carol Davis", 3.9f},
        {1004, "David Wilson", 3.7f}
    };
    int studentCount = sizeof(students) / sizeof(students[0]);
    
    // Write students to binary file
    if (writeStudentsBinary("students.dat", students, studentCount) == 0) {
        printf("Students written to binary file successfully.\n");
        
        // Display file size
        long fileSize = getFileSize("students.dat");
        printf("File size: %ld bytes\n", fileSize);
    }
    
    // Read students from binary file
    Student* readStudents;
    int readCount = readStudentsBinary("students.dat", &readStudents);
    
    if (readCount > 0) {
        printf("\n=== Students Read from Binary File ===\n");
        for (int i = 0; i < readCount; i++) {
            printf("ID: %d, Name: %s, GPA: %.2f\n", 
                   readStudents[i].id, readStudents[i].name, readStudents[i].gpa);
        }
        free(readStudents);
    }
    
    // Demonstrate file appending
    appendToFile("log.txt", "Application started\n");
    appendToFile("log.txt", "Processing data...\n");
    appendToFile("log.txt", "Application completed\n");
    printf("\nLog entries appended to log.txt\n");
    
    // Demonstrate file positioning
    demonstrateFilePositioning();
    
    return 0;
}

int writeStudentsBinary(const char* filename, Student students[], int count) {
    FILE* file = fopen(filename, "wb");
    if (!file) {
        perror("Error opening file for writing");
        return -1;
    }
    
    // Write the count first
    if (fwrite(&count, sizeof(int), 1, file) != 1) {
        fprintf(stderr, "Error writing student count\n");
        fclose(file);
        return -1;
    }
    
    // Write student records
    if (fwrite(students, sizeof(Student), count, file) != count) {
        fprintf(stderr, "Error writing student records\n");
        fclose(file);
        return -1;
    }
    
    fclose(file);
    return 0;
}

int readStudentsBinary(const char* filename, Student** students) {
    FILE* file = fopen(filename, "rb");
    if (!file) {
        perror("Error opening file for reading");
        return -1;
    }
    
    // Read the count
    int count;
    if (fread(&count, sizeof(int), 1, file) != 1) {
        fprintf(stderr, "Error reading student count\n");
        fclose(file);
        return -1;
    }
    
    // Allocate memory for students
    *students = malloc(count * sizeof(Student));
    if (!*students) {
        fprintf(stderr, "Memory allocation failed\n");
        fclose(file);
        return -1;
    }
    
    // Read student records
    if (fread(*students, sizeof(Student), count, file) != count) {
        fprintf(stderr, "Error reading student records\n");
        free(*students);
        fclose(file);
        return -1;
    }
    
    fclose(file);
    return count;
}

int appendToFile(const char* filename, const char* data) {
    FILE* file = fopen(filename, "a");
    if (!file) {
        perror("Error opening file for appending");
        return -1;
    }
    
    if (fputs(data, file) == EOF) {
        fprintf(stderr, "Error writing to file\n");
        fclose(file);
        return -1;
    }
    
    fclose(file);
    return 0;
}

long getFileSize(const char* filename) {
    FILE* file = fopen(filename, "rb");
    if (!file) {
        return -1;
    }
    
    fseek(file, 0, SEEK_END);
    long size = ftell(file);
    fclose(file);
    
    return size;
}

void demonstrateFilePositioning() {
    printf("\n=== File Positioning Demo ===\n");
    
    // Create a file with numbered lines
    FILE* file = fopen("positioning.txt", "w");
    if (!file) return;
    
    for (int i = 1; i <= 10; i++) {
        fprintf(file, "Line %02d: This is line number %d\n", i, i);
    }
    fclose(file);
    
    // Demonstrate positioning
    file = fopen("positioning.txt", "r");
    if (!file) return;
    
    char buffer[100];
    
    // Read first line
    fgets(buffer, sizeof(buffer), file);
    printf("First line: %s", buffer);
    printf("Current position: %ld\n", ftell(file));
    
    // Seek to line 5 (approximately)
    fseek(file, 5 * 32, SEEK_SET); // Assuming ~32 chars per line
    fgets(buffer, sizeof(buffer), file);
    printf("After seeking: %s", buffer);
    
    // Seek to end and read backwards
    fseek(file, -50, SEEK_END);
    fgets(buffer, sizeof(buffer), file);
    printf("Near end: %s", buffer);
    
    fclose(file);
}</code></pre>
    `}
  ], [
    { q: 'Which function allocates memory?', options: ['malloc', 'printf', 'fopen', 'scanf'], a: 0 },
    { q: 'What is the correct way to declare a pointer to an integer?', options: ['int* ptr', 'int ptr*', 'pointer int ptr', '*int ptr'], a: 0 },
    { q: 'Which operator is used to access the value at a pointer?', options: ['&', '*', '->', '.'], a: 1 },
    { q: 'What happens if you forget to call free() after malloc()?', options: ['Compilation error', 'Runtime error', 'Memory leak', 'Nothing'], a: 2 },
    { q: 'Which header file contains string manipulation functions?', options: ['stdio.h', 'string.h', 'stdlib.h', 'math.h'], a: 1 },
    { q: 'What is the difference between malloc() and calloc()?', options: ['No difference', 'malloc initializes to zero', 'calloc initializes to zero', 'calloc is faster'], a: 2 },
    { q: 'Which is the correct syntax for a function pointer?', options: ['int* func()', 'int (*func)()', '(int*) func', 'int func()*'], a: 1 },
    { q: 'What does the const keyword do when used with pointers?', options: ['Makes pointer faster', 'Prevents pointer modification', 'Allocates memory', 'Creates global variable'], a: 1 },
    { q: 'Which loop is guaranteed to execute at least once?', options: ['for', 'while', 'do-while', 'goto'], a: 2 },
    { q: 'What is the purpose of the volatile keyword in C?', options: ['Speed optimization', 'Prevent compiler optimization', 'Allocate memory', 'Create constants'], a: 1 },
    { q: 'Which function is used to copy memory blocks?', options: ['strcpy', 'memcpy', 'malloc', 'strcat'], a: 1 },
    { q: 'What is undefined behavior in C?', options: ['Compiler error', 'Runtime error', 'Unpredictable program behavior', 'Warning message'], a: 2 }
  ]);

  add('python', [
    { id: 'p4', title: 'Advanced Functions & Functional Programming', body: `
      <h2>Mastering Python Functions</h2>
      <p>Functions in Python are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions. This enables powerful functional programming patterns.</p>
      
      <h3>Function Parameters and Arguments</h3>
      <pre><code># Different types of parameters
def flexible_function(required_param, 
                     default_param="default", 
                     *args, 
                     **kwargs):
    """
    Demonstrates different parameter types:
    - required_param: positional parameter (required)
    - default_param: parameter with default value
    - *args: variable number of positional arguments
    - **kwargs: variable number of keyword arguments
    """
    print(f"Required: {required_param}")
    print(f"Default: {default_param}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")
    print("-" * 30)

# Various ways to call the function
flexible_function("hello")
flexible_function("hello", "world")
flexible_function("hello", "world", 1, 2, 3)
flexible_function("hello", "world", 1, 2, 3, name="Alice", age=25)

# Keyword-only arguments (Python 3+)
def process_data(data, *, sort=False, reverse=False, limit=None):
    """Parameters after * must be specified as keywords"""
    result = data.copy()
    
    if sort:
        result.sort(reverse=reverse)
    
    if limit:
        result = result[:limit]
    
    return result

numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print(process_data(numbers, sort=True, limit=5))</code></pre>

      <h3>Lambda Functions and Higher-Order Functions</h3>
      <pre><code># Lambda functions (anonymous functions)
square = lambda x: x ** 2
print(square(5))  # 25

# Using lambdas with built-in functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"Even numbers: {evens}")

# Square all numbers
squares = list(map(lambda x: x ** 2, numbers))
print(f"Squares: {squares}")

# Sum of all numbers
from functools import reduce
total = reduce(lambda x, y: x + y, numbers)
print(f"Total: {total}")

# More complex example: processing student data
students = [
    {"name": "Alice", "grade": 85, "age": 20},
    {"name": "Bob", "grade": 92, "age": 19},
    {"name": "Charlie", "grade": 78, "age": 21},
    {"name": "Diana", "grade": 96, "age": 20}
]

# Find students with grade >= 90
top_students = list(filter(lambda s: s["grade"] >= 90, students))
print("Top students:", [s["name"] for s in top_students])

# Sort students by grade (descending)
sorted_students = sorted(students, key=lambda s: s["grade"], reverse=True)
print("Students by grade:", [(s["name"], s["grade"]) for s in sorted_students])</code></pre>

      <h3>Decorators and Closures</h3>
      <pre><code>import time
from functools import wraps

# Simple decorator
def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

# Decorator with parameters
def retry(max_attempts=3, delay=1):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay}s...")
                    time.sleep(delay)
        return wrapper
    return decorator

# Using decorators
@timer
def fibonacci(n):
    """Calculate Fibonacci number recursively (inefficient for demo)"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

@retry(max_attempts=3, delay=0.5)
def unstable_operation():
    """Simulates an operation that might fail"""
    import random
    if random.random() < 0.7:  # 70% chance of failure
        raise Exception("Operation failed")
    return "Success!"

# Closures example
def create_multiplier(factor):
    """Returns a function that multiplies by factor"""
    def multiplier(x):
        return x * factor
    return multiplier

# Create specific multipliers
double = create_multiplier(2)
triple = create_multiplier(3)

print(f"Double 5: {double(5)}")  # 10
print(f"Triple 5: {triple(5)}")  # 15

# Test the fibonacci function
print(fibonacci(10))</code></pre>

      <h3>Generators and Iterators</h3>
      <pre><code># Generator functions
def fibonacci_generator():
    """Infinite Fibonacci sequence generator"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

def prime_generator():
    """Generator for prime numbers"""
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    num = 2
    while True:
        if is_prime(num):
            yield num
        num += 1

# Using generators
fib_gen = fibonacci_generator()
print("First 10 Fibonacci numbers:")
for i, fib_num in enumerate(fib_gen):
    if i >= 10:
        break
    print(fib_num, end=" ")
print()

prime_gen = prime_generator()
print("First 10 prime numbers:")
for i, prime in enumerate(prime_gen):
    if i >= 10:
        break
    print(prime, end=" ")
print()

# Generator expressions
squares = (x**2 for x in range(10))
print("Squares:", list(squares))

# File processing with generators (memory efficient)
def read_large_file(filename):
    """Generator to read large files line by line"""
    with open(filename, 'r') as file:
        for line in file:
            yield line.strip()

def process_log_file(filename):
    """Process log file efficiently"""
    error_count = 0
    for line in read_large_file(filename):
        if 'ERROR' in line:
            error_count += 1
            if error_count <= 5:  # Show first 5 errors
                print(f"Error found: {line}")
    return error_count</code></pre>
    `},
    
    { id: 'p5', title: 'Advanced Data Structures & Collections', body: `
      <h2>Python Collections: Lists, Dictionaries, Sets, and More</h2>
      <p>Python's built-in data structures are powerful and flexible. Understanding their advanced features and the collections module can greatly improve your code's efficiency and readability.</p>
      
      <h3>Advanced List Operations</h3>
      <pre><code># List comprehensions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Basic list comprehension
squares = [x**2 for x in numbers]
print(f"Squares: {squares}")

# With condition
evens = [x for x in numbers if x % 2 == 0]
print(f"Even numbers: {evens}")

# Nested list comprehension
matrix = [[i + j for i in range(3)] for j in range(3)]
print(f"Matrix: {matrix}")

# Flattening nested lists
nested = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
flat = [item for sublist in nested for item in sublist]
print(f"Flattened: {flat}")

# Advanced slicing
data = list(range(20))
print(f"Original: {data}")
print(f"Every 2nd: {data[::2]}")
print(f"Reverse: {data[::-1]}")
print(f"Last 5: {data[-5:]}")
print(f"Every 3rd, starting from index 1: {data[1::3]}")

# List methods showcase
fruits = ['apple', 'banana', 'orange']
fruits.extend(['grape', 'kiwi'])
fruits.insert(1, 'mango')
print(f"Fruits: {fruits}")

# Finding and counting
print(f"Index of orange: {fruits.index('orange')}")
fruits.append('apple')
print(f"Count of apple: {fruits.count('apple')}")</code></pre>

      <h3>Dictionary Advanced Features</h3>
      <pre><code># Dictionary comprehensions
words = ['hello', 'world', 'python', 'programming']
word_lengths = {word: len(word) for word in words}
print(f"Word lengths: {word_lengths}")

# Filtering dictionary
long_words = {k: v for k, v in word_lengths.items() if v > 5}
print(f"Long words: {long_words}")

# Dictionary methods
student_grades = {
    'Alice': 85,
    'Bob': 92,
    'Charlie': 78,
    'Diana': 96
}

# Safe access with get()
print(f"Alice's grade: {student_grades.get('Alice', 'Not found')}")
print(f"Eve's grade: {student_grades.get('Eve', 'Not found')}")

# setdefault() - set value only if key doesn't exist
student_grades.setdefault('Eve', 80)
print(f"After setdefault: {student_grades}")

# update() with another dictionary
new_students = {'Frank': 88, 'Grace': 94}
student_grades.update(new_students)
print(f"After update: {student_grades}")

# Dictionary unpacking (Python 3.5+)
default_config = {'debug': False, 'port': 8000}
user_config = {'debug': True, 'host': 'localhost'}
final_config = {**default_config, **user_config}
print(f"Final config: {final_config}")

# Nested dictionary processing
employees = {
    'engineering': {
        'Alice': {'salary': 90000, 'level': 'senior'},
        'Bob': {'salary': 85000, 'level': 'junior'}
    },
    'marketing': {
        'Charlie': {'salary': 75000, 'level': 'senior'},
        'Diana': {'salary': 65000, 'level': 'junior'}
    }
}

# Find all senior employees
senior_employees = [
    name for dept in employees.values()
    for name, info in dept.items()
    if info['level'] == 'senior'
]
print(f"Senior employees: {senior_employees}")</code></pre>

      <h3>Sets and Advanced Operations</h3>
      <pre><code># Set operations
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}
c = {1, 2, 3}

print(f"Set A: {a}")
print(f"Set B: {b}")
print(f"Set C: {c}")

# Set operations
print(f"Union (A | B): {a | b}")
print(f"Intersection (A & B): {a & b}")
print(f"Difference (A - B): {a - b}")
print(f"Symmetric difference (A ^ B): {a ^ b}")

# Set relationships
print(f"C is subset of A: {c.issubset(a)}")
print(f"A is superset of C: {a.issuperset(c)}")
print(f"A and B are disjoint: {a.isdisjoint(b)}")

# Set comprehensions
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(f"Even squares: {even_squares}")

# Practical example: finding unique words
text = "the quick brown fox jumps over the lazy dog the fox is quick"
words = text.split()
unique_words = set(words)
print(f"Unique words: {unique_words}")
print(f"Word count: original={len(words)}, unique={len(unique_words)}")</code></pre>

      <h3>Collections Module</h3>
      <pre><code>from collections import Counter, defaultdict, deque, namedtuple, OrderedDict

# Counter - counting hashable objects
text = "hello world programming"
letter_count = Counter(text)
print(f"Letter frequencies: {letter_count}")
print(f"Most common: {letter_count.most_common(3)}")

# Counter arithmetic
count1 = Counter(['a', 'b', 'c', 'a', 'b', 'b'])
count2 = Counter(['a', 'b', 'b', 'd'])
print(f"Count1: {count1}")
print(f"Count2: {count2}")
print(f"Addition: {count1 + count2}")
print(f"Subtraction: {count1 - count2}")

# defaultdict - dictionary with default factory
from collections import defaultdict

# Group words by first letter
words = ['apple', 'banana', 'cherry', 'apricot', 'blueberry', 'coconut']
groups = defaultdict(list)

for word in words:
    groups[word[0]].append(word)

print(f"Words grouped by first letter: {dict(groups)}")

# deque - double-ended queue
from collections import deque

# Efficient operations at both ends
queue = deque(['a', 'b', 'c'])
queue.appendleft('z')  # Add to left
queue.append('d')      # Add to right
print(f"Deque: {queue}")
print(f"Pop left: {queue.popleft()}")
print(f"Pop right: {queue.pop()}")

# Sliding window example
def sliding_window_max(arr, k):
    """Find maximum in sliding window using deque"""
    dq = deque()
    result = []
    
    for i in range(len(arr)):
        # Remove elements outside current window
        while dq and dq[0] <= i - k:
            dq.popleft()
        
        # Remove smaller elements
        while dq and arr[dq[-1]] <= arr[i]:
            dq.pop()
        
        dq.append(i)
        
        # Add to result if window is complete
        if i >= k - 1:
            result.append(arr[dq[0]])
    
    return result

arr = [1, 3, -1, -3, 5, 3, 6, 7]
print(f"Sliding window max: {sliding_window_max(arr, 3)}")

# namedtuple - create simple classes
Person = namedtuple('Person', ['name', 'age', 'city'])
person1 = Person('Alice', 30, 'New York')
print(f"Person: {person1}")
print(f"Name: {person1.name}, Age: {person1.age}")

# namedtuple with defaults (Python 3.7+)
Student = namedtuple('Student', ['name', 'grade', 'active'], defaults=[True])
student1 = Student('Bob', 85)
print(f"Student: {student1}")</code></pre>
    `},
    
    { id: 'p6', title: 'Object-Oriented Programming Mastery', body: `
      <h2>Advanced OOP in Python</h2>
      <p>Python's object-oriented programming features are powerful and flexible. Understanding classes, inheritance, special methods, and design patterns will help you write more organized and maintainable code.</p>
      
      <h3>Classes and Instance Management</h3>
      <pre><code>class BankAccount:
    """A comprehensive bank account class demonstrating various OOP concepts"""
    
    # Class variables
    bank_name = "Python Bank"
    account_count = 0
    interest_rate = 0.02
    
    def __init__(self, account_holder, initial_balance=0):
        # Instance variables
        self.account_holder = account_holder
        self.balance = initial_balance
        self.transaction_history = []
        
        # Generate unique account number
        BankAccount.account_count += 1
        self.account_number = f"PB{BankAccount.account_count:06d}"
        
        self._log_transaction("Account opened", initial_balance)
    
    def deposit(self, amount):
        """Deposit money to the account"""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        
        self.balance += amount
        self._log_transaction("Deposit", amount)
        print(f"Deposited ${amount:.2f}. New balance: ${self.balance:.2f}")
    
    def withdraw(self, amount):
        """Withdraw money from the account"""
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        
        self.balance -= amount
        self._log_transaction("Withdrawal", -amount)
        print(f"Withdrew ${amount:.2f}. New balance: ${self.balance:.2f}")
    
    def apply_interest(self):
        """Apply interest to the account"""
        interest = self.balance * self.interest_rate
        self.balance += interest
        self._log_transaction("Interest", interest)
        print(f"Applied interest: ${interest:.2f}. New balance: ${self.balance:.2f}")
    
    def _log_transaction(self, transaction_type, amount):
        """Private method to log transactions"""
        from datetime import datetime
        self.transaction_history.append({
            'timestamp': datetime.now(),
            'type': transaction_type,
            'amount': amount,
            'balance': self.balance
        })
    
    def get_statement(self):
        """Get account statement"""
        print(f"\n=== Account Statement ===")
        print(f"Account Holder: {self.account_holder}")
        print(f"Account Number: {self.account_number}")
        print(f"Current Balance: ${self.balance:.2f}")
        print(f"\nTransaction History:")
        
        for transaction in self.transaction_history:
            timestamp = transaction['timestamp'].strftime('%Y-%m-%d %H:%M:%S')
            print(f"{timestamp} - {transaction['type']}: ${transaction['amount']:.2f} (Balance: ${transaction['balance']:.2f})")
    
    @classmethod
    def get_bank_info(cls):
        """Class method to get bank information"""
        return f"Bank: {cls.bank_name}, Total Accounts: {cls.account_count}"
    
    @classmethod
    def set_interest_rate(cls, new_rate):
        """Class method to set interest rate for all accounts"""
        cls.interest_rate = new_rate
        print(f"Interest rate updated to {new_rate:.2%}")
    
    @staticmethod
    def calculate_compound_interest(principal, rate, time, compounds_per_year=1):
        """Static method to calculate compound interest"""
        return principal * (1 + rate / compounds_per_year) ** (compounds_per_year * time)
    
    def __str__(self):
        return f"BankAccount({self.account_holder}, ${self.balance:.2f})"
    
    def __repr__(self):
        return f"BankAccount(account_holder='{self.account_holder}', initial_balance={self.balance})"

# Using the BankAccount class
account1 = BankAccount("Alice Johnson", 1000)
account2 = BankAccount("Bob Smith", 500)

print(BankAccount.get_bank_info())

account1.deposit(250)
account1.withdraw(100)
account1.apply_interest()

account1.get_statement()

# Static method usage
future_value = BankAccount.calculate_compound_interest(1000, 0.05, 10, 12)
print(f"Future value with compound interest: ${future_value:.2f}")</code></pre>

      <h3>Inheritance and Polymorphism</h3>
      <pre><code># Base class
class Animal:
    """Base animal class"""
    
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.energy = 100
    
    def make_sound(self):
        """Abstract method - should be overridden"""
        pass
    
    def eat(self, food_energy=20):
        """Common eating behavior"""
        self.energy = min(100, self.energy + food_energy)
        print(f"{self.name} ate and gained energy. Current energy: {self.energy}")
    
    def sleep(self):
        """Common sleeping behavior"""
        self.energy = min(100, self.energy + 30)
        print(f"{self.name} slept and recovered energy. Current energy: {self.energy}")
    
    def __str__(self):
        return f"{self.name} the {self.species} (Energy: {self.energy})"

# Derived classes
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Canine")
        self.breed = breed
        self.tricks = []
    
    def make_sound(self):
        return "Woof! Woof!"
    
    def fetch(self):
        if self.energy >= 20:
            self.energy -= 20
            print(f"{self.name} fetched the ball! Energy: {self.energy}")
        else:
            print(f"{self.name} is too tired to fetch")
    
    def learn_trick(self, trick):
        self.tricks.append(trick)
        print(f"{self.name} learned a new trick: {trick}")
    
    def perform_tricks(self):
        if self.tricks:
            print(f"{self.name} performs: {', '.join(self.tricks)}")
        else:
            print(f"{self.name} doesn't know any tricks yet")

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Feline")
        self.indoor = indoor
        self.lives = 9
    
    def make_sound(self):
        return "Meow! Meow!"
    
    def climb(self):
        if self.energy >= 15:
            self.energy -= 15
            print(f"{self.name} climbed up high! Energy: {self.energy}")
        else:
            print(f"{self.name} is too tired to climb")
    
    def hunt(self):
        if not self.indoor and self.energy >= 25:
            self.energy -= 25
            print(f"{self.name} went hunting! Energy: {self.energy}")
            return True
        elif self.indoor:
            print(f"{self.name} is an indoor cat and can't hunt")
        else:
            print(f"{self.name} is too tired to hunt")
        return False

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name, "Avian")
        self.can_fly = can_fly
        self.altitude = 0
    
    def make_sound(self):
        return "Tweet! Tweet!"
    
    def fly(self, height=10):
        if self.can_fly and self.energy >= height:
            self.altitude += height
            self.energy -= height
            print(f"{self.name} flew to altitude {self.altitude}! Energy: {self.energy}")
        elif not self.can_fly:
            print(f"{self.name} cannot fly")
        else:
            print(f"{self.name} is too tired to fly")
    
    def land(self):
        if self.altitude > 0:
            print(f"{self.name} landed from altitude {self.altitude}")
            self.altitude = 0
        else:
            print(f"{self.name} is already on the ground")

# Polymorphism demonstration
def animal_care_routine(animals):
    """Demonstrate polymorphism with different animal types"""
    print("\n=== Animal Care Routine ===")
    
    for animal in animals:
        print(f"\nCaring for {animal}")
        print(f"Sound: {animal.make_sound()}")
        
        # Each animal eats the same way (inherited)
        animal.eat()
        
        # But each has unique behaviors
        if isinstance(animal, Dog):
            animal.fetch()
            animal.perform_tricks()
        elif isinstance(animal, Cat):
            animal.climb()
        elif isinstance(animal, Bird):
            animal.fly()
        
        print(f"Current state: {animal}")

# Create different animals
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", indoor=False)
bird = Bird("Charlie")

# Teach the dog some tricks
dog.learn_trick("sit")
dog.learn_trick("roll over")

# Demonstrate polymorphism
animals = [dog, cat, bird]
animal_care_routine(animals)</code></pre>

      <h3>Special Methods and Operator Overloading</h3>
      <pre><code>class Vector:
    """A 2D vector class demonstrating special methods"""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # String representation
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector({self.x!r}, {self.y!r})"
    
    # Arithmetic operations
    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        return NotImplemented
    
    def __sub__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        return NotImplemented
    
    def __mul__(self, scalar):
        if isinstance(scalar, (int, float)):
            return Vector(self.x * scalar, self.y * scalar)
        return NotImplemented
    
    def __rmul__(self, scalar):
        return self.__mul__(scalar)
    
    def __truediv__(self, scalar):
        if isinstance(scalar, (int, float)) and scalar != 0:
            return Vector(self.x / scalar, self.y / scalar)
        return NotImplemented
    
    # Comparison operations
    def __eq__(self, other):
        if isinstance(other, Vector):
            return self.x == other.x and self.y == other.y
        return False
    
    def __lt__(self, other):
        if isinstance(other, Vector):
            return self.magnitude() < other.magnitude()
        return NotImplemented
    
    # Container-like behavior
    def __getitem__(self, index):
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        else:
            raise IndexError("Vector index out of range")
    
    def __setitem__(self, index, value):
        if index == 0:
            self.x = value
        elif index == 1:
            self.y = value
        else:
            raise IndexError("Vector index out of range")
    
    def __len__(self):
        return 2
    
    # Other useful methods
    def __abs__(self):
        return self.magnitude()
    
    def __bool__(self):
        return self.x != 0 or self.y != 0
    
    def __hash__(self):
        return hash((self.x, self.y))
    
    # Custom methods
    def magnitude(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5
    
    def normalize(self):
        mag = self.magnitude()
        if mag == 0:
            return Vector(0, 0)
        return Vector(self.x / mag, self.y / mag)
    
    def dot(self, other):
        """Dot product with another vector"""
        return self.x * other.x + self.y * other.y

# Using the Vector class
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(f"v1 = {v1}")
print(f"v2 = {v2}")

# Arithmetic operations
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 2 = {v1 * 2}")
print(f"3 * v2 = {3 * v2}")
print(f"v1 / 2 = {v1 / 2}")

# Comparisons
print(f"v1 == v2: {v1 == v2}")
print(f"v1 < v2: {v1 < v2}")

# Container-like access
print(f"v1[0] = {v1[0]}, v1[1] = {v1[1]}")
v1[0] = 5
print(f"After v1[0] = 5: {v1}")

# Other operations
print(f"Magnitude of v1: {abs(v1)}")
print(f"v1 is truthy: {bool(v1)}")
print(f"Dot product: {v1.dot(v2)}")
print(f"Normalized v1: {v1.normalize()}")

# Using vectors in sets (thanks to __hash__)
vector_set = {Vector(1, 1), Vector(2, 2), Vector(1, 1)}
print(f"Vector set: {vector_set}")</code></pre>
    `},
    
    { id: 'p7', title: 'Exception Handling & Error Management', body: `
      <h2>Robust Exception Handling in Python</h2>
      <p>Proper exception handling is crucial for writing robust Python applications. Understanding different exception types, creating custom exceptions, and implementing proper error handling strategies will make your code more reliable.</p>
      
      <h3>Exception Hierarchy and Basic Handling</h3>
      <pre><code>import traceback
import logging
from typing import Union, Optional

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')

def demonstrate_basic_exceptions():
    """Demonstrate common exception types and handling"""
    
    print("=== Basic Exception Handling ===")
    
    # Multiple exception types
    test_cases = [
        ("10", "5"),      # Valid
        ("10", "0"),      # ZeroDivisionError
        ("abc", "5"),     # ValueError
        ("10", ""),       # ValueError (empty string)
    ]
    
    for numerator, denominator in test_cases:
        try:
            num = int(numerator)
            den = int(denominator)
            result = num / den
            print(f"{num} / {den} = {result}")
            
        except ValueError as e:
            print(f"Invalid input '{numerator}' or '{denominator}': {e}")
        except ZeroDivisionError:
            print(f"Cannot divide {numerator} by zero")
        except Exception as e:
            print(f"Unexpected error: {type(e).__name__}: {e}")
        else:
            # Executes only if no exception occurred
            print(f"Division successful: {result}")
        finally:
            # Always executes
            print(f"Finished processing {numerator}, {denominator}")
        
        print("-" * 30)

def safe_file_operations():
    """Demonstrate file handling with proper exception management"""
    
    print("\n=== File Operations with Exception Handling ===")
    
    def read_file_safely(filename: str) -> Optional[str]:
        """Safely read a file with comprehensive error handling"""
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                content = file.read()
                logging.info(f"Successfully read {len(content)} characters from {filename}")
                return content
                
        except FileNotFoundError:
            logging.error(f"File '{filename}' not found")
            return None
        except PermissionError:
            logging.error(f"Permission denied accessing '{filename}'")
            return None
        except UnicodeDecodeError as e:
            logging.error(f"Encoding error reading '{filename}': {e}")
            return None
        except OSError as e:
            logging.error(f"OS error accessing '{filename}': {e}")
            return None
        except Exception as e:
            logging.error(f"Unexpected error reading '{filename}': {type(e).__name__}: {e}")
            return None
    
    def write_file_safely(filename: str, content: str) -> bool:
        """Safely write to a file"""
        try:
            with open(filename, 'w', encoding='utf-8') as file:
                file.write(content)
                logging.info(f"Successfully wrote to {filename}")
                return True
                
        except PermissionError:
            logging.error(f"Permission denied writing to '{filename}'")
            return False
        except OSError as e:
            logging.error(f"OS error writing to '{filename}': {e}")
            return False
        except Exception as e:
            logging.error(f"Unexpected error writing to '{filename}': {type(e).__name__}: {e}")
            return False
    
    # Test file operations
    test_content = "Hello, World!\nThis is a test file.\n"
    
    if write_file_safely("test.txt", test_content):
        content = read_file_safely("test.txt")
        if content:
            print(f"File content:\n{content}")
    
    # Try to read non-existent file
    content = read_file_safely("nonexistent.txt")

demonstrate_basic_exceptions()
safe_file_operations()</code></pre>

      <h3>Custom Exceptions and Advanced Patterns</h3>
      <pre><code># Custom exception hierarchy
class ApplicationError(Exception):
    """Base exception for application-specific errors"""
    pass

class ValidationError(ApplicationError):
    """Raised when data validation fails"""
    def __init__(self, message, field_name=None, invalid_value=None):
        super().__init__(message)
        self.field_name = field_name
        self.invalid_value = invalid_value
    
    def __str__(self):
        if self.field_name:
            return f"Validation error in '{self.field_name}': {super().__str__()}"
        return super().__str__()

class BusinessLogicError(ApplicationError):
    """Raised when business logic rules are violated"""
    pass

class ConfigurationError(ApplicationError):
    """Raised when configuration is invalid"""
    pass

class User:
    """User class with validation and business logic"""
    
    def __init__(self, username: str, email: str, age: int):
        self.username = self._validate_username(username)
        self.email = self._validate_email(email)
        self.age = self._validate_age(age)
        self.is_active = True
    
    def _validate_username(self, username: str) -> str:
        """Validate username with custom exceptions"""
        if not isinstance(username, str):
            raise ValidationError(
                "Username must be a string", 
                "username", 
                username
            )
        
        if len(username) < 3:
            raise ValidationError(
                "Username must be at least 3 characters long", 
                "username", 
                username
            )
        
        if len(username) > 20:
            raise ValidationError(
                "Username must be no more than 20 characters long", 
                "username", 
                username
            )
        
        if not username.isalnum():
            raise ValidationError(
                "Username must contain only letters and numbers", 
                "username", 
                username
            )
        
        return username
    
    def _validate_email(self, email: str) -> str:
        """Simple email validation"""
        if not isinstance(email, str):
            raise ValidationError(
                "Email must be a string", 
                "email", 
                email
            )
        
        if '@' not in email or '.' not in email:
            raise ValidationError(
                "Email must contain @ and . characters", 
                "email", 
                email
            )
        
        return email
    
    def _validate_age(self, age: int) -> int:
        """Validate age"""
        if not isinstance(age, int):
            raise ValidationError(
                "Age must be an integer", 
                "age", 
                age
            )
        
        if age < 0:
            raise ValidationError(
                "Age cannot be negative", 
                "age", 
                age
            )
        
        if age > 120:
            raise ValidationError(
                "Age cannot be greater than 120", 
                "age", 
                age
            )
        
        return age
    
    def update_age(self, new_age: int):
        """Update age with business logic validation"""
        if new_age < self.age:
            raise BusinessLogicError(
                f"Age cannot decrease from {self.age} to {new_age}"
            )
        
        self.age = self._validate_age(new_age)
    
    def deactivate(self):
        """Deactivate user account"""
        if not self.is_active:
            raise BusinessLogicError(
                f"User '{self.username}' is already deactivated"
            )
        
        self.is_active = False
    
    def __str__(self):
        return f"User({self.username}, {self.email}, {self.age}, active={self.is_active})"

def create_users_with_error_handling():
    """Demonstrate custom exception handling"""
    
    print("\n=== Custom Exception Handling ===")
    
    test_users = [
        ("alice", "alice@example.com", 25),      # Valid
        ("bo", "bob@example.com", 30),           # Username too short
        ("charlie", "invalid-email", 35),        # Invalid email
        ("diana", "diana@example.com", -5),      # Negative age
        ("eve123", "eve@example.com", 28),       # Valid
    ]
    
    successful_users = []
    
    for username, email, age in test_users:
        try:
            user = User(username, email, age)
            successful_users.append(user)
            print(f"✓ Created user: {user}")
            
        except ValidationError as e:
            print(f"✗ Validation failed: {e}")
            if hasattr(e, 'field_name') and hasattr(e, 'invalid_value'):
                print(f"  Field: {e.field_name}, Invalid value: {e.invalid_value}")
                
        except ApplicationError as e:
            print(f"✗ Application error: {e}")
            
        except Exception as e:
            print(f"✗ Unexpected error: {type(e).__name__}: {e}")
            # In production, you might want to log the full traceback
            traceback.print_exc()
    
    # Test business logic exceptions
    if successful_users:
        user = successful_users[0]
        print(f"\nTesting business logic with user: {user}")
        
        try:
            user.update_age(20)  # This should fail if user is older
        except BusinessLogicError as e:
            print(f"✗ Business logic error: {e}")
        
        try:
            user.deactivate()
            print(f"✓ User deactivated: {user}")
            user.deactivate()  # This should fail
        except BusinessLogicError as e:
            print(f"✗ Business logic error: {e}")

create_users_with_error_handling()</code></pre>

      <h3>Context Managers and Resource Management</h3>
      <pre><code>import time
import sqlite3
from contextlib import contextmanager, contextdecorator
from typing import Generator, Any

class TimerContext:
    """Context manager for timing code execution"""
    
    def __init__(self, description="Operation"):
        self.description = description
        self.start_time = None
        self.end_time = None
    
    def __enter__(self):
        self.start_time = time.time()
        print(f"Starting {self.description}...")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end_time = time.time()
        elapsed = self.end_time - self.start_time
        
        if exc_type is None:
            print(f"✓ {self.description} completed in {elapsed:.4f} seconds")
        else:
            print(f"✗ {self.description} failed after {elapsed:.4f} seconds")
            print(f"  Error: {exc_type.__name__}: {exc_val}")
        
        # Return False to propagate exceptions
        return False
    
    @property
    def elapsed_time(self):
        if self.start_time and self.end_time:
            return self.end_time - self.start_time
        return None

class DatabaseConnection:
    """Context manager for database connections"""
    
    def __init__(self, database_name=":memory:"):
        self.database_name = database_name
        self.connection = None
        self.cursor = None
    
    def __enter__(self):
        try:
            self.connection = sqlite3.connect(self.database_name)
            self.cursor = self.connection.cursor()
            print(f"✓ Connected to database: {self.database_name}")
            return self.cursor
        except Exception as e:
            print(f"✗ Failed to connect to database: {e}")
            raise
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        try:
            if exc_type is None:
                self.connection.commit()
                print("✓ Transaction committed")
            else:
                self.connection.rollback()
                print("✗ Transaction rolled back due to error")
        except Exception as e:
            print(f"Error during cleanup: {e}")
        finally:
            if self.cursor:
                self.cursor.close()
            if self.connection:
                self.connection.close()
            print("✓ Database connection closed")
        
        return False  # Don't suppress exceptions

@contextmanager
def temporary_file(filename: str, content: str = "") -> Generator[str, None, None]:
    """Context manager generator for temporary files"""
    import os
    
    try:
        # Setup
        with open(filename, 'w') as f:
            f.write(content)
        print(f"✓ Created temporary file: {filename}")
        
        yield filename
        
    finally:
        # Cleanup
        try:
            if os.path.exists(filename):
                os.remove(filename)
                print(f"✓ Removed temporary file: {filename}")
        except Exception as e:
            print(f"✗ Failed to remove temporary file: {e}")

@contextmanager
def error_handler(operation_name: str, 
                 suppress_errors: bool = False) -> Generator[None, None, None]:
    """Context manager for centralized error handling"""
    try:
        print(f"Starting {operation_name}...")
        yield
        print(f"✓ {operation_name} completed successfully")
    except Exception as e:
        print(f"✗ Error in {operation_name}: {type(e).__name__}: {e}")
        if not suppress_errors:
            raise

def demonstrate_context_managers():
    """Demonstrate various context managers"""
    
    print("\n=== Context Managers Demo ===")
    
    # Timer context manager
    with TimerContext("Data processing"):
        # Simulate some work
        time.sleep(0.1)
        data = [i**2 for i in range(1000)]
    
    # Database context manager
    with DatabaseConnection() as cursor:
        # Create table
        cursor.execute('''
            CREATE TABLE users (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE
            )
        ''')
        
        # Insert data
        users = [
            ("Alice", "alice@example.com"),
            ("Bob", "bob@example.com"),
            ("Charlie", "charlie@example.com")
        ]
        
        cursor.executemany('INSERT INTO users (name, email) VALUES (?, ?)', users)
        
        # Query data
        cursor.execute('SELECT * FROM users')
        results = cursor.fetchall()
        print(f"Database contains {len(results)} users")
    
    # Temporary file context manager
    with temporary_file("temp_data.txt", "Hello, temporary world!") as filename:
        with open(filename, 'r') as f:
            content = f.read()
            print(f"Temporary file content: {content}")
    
    # Error handling context manager
    with error_handler("Safe operation", suppress_errors=True):
        # This will cause an error but won't crash the program
        result = 10 / 0
    
    print("Program continues after suppressed error")

class RetryContext(contextdecorator.ContextDecorator):
    """Context manager/decorator for retrying operations"""
    
    def __init__(self, max_attempts=3, delay=1.0, exceptions=(Exception,)):
        self.max_attempts = max_attempts
        self.delay = delay
        self.exceptions = exceptions
        self.attempts = 0
    
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type and issubclass(exc_type, self.exceptions):
            self.attempts += 1
            if self.attempts < self.max_attempts:
                print(f"Attempt {self.attempts} failed: {exc_val}. Retrying in {self.delay}s...")
                time.sleep(self.delay)
                return True  # Suppress the exception and retry
            else:
                print(f"All {self.max_attempts} attempts failed. Giving up.")
        return False

# Using RetryContext as both context manager and decorator
@RetryContext(max_attempts=3, delay=0.5)
def unreliable_operation():
    """Simulates an unreliable operation"""
    import random
    if random.random() < 0.7:  # 70% chance of failure
        raise ConnectionError("Network timeout")
    return "Operation succeeded!"

print("\n=== Retry Context Demo ===")
try:
    result = unreliable_operation()
    print(f"Result: {result}")
except Exception as e:
    print(f"Final error: {e}")

demonstrate_context_managers()</code></pre>
    `},
    
    { id: 'p8', title: 'Web Development & APIs with Python', body: `
      <h2>Web Development: Building APIs and Web Applications</h2>
      <p>Python is excellent for web development, offering frameworks like Flask and Django. Understanding how to build APIs, handle HTTP requests, and create web applications is essential for modern development.</p>
      
      <h3>Building REST APIs with Flask</h3>
      <pre><code># First, install Flask: pip install flask flask-cors

from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from datetime import datetime
import json
import uuid

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory data store (use database in production)
users = []
tasks = []

# Helper functions
def find_user_by_id(user_id):
    return next((user for user in users if user['id'] == user_id), None)

def find_task_by_id(task_id):
    return next((task for task in tasks if task['id'] == task_id), None)

def validate_user_data(data):
    required_fields = ['name', 'email']
    for field in required_fields:
        if field not in data or not data[field]:
            return False, f"Missing required field: {field}"
    
    # Check email format (basic validation)
    if '@' not in data['email'] or '.' not in data['email']:
        return False, "Invalid email format"
    
    # Check for duplicate email
    if any(user['email'] == data['email'] for user in users):
        return False, "Email already exists"
    
    return True, None

def validate_task_data(data):
    required_fields = ['title', 'user_id']
    for field in required_fields:
        if field not in data or not data[field]:
            return False, f"Missing required field: {field}"
    
    # Check if user exists
    if not find_user_by_id(data['user_id']):
        return False, "User not found"
    
    return True, None

# User endpoints
@app.route('/api/users', methods=['GET'])
def get_users():
    """Get all users"""
    return jsonify({
        'users': users,
        'total': len(users),
        'timestamp': datetime.utcnow().isoformat()
    })

@app.route('/api/users/<string:user_id>', methods=['GET'])
def get_user(user_id):
    """Get a specific user"""
    user = find_user_by_id(user_id)
    if not user:
        abort(404, description="User not found")
    
    # Include user's tasks
    user_tasks = [task for task in tasks if task['user_id'] == user_id]
    user_with_tasks = user.copy()
    user_with_tasks['tasks'] = user_tasks
    
    return jsonify(user_with_tasks)

@app.route('/api/users', methods=['POST'])
def create_user():
    """Create a new user"""
    if not request.json:
        abort(400, description="Request must contain JSON data")
    
    # Validate data
    is_valid, error_message = validate_user_data(request.json)
    if not is_valid:
        abort(400, description=error_message)
    
    # Create new user
    new_user = {
        'id': str(uuid.uuid4()),
        'name': request.json['name'],
        'email': request.json['email'],
        'created_at': datetime.utcnow().isoformat(),
        'updated_at': datetime.utcnow().isoformat()
    }
    
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/api/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    """Update an existing user"""
    user = find_user_by_id(user_id)
    if not user:
        abort(404, description="User not found")
    
    if not request.json:
        abort(400, description="Request must contain JSON data")
    
    # Update user data
    if 'name' in request.json:
        user['name'] = request.json['name']
    if 'email' in request.json:
        # Check for duplicate email (excluding current user)
        if any(u['email'] == request.json['email'] and u['id'] != user_id for u in users):
            abort(400, description="Email already exists")
        user['email'] = request.json['email']
    
    user['updated_at'] = datetime.utcnow().isoformat()
    return jsonify(user)

@app.route('/api/users/<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    """Delete a user and their tasks"""
    user = find_user_by_id(user_id)
    if not user:
        abort(404, description="User not found")
    
    # Remove user and their tasks
    users.remove(user)
    global tasks
    tasks = [task for task in tasks if task['user_id'] != user_id]
    
    return jsonify({'message': 'User deleted successfully'})

# Task endpoints
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    """Get all tasks with optional filtering"""
    user_id = request.args.get('user_id')
    status = request.args.get('status')
    
    filtered_tasks = tasks
    
    if user_id:
        filtered_tasks = [task for task in filtered_tasks if task['user_id'] == user_id]
    
    if status:
        filtered_tasks = [task for task in filtered_tasks if task['status'] == status]
    
    return jsonify({
        'tasks': filtered_tasks,
        'total': len(filtered_tasks),
        'filters': {'user_id': user_id, 'status': status},
        'timestamp': datetime.utcnow().isoformat()
    })

@app.route('/api/tasks', methods=['POST'])
def create_task():
    """Create a new task"""
    if not request.json:
        abort(400, description="Request must contain JSON data")
    
    # Validate data
    is_valid, error_message = validate_task_data(request.json)
    if not is_valid:
        abort(400, description=error_message)
    
    # Create new task
    new_task = {
        'id': str(uuid.uuid4()),
        'title': request.json['title'],
        'description': request.json.get('description', ''),
        'user_id': request.json['user_id'],
        'status': 'pending',
        'priority': request.json.get('priority', 'medium'),
        'created_at': datetime.utcnow().isoformat(),
        'updated_at': datetime.utcnow().isoformat(),
        'completed_at': None
    }
    
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/api/tasks/<string:task_id>', methods=['PUT'])
def update_task(task_id):
    """Update an existing task"""
    task = find_task_by_id(task_id)
    if not task:
        abort(404, description="Task not found")
    
    if not request.json:
        abort(400, description="Request must contain JSON data")
    
    # Update task data
    updatable_fields = ['title', 'description', 'status', 'priority']
    for field in updatable_fields:
        if field in request.json:
            task[field] = request.json[field]
    
    # Set completed_at timestamp when task is completed
    if task['status'] == 'completed' and not task['completed_at']:
        task['completed_at'] = datetime.utcnow().isoformat()
    elif task['status'] != 'completed':
        task['completed_at'] = None
    
    task['updated_at'] = datetime.utcnow().isoformat()
    return jsonify(task)

@app.route('/api/tasks/<string:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Delete a task"""
    task = find_task_by_id(task_id)
    if not task:
        abort(404, description="Task not found")
    
    tasks.remove(task)
    return jsonify({'message': 'Task deleted successfully'})

# Statistics endpoint
@app.route('/api/stats', methods=['GET'])
def get_statistics():
    """Get application statistics"""
    stats = {
        'users': {
            'total': len(users),
            'recent': len([u for u in users if (datetime.utcnow() - datetime.fromisoformat(u['created_at'])).days <= 7])
        },
        'tasks': {
            'total': len(tasks),
            'completed': len([t for t in tasks if t['status'] == 'completed']),
            'pending': len([t for t in tasks if t['status'] == 'pending']),
            'in_progress': len([t for t in tasks if t['status'] == 'in_progress'])
        },
        'generated_at': datetime.utcnow().isoformat()
    }
    
    return jsonify(stats)

# Error handlers
@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        'error': 'Bad Request',
        'message': str(error.description),
        'status_code': 400
    }), 400

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'error': 'Not Found',
        'message': str(error.description),
        'status_code': 404
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'error': 'Internal Server Error',
        'message': 'An unexpected error occurred',
        'status_code': 500
    }), 500

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'version': '1.0.0',
        'timestamp': datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    # Add some sample data for testing
    sample_user = {
        'id': str(uuid.uuid4()),
        'name': 'Alice Johnson',
        'email': 'alice@example.com',
        'created_at': datetime.utcnow().isoformat(),
        'updated_at': datetime.utcnow().isoformat()
    }
    users.append(sample_user)
    
    sample_tasks = [
        {
            'id': str(uuid.uuid4()),
            'title': 'Learn Python',
            'description': 'Complete Python programming course',
            'user_id': sample_user['id'],
            'status': 'in_progress',
            'priority': 'high',
            'created_at': datetime.utcnow().isoformat(),
            'updated_at': datetime.utcnow().isoformat(),
            'completed_at': None
        },
        {
            'id': str(uuid.uuid4()),
            'title': 'Build REST API',
            'description': 'Create a task management API',
            'user_id': sample_user['id'],
            'status': 'completed',
            'priority': 'medium',
            'created_at': datetime.utcnow().isoformat(),
            'updated_at': datetime.utcnow().isoformat(),
            'completed_at': datetime.utcnow().isoformat()
        }
    ]
    tasks.extend(sample_tasks)
    
    print("Starting Flask API server...")
    print("API Documentation:")
    print("GET /api/users - Get all users")
    print("POST /api/users - Create new user")
    print("GET /api/tasks - Get all tasks")
    print("POST /api/tasks - Create new task")
    print("GET /api/stats - Get statistics")
    
    app.run(debug=True, host='0.0.0.0', port=5000)</code></pre>

      <h3>HTTP Client and API Testing</h3>
      <pre><code># HTTP Client for testing APIs
# Install: pip install requests

import requests
import json
from typing import Dict, Any, Optional

class APIClient:
    """A comprehensive HTTP client for API testing"""
    
    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url.rstrip('/')
        self.timeout = timeout
        self.session = requests.Session()
        
        # Set default headers
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    
    def _make_request(self, method: str, endpoint: str, **kwargs) -> requests.Response:
        """Make HTTP request with error handling"""
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        
        try:
            response = self.session.request(
                method=method,
                url=url,
                timeout=self.timeout,
                **kwargs
            )
            return response
            
        except requests.exceptions.ConnectionError:
            print(f"✗ Connection error: Could not connect to {url}")
            raise
        except requests.exceptions.Timeout:
            print(f"✗ Timeout: Request to {url} took longer than {self.timeout} seconds")
            raise
        except requests.exceptions.RequestException as e:
            print(f"✗ Request error: {e}")
            raise
    
    def get(self, endpoint: str, params: Optional[Dict] = None) -> requests.Response:
        """Make GET request"""
        return self._make_request('GET', endpoint, params=params)
    
    def post(self, endpoint: str, data: Optional[Dict] = None) -> requests.Response:
        """Make POST request"""
        json_data = json.dumps(data) if data else None
        return self._make_request('POST', endpoint, data=json_data)
    
    def put(self, endpoint: str, data: Optional[Dict] = None) -> requests.Response:
        """Make PUT request"""
        json_data = json.dumps(data) if data else None
        return self._make_request('PUT', endpoint, data=json_data)
    
    def delete(self, endpoint: str) -> requests.Response:
        """Make DELETE request"""
        return self._make_request('DELETE', endpoint)
    
    def set_auth(self, auth_type: str, **kwargs):
        """Set authentication for requests"""
        if auth_type == 'bearer':
            token = kwargs.get('token')
            self.session.headers['Authorization'] = f'Bearer {token}'
        elif auth_type == 'basic':
            username = kwargs.get('username')
            password = kwargs.get('password')
            self.session.auth = (username, password)
    
    def close(self):
        """Close the session"""
        self.session.close()

def test_task_management_api():
    """Test the Task Management API"""
    
    print("=== API Testing Demo ===")
    
    # Initialize client
    client = APIClient('http://localhost:5000/api')
    
    try:
        # Test health check
        print("\n1. Testing health check...")
        response = client.get('/health')
        if response.status_code == 200:
            print(f"✓ Health check passed: {response.json()}")
        else:
            print(f"✗ Health check failed: {response.status_code}")
            return
        
        # Test getting users
        print("\n2. Getting all users...")
        response = client.get('/users')
        if response.status_code == 200:
            users_data = response.json()
            print(f"✓ Found {users_data['total']} users")
            if users_data['users']:
                user_id = users_data['users'][0]['id']
                print(f"First user ID: {user_id}")
        else:
            print(f"✗ Failed to get users: {response.status_code}")
            return
        
        # Test creating a new user
        print("\n3. Creating new user...")
        new_user_data = {
            'name': 'Bob Smith',
            'email': 'bob.smith@example.com'
        }
        response = client.post('/users', new_user_data)
        if response.status_code == 201:
            created_user = response.json()
            print(f"✓ Created user: {created_user['name']} ({created_user['id']})")
            new_user_id = created_user['id']
        else:
            print(f"✗ Failed to create user: {response.status_code} - {response.text}")
            return
        
        # Test creating tasks
        print("\n4. Creating tasks...")
        tasks_to_create = [
            {
                'title': 'Write documentation',
                'description': 'Document the API endpoints',
                'user_id': new_user_id,
                'priority': 'high'
            },
            {
                'title': 'Code review',
                'description': 'Review pull requests',
                'user_id': new_user_id,
                'priority': 'medium'
            }
        ]
        
        created_tasks = []
        for task_data in tasks_to_create:
            response = client.post('/tasks', task_data)
            if response.status_code == 201:
                task = response.json()
                created_tasks.append(task)
                print(f"✓ Created task: {task['title']}")
            else:
                print(f"✗ Failed to create task: {response.status_code}")
        
        # Test updating a task
        if created_tasks:
            print("\n5. Updating task status...")
            task_id = created_tasks[0]['id']
            update_data = {'status': 'in_progress'}
            response = client.put(f'/tasks/{task_id}', update_data)
            if response.status_code == 200:
                updated_task = response.json()
                print(f"✓ Updated task status to: {updated_task['status']}")
            else:
                print(f"✗ Failed to update task: {response.status_code}")
        
        # Test filtering tasks
        print("\n6. Getting tasks for specific user...")
        response = client.get('/tasks', params={'user_id': new_user_id})
        if response.status_code == 200:
            tasks_data = response.json()
            print(f"✓ Found {tasks_data['total']} tasks for user {new_user_id}")
        else:
            print(f"✗ Failed to get filtered tasks: {response.status_code}")
        
        # Test statistics
        print("\n7. Getting statistics...")
        response = client.get('/stats')
        if response.status_code == 200:
            stats = response.json()
            print(f"✓ Statistics:")
            print(f"  Users: {stats['users']['total']}")
            print(f"  Tasks: {stats['tasks']['total']} (completed: {stats['tasks']['completed']})")
        else:
            print(f"✗ Failed to get statistics: {response.status_code}")
        
        # Test error handling
        print("\n8. Testing error handling...")
        response = client.get('/users/nonexistent-id')
        if response.status_code == 404:
            error_data = response.json()
            print(f"✓ Error handling works: {error_data['message']}")
        else:
            print(f"✗ Error handling not working as expected")
        
        print("\n✓ API testing completed successfully!")
        
    except requests.exceptions.RequestException as e:
        print(f"\n✗ API testing failed: {e}")
        print("Make sure the Flask API server is running on http://localhost:5000")
    
    finally:
        client.close()

# Web scraping example
def web_scraping_demo():
    """Demonstrate web scraping techniques"""
    
    print("\n=== Web Scraping Demo ===")
    
    # Note: Install beautifulsoup4 and lxml: pip install beautifulsoup4 lxml
    try:
        from bs4 import BeautifulSoup
    except ImportError:
        print("BeautifulSoup not installed. Run: pip install beautifulsoup4")
        return
    
    # Scrape a simple webpage
    try:
        response = requests.get('https://httpbin.org/html', timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract title
            title = soup.find('title')
            if title:
                print(f"Page title: {title.text}")
            
            # Extract all paragraphs
            paragraphs = soup.find_all('p')
            print(f"Found {len(paragraphs)} paragraphs")
            
            # Extract all links
            links = soup.find_all('a', href=True)
            print(f"Found {len(links)} links:")
            for link in links[:3]:  # Show first 3 links
                print(f"  {link.text}: {link['href']}")
        
    except Exception as e:
        print(f"Scraping failed: {e}")

if __name__ == '__main__':
    # Run the API test
    test_task_management_api()
    
    # Run web scraping demo
    web_scraping_demo()</code></pre>
    `}
  ], [
    { q: 'Which type is a mapping?', options: ['list', 'dict', 'set', 'tuple'], a: 1 },
    { q: 'What is the output of: print("3" + "2")', options: ['5', '32', '"32"', 'Error'], a: 1 },
    { q: 'Which method adds an element to the end of a list?', options: ['add()', 'append()', 'insert()', 'extend()'], a: 1 },
    { q: 'What does the "in" keyword do?', options: ['Imports modules', 'Checks membership', 'Creates loops', 'Defines functions'], a: 1 },
    { q: 'Which is mutable in Python?', options: ['tuple', 'string', 'list', 'int'], a: 2 },
    { q: 'What is the purpose of the __init__ method?', options: ['Initialize objects', 'Delete objects', 'Copy objects', 'Compare objects'], a: 0 },
    { q: 'Which operator is used for floor division?', options: ['/', '//', '%', '**'], a: 1 },
    { q: 'What does the enumerate() function do?', options: ['Counts elements', 'Creates tuples with index', 'Sorts lists', 'Filters elements'], a: 1 },
    { q: 'Which is NOT a Python data type?', options: ['list', 'array', 'dict', 'set'], a: 1 },
    { q: 'What is a lambda function?', options: ['Named function', 'Anonymous function', 'Built-in function', 'Class method'], a: 1 },
    { q: 'Which statement handles exceptions?', options: ['if-else', 'try-except', 'for-in', 'while'], a: 1 },
    { q: 'What does the yield keyword create?', options: ['List', 'Tuple', 'Generator', 'Dictionary'], a: 2 },
    { q: 'Which method removes and returns the last item from a list?', options: ['remove()', 'delete()', 'pop()', 'clear()'], a: 2 },
    { q: 'What is the output of: bool([])', options: ['True', 'False', 'None', 'Error'], a: 1 }
  ]);
})();
