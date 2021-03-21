// Write your code here!

// Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";

newHeader.innerHTML = "Chris is the champion";