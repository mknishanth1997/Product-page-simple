// Home button Element rendering

function createModule1()
{
    const firstHeading = document.createElement("h2");
const secondHeading = document.createElement("h1");
const thirdHeading = document.createElement("p");

firstHeading.innerText = "NEW SMART IDEAS";
secondHeading.innerText = "Taking business to new heights";
thirdHeading.innerText = "Multi Platform CRM sstem allows you to manage all of you buisness process with only one devise.";

const content = document.querySelector(".content");

content.appendChild(firstHeading);
content.appendChild(secondHeading);
content.appendChild(thirdHeading);
}

export {createModule1};