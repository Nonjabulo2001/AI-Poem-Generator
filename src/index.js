function generatePoem(response) {
    response.preventDefault();
  
    new Typewriter('#poem-display', {
  strings: "i am happy",
  autoStart: true,
  delay:1,
  cursor:"",
});
}




let formElement = document.querySelector("#poem");
formElement.addEventListener("submit",generatePoem);







