const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const { p1, p2 } = answers;
    const media = (parseInt(p1) + parseInt(p2)) / 2;

    console.log(`A média do aluno é ${media}`);
  })
  .catch((err) => {
    console.error(err);
  });
