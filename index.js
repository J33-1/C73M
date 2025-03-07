const C73M = require("C73M");
const handleAdminCommand = require("./C73M/Commands/Admin/commands");

// Your WhatsApp number (without +)
const OWNER_NUMBER = "918086326775";

C73M.create().then(client => start(client));

function start(client) {
    client.onMessage(async message => {
        let body = message.body.trim();
        let senderNumber = message.sender.id.replace("@c.us", ""); // Clean number format

        // Ignore messages that are NOT from the owner
        if (senderNumber !== OWNER_NUMBER) return;

        // Ignore messages that don’t start with "/"
        if (!body.startsWith("/")) return;

        let command = body.slice(1).toLowerCase(); // Remove "/" and convert to lowercase

        // Show typing indicator
        await client.startTyping(message.from);

        // Handle admin commands
        let response = handleAdminCommand(command, client, message);
        if (response) {
            await client.sendText(message.from, response);
        }

        // Stop the bot after /end
        if (command === "end") {
            console.log("Bot session terminated.");
            process.exit(0);
        }
    });
}
