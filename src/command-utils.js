const command = function() {
    let command = process.argv[2];
    if ( typeof command === "undefined" ) {
        return;
    }

    return process.argv[2].toLowerCase();
};

const commandArgs = function() {
    let args = Array.prototype.slice.call( process.argv, 3 ).join( ' ' );

    return args;
};

const subcommand = function() {
    let subcommand = process.argv[3];

    if ( typeof subcommand !== 'undefined' ) {
        return process.argv[3].toLowerCase();
    }

    return;
};

module.exports = { command, commandArgs, subcommand };