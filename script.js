let body = document.querySelector(`body`);

let sectionTop = document.createElement(`section`);
sectionTop.classList.add(`topSection`);
let divHeader = document.createElement(`div`);
divHeader.classList.add(`headerDiv`);
let headerName = document.createElement(`h1`);

let sectionBottom = document.createElement(`section`);
sectionBottom.classList.add(`bottomSection`);

let divTool = document.createElement(`div`);
divTool.classList.add(`toolDiv`);
let toolHeader = document.createElement(`div`);
let toolName = document.createElement(`h2`);
let buttonNew = document.createElement(`button`);
let buttonReset = document.createElement(`button`);
let buttonBlack = document.createElement(`button`);
buttonBlack.classList.add(`btnBlack`);
let buttonRandom = document.createElement(`button`);
buttonRandom.classList.add(`btnRandom`);

let divCanvass = document.createElement(`div`);
divCanvass.classList.add(`canvassDiv`);

let sectionFooter = document.createElement(`section`);
sectionFooter.classList.add(`footerSection`);
let footerName = document.createElement(`h3`);

let i;
let div;
let divs;
let auto = `auto `;

//Create the HTML structure using DOM


body.appendChild(sectionTop);
sectionTop.appendChild(divHeader);
divHeader.appendChild(headerName);
headerName.innerHTML = `ETCH A SKETCH!`;

body.appendChild(sectionBottom);
sectionBottom.appendChild(divTool);
sectionBottom.appendChild(divCanvass);

divTool.appendChild(toolHeader);
toolHeader.appendChild(toolName);

divTool.appendChild(buttonNew);
divTool.appendChild(buttonReset);
divTool.appendChild(buttonBlack);
divTool.appendChild(buttonRandom);
toolName.innerHTML = `TOOLS`
buttonNew.innerHTML = `<i class="fa-solid fa-plus"></i>`;
buttonReset.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
buttonBlack.innerHTML = `<i class="fa-solid fa-circle"></i>`;
buttonRandom.innerHTML = `<i class="fa-solid fa-circle"></i>`;

body.appendChild(sectionFooter);
sectionFooter.appendChild(footerName);
footerName.innerHTML = `© Aeron Brylle Lazo`;

//Main
document.addEventListener("DOMContentLoaded", function(){
    createDivs(256);
    divs = document.querySelectorAll(`.divPixel`);

    divs.forEach(div => {
        div.addEventListener(`mouseover`, () =>{
        div.style.cssText = `background-color: black;`
        });
    });

    buttonBlack.addEventListener(`click`, ()=>{
            divs.forEach(div => {
            div.addEventListener(`mouseover`, () =>{
            div.style.cssText = `background-color: black;`
            });
        });
    });

    buttonRandom.addEventListener(`click`, ()=>{
        divs.forEach(div => {
            div.addEventListener(`mouseover`, () =>{
            div.style.cssText = `background-color: ${generateColor()};`
            });
        });
    });
    

    buttonNew.addEventListener(`click`, () => {
        let userInput = prompt(`What size do you want to work on ? `);
        if(userInput > 100 || userInput < 0 || userInput == ``)
             alert(`You put an invalid number. Please try again :)`);
        
        else{
            divs.forEach(div => {
                div.remove();
            });

            createDivs(userInput * userInput);
            divs = document.querySelectorAll(`.divPixel`);
            
            divs.forEach(div => {
                div.addEventListener(`mouseover`, () =>{
                div.style.cssText = `background-color: black;`
                });
            });
        
            buttonBlack.addEventListener(`click`, ()=>{
                    divs.forEach(div => {
                    div.addEventListener(`mouseover`, () =>{
                    div.style.cssText = `background-color: black;`
                    });
                });
            });
        
            buttonRandom.addEventListener(`click`, ()=>{
                divs.forEach(div => {
                    div.addEventListener(`mouseover`, () =>{
                    div.style.cssText = `background-color: ${generateColor()};`
                    });
                });
            });
    }
    });

});
//Create the initial grid
function createDivs(num){
    divCanvass.style.gridTemplateColumns = `repeat(${Math.sqrt(num)}, 1fr)`;
    divCanvass.style.gridTemplateRows = `repeat(${Math.sqrt(num)}, 1fr)`;
    for(i = 0; i < num; i++){
        div = document.createElement(`div`);
        div.classList.add(`divPixel`);
        divCanvass.appendChild(div);
        divCanvass.insertAdjacentElement(`beforeend`,div);
    }
}


//Resetting the grid
buttonReset.addEventListener(`click`, () => {
        divs = document.querySelectorAll(`.divPixel`);

        divs.forEach(div => {
            div.style.cssText = `background-color: white;`
    });
} )


//Generate a color
function generateColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);  

    return `#${randColor.toUpperCase()}`
}
