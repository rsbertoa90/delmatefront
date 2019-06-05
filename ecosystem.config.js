module.exports = {
  apps : [{
    name: 'redlimp.com',
    script: './node_modules/nuxt/bin/nuxt.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
   /*  args: 'one two', */
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'forge',
      host: '206.189.176.126',
      ref  : 'origin/master',
     /*  repo : 'git@github.com:repo.git', */
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
