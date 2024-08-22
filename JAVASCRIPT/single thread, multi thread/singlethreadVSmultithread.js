

// # single thread 

console.log("Start");

setTimeout(() => {
  console.log("Delayed Message");
}, 1000);

console.log("End");



// # Multi thread 


// * this will work in browser that means when our js code run on browser.

const worker = new Worker('worker.js');

worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};

worker.postMessage('Hello, Worker!');


onmessage = function(event) {
    console.log('Message from main thread:', event.data);
    postMessage('Hello, Main!');
  };
  