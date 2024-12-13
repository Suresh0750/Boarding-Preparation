1. Cookies:
    Created by: Websites
    
    Purpose: Cookies are small pieces of data that are stored on the user's computer by the web browser while browsing. They are created by websites and can be used to store information about the user, such as login sessions, preferences, tracking information, and other details specific to a user. For example, cookies can remember your login state on a website, so you don't have to log in again every time you visit.
    Scope: Cookies are typically domain-specific (e.g., a cookie set by example.com is only accessible by example.com). They can have expiration dates, after which they are automatically deleted.

2. Cache:

Created by: Web Browsers (and sometimes by websites via HTTP headers)

    Purpose: Cache is a mechanism used by web browsers to store copies of resources (such as images, HTML pages, CSS stylesheets, JavaScript files, etc.) locally on a user's computer. The primary purpose of caching is to improve website loading times and reduce server load by storing frequently accessed resources locally so they don't have to be re-downloaded every time the user visits the website.
    
    Scope: Cache is typically managed by the browser itself, and it is used to store content temporarily. It can be specific to a session or persisted longer based on caching rules set by the website (e.g., via cache-control headers).


## 3 dependency vs devdependency

    Dependencies are the crucial packages required for your application to function in a production environment. At the same time, devDependencies are tools and utilities that aid in the development process but are not needed in production.

## 4 http methods :

    Http methods are the foundation of communication between a client and a server.
    There six type of the http method such as GET, POST, PUT, PATCH, DELETE, OPTIONS


## 5 parts of request and response

    Parts of request request line , header and body.

    Parts of response is response line , header and body.



## 6 res.send vs res.write

    res.send() 👍
        res.send() is provided by Express and  res.send() is high-level, convenient method for sending a response to the client. 
        It automatically sets headers and ends the response.
        It can be used to send strings, objects, buffers, or arrays.

    res.write() 👍

        res.write() is a method provided by the core Node.js and res.write() is a lower-level method used to send data in chunks to the client . 

        It does not end the response by itself, allowing you to send multiple chunks of data before closing the connection with res.end().

# What is Node.js, and how does it differ from traditional server-side technologies?


    Node js is open-source, cross-platform runtime environment that allows developers to execute Javascript code on the server side. It build on Chrome's V8 Engine

    ➡ Key features :
     Build on Chrome's V8 Engine
     Non-blocking, Asynchronous Architecture
     Single-Threaded Event loop

    ➡ how does it differ from traditional server-side technologies?

    Node JS 👍
        Node.js: Uses a non-blocking, event-driven model, which allows it to handle multiple requests at once without waiting for operations like reading a file or querying a database to complete. This makes it highly efficient for handling I/O-bound tasks.

     Traditional Server-Side Technologies (e.g., PHP, ASP.NET, Java Servlets) 👍
        Typically use a blocking, multi-threaded approach. Each request is handled by a separate thread. When a thread is waiting for an I/O operation to complete, it cannot handle other requests, leading to higher resource consumption and potential scalability issues.



 

## namaste node js

# what is node js

    Node js is a cross-platform, open-sorce, javascript run time environment that can run in Windows, Linux, Unix, maxOS and more. Node js runs on the V8 javascript engine, and execuates JavaScript code outside a web browser.

    Node js has an event-driven-architecture capable of asynchronous I/O (non-blocking input output)


// info
    
    node js comes 2009 made by Ryan Dahl

## why Ryan Dahl create Node js?

    Before node js developer using Apache Http server which is blocking server that's why Ryan create node js which is non blocking server and It handle multipe request withe less threads

    Isaac the developer who created the npm.

# Node js is c++  code ?

    basically javascript engine which is v8 is written by c++;

    node js using c++ programing lanuage which is used to execute the javascript code.
    node js is a c++ application.

# what is v8?

    V8 is Google's open source high-performance Javascript and webassembly engine, written by c++. It's used in Chrome and in Node js. among others. It implements Ecmascript and webassemply. V8 can be embedded into any c++ application. That means node js is a c++ application.

# What is Ecmascript ?

    ECMAScript is a standard for scripting language, includes javascript, action script. 

    standered means nothing we write js code which is like "var a = 10" here we follow some standared for writting a code that is Ecmascript.

#  Js Engine

    - V8 - Google
    -Spider Monkey - FireFox
    - chakra - Microsoft Edge Legacy, Internet Explorer
    - JavaScriptCore - Safari


// # EPISODE - 3

# what is REPL ?

    Read Evaluate print Loop. which is the format for exacute the javascript in node. 

   here we can run node in cmd or termianl command in node then we can write js code, our v8 engine is took that code and execute well which is following the REPL format.

# global

    in browser 'window and this' global object but here global is the global object.  setTimout and setInterval and clearInterval everything comes under the global object . global is the super power which is providing the node js not v8 engine. 

    globalThis which refer the global object node js and js also.
    console.log(globalThis===global)  // * true

# about this

    if you put console.log(this) here we got {} object . 



// * Episode_4

# what is module 

    In Node.js, a module is a reusable collection of JavaScript functions and objects that can be used by other applications.
    module prodect there function, variable from leaking

# types of modules 

    1) common js modules (cjs)  
    2) ES modules (mjs,esm)

    if the package.json type: common js means we should use require for require the module
    if the package.json type: module means we should use import and export.

## behind the scence of module 

    require('/file path')

    // * All the code of the module is wrapped inside a function. that means every file's like module if we want to use that file inside the code to another file we have to use module.exports. Here every module create private place for avoiding the memory leaks. 
    // * That function is immediate involke's function 
    // * node js before gave the all code of the module it wrapped all code into IIFE then it give to v8 engine.



## important question 

    How are variables  & functions private in different module?

    ----> IIFE & require(statement)
    (wrapped code)

    const {logincontroll} = require('../allcontrollers)

    * here is the require statemente take the all code and wrapped into the IIFE that't behind the scene of require statement.

## working of require statement 

    1 ) Resolving the module 

        first of all it will check the module and module path
        ./  locat path
        ./ .json
        ./ node:module ---> inner module

    2) Loading the module
        |
        |
        ----> File content or context ia loaded according to the file type.

        This means we require another file our project another folder it will load that content . sometime we require third party module. 
    
    3 ) Wraps inside the  IIFE 

        it will load that file content and wrapped into IIFE.  

    4 ) Evaluation 

            it will provide module.export (this module.export passed as parameter to immediate invoked function)

    5 ) caching 👍

            caching is the importent concept of node js take an example of xyz.js file I require inside the many files  whenever the file is load nodejs taking the all code and caching itself the it won't load again alread exiting files. that's why nodejs very fast.
    

 # require 
    


let m = {
    export : {
        
    }
}

let {calculate} = (function (module){
    function calculate(){
        console.log('hellow')
    }
    return module.export = {calculate}
}(m))

calculate()

// ****************


# access the filename

console.log(__filename)


# threads

    In our operating system theres has multiple processor inside the processore one things is there is called threads. threads is nothing but is like a container where our application(c++) runs.


# developer shouldn't use synchrounse method

    fs.readSync()
    crypto.pbkddf2()


# Truth about setTimout
    
    every asynchronous function go to libuv once the call stack main thread is empty then the setTimeout function is start to execute that means every sync code is executed in v8 engine then setTimeout is start even the setTimeout 0 millisecond also. it's also working in libuv. libuv only take and handle every async function.

    setTimeout(()=>{
        console.log('call stack empty I will work')
    },0)

# Tick 

    In event loop one cycle iteration is known as one Tick.

# thread pool

    defaultly libuv have 4 thread pool for handle the asynchrounous function but we can reasign the number of thread pools . process.env.UV_THREADPOOL_SIZE = 10



# episode -10

# fds - file descriptor and also know as socket descriptor & scallable I/O event notification mechanisam and Event driven mechanisam.
      
        epoll - (linux)  - epoll is a linux kernal system
        kqueue - (MacOs) - kqueue is a MacOs kernal system

        File descriptor used to handle the I/O requests which means suppose if we want to read or write any file for that node js should talk to kernel . basically kernal is used to manage I/O operation from the *software* translate into system which means electronic parts.

        file descriptor is also know as socket descriptor. it has diff  i not sure about it.

        one request handled by one file descriptor but if 1000 request came to node js, nodejs won't use 1000 filedescriptor insted of it is handle by kernal if system is linux means epoll kernal provide a epoll descriptor. epoll descriptor is collection of file descriptor.

        epoll descriptor handle all the request and scallable I/O event notification mechanisam is monitoring the process then it gave to output to the libuv. It will wait the callback queue. then event loop process is start.

        event driven mechanisam is architecture of how the event it happens in the kernel level . after the process the scallable I/O event notification mechanism gave output to the libuv. Basically is a total process of how event handle by libuv and kernel system.

        scallable I/O event notification mechanisam is used event emiter and  listen event notification mechanisam talk to libuv.

        epoll operates O(1)

# process 

  * what 
        A process is an instance of a program in execution, created and managed by the operating system.
        In the context of an operating system, the process is the execution environment where your code runs.
        Main Process: Handles incoming requests and dispatches tasks.
        Child Processes: Perform tasks like file uploads, large computations, or running Python scripts.
        Inter-Process Communication: The main process communicates with child processes using message-passing (IPC-Inter-Process Communication ).
            

# How to achieve the paralisam in node js?.
  * A single process may not fully utilize multi-core CPUs. Running multiple processes helps achieve parallelism.
  
# Main Process: 

  * The main process is where your primary Node.js application runs, and it listens for incoming requests, interacts with databases, and schedules asynchronous operations.
  
# child process 
    These are separate processes created by the main process to perform tasks that might be too computationally heavy or resource-intensive for the main thread, like handling large file uploads, running complex computations, or executing scripts (such as Python or shell scripts). Child processes allow you to offload tasks from the main event loop, improving performance.

  * spwan() 
    * Creates a child process to run external commands or executables (not necessarily Node.js code).
    * Can be used to run shell commands, external scripts, or programs like ls, git, etc.
    * It doesn't automatically execute Node.js code; instead, it runs the specified command or script.
    * Communication with the child process happens through streams (stdin, stdout, stderr)
  
 * fork()
    * Creates a child process specifically for running Node.js code.
    * It creates a new Node.js process that runs JavaScript code, but with a separate memory space.
    * Typically used for parallelizing Node.js code execution (for example, splitting a heavy computation task across multiple processes).
    * Communication between the parent and child is done via Inter-Process Communication (IPC), which uses message passing.

# Concurrency
  * Concurrency refers to the ability of a system to handle multiple tasks at once, but not necessarily simultaneously

# Parallelism 
  * Parallelism, on the other hand, refers to the actual simultaneous execution of tasks, where multiple tasks run at the same time on different CPU cores. In parallelism, tasks can truly execute at the same time in separate processes or threads.   
    
# event driven architector

   * Event-driven architecture uses events and listeners to process tasks. (what)
   *  It enables efficient, non-blocking, and scalable applications.(why)
   *  Use it in real-time apps, I/O-heavy apps, and microservices. (when)
   *  HTTP servers, streams, timers, and sockets in Node.js.(where)
   *  Events are managed by the event loop and implemented via the EventEmitter class.(how)



# stream and buffer

     if we access the any data like if I put google.com in chrom it will go to the server and fetch some html or image format data basically it won't give whole things it will send chunk format data.



# garbage collection works:

 * V8's garbage collection works in two main steps:

        Identifying unreachable (non-referenced) data.
        Reclaiming memory occupied by unreachable data.

 * V8 uses the Generational Garbage Collection technique, which divides objects into two generations:

        Young Generation (Short-lived objects)
        Old Generation (Long-lived objects)
    
    1. Phases of Garbage Collection
        There are two main algorithms for handling these generations:

    * a. Young Generation: Scavenge Algorithm
        V8 divides the Young Generation into two spaces:
        From-space: Active space where new objects are allocated.
        To-space: Temporary space to move live (reachable) objects.

    * b. Old Generation: Mark-and-Sweep Algorithm
        Objects that survive multiple Scavenge collections are moved to the Old Generation. V8 applies the Mark-and-Sweep algorithm here.

        Steps:

    * Mark Phase:
            V8 traverses the object graph starting from root references (global objects, stack, and heap references).  // * it would DFS for traversal
            Any reachable (referenced) object is marked as alive.
    * Sweep Phase:
            Non-marked (unreachable) objects are considered garbage.
            Their memory is reclaimed.  