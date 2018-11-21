import SettingsModal from 'flarum/components/SettingsModal';
import app from 'flarum/app';

export default class FrappeSettingsModal extends SettingsModal {
  className() {
    return 'FrappeSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-frappe.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-frappe.app_secret')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.hosted_domain_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-frappe.app_domain')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-frappe.admin.frappe_settings.hosted_name_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-frappe.app_name')}/>
      </div>
    ];
  }
}
