import { configDotenv } from "dotenv";
import express from "express";
import path from "path";
import cmeRoutes from "./routes/cmeRoutes";

function configureServer() {
  const args = process.argv.slice(2);
  const env = args[0] || "development";
  const envFile = path.resolve(__dirname, `../.env.${env}`);

  configDotenv({ path: envFile });

  const app = express();
  app.use(express.json());
  app.use('/donki', cmeRoutes);

  return app;
}

function startServer(app: express.Express) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started and listening on ${port}`);
  });
}

const app = configureServer();
startServer(app);

