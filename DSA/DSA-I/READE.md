# What is Data Structor

    A data structure is a way of storing, organizing, and manipulating data in a computer so that it can be used efficiently. Different data structures are suited to different kinds of applications, and some are highly specialized to specific tasks.

# Asymptotic Notations    

    Asymptotic notations are mathematical tools used to describe the time complexity and space complexity of algorithms as the input size (n) grows. These notations help us analyze the performance of an algorithm independently of the machine or programming language used.
    
# Key Asymptotic Notations
    Big-O Notation (O) → Upper Bound
    Omega Notation (Ω) → Lower Bound
    Theta Notation (Θ) → Tight Bound


# Time complexity

    Time complexity measures the amount of time an algorithm takes to complete as a function of the input size. It helps us understand how the running time or the number of operations grows as the input size increases. Time complexity is often expressed using Big O notation, like O(1), O(n), O(log n), or O(n^2), which describe how the time scales with the size of the input.

# space complexity

    Space complexity refers to the amount of memory an algorithm uses in relation to the input size. It measures the total space required for the algorithm to run, including the space for input data, variables, and any additional data structures used by the algorithm. Space complexity helps us understand how much memory an algorithm will need as the input size grows.

# What is Recursion

    Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem. A recursive function solves a smaller instance of the same problem until it reaches a base case, where the function stops calling itself.

# application of Recursion :

    Mathematical Computations
    Tree and Graph Traversals
    Sorting Algorithms
    Backtracking Problems
    Divide and Conquer Algorithms

# Drawbacks of recursion?

    High Memory Usage
    Risk of Stack Overflow
    Performance Overhead
    Harder Debugging and Understanding
    Function Call Overhead


# diff between array and linked list

    Array                                               Linked List 

    Built-in data structure with indexed elements.      A user-defined data structure composed of nodes (data + pointers).

    Stored in contiguous memory (under the hood).       Nodes are stored in non-contiguous memory.


# Dynamic memory allowcation.

    Dynamic memory allocation refers to the process of allocating memory at runtime rather than at compile time. It allows for more flexible memory management, as the exact amount of memory needed for a program isn't fixed when the program is written.


# single Linked List application :
    
    Dynamic Memory Management
    Implementation of Stack and Queue.
    Hash Chaining
    Representing Sparse Matrices

# Application using Linked list

    Music Playlists or Media Players
    Navigation Systems
    Undo/Redo Operations

# sinle linked list and double linked list


    A Linked List and a Doubly Linked List are both types of linear data structures used to store a collection of elements. They both have nodes that store data and a reference (or pointer) to the next node in the list. However, they differ in how they are linked.

    Linked List (Singly Linked List)
        Structure: Each node contains two parts
        A data element (or value).
        A reference (or pointer) to the next node in the list.
    
    Doubly Linked List:
        Structure: Each node contains three parts:

        A data element.
        A reference (or pointer) to the next node.
        A reference (or pointer) to the previous node.


# A memory leak

    A memory leak occurs when the memory that is no longer needed is not released, leading to the accumulation of unused memory over time. In JavaScript, memory management is usually handled by the garbage collector, but memory leaks can still happen if references to unused objects or data structures are unintentionally kept alive, preventing the garbage collector from freeing the memory.

    In the context of data structures in JavaScript, memory leaks can occur if certain objects or references within the data structures are not properly removed or handled. Let’s explore how memory leaks can happen in JS, particularly with common data structures, and how to avoid them.

# Jagged array

    A jagged array is an array of arrays, where each element (which is itself an array) can have different lengths. In other words, unlike a multidimensional array where every row is typically the same size (e.g., a 2D array with a fixed number of columns), a jagged array allows each row (sub-array) to have a different number of elements.

# What is data structure ?.

    The data structure is a specific way of organizing, storing, accessing the data.

# What is algorithm?.

    A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithm. 

# Big 0

    Big 0 notation helps un understand how long an algorithm will take to run or how much memory it will need as the amount of data it handles grows.


# 0(n)

    signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data(n).


# 0(1) :

    O(1) aka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size.

# O(n^2) :

    Indicates that the algorithm's execution time grows quadratically with the size of the input data (represend by n).


# Memory allocation :

    Memory allowcation is the process of reserving the portion of a computer's memeory for programms to store the data  temporaty during the execution. In javascript high-level language, memory management handled by authomaticatly by the run environment.
    

# Stack Overflow

  Stack overflow occurs when we try to add (push) an element onto a stack that is already full or has exceeded its memory limit.

  It typically happens when the stack size exceeds the predefined capacity.

#  Stack Underflow

     Stack underflow occurs when we try to remove (pop) an element from an empty stack.

     The stack does not have any elements to perform the pop operation.
    
# Derived Data Types

    Derived data types are data types that are constructed or derived using the built-in data types.

    They are not predefined and are often created by programmers to manage complex data.

# Virtual Memory

    Virtual memory is a memory management technique that allows a computer to use more memory than is physically available in the RAM (Random Access Memory). It creates an 
    
    illusion of a very large memory space by utilizing part of the hard disk/SSD as temporary storage.


# Advantage of recuresion

    Simplifies Complex Problems
    Reduces Code Length
    Easier to Debug and Understand
    Reduces Use of Data Structures

# disacvantage of recursion

    Function call overhead
    Risk of Stack Overflow
    Hight memory usage
    Performance issue.

# Homogeneous Arrays

     homogeneous array is an array in which all elements are of the same data type. This ensures consistency of the data stored and allows for efficient memory management and operations.
    
# classification of datastructor

     Primitive Data Structures
     Non-Primitive Data Structures

# Types of datastructor

    Primitive Data Structures.
    Non-Primitive Data Structures
        linear-data structure
        non-linear-data struture

# Hast Table


    A HashTable is a data structure that is used to store key-value pairs efficiently. It maps keys to values using a hash function, which computes an index (or "hash") to determine where the key-value pair will be stored in an underlying array.

# Collisions

    A collision occurs when two different keys produce the same hash index.
    To handle collisions, techniques like chaining or open addressing are used.

# seperate Chaining

    Use a linked list (or other data structure) at each index to store multiple key-value pairs that collide.

# Open Addressing:

    Search for the next available slot in the array (e.g., linear probing, quadratic probing, or double hashing).


# linear probing 4

    if the index is alrady occupied we move on the next index. That's called linear probing.

# quadratic probing
    
     Quadratic Probing is a technique used to resolve collisions in a HashTable using open addressing. Instead of moving sequentially (like in linear probing), quadratic probing uses a quadratic function to determine the next index to check for insertion.


# Double Hashing 

    Double Hashing is a technique used to resolve collisions in a HashTable when two keys generate the same hash index. It is a form of open addressing where an additional hash function is applied to the key to determine the step size (or "jump") for probing the table.

# rehasing

    Rehashing is the process of resizing a HashTable and re-inserting all the existing keys into the new table using a new hash function or a new table size. This is done to maintain the performance of the HashTable when the load factor becomes too high.

# Load Factor

    Load Factor in the context of a HashTable is a measure that determines how full the table is. It directly influences the performance of hash-based operations like insertion, deletion, and search.

    Load Factor = Size of the HashTable / Number of elements in the HashTable

