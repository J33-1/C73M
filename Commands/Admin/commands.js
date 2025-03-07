function handleAdminCommand(command, client, message) {
    switch (command) {
        case "stat":
            return "Clem is running now";
        case "hi":
            return "Hello there!";
        case "bye":
            return "Have a good one";
        case "end":
            return "Session terminated!";
        default:
            return null; // Ignore unknown commands
    }
}

module.exports = handleAdminCommand;
