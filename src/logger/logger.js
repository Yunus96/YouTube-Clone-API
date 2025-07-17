const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${level}: ${message} ${timestamp}`;
  });
  

const logger = ()=>{
    return createLogger({
        level: 'debug',
        format: combine( colorize(),
            timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            myFormat
        ),
        transports: [
            new transports.Console(),
        ]
    })
}

module.exports = logger;