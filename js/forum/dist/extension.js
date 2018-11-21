'use strict';

System.register('srdgame/auth-frappe/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('srdgame/auth-frappe', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('frappe', m(
            LogInButton,
            {
              className: 'Button LogInButton--frappe',
              icon: 'frappe',
              path: '/auth/frappe' },
            app.translator.trans('srdgame-auth-frappe.forum.log_in.with_frappe_button')
          ));
        });
      });
    }
  };
});
