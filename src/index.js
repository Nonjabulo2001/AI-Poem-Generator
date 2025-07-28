function displayPoem(response) {
   new Typewriter('#poem-display', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});

  
}


function generatePoem(event) {
    event.preventDefault();
    let instructions = document.querySelector("#instructions");
    let apiKey = "4df1bdctd7b970a1c5dof432b8f97964";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let context = "You are a romantic Poem expect and love to generate short poem in basic HTMl. Make sure to follow a user instructions";
    let prompt = ` User instructions: Generate a French poem ${instructions.value}`;

    console.log("Generating a poem");
    console.log(`prompt:${prompt}`);
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
  
   
}




let formElement = document.querySelector("#poem");
formElement.addEventListener("submit",generatePoem);










