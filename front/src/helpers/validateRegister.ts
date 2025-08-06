import type { IRegisterForm } from '@/types/register/IRegisterForm';
import type { RegisterErrors } from '@/types/register/RegisterErrors';

const validateRegister = (values: IRegisterForm): RegisterErrors => {
	const errors: RegisterErrors = {};

	if (!values.name) {
		errors.name = 'El nombre es obligatorio';
	}

	if (!values.email) {
		errors.email = 'El email es obligatorio';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors.email = 'Email no válido';
	}

	if (!values.address) {
		errors.address = 'La dirección es obligatoria';
	}

	if (!values.phone) {
		errors.phone = 'El teléfono es obligatorio';
	} else if (!/^\d{7,}$/.test(values.phone)) {
		errors.phone = 'Al menos 7 dígitos';
	}

	if (!values.password) {
		errors.password = 'La contraseña es obligatoria';
	} else if (values.password.length < 6) {
		errors.password = 'Debe tener al menos 6 caracteres';
	} else if (/\s/.test(values.password)) {
		errors.password = 'No puede contener espacios';
	}

	return errors;
};

export default validateRegister;
