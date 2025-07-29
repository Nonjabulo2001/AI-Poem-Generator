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
     let context = "You are a romantic Poem expect and love to generate short poem in basic, seperate line with <br>.Your aim is to generate 2 to 4 lines. Make sure to follow a user instructions.Donot give xplaination about html and html word";
    let prompt = ` User instructions: Generate a French poem ${instructions.value}`;

   let poemElement = document.querySelector("#poem-display");
   poemElement.classList.remove("hidden");
   poemElement.innerHTML = ` <div class="blink">💗 Generating a French poem about ${instructions.value} </div>`;
   

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    

    
    axios.get(apiUrl).then(displayPoem);
  
   
}




let formElement = document.querySelector("#poem");
formElement.addEventListener("submit",generatePoem);












