import app from "./src/app.js";
import { port } from "./src/config/index.js";

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
