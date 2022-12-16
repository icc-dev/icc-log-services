export interface ILogger {
    log(message: string, aditionalData?: any): void;
    warn(message: string, aditionalData?: any): void;
    error(message: string, aditionalData?: any): void;
    debug(message: string, aditionalData?: any): void;
}