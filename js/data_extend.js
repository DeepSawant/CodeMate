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
â”œâ”€â”€ Error (System errors, generally unrecoverable)
â”‚   â”œâ”€â”€ OutOfMemoryError
â”‚   â”œâ”€â”€ StackOverflowError
â”‚   â””â”€â”€ ...
â””â”€â”€ Exception
    â”œâ”€â”€ RuntimeException (Unchecked exceptions)
    â”‚   â”œâ”€â”€ NullPointerException
    â”‚   â”œâ”€â”€ IllegalArgumentException
    â”‚   â”œâ”€â”€ ArrayIndexOutOfBoundsException
    â”‚   â””â”€â”€ ...
    â””â”€â”€ Checked Exceptions (must be handled)
        â”œâ”€â”€ IOException
        â”œâ”€â”€ SQLException
        â”œâ”€â”€ ClassNotFoundException
        â””â”€â”€ ...
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
            }
        });
        
        // Lambda expression
        words.sort((s1, s2) -> s1.length() - s2.length());
        
        // Method reference
        words.sort(Comparator.comparing(String::length));
    }
}</code></pre>
    `
  }
  ]);

// Add basic JavaScript lessons without template literal conflicts
add('javascript', [
  { id: 'js1', title: 'JavaScript Basics', body: '<h2>JavaScript Fundamentals</h2><p>JavaScript is a programming language for web development. It handles user interactions and dynamic content.</p><h3>Variables</h3><pre><code>var name = "John";<br>let age = 25;<br>const PI = 3.14;</code></pre>' },
  { id: 'js2', title: 'Functions', body: '<h2>JavaScript Functions</h2><p>Functions are reusable blocks of code.</p><pre><code>function greet(name) {<br>  return "Hello " + name;<br>}<br><br>console.log(greet("World"));</code></pre>' },
  { id: 'js3', title: 'Objects and Arrays', body: '<h2>Objects and Arrays</h2><p>Objects store key-value pairs, arrays store lists.</p><pre><code>let person = { name: "Alice", age: 30 };<br>let numbers = [1, 2, 3, 4, 5];<br><br>console.log(person.name);<br>console.log(numbers[0]);</code></pre>' }
]);

// Add basic TypeScript lessons
add('typescript', [
  { id: 'ts1', title: 'TypeScript Basics', body: '<h2>TypeScript Fundamentals</h2><p>TypeScript adds static typing to JavaScript.</p><h3>Type Annotations</h3><pre><code>let message: string = "Hello";<br>let count: number = 42;<br>let isActive: boolean = true;</code></pre>' },
  { id: 'ts2', title: 'Interfaces', body: '<h2>TypeScript Interfaces</h2><p>Interfaces define object shapes.</p><pre><code>interface User {<br>  name: string;<br>  age: number;<br>}<br><br>let user: User = {<br>  name: "John",<br>  age: 25<br>};</code></pre>' },
  { id: 'ts3', title: 'Classes', body: '<h2>TypeScript Classes</h2><p>Classes provide object-oriented programming.</p><pre><code>class Person {<br>  name: string;<br>  constructor(name: string) {<br>    this.name = name;<br>  }<br>  greet() {<br>    return "Hello " + this.name;<br>  }<br>}</code></pre>' }
]);

// Enhanced quiz questions for existing languages
add('java', [], [
  { q: 'What is the correct syntax for a Java main method?', options: ['public static void main()', 'public static void main(String args)', 'public static void main(String[] args)', 'static void main(String[] args)'], a: 2 },
  { q: 'Which access modifier makes a member visible only within the same class?', options: ['public', 'protected', 'private', 'default'], a: 2 },
  { q: 'What does the "static" keyword mean?', options: ['The member belongs to the class', 'The member is final', 'The member is private', 'The member is abstract'], a: 0 },
  { q: 'Which collection maintains insertion order?', options: ['HashSet', 'HashMap', 'ArrayList', 'TreeSet'], a: 2 },
  { q: 'What is method overloading?', options: ['Same method name, different parameters', 'Different method name, same parameters', 'Inheriting methods', 'Abstract methods'], a: 0 },
  { q: 'Which keyword is used for inheritance in Java?', options: ['implements', 'extends', 'inherits', 'super'], a: 1 },
  { q: 'What does the "final" keyword do to a variable?', options: ['Makes it static', 'Makes it private', 'Makes it constant', 'Makes it abstract'], a: 2 },
  { q: 'Which exception handling block is always executed?', options: ['try', 'catch', 'finally', 'throw'], a: 2 },
  { q: 'What is a lambda expression in Java 8+?', options: ['Anonymous function', 'Named method', 'Class definition', 'Interface implementation'], a: 0 },
  { q: 'Which stream operation is terminal?', options: ['map()', 'filter()', 'collect()', 'peek()'], a: 2 }
]);

add('c', [], [
  { q: 'Which header file is needed for printf()?', options: ['<stdlib.h>', '<stdio.h>', '<string.h>', '<math.h>'], a: 1 },
  { q: 'What is the size of int in most systems?', options: ['2 bytes', '4 bytes', '8 bytes', 'Varies'], a: 1 },
  { q: 'Which operator is used for address-of?', options: ['*', '&', '->', '.'], a: 1 },
  { q: 'What does malloc() return?', options: ['int', 'void*', 'char*', 'NULL'], a: 1 },
  { q: 'Which loop is guaranteed to execute at least once?', options: ['for', 'while', 'do-while', 'none'], a: 2 },
  { q: 'What is the correct way to declare a pointer?', options: ['int ptr', 'int *ptr', 'int ptr*', 'pointer int ptr'], a: 1 },
  { q: 'Which function is used to free dynamically allocated memory?', options: ['delete', 'free()', 'remove()', 'clear()'], a: 1 },
  { q: 'What does the "static" keyword do in C?', options: ['Makes variable global', 'Limits scope to file', 'Makes variable constant', 'Allocates on heap'], a: 1 },
  { q: 'Which format specifier is used for strings?', options: ['%d', '%c', '%s', '%f'], a: 2 },
  { q: 'What is the return type of main() function?', options: ['void', 'int', 'char', 'float'], a: 1 }
]);

add('python', [], [
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

add('javascript', [], [
  { q: 'Which keyword declares a block-scoped variable?', options: ['var', 'let', 'const', 'function'], a: 1 },
  { q: 'What is the result of: typeof [1, 2, 3]', options: ['array', 'object', 'list', 'undefined'], a: 1 },
  { q: 'Which array method returns a new array?', options: ['push()', 'pop()', 'map()', 'sort()'], a: 2 },
  { q: 'What does "await" do?', options: ['Waits for a promise', 'Creates a promise', 'Catches errors', 'Loops through arrays'], a: 0 },
  { q: 'Which is the correct arrow function syntax?', options: ['=> (x) { return x * 2 }', '(x) => { return x * 2 }', '(x) { return x * 2 } =>', 'function => (x) { return x * 2 }'], a: 1 },
  { q: 'What is the output of: "5" + 3', options: ['8', '53', '"53"', 'Error'], a: 1 },
  { q: 'Which method adds an event listener?', options: ['onClick()', 'addEventListener()', 'addEvent()', 'listen()'], a: 1 },
  { q: 'What does JSON.parse() do?', options: ['Converts to string', 'Parses JSON string', 'Creates JSON object', 'Validates JSON'], a: 1 },
  { q: 'Which operator checks for equality without type conversion?', options: ['==', '===', '=', '!='], a: 1 },
  { q: 'What is a closure in JavaScript?', options: ['Function with access to outer scope', 'Closed function', 'Private method', 'Class constructor'], a: 0 }
]);

add('typescript', [], [
  { q: 'What does TypeScript add to JavaScript?', options: ['Classes', 'Static typing', 'Functions', 'Variables'], a: 1 },
  { q: 'Which file extension is used for TypeScript?', options: ['.js', '.ts', '.tsx', '.typescript'], a: 1 },
  { q: 'How do you define an optional property?', options: ['prop: string', 'prop?: string', 'prop: string?', 'optional prop: string'], a: 1 },
  { q: 'Which keyword is used for inheritance?', options: ['implements', 'extends', 'inherits', 'super'], a: 1 },
  { q: 'What is a union type?', options: ['Type | Type', 'Type & Type', 'Type + Type', 'Type || Type'], a: 0 },
  { q: 'How do you define a generic function?', options: ['function<T>', '<T>function', 'function T', 'generic function'], a: 0 },
  { q: 'Which access modifier is default in TypeScript classes?', options: ['private', 'protected', 'public', 'readonly'], a: 2 },
  { q: 'What does the "readonly" modifier do?', options: ['Makes property private', 'Makes property constant', 'Makes property optional', 'Makes property static'], a: 1 },
  { q: 'Which type represents "no return value"?', options: ['null', 'undefined', 'void', 'never'], a: 2 },
  { q: 'How do you compile TypeScript to JavaScript?', options: ['node file.ts', 'tsc file.ts', 'js file.ts', 'compile file.ts'], a: 1 }
]);
})();
