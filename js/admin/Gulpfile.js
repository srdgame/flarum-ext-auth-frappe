var gulp = require('flarum-gulp');

gulp({
  modules: {
    'srdgame/auth-frappe': [
      'src/**/*.js'
    ]
  }
});
