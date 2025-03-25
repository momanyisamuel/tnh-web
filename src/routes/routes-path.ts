import { lazyLoad } from '@/components/layout/lazy-load';

export type UIRoutesType = {
	name: string;
	path: string;
	component: React.FC;
	children?: UIRoutesType[];
};

/**
 * Define your routes
 * @type {Record<keyof typeof UIRoutes, UIRoutesType>}
 */
const UIRoutes = {
	home: {
		name: 'navigation.home',
		path: '/',
		component: lazyLoad(() => import('../pages/home/Home')),
	},
	about: {
		name: 'navigation.about',
		path: '/about',
		component: lazyLoad(() => import('../pages/about/About')),
	},
};

export const RoutesPath: Record<keyof typeof UIRoutes, UIRoutesType> = UIRoutes;