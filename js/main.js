// Accessing the document
console.log(document.title)

// Finding the 'box' div in the document by it's id
const infoPara = document.getElementById("info")
console.log(infoPara)

// Adds text content to existing content using +=
console.log(infoPara.textContent)
infoPara.textContent += "Abhay"

// Finding Elements using CSS selectors
let container = document.querySelector(".container")
console.log(container)
container.style.maxWidth = "800px"
container.style.margin = "0 auto"

// Finding all elements using CSS selectors
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

//Make the background color of the first array item cyan blue 
allNodes[0].style.background = "cyan"

for (let eachNode of allNodes) {
    eachNode.style.border = "1px solid black"
}

/* Taversing the DOM */
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

// Accessing the children of an element
const listOfNodes = mainNodes.children
console.log(listOfNodes)
listOfNodes[1].style.margin = "10px 0"

const firstNodeType = mainNodes.firstElementChild
console.log(firstNodeType.textContent)

/* Attribute Node */
const learnMore = document.getElementById("learn")
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

learnMore.setAttribute("target", "_Blank")

/* Manipulating Classes - IMPORTANT FOR ASSIGNMENT */
learnMore.classList.add("btn")

/* Chaning inline styles - Using backticks to format styling across multiple newlines - Purely for organization and completely optional*/
const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style",`
    background-color: powderBlue;
    padding: 10px;
    border: 1px solid black;`)

fakeConsole.innerHTML += "<h2>This is a fake console where we can output our information.</h2>"
fakeConsole.innerHTML += " The above URL is " + learnMore.getAttribute("href")

