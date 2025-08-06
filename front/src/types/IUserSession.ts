export interface IUserSession {
	token: string;
	user: {
		id: number;
		name: string;
		email: string;
		address: string;
		orders: [];
		phone: string;
	};
}
