import { Command } from "commander";
import { animeQuotes } from "./assets/quotes";
import { exec } from "child_process";

const randomIndex = Math.floor(Math.random() * animeQuotes.length);

const program = new Command();
program
  .name("anime-fortune")
  .description(`CLI anime's quotes utilites`)
  .version("0.1.0");

program.option("-r, --random", "Print random anime quotes").parse(process.argv);

const option = program.opts();

if (option.random) {
  exec(`cowsay "${animeQuotes[randomIndex]}"`, (error, stdout, stderr) => {
    if (error) {
      console.error("error", error.message);
    }

    if (stderr) {
      console.error(stderr);
    }

    console.log(stdout);
  });
}
