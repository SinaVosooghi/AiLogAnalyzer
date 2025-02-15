import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";
import { EnvironmentVariables } from "./validation.schema";

function validateConfig(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(`Config validation error: ${JSON.stringify(errors)}`);
  }
  return validatedConfig;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || "development"}`,
      validate: validateConfig,
    }),
  ],
})
export class CustomConfigModule {}
