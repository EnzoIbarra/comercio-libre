import type { ILoginForm } from '@/types/login/ILoginForm';
import type { LoginErrors } from '@/types/login/LoginErrors';

const validateLogin = (values: ILoginForm): LoginErrors => {
	const errors: LoginErrors = {};

	if (!values.email) {
		errors.email = 'El email es obligatorio';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors.email = 'Email no válido';
	}

	if (!values.password) {
		errors.password = 'La contraseña es obligatoria';
	} else if (values.password.length < 3) {
		errors.password = 'Debe tener al menos 3 caracteres';
	} else if (/\s/.test(values.password)) {
		errors.password = 'No puede contener espacios';
	}

	return errors;
};

export default validateLogin;
