import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get nodeEnv(): string {
    return this.configService.get<string>("NODE_ENV", "development");
  }

  get port(): number {
    return this.configService.get<number>("PORT", 3000);
  }

  get databaseUrl(): string {
    return this.configService.get<string>("DATABASE_URL", "");
  }

  get isDatabaseSync(): boolean {
    return this.nodeEnv === "development";
  }
}
