import input from "input";

async function inputCSS() {
  let cssMethods = [];
  let inputUser;

  do {

    if (inputUser) {

      cssMethods.push(inputUser);

    }

    inputUser = (await input.text("Insira uma propriedade CSS: ")).toLowerCase();


  } while(inputUser != "sair");

  cssMethods = cssMethods.sort();

  for (let i = 0; i < cssMethods.length; i++) {
    console.log(`${i+1}: ${cssMethods[i]}`)
  }


}

inputCSS();