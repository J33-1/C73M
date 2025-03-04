const C73M = require("C73M");
const handleAdminCommand = require("./C73M/Commands/Admin/commands");
const handleUserCommand = require("./C73M/Commands/User/user_commands");

C73M.create().then(client => start(client));

function start(client) {
    client.onMessage(async message => {
        let body = message.body.trim();
        if (!body.startsWith("/")) return;
        let command = body.slice(1).toLowerCase();
        let sender = message.sender.id;
        if (command === "/run" || command === "/end") {
            let response = handleAdminCommand(command, sender);
            client.sendText(message.from, response);
        } 
        else {
            let response = handleUserCommand(command);
            client.sendText(message.from, response);
        }
    });
}
