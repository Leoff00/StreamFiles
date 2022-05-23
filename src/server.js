import { app } from "./app.js";
import cluster from "cluster";
import os from "os";

const PORT = 3000;

if (cluster.isPrimary) {
  console.log("primary", process.pid);
  const totalCPUS = os.cpus().length;

  for (let i = 0; i < totalCPUS; i++) {
    const worker = cluster.fork();
    worker.on("message", (message) => {
      console.log(`returned ${message}`);
    });
  }
} else {
  console.log(`process id... ${process.pid}`);
  app.listen(PORT, () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
  });
}
