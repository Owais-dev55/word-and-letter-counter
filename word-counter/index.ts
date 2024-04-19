#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;

while (condition) {
  let input: {
    Sentence: string;
  } = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Enter the Phrase or Sentence to count word:",
  });
  let morewords = await inquirer.prompt({
    name: "checkmore",
    type: "confirm",
    message: "Do you want to checkmore words??",
    default: false,
  });

  let word = input.Sentence.trim().split(" ");
  let letters = input.Sentence.trim();

  console.log(word);

  console.log(chalk.yellow(`Your Phrase or Sentence has words: ${word.length}`));

  console.log(chalk.greenBright(`Your Phrase or Sentence has letters: ${letters.length}`));
  condition = morewords.checkmore;
}
console.log(chalk.redBright("___________THE END___________"));
