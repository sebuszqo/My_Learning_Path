module.exports = {
  apps: [
    {
      name: "myapp",
      script: "./dist/index.js",
      autorestart: true,
      max_memory_restart: "2G",
      exec_mode: "cluster",
      instances: -1,
    },
  ],
};

// we can use   number_we_want_to_use/"max"/-1
// max  - maximum number of threads
// -1 - maximum - 1 number of threads -- the best!
// npm install pm2@latest -g

// pm2 start ecosystem.config.js - in directory

// pm2 start ./dist/index.js
