const admins = ["8113007514@s.whatsapp.net"];

function handleAdminCommand(command, sender) {
    if (!admins.includes(sender)) {
        return "Sorry Buddy, it ain'tgonna work.";
    }

    if (command === "/run") {
        return "Clem is up and running now!";
    } else if (command === "/info") {
        return "V 2.0  ///  Developed by #71392"
    } else if (command === "/end") {
        return "Shutting down... (Not really, but I got the command!)";
    } else {
        return "Don't get it.";
    }
}

module.exports = handleAdminCommand;
