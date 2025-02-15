import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LogIngestionModule } from "./log-ingestion/log-ingestion.module";
import { AiAnalysisModule } from "./ai-analysis/ai-analysis.module";
import { AuthModule } from "./auth/auth.module";
import { MonitoringModule } from "./monitoring/monitoring.module";

@Module({
  imports: [LogIngestionModule, AiAnalysisModule, AuthModule, MonitoringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
