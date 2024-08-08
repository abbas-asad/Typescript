import chalk from "chalk";
// Color Examples
console.log(chalk.blue("blue color"));
console.log(chalk.green("green color"));
console.log(chalk.gray("gray color"));
console.log(chalk.red("red color"));
// Bg-color Examples
console.log(chalk.bgBlue("blue bg-color"));
console.log(chalk.bgGreen("green bg-color"));
// Text Style Examples
console.log(chalk.bold("bold text"));
console.log(chalk.italic("italic text"));
console.log(chalk.strikethrough("strikethrough text"));
console.log(chalk.underline("underlined text"));
console.log(chalk.inverse("inverse text"));
// Short-hand Property
console.log(chalk.blue.bgRed.bold("blue color + red bg-color + bold text"));