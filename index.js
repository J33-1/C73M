const readline = require("readline");

const botName = "C73M"; // Store bot name in a variable

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to handle commands
function handleCommand(command) {
  if (command === "/run") {
    console.log(${botName}: Hi there!, C73M is now running.);
  } else if (command === "time") {
    console.log(`${botName}: The current time is ` + new Date().toLocaleTimeString());
  } else if (command === "bye") {
    console.log(${botName}: Goodbye! Have a great day.);
    rl.close(); // Stop the bot
  } else {
    console.log(${botName}: Sorry, I don't understand that command.);
  }
}

// Ask for user input
rl.setPrompt("You: ");
rl.prompt();

rl.on("line", (input) => {
  handleCommand(input.trim().toLowerCase());
  rl.prompt();
});
