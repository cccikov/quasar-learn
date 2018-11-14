
const routes = [
	{
		path: '/',
		component: () => import('layouts/MyLayout.vue'),
		children: [
            { path: '', component: () => import('pages/Index.vue') },
			{ path: '/tabs', component: () => import('pages/tabs.vue') },
			{ path: '/console', component: () => import('pages/console.vue') },
		]
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
