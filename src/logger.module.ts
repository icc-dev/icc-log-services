import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './logger';
import { IDefaultMetaService } from './interfaces/metadata.interface'
@Module({})
export class LoggerModule {
    static forRoot(
        metadata: IDefaultMetaService
    ): DynamicModule {
        const loggerServiceProvider = {
            provide: LoggerService,
            useFactory: () => {
                return new LoggerService(metadata)
            }
        }
        return {
            module: LoggerModule,
            providers: [loggerServiceProvider],
            exports: [loggerServiceProvider]
        }
    }
}