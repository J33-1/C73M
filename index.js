const readline = require("readline");

const botName = "C73M"; // Bot name

// Separate object for commands and responses
const commands = {
  hello: "Hi there! How can I assist you?",
  time: "The current time is " + new Date().toLocaleTimeString(),
  bye: "Goodbye! Have a great day.",
  help: "Available commands: hello, time, bye, help"
};

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to handle commands
function handleCommand(command) {
  if (commands[command]) {
    console.log(${botName}: ${commands[command]});
    if (command === "bye") rl.close(); // Stop the bot on "bye"
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
