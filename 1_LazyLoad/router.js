export default new VueRouter({
   mode: 'history',
   base: isProduction ? '/career_portal' : '/',

   routes: [{
       path: '/',
       name: 'main',
       component: () => import('./views/Main')
   }, {
       path: '/article/:id',
       name: 'article',
       component: () => import('./views/Article')
   }, {
       path: '/profile',
       name: 'profile',
       component: () => import('./views/Profile'),
       children: [
           {
               path: ':id',
               name: 'profile-person',
               component: () => import('./views/Profile'),
               beforeEnter: ISHR
           }
       ]
   }]
   // ....
});