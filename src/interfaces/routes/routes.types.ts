export interface IRoute {
	path: string;
	element: React.ComponentType<any>;
	exact?: boolean;
	childrens?: IRoute[];
}

export enum Routes {
	Home = '/',
	Login = '/login',
	Dashboard = '/dashboard',
}
