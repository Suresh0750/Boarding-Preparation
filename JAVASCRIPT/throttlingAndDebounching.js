

/* 

    Throttling and debouncing

    Debouncing ensures that a function is executed only after a specified delay of inactivity.

    If the event keeps firing, the timer resets.
    The function runs only after the user stops triggering the event for a given time.

    Both throttling and debouncing are techniques used to optimize performance in JavaScript when handling events that trigger frequently, such as window resizing, scrolling, or typing.

    What is Throttling?

    Throttling ensures that a function executes at regular intervals no matter how many times the event is triggered.
    It "throttles" the function execution to a fixed rate.

    How Throttling Works
        The function is executed immediately on the first event.
        For the next executions, it waits for a fixed interval before running again.

*/


// Debouncing

function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer); // Reset the timer
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Event: Typing in a search input
  function onSearch(event) {
    console.log("Fetching search results for:", event.target.value);
  }
  
  const debouncedSearch = debounce(onSearch, 500); // 500ms delay
  
  document.getElementById("search").addEventListener("input", debouncedSearch);
  