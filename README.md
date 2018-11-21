# Flarum Frappe Authenticator
Allows users to login using their Frappe Account.

## Installation
To install, use composer:
```
composer require srdgame/flarum-ext-auth-frappe
```
## Usage
* Install extension via Composer / Packagist
* Enable extension in the admin/extensions of Flarum
* Fill in the settings field for the extension


## Setup instructions for Frappe ##
1. Go to your frappe desk form
2. Create a oauth client and give it a name (eg My Flarum)
3. Redirects URIs: http://<flarum_domain>:<port>/auth/frappe
4. Default Redirect URI: http://<flarum_domain>:<port>/auth/frappe
5. From the resulting OAuth client dialog box, you will be able to access the **Client ID** and the **Client Secret** will you will need to paste into the settings box on the Flarum extension

----------
