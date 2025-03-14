const { PORT } = require("./configs/config");
const { connectionDatabase } = require("./configs/db.config");

const app = require("./app");

(async () => {
  try {
    await connectionDatabase();
    app.listen(PORT, () => console.log(`Server is running at PORT : ${PORT}`));
  } catch (error) {
    console.error(`error with connection mongodb :: ${error}`);
    process.exit(1);
  }
})();


process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});