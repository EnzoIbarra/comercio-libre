'use client';

import { IUserSession } from '@/types/IUserSession';
import { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
	userData: IUserSession | null;
	setUserData: (userData: IUserSession | null) => void;
	logout: () => void;
}
interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
	userData: null,
	setUserData: () => {},
	logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [userData, setUserData] = useState<IUserSession | null>(null);
	const router = useRouter();

	useEffect(() => {
		const match = document.cookie.match(/(^|;\s*)userSession=([^;]+)/);
		if (match) {
			try {
				const parsed: IUserSession = JSON.parse(decodeURIComponent(match[2]));
				setUserData(parsed);
			} catch {
				document.cookie = 'userSession=; Path=/; Max-Age=0';
			}
		}
	}, []);

	useEffect(() => {
		if (userData) {
			const serialized = encodeURIComponent(JSON.stringify(userData));
			document.cookie = [
				`userSession=${serialized}`,
				'Path=/',
				`Max-Age=${7 * 24 * 60 * 60}`,
			].join('; ');
		}
	}, [userData]);

	const logout = () => {
		setUserData(null);
		document.cookie = 'userSession=; Path=/; Max-Age=0';
		router.push('/login');
	};

	return (
		<AuthContext.Provider value={{ userData, setUserData, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
