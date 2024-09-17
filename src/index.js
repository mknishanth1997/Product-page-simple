import "./style1.css";
import "./style2.css";
import { createModule1 } from "./module1.js";
import { createModule2 } from "./module2.js";
import { createModule3 } from "./module3.js";

function empty ()
{
    const content = document.querySelector(".content");
    content.innerHTML = "";
}

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
buttons.forEach((element, index) => {
    element.addEventListener("click", () => renderContent(index));
});

// Render Content: 

createModule1();
function renderContent(index)
{
    console.log("click Resistered");
    empty();
    if(index == 0)
    {
        createModule1();
    }
    else if (index === 1)
    {
        createModule2();
    }
    else if (index === 2)
    {
        createModule3();
    }
}

