import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LogIngestionModule } from "./log-ingestion/log-ingestion.module";
import { AiAnalysisModule } from "./ai-analysis/ai-analysis.module";
import { AuthModule } from "./auth/auth.module";
import { MonitoringModule } from "./monitoring/monitoring.module";
import { CustomConfigModule } from "./config/config.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppConfigService } from "./config/config.service";

@Module({
  imports: [
    LogIngestionModule,
    AiAnalysisModule,
    AuthModule,
    MonitoringModule,
    CustomConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        type: "postgres",
        url: config.databaseUrl,
        autoLoadEntities: true,
        synchronize: config.isDatabaseSync,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
