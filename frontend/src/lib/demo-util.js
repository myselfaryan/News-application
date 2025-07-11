// This is a demo utility file for the News-app frontend
// It exports a function that logs a greeting to the console

export function logGreeting() {
  if (typeof window !== 'undefined') {
    console.log('Hello from demo-util.js!')
  }
}

// Improved: Add a utility to debounce functions for better performance in event handlers
export function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
