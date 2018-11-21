import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('srdgame/auth-frappe', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('frappe',
      <LogInButton
        className="Button LogInButton--frappe"
        icon="frappe"
        path="/auth/frappe">
        {app.translator.trans('srdgame-auth-frappe.forum.log_in.with_frappe_button')}
      </LogInButton>
    );
  });
});
