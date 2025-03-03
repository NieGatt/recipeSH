import { NestFactory } from "@nestjs/core"
import { AppModule } from "./modules/app.module"
import "dotenv/config"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const PORT = Number(process.env.PORT) ?? 8000
    app.listen(PORT)
}
bootstrap()