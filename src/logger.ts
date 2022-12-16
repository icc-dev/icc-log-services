import { ILogger } from './interfaces/logger.interface';
import { Injectable, Scope } from '@nestjs/common';
import * as winston from 'winston';
import { IDefaultMetaService } from './interfaces/metadata.interface';

@Injectable({ scope: Scope.REQUEST })
export class LoggerService implements ILogger {
    private _logger: winston.Logger;
    
    constructor(defaultMeta: IDefaultMetaService) {
        this._logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: defaultMeta,
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple(),
                        winston.format.metadata(),
                        winston.format.timestamp(),
                    ),
                    level: 'info'
                })
            ],
        })
    }
    
    log(message: string, aditionalData?: any) {
        this._logger.log('info',{ message, aditionalData });
    }
    warn(message: string, aditionalData?: any) {
        this._logger.warn(message, { message, aditionalData });
    }
    error(message: string, aditionalData?: any) {
        this._logger.error(message, { message, aditionalData });
    }
    debug(message: string, aditionalData?: any) {
        this._logger.debug(message, { message, aditionalData });
    }

}