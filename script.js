//For Mobile
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarlinks = document.getElementsByClassName('navbar_links')[0];

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})

//For Typewriter Effect:
//Inside our function we have a constant that divides the text of our element letter by letter, 
//then we clear the element content and loop through our array of letters and for each letter we 
//add we wait for the time of 95 multiplied by the index and so we have a letter at a time added
//set interval sets the time before it resets the typewriter affect
function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 9000000000);
}
typeWriter(subtext);