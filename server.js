/**
 * Passenger entry point.
 *
 * The host boots this app with `PassengerStartupFile server.js` (see the
 * generated public_html/.htaccess). Without this file Passenger has nothing to
 * launch, the Node process never starts, and every request returns
 * 503 Service Unavailable even though `next build` succeeded.
 *
 * Passenger supplies the address to bind on via PORT. That may be a TCP port
 * *or* a Unix socket path, so it is passed to listen() untouched — parsing it
 * as an integer would break the socket case.
 */
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;

if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      Promise.resolve(handle(req, res)).catch((err) => {
        console.error("Request failed:", req.url, err);
        if (!res.headersSent) res.statusCode = 500;
        res.end("Internal Server Error");
      });
    });

    server.on("error", (err) => {
      console.error("HTTP server error:", err);
      process.exit(1);
    });

    // No host argument: Passenger binds this for us.
    server.listen(port, () => {
      console.log("Next.js ready, listening on", port);
    });
  })
  .catch((err) => {
    console.error("Failed to start Next.js:", err);
    process.exit(1);
  });
