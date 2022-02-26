import { lazy } from 'react';
import { IRoute, Routes } from '../interfaces/routes/routes.types';

export const secureRoutes: IRoute[] = [
	{
		path: Routes.Home,
		element: lazy(() => import('../pages/secure/Home')),
		childrens: [
			{
				path: Routes.Home,
				element: lazy(() => import('../pages/secure/Dashboard')),
			},
		],
	},
];

export const authRoutes: IRoute[] = [
	{
		path: Routes.Home,
		element: lazy(() => import('../pages/auth/Register')),
		childrens: [
			{
				path: Routes.Home,
				element: lazy(() => import('../pages/auth/Login')),
			},
			{
				path: Routes.SignUp,
				element: lazy(() => import('../pages/auth/SignUp')),
			},
		],
	},
];
