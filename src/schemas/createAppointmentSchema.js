import * as yup from 'yup';

const isValidTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes >= 8 * 60 && totalMinutes <= 17 * 60; // Between 8:00 and 17:00
};

const today = new Date();

const isNotSunday = (date) => {
    const day = date.getDay();
    return day !== 0; // Sunday is represented by 0
};

// Define the validation schema
export const createAppointmentSchema = yup.object().shape({
    title: yup.string().required('Debes seleccionar una opción.'),
    date: yup.date()
        .min(today, 'Debe ser posterior a hoy.') // Set minimum date as today
        .required('Requerido.')
        .test('is-not-sunday', 'No se permiten citas los domingos.', isNotSunday),
    time: yup.string()
        .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in HH:MM format') // Ensure the time format is HH:MM
        .test('is-valid-time', 'La hora debe ser entre las 08:00 y las 17:00.', isValidTime) // Validate the time range
        .required('Requerido.'), // Require time
});
