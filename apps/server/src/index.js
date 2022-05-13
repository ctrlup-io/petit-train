import "dotenv/config";
import { createServer } from "http";
import { Server } from "socket.io";
import boxen from "boxen";
import chalk from "chalk";
import express from "express";
import cors from "cors";

const origin = [process.env.APP_URI];
const app = express();
app.use(cors({ origin }));
const server = createServer(app);
const io = new Server(server, { cors: { origin } });

io.on("connection", (socket) => {
  console.log(chalk.bold(`👋  New participant ${socket.id}`));

  socket.on("disonnect", () => {
    console.log(chalk.bold(`👋  Bye ${socket.id}`));
  });

  socket.on("coffee", async () => {});
});

app.get("/coffee", async (req, res) => {});

const port = parseInt(process.env.PORT) || 8080;
server.listen(port, () => {
  console.info(
    boxen(chalk.bold(`🌈 Server listening to ${port}`), {
      padding: 1,
      margin: 2,
    })
  );
});
