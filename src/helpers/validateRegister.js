function validarDatos(datos) {
    const resultado = {
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    };

    if (!datos.name) {
        resultado.name = 'El nombre es obligatorio.';
    }

    if (!datos.email || !/^\S+@\S+\.\S+$/.test(datos.email)) {
        resultado.email = 'No es un email válido.';
    }

    const today = new Date();
    const birthdate = new Date(datos.birthdate);
    if (birthdate >= today) {
        resultado.birthdate = 'Debe ser anterior a hoy.';
    }

    if (datos.nDni.length < 4) {
        resultado.nDni = 'Debe tener 4 dígitos como mínimo.'
    }

    if (!datos.username || datos.username.length < 5) {
        resultado.username = 'Debe tener al menos 5 caracteres.';
    }

    if (!datos.password || datos.password.length < 8) {
        resultado.password = 'Debe tener al menos 8 caracteres.';
    }

    return resultado;
}

export default validarDatos