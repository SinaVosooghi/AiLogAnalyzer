import { IsEnum, IsInt, IsString } from "class-validator";

export enum Environment {
  Development = "development",
  Test = "test",
  Production = "production",
}

export class EnvironmentVariables {
  @IsEnum(Environment, {
    message: "NODE_ENV must be one of development, test, production",
  })
  NODE_ENV: Environment;

  @IsInt({ message: "PORT must be an integer" })
  PORT: number;

  @IsString({ message: "DATABASE_URL must be a valid URL" })
  DATABASE_URL: string;
}
