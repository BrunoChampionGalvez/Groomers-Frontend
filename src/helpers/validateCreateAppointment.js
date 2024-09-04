export const validateCreateAppointmnet = (appointment) => {
    const result = {
        service: '',
        date: '',
        time: '',
    }

    if (appointment.service === "Selecciona una opción") {
        result.service = "Falta seleccionar."
    }

    const today = Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)

    const appointmentDate = Date(appointment.date)
    const oneMonthLater = today.getMonth() + 1

    if (appointmentDate < today) {
        result.date = "Debe ser posterior a hoy."
    } else if (appointmentDate.getMonth() > oneMonthLater) {
        result.date = "Debe ser no más de un més después."
    }

    const time = Date(`1970-01-01T${appointment.time}:00`)
    const inferiorTimeLimit = Date(`1970-01-01T8:00:00`)
    const superiorTimeLimit = Date(`1970-01-01T17:00:00`)

    if (time < inferiorTimeLimit || time > superiorTimeLimit) {
        result.time = "Debe ser entre las 8:00 y las 17:00."
    }

    return result
}