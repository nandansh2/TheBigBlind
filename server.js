/**
 * Passenger entry point.
 *
 * The host boots this app with `PassengerStartupFile server.js` (see the
 * generated public_html/.htaccess). Without this file Passenger has nothing to
 * launch, the Node process never starts, and every request returns
 * 503 Service Unavailable even though `next build` succeeded.
 *
 * Passenger supplies the port to bind on via PORT.
 */
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOST || "0.0.0.0";

// Never run the dev compiler in the hosted environment.
process.env.NODE_ENV = process.env.NODE_ENV || "production";

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res).catch((err) => {
        console.error("Request failed:", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      });
    }).listen(port, hostname, () => {
      console.log(`Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start Next.js:", err);
    process.exit(1);
  });
