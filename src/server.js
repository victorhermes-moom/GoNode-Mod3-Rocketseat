class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production"; // var responsável por saber se o ambiente está em desenvolvimento ou não

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
