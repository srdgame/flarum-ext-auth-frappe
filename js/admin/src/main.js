import { extend } from 'flarum/extend';
import app from 'flarum/app';

import FrappeSettingsModal from 'srdgame/auth-frappe/components/FrappeSettingsModal';

app.initializers.add('srdgame/auth-frappe', app => {
  app.extensionSettings['srdgame-auth-frappe'] = () => app.modal.show(new FrappeSettingsModal());
});
