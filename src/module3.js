// Pricing button

function createModule3()
{
    const firstHeading = document.createElement("h2");
const secondHeading = document.createElement("h1");
const thirdHeading = document.createElement("p");

firstHeading.innerText = "Free for Freelancers";
secondHeading.innerText = "Cancel anytime you want";
thirdHeading.innerText = "lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati sunt numquam animi quis? Modi beatae perferendis laudantium eius fugiat. Neque laudantium corporis, maxime recusandae totam et quis nisi ullam?";

const content = document.querySelector(".content");

content.appendChild(firstHeading);
content.appendChild(secondHeading);
content.appendChild(thirdHeading);
}

export {createModule3};