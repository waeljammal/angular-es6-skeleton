import EventListener from 'event-listener';

/* @ngInject */
export default class HeaderController extends EventListener {
    constructor($state, $timeout, toaster, NavManager, User) {
        super.info('Loaded');
        this.$state = $state;
        this.toaster = toaster;
        this.nav = NavManager;
        this.user = User;
        this.$state = $state;
    }

    get enabled() {
        return this.nav.enabled;
    }

    get mainNavVisible() {
        return this.nav.mainNavVisible;
    }

    get subNavVisible() {
        return this.nav.subNavVisible;
    }

    /**
     * @returns Current path top.?
     */
    get currentPath() {
        return this.$state.current.name;
    }

    /**
     * @returns Main navigation data
     */
    get mainNavData() {
        return this.nav.mainNav;
    }

    /**
     * @returns Sub navigation data
     */
    get subNavData() {
        return this.nav.subNav;
    }

    get isLoggedIn() {
        return this.user.loggedIn;
    }

    /**
     * Checks if the current path includes the given child
     *
     * @param child Child to check
     * @returns True if path contains child path
     */
    includesChild(child) {
        return this.$state.includes(child.path);
    }

    /**
     * Checks if the current path matches the given child
     *
     * @param child Child to check
     * @returns True if paths match
     */
    isChild(child) {
        return this.$state.is(child.path);
    }

    /**
     * Navigates to the given path
     *
     * @param data Object containing the 'path'
     */
    navigateTo(data) {
        if(!this.enabled) {
            return;
        }
        
        let params = this.nav.getParams(data.path);

        if(!params) {
            params = {};
        }

        this.$state.transitionTo(
            data.path,
            params,
            {relative: false, reload: false, inherit: true}
        );
    }
}

module.exports = HeaderController;