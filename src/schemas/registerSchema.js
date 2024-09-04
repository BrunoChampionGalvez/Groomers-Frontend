import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(5, "Debe contener mínimo 5 caractéres.")
        .required("Requerido."),
    password: yup.string()
        .min(8, "Debe contener mínimo 8 caractéres.")
        .required("Requerido."),
    name: yup.string()
        .required("Requerido."),
    email: yup.string()
        .email("Debe ser un correo válido.")
        .required("Requerido."),
    birthdate: yup.date()
        .max(new Date(), "Debe ser una fecha anterior a hoy.")
        .required("Requerido."),
    nDni: yup.string().test('is-number', 'Debe ser un número.', value => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    })
});