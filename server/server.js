const express = require("express");
const app = express();


// ✅ GRACEFUL SHUTDOWN HANDLER
const gracefulShutdown = (signal) => {
  console.log(`\n🔄 Received ${signal}. Starting graceful shutdown...`);

  server.close((err) => {
    if (err) {
      console.error("❌ Error during server shutdown:", err);
      process.exit(1);
    }

    console.log("✅ Server closed successfully");

    // Close database connection if needed
    const mongoose = require("mongoose");
    mongoose.connection.close(() => {
      console.log("✅ Database connection closed");
      process.exit(0);
    });
})
}

// ✅ EXPORT FOR TESTING
module.exports = app;
