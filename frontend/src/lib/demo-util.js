// This is a demo utility file for the News-app frontend
// It exports a function that logs a greeting to the console

export function logGreeting() {
  if (typeof window !== 'undefined') {
    console.log('Hello from demo-util.js!')
  }
}
