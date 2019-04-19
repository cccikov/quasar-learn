const routes = [{
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        children: [{
                path: '',
                component: () => import('pages/Index.vue')
            },
            {
                path: '/tabs',
                component: () => import('pages/tabs.vue')
            },
            {
                path: '/console',
                component: () => import('pages/console.vue')
            },
            {
                path: '/web',
                component: () => import('pages/web.vue')
            },
            {
                path: '/qrcode',
                component: () => import('pages/qrcode.vue')
            },

            {
                path: '/ajax',
                component: () => import('pages/ajax.vue')
            },

        ]
    },
    {
        path: '/cordova-plugin-camera-preview',
        component: () => import('../pages/cordova-plugin-camera-preview.vue')
    },
    {
        path: '/camera',
        component: () => import('../layouts/camera.vue')
    },
    {
        path: '/scroll',
        component: () => import('layouts/scroll.vue')
    },
    {
        path: '/qrcode1',
        component: () => import('pages/qrcode1.vue')
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
