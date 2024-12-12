/* 

    Event loop 

    The Event Loop is the mechanism that enables JavaScript to handle asynchronous operations efficiently. 
    It continuously monitors the Call Stack and processes tasks in the Microtask Queue and Task Queue.

    The Event Loop is a fundamental concept in JavaScript that enables asynchronous programming. 
    It allows JavaScript (a single-threaded language) to handle multiple tasks, such as executing code, handling events, and performing I/O operations, without blocking the main thread.  


    Microtask Queue 

    Microtasks (e.g., Promise.then, MutationObserver) have higher priority than tasks in the Task Queue.
    The Event Loop processes all microtasks before moving to the Task Queue.

*/