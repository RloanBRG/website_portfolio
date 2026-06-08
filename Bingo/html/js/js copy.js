document.addEventListener("DOMContentLoaded", function(){

const table = document.getElementById("bingo");

const resetButon = document.getElementById("reset");

const themeToggleButton = document.getElementById("Tema");

table.addEventListener("click",(event) => { 

    if (event.target.tagName === "TD") { 
    event.target.classList.toggle("clicked");
}
});
    resetButon.addEventListener("click", () => {
        const cells = table.querySelectorAll("td.clicked");
            cells.forEach((cell) => {
                cell.classList.remove("clicked");
            })
    })

    themeToggleButton.addEventListener("click", () => { 
        const body = document.body; 
        if (body.classList.contains('escuro')) { body.classList.replace('escuro', 'claro'); }
    else { body.classList.replace('claro', 'escuro'); } });
   
});
a