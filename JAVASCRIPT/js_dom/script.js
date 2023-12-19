/* Qs1. Create a new input and button element on the page using JavaScript only. Set the
text of button to “Click me”;

Qs2. Add following attributes to the element :
- Change placeholder value of input to “username”
- Change the id of button to “btn”

Qs3. Access the btn using the querySelector and button id. Change the button
background color to blue and text color to white.

Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
Change its color to purple.

Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
where Delta is bold.
Solution--
*/

let Body = document.querySelector("body")
let LineBreak = document.createElement("br")
let h1 = document.createElement("h1")


let input = document.createElement("input")
input.setAttribute("Placeholder", "Username")

let btn = document.createElement("button")
btn.setAttribute("type", "submit")
btn.setAttribute("id", "btn")


btn.innerText = "Click me"
btn.style.padding = "5px 15px"
btn.style.marginTop = "12px"
btn.style.backgroundColor = "blue"
btn.style.color = "white"
btn.style.fontWeight = "700"


let underline = document.createElement("u")
h1.innerText = "Dom Practice"



Body.appendChild(underline)
underline.appendChild(h1)

let para = document.createElement("p")
para.innerHTML = "Apna College <b>Delta</b> Practice"

Body.appendChild(input)
Body.appendChild(LineBreak)
Body.appendChild(btn)
Body.appendChild(para)

let text = document.querySelector("#inputText")
function handleSubmit(){
    // alert("Text Submitted!.");
    console.log(text.value);
    text.value = text.ariaPlaceholder
}