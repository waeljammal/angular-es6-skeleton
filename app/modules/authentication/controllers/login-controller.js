import EventListener from 'event-listener';

/**
 * Login Controller
 */
/* @ngInject */
export default class LoginController extends EventListener {
    constructor($rootScope, toaster, User) {
        super.info('Loaded');
    }
}

module.exports = LoginController;
