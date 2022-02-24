import { lazy } from 'react';
import { IRoute, Routes } from '../interfaces/routes/routes.types';

export const secureRoutes: IRoute[] = [
	{
		path: Routes.Home,
		element: lazy(() => import('../pages/secure/Home')),
		childrens: [
			{
				path: Routes.Dashboard,
				element: lazy(() => import('../pages/secure/Dashboard')),
			},
		],
	},
];

export const publicRoutes: IRoute[] = [
	{
		path: Routes.Home,
		element: lazy(() => import('../pages/public/Register')),
		childrens: [
			{
				path: Routes.Home,
				element: lazy(() => import('../pages/public/Login')),
			},
			{
				path: Routes.SignUp,
				element: lazy(() => import('../pages/public/SignUp')),
			},
		],
	},
];
