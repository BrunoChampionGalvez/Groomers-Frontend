function validarDatos(datos) {
    const resultado = {
        username: '',
        password: ''
    };

    if (!datos.username) {
        resultado.username = 'El nombre de usuario es obligatorio.';
    }

    if (!datos.password) {
        resultado.password = 'La contraseña es obligatoria.';
    }

    return resultado;
}

export default validarDatos;
