const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome?",
    },
    {
      name: "idade",
      message: "Qual a sua idade?",
    },
  ])
  .then((answers) => {
    const { nome, idade } = answers;
    console.log(
      chalk.bgYellow.black(`Seu nome é ${nome} e você tem ${idade} anos`)
    );
  })
  .catch((err) => {
    console.error(err);
  });
