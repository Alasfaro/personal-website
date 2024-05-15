function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

const words = ["Software Engineer", "Student"];
let i = 0;
let counter;
function typeNow() {
    let word = words[i].split("");
    var loopTyping = function() {
       if (word.length > 0) {
          document.getElementById('delText').innerHTML += word.shift();
       } else {
          deleteNow();
          return false;
       };
       counter = setTimeout(loopTyping, 250);
    };
    loopTyping();
 };

 function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function() {
       if (word.length > 0) {
          word.pop();
          document.getElementById('delText').innerHTML = word.join("");
       } else {
          if (words.length > (i + 1)) {
             i++;
          } else {
             i = 0;
          };
          typeNow();
          return false;
       };
       counter = setTimeout(loopDeleting, 150);
    };
    loopDeleting();
 };
 typeNow();