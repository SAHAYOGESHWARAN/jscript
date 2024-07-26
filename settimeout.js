let i = 1;
console.log("Script started");

setTimeout(() => {
    console.log("Timeout reached, logging i:");
    console.log(i);
}, 2000);

console.log("Timeout set for 2 seconds");
