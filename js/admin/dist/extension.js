'use strict';

System.register('srdgame/auth-frappe/components/FrappeSettingsModal', ['flarum/components/SettingsModal', 'flarum/app'], function (_export, _context) {
  "use strict";

  var SettingsModal, app, FrappeSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {
      FrappeSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(FrappeSettingsModal, _SettingsModal);

        function FrappeSettingsModal() {
          babelHelpers.classCallCheck(this, FrappeSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FrappeSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(FrappeSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'FrappeSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-frappe.app_id') })
			), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-frappe.app_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.hosted_domain_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-frappe.app_domain') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.hosted_name_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-frappe.app_name') })
            )];
          }
        }]);
        return FrappeSettingsModal;
      }(SettingsModal);

      _export('default', FrappeSettingsModal);
    }
  };
});;
'use strict';

System.register('srdgame/auth-frappe/main', ['flarum/extend', 'flarum/app', 'srdgame/auth-frappe/components/FrappeSettingsModal'], function (_export, _context) {
  "use strict";

  var extend, app, FrappeSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_johnhearfieldAuthFrappeComponentsFrappeSettingsModal) {
      FrappeSettingsModal = _johnhearfieldAuthFrappeComponentsFrappeSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('srdgame/auth-frappe', function (app) {
        app.extensionSettings['srdgame-auth-frappe'] = function () {
          return app.modal.show(new FrappeSettingsModal());
        };
      });
    }
  };
});
