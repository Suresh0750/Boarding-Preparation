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
