"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var profile_component_1 = require('./components/profile/profile.component');
var prevention_component_1 = require('./components/prevention/prevention.component');
var diagnostique_component_1 = require('./components/diagnostique/diagnostique.component');
var traitement_component_1 = require('./components/traitement/traitement.component');
var remission_component_1 = require('./components/remission/remission.component');
var auth_guard_1 = require('./auth.guard');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'prevention',
        component: prevention_component_1.PreventionComponent
    },
    {
        path: 'diagnostique',
        component: diagnostique_component_1.DiagnostiqueComponent
    },
    {
        path: 'traitement',
        component: traitement_component_1.TraitementComponent
    },
    {
        path: 'remission',
        component: remission_component_1.RemissionComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map