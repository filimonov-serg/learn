import Vue from 'vue';
import VueRouter from 'vue-router';

import multi from './multiGuards';
import store from './store';

const checkAuth = async function(to, from, next) {
    await new Promise(resolve => {
        setTimeout(()=> {
            resolve()
        }, 2000);
    });

    console.log("%c%s", "color: green","First guard passed");
    next();
};

const checkRoles = async function(to, from, next) {
    await store.dispatch('getUser');

    console.log("%c%s \n %o", "color: green","Second guard passed", store.state.user);
    next();
};

const checkAccess = async function(to, from, next) {
    await new Promise(resolve => {
        setTimeout(()=> {
            resolve()
        }, 2000);
    });

    console.log("%c%s", "color: orange", "Third guard unpassed");
    
    next(false); // Block navigation
    // next('/no-access'); // Redirect to another route
    // next(new Error("Access forbidden!")); // Redirect onError
};

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'main',
        component: () => import('./views/Main'),
        beforeEnter: multi([checkAuth, checkRoles, checkAccess])
    }, {
        path: '/no-access',
        name: 'reject',
        component: () => import('./views/Reject')
    }, {
        path: '/error',
        name: 'error',
        props: true,
        component: () => import('./views/ErrorPage')
    }]
});

router.onError((err) => {
    router.push({
        name: 'error',
        params: {message: err.message}
    });
});

export default router;