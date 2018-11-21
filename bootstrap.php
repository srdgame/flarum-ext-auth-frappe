<?php

use Srdgame\Auth\Frappe\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddFrappeAuthRoute::class);
};
