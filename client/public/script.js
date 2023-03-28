import { plants } from '/data.js';


const divElement = function (content){
  const speciesArr = content.species.split(", ");
  let headers3 = "";
  speciesArr.forEach(spec => headers3 += `<h3>${spec}</h3>`);
  
  return `<div>
            <h2>${content.name}</h2>
            ${headers3}
          </div>`;
}

const loadEvent = function() {

  // Write your JavaScript code after this line
  const rootElement = document.getElementById("root");
  
  plants.forEach(plantObject => {
    rootElement.insertAdjacentHTML("beforeend", divElement(plantObject));
  });

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
