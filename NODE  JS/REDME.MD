# 1. Cookies:
    Created by: Websites
    
    Purpose: Cookies are small pieces of data that are stored on the user's computer by the web browser while browsing. They are created by websites and can be used to store information about the user, such as login sessions, preferences, tracking information, and other details specific to a user. For example, cookies can remember your login state on a website, so you don't have to log in again every time you visit.
    Scope: Cookies are typically domain-specific (e.g., a cookie set by example.com is only accessible by example.com). They can have expiration dates, after which they are automatically deleted.

# 2. Cache:

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
    module prodect there function, variable from leaking.

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
    Inside the is small unite in there that's called thread.

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

# app.set   

    In Node.js, particularly in the context of Express.js, app.set is a method used to configure or set application-level settings for an Express application. These settings are used to store values that can be accessed throughout the application and can influence how the app behaves.

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

        A process is an instance of a running program. It is created first when you execute a program.
        The process provides the environment where tasks can be executed.

# thread
  
  A thread is a smaller unit of execution within a process, sharing memory with other threads.

# task
  * A task is a small unit of work handled inside the main thread or the libuv thread pool.      

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


# Parallelism vs. Concurrency in Node.js:
Concurrency: Refers to handling multiple tasks at the same time, but not necessarily simultaneously. In Node.js, concurrency is achieved using the event loop, non-blocking I/O, and asynchronous callbacks.

Parallelism: Refers to executing tasks simultaneously, often using multiple cores or threads. Node.js achieves parallelism through Worker Threads, Child Processes, libuv’s thread pool, and Clustering. 

# cluster 

 A higher-level module that creates worker processes to share the same server port and handle requests concurrently, specifically for scaling Node.js applications.
    
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
        
#  ** Application Middleware**

* Application middleware refers to functions that are executed for every request made to the application, regardless of which route is being accessed. They are typically used for tasks like logging, authentication, body parsing, session handling, and more.

# **Router Middleware**

* Router middleware is specific to a particular router and is used to handle requests that match a particular route or set of routes. You can define routers and apply middleware only to those routes.

# CORS 

    CORS - Cross-Origin Resource Sharing

    CORS is used to prevent the malicious request to access our datas. CORS is ensure which domain request want to access the data.

# **http option method**

    The OPTIONS method is often sent by browsers as a preflight request before sending a more complex cross-origin request.
    When a browser makes a cross-origin request (especially with methods other than GET or POST, or with custom headers), it may first send an OPTIONS request to check if the server allows the actual request.
    This is called the preflight request and is part of the CORS process.

# Allow-Access controller

    Access Control refers to the process of controlling access to resources based on certain conditions, like origins, methods, and headers. In the context of web development and APIs, Access Control often involves Cross-Origin Resource Sharing (CORS), which defines the rules that govern how resources on a web server can be accessed by web pages from other domains or origins.
    When we talk about "Allow Access Control", we're referring to CORS and the Access-Control-Allow-Origin header (and other related headers) that a server uses to manage and allow access to its resources across different origins.

# preflight request 

    Preflight request is an OPTIONS request sent by the browser before the actual request to check if cross-origin communication is allowed with the requested methods and headers.

# CSRF (Cross-Site Request Forgery)

    CSRF is an attack that tricks a user’s browser into making an unwanted request to a website on behalf of an authenticated user.
    CSRF attacks are prevented using anti-CSRF tokens, same-origin policies, and validation of request headers and origins.


# REST API

    A REST API is a set of guidelines for creating web services that communicate via HTTP and use standard HTTP methods (GET, POST, PUT, DELETE).

#  type of module  
        core module
        local module
        Third-Party module

# inbuild module

    In Node.js, inbuilt modules (also known as core modules) are modules that come pre-packaged with Node.js. These modules provide essential functionalities that are frequently needed in server-side development, such as working with files, handling HTTP requests, or creating buffers. You don't need to install these modules using npm; they are readily available for use in any Node.js application.

# fs module 

    The fs (File System) module in Node.js is a core module that provides an API for interacting with the file system. This module allows you to read, write, delete, and perform other operations on files and directories in a Node.js application. It is used for tasks such as file manipulation, reading/writing data, and working with file metadata.

# fs.stat

    The fs.stat method in Node.js is used to retrieve information about a file or directory. It returns an object containing detailed information about a file's properties, such as its size, permissions, modification times, and other metadata.

# req.params , req.query

* Query Parameters and Path Parameters are two ways to pass information to the backend in a URL.
* Query Parameters
  * Query parameters are key-value pairs appended to the URL after a ?. Multiple parameters are joined using &.
  * Used to filter, sort, or query data without changing the resource path
  
*  Path Parameters
 * Path parameters are part of the URL path and are denoted by placeholders in the endpoint structure, such as :id.
 * Used to identify a specific resource or entity.   
  
        
# events - emit, on
    
 * emit triggers events and can pass data to listeners.
 * on listens for events and handles them when they are emitted.

# Advandage of Node Js

 * Asynchronous and Non-blocking I/O:
 * Single Programming Language (JavaScript):
 * Fast Execution (V8 Engine):'
 * Real-time Applications:
 * open source
  

# Event Loop
  The Event Loop is a mechanism in Node.js that handles and processes different phases of asynchronous operations. It keeps the Node.js process alive and waits for tasks, callbacks, or events to execute.


# eventqueue

  In Node.js, the Event Queue is a data structure that holds asynchronous tasks (callbacks or events) which are ready to be executed. It plays a significant role in the Event-Driven Architecture of Node.js and works closely with the Event Loop to manage asynchronous operations efficiently.

# process.nextTick

  process.nextTick() is a method in Node.js that allows you to schedule a callback function to be executed immediately after the current operation completes, but before the event loop moves to the next phase.

It is a part of the microtask queue in Node.js and has a higher priority compared to other asynchronous operations like setTimeout or setImmediate.

# Timer function 

  Timer functions in Node.js are part of the Timers module, which provides methods to execute code after a delay or repeatedly at specified intervals. These functions use the libuv library and are implemented as part of the Event Loop in Node.js.
  

# buffer 

  A Buffer in Node.js is a temporary storage area for binary data.
  It is used to handle raw data like streams, which may not necessarily be in a specific encoding format.
  Buffers are similar to arrays but deal with binary data instead of strings or objects.
  
# pipe 

  In Node.js, the pipe method is used to connect a readable stream to a writable stream.
  It allows the flow of data from the source stream (readable) to the destination stream (writable) automatically and efficiently.

# morgan 
  
   Morgan is a HTTP request logger middleware for Node.js.
   It is used to log incoming HTTP requests to your Node.js server.
   Morgan is especially useful for debugging, monitoring, and understanding incoming traffic patterns.
  
# Helmet 

  Helmet is a collection of security middleware for Node.js applications, primarily designed for Express.js.
  It helps secure your application by setting various HTTP headers that protect against common web vulnerabilities.
    
# express.json()

  express.json() is a built-in middleware function in Express.js that is used to parse incoming JSON-formatted request bodies.
  It is specifically designed to handle requests where the body content is in JSON format (Content-Type: application/json).
 

# express.urlencoded()

  express.urlencoded() is a built-in middleware function in Express.js that is used to parse incoming request bodies in URL-encoded format (the default format for HTML forms).
  This middleware is designed to handle requests with the application/x-www-form-urlencoded content type, which is typically used for form submissions.

# app.use()

  app.use() is a method in Express.js that is used to mount middleware functions at a specified path. It is called to add middleware to the request handling pipeline in an Express application.
  Middleware functions are functions that have access to the request (req), response (res), and the next function (next) in the request-response cycle.
  

# writeHead

    writeHead() is a higher-level method that sets both the status code and the headers together. You can only call it once before sending the response.

# setHeader
    setHeader() is used to set or modify individual headers, and you can call it multiple times before calling res.end() to send the response.

# clustering
    Clustering in Node.js is a technique that allows you to run multiple instances of a Node.js application on different CPU cores, taking full advantage of multi-core systems. Since Node.js operates on a single thread, it uses the event loop to handle multiple I/O operations concurrently. However, it cannot fully utilize multi-core systems by default, because the event loop runs in a single thread. Clustering solves this by spawning multiple processes (workers), each running on its own core.

    In Node.js, the cluster module is used to create child processes, known as worker processes, that share the same server port. Each worker runs in its own process with its own event loop and memory space, allowing for true parallelism in multi-core environments.

# NPM 

    npm is the command-line interface (CLI) for interacting with npm (Node Package Manager), the default package manager for Node.js. It is used to install, update, and manage packages (libraries and tools) in your Node.js projects.

# npx

    npx is a tool bundled with npm that is used to execute Node.js binaries and packages that are not globally installed or dependencies of the project. It's a quick way to run packages without installing them globally.

# yarn vs npm

    both are used to manage the package. yarn is faster installation comperthen npm. npm provides package.lock.json, yarn give yarn.lock file. 
    CLI tool : 
        npm provides an integrated security feature with npm audit, which helps identify and fix vulnerabilities. Yarn doesn't have a direct equivalent but uses the same registry and supports using external tools for security checks.

# types of middleware

 * application Middleware
 * router Middleware 
 * Built-in Middleware:
 * Third-Party Middleware:
 * Error-Handling Middleware:
  
# node core modules
 * http
 * fs
 * os
 * url
 * events
 * util
 * crypto
 * cluster
 * dns

# util module

    The util module in Node.js provides a set of utility functions that help with various common tasks. These functions make it easier to perform common operations such as formatting, inspecting objects, and handling errors, among other things. The module is part of the core Node.js library, so you don't need to install anything to use it.

# exprerss  

   Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.   

# static files
   Static files are simply files that do not change. They are served to the client (the browser) exactly as they are stored on the server. Static files are simply files that do not change. They are served to the client (the browser) exactly as they are stored on the server. 
   ex : HTML, JS, Image, Css files.
  
    
# package.json?.

  In a Node.js project, package.json is a fundamental file that contains metadata and configuration for your project. It is essentially the heart of a Node.js project and plays a vital role in managing dependencies, scripts, and other settings related to your application.

# package-lock.json

    package-lock.json is an automatically generated file in a Node.js project that contains detailed information about the exact versions of dependencies installed in the project. It is created when you run npm install and ensures consistent and deterministic dependency installation across different environments.


# Error-First Callback

    An error-first callback is a standard pattern in Node.js used for asynchronous operations. It ensures that errors are handled properly in asynchronous code, making it easier to debug and manage potential issues.

    The first argument is reserved for an error object (if any error occurs).

# server commmunication

    Server communication is the process where a server receives requests (e.g., HTTP requests) from a client, processes the data, and responds back to the client. This communication can happen synchronously or asynchronously.

# http Vs https

* http
    HTTP (HyperText Transfer Protocol) is a protocol for transmitting data (e.g., text, images, videos) between a web client and a server.It operates over port 80 by default.
    HTTP is stateless, meaning each request is independent.
    It does not encrypt the data being transferred, making it less secure.
* https
    HTTPS (HyperText Transfer Protocol Secure) is an extension of HTTP with added security.
    It uses SSL/TLS (Secure Socket Layer/Transport Layer Security) to encrypt data transmitted between the client and server.
    Operates over port 443 by default.
    Ensures confidentiality, integrity, and authentication of data.

# DNS module

    The DNS module in Node.js provides functionality for performing Domain Name System (DNS) lookups and resolving domain names into IP addresses.

# What is Scaffolding?

    Scaffolding is the process of automatically generating the basic structure of a project or application, so developers can focus on building features rather than setting up repetitive boilerplate code.

# PUT and PATCH

    PUT: Replaces the entire resource with a new version.
    PATCH: Partially updates a specific part of the resource.

# router.all

    router.all() is a method in Express.js used to handle HTTP requests for all methods (GET, POST, PUT, DELETE, etc.) at a specified path.
    It acts as a catch-all handler for requests to a specific route.

# dynamic routing

    Dynamic routing allows you to define routes in your Node.js server that can handle variable parameters in the URL. These parameters are dynamic, which means they can change based on the request.

# Authentication
    Authentication is the process of verifying the identity of a user or system. It ensures that the person or entity accessing the application is who they claim to be.

# Authorization
    Authorization is the process of determining whether an authenticated user has permission to access a particular resource or perform a specific action. It happens after authentication and ensures that users only have access to the resources they are allowed to.


# Content negotiation
    Content negotiation is the process that happens before the server sends data to the client. The client specifies in the headers (such as Accept, Accept-Language, or Accept-Encoding) what kind of data it can accept (e.g., JSON, XML, HTML). The server then uses this information to determine and send the response in the format or representation that matches the client's preference.

    content negotiation ensures that the client and server "negotiate" the format of the response based on what the client can handle and what the server can provide. It’s like the client setting expectations in the headers, and the server delivering accordingly.

# idempotency

    Idempotency is a concept in computer science, particularly in HTTP and RESTful APIs, which ensures that repeating the same operation multiple times results in the same outcome as executing it once.

    Methods like GET, PUT, and DELETE are idempotent, while POST is not.

# Route Chaining: 
    
    This allows you to define multiple middleware or handlers for the same route in a chain, which will execute in order.

# uri fragment 

    A URI fragment (also called a hash fragment) is the part of a Uniform Resource Identifier (URI) that comes after a # symbol. It is typically used to refer to a specific section or identifier within the resource that is being pointed to by the URI. The fragment itself is not sent to the server; instead, it is used by the client (such as a web browser) to navigate to a specific part of the resource, like a particular section of a webpage

# Rest principles

    Stateless
    Client-Server Separation
    Uniform Interface
    Resource-Based
    HTTP Methods
    Layered System
    Cacheability


# What are design patterns ?

     Factory Pattern
     Observer Pattern
     Middleware Pattern
     Proxy Pattern.


# parts of url

    Protocol
    Hostname
    Port
    Path
    Query String
    Fragment
    Username/Password (optional)

# What are the parts of JWT ?

    Header
    Payload
    Signature
# - app.all

    app.all method is used to apply the same logic accross all method such as GET, POST, PUT, PATCH, DELECT in request which is made in our application.
    
# exit codes

     exit codes are used to indicate why a program stopped running (terminated). These codes are numeric values that a process sends back to the operating system (or parent process) when it ends.

# reactor pattern

    The Reactor Pattern is a design pattern primarily used for handling concurrent I/O operations efficiently in applications. It is the foundation for event-driven programming, especially in non-blocking environments like Node.js, and allows servers to handle multiple requests simultaneously without using a separate thread for each connection.

    Reactor Pattern in Node.js
    Node.js implements the Reactor Pattern internally using the libuv library. Here's how it works in the context of Node.js.


