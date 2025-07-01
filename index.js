import * as functions from "@google-cloud/functions-framework";

functions.http("entrypoint", (req, res) => {
  res.send("Hello, World");
});
