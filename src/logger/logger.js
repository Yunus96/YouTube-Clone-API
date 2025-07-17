import winston from 'winston';

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });
  

const logger = ()=>{
    return winston.createLogger({
        level: 'debug',
        format: winston.format.combine(
            winston.format.timestamp(),
            myFormat
        ),
        transports: [
            new winston.transports.Console(),
        ]
    })
}

module.exports = logger;