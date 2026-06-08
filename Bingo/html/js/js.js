document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("bingo");
    const resetButton = document.getElementById("reset");
    const themeToggleButton = document.getElementById("tema");

    table.addEventListener("click", (event) => {
        if (event.target.tagName === "TD") {
            event.target.classList.toggle("clicked");
        }
    });

    resetButton.addEventListener("click", () => {
        const cells = table.querySelectorAll("td.clicked");
        cells.forEach((cell) => {
            cell.classList.remove("clicked");
        });
    });

    themeToggleButton.addEventListener("click", () => { 
        const elements = [document.body, document.getElementById("div_table")];
        
        elements.forEach((element) => { 
            if (element.classList.contains('escuro')) {
                 element.classList.replace('escuro', 'claro'); 
                } else { 
                    element.classList.replace('claro', 'escuro'); 
                } 
            }); 
        });
});
a