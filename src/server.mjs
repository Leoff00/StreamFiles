import { app } from "./app.mjs";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT http://localhost:${PORT}`);
});
