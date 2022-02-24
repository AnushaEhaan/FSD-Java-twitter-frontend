import { lazy } from 'react';
import { IRoute, Routes } from '../interfaces/routes/routes.types';

export const secureRoutes: IRoute[] = [
	{
		path: Routes.Home,
		element: lazy(() => import('../pages/secure/Home')),
		exact: true,
		childrens: [
			{
				path: Routes.Dashboard,
				element: lazy(() => import('../pages/secure/Dashboard')),
				exact: true,
			},
		],
	},
];

export const publicRoutes: IRoute[] = [
	{
		path: Routes.Home,
		element: lazy(() => import('../pages/public/Login')),
		exact: true,
	},
];
