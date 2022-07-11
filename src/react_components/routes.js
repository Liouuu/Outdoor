const Entries = [
	{
		path: '/',
		componentKey: 'index',
		exact: true
	},
	{
		path: '/index',
		componentKey: 'index',
		exact: true
	},
	{
		path: '/index.html',
		componentKey: 'index',
		exact: true
	},
	{
		path: '/outdoor',
		componentKey: 'index',
		exact: true
	},
	{
		path: '/outdoor/',
		componentKey: 'index',
		exact: true
	},
	{
		path: '/404',
		componentKey: 'page_not_found',
		exact: true
	},
	{
		path: '/404.html',
		componentKey: 'page_not_found',
		exact: true
	},
	{
		path: '/error',
		componentKey: 'error',
		exact: true
	},
	{
		path: '/loading',
		componentKey: 'loading',
		exact: true
	},
	{
		path: '*',
		componentKey: 'fallback',
		exact: true
	}
];

const Loaders = {
	index: () => import('./pages/entry.jsx'),
	error: () => import('./pages/error_view.jsx'),
	loading: () => import('./pages/loading.jsx'),
	page_not_found: () => import('./pages/page_not_found.jsx'),
	fallback: () => import('./pages/page_not_found.jsx'),
};

export default {
    Entries,
    Loaders,
};
