module.exports = {
  apps : [{
        script: 'index.js',
        env: {
          "PORT": 80,
          "NODE_ENV": "production"
        },
    }
  ],

  deploy : {
    production : {
      user : 'root',
      host : ['46.17.104.21'],
      ref  : 'origin/master',
      repo : 'https://github.com/alesikivan/nodeApp.git',
      path : '/root/app',
      ssh_options : "StrictHostKeyChecking=no",
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
