const winston = require("winston");

const myformat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} || ${info.level} || ${info.message}`)
);

const logger = winston.createLogger({
    format: myformat,
    transports: [
        new winston.transports.File({filename:'logs/error.txt',level:'error'}),
        new winston.transports.File({filename:'logs/info.txt',level:'info'}),
        new winston.transports.File({filename:'logs/warning.txt',level:'warn'})
    ],
});

module.exports = logger;
