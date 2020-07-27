import { Validator } from 'redux-form';

export const required: Validator = (value) => {
	return value ? undefined : 'Произошла ошибка. Поле должно быть заполнено';
};

export const minLength = (minLength: number): Validator => (value) => {
	return value && value.length < minLength
		? `Произошла ошибка. Минимум ${minLength} символов`
		: undefined;
};

export const maxLength = (maxLength: number): Validator => (value) => {
	return value && value.length > maxLength
		? `Произошла ошибка. Максимум ${maxLength} символов`
		: undefined;
};

export const email: Validator = (value) => {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Произошла ошибка. Неверный адрес электронной почты'
		: undefined;
};

export const latinOrCyrillic: Validator = (value) => {
	return value && !/[а-яёА-ЯЁa-zA-Z]$/i.test(value)
		? 'Произошла ошибка. Только буквы латиницы или кириллицы'
		: undefined;
};

export const passwordsMustMatch: Validator = (value, allValues) => {
	return value !== allValues.password
		? 'Произошла ошибка. Пароли должны совпадать'
		: undefined;
};
