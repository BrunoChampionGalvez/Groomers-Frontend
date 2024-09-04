import axios from "axios"
import styles from "./Register.module.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import CustomInput from "../../components/CustomInputLogin&Register/CustomInputLogin&Register"
import { registerSchema } from "../../schemas/registerSchema"

const Register = () => {
    const navigate = useNavigate()
    const handleOnSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await toast.promise(
                axios.post("http://localhost:3000/users/register", values),
                {
                    pending: 'Cargando...',
                    success: '¡Registro satisfactorio!',
                    error: 'Hubo un error.'
                }
            )
            navigate("/")
            window.scrollTo(0, 0)
        } catch (error) {
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.registerTitle}>Registro</h2>
            <Formik
                initialValues={{ username: '', password: '', name: '', email: '', birthdate: '', nDni: '' }}
                validationSchema={registerSchema}
                onSubmit={handleOnSubmit}
            >
                {(props) => (
                    <Form className={styles.form}>
                        <div className={styles.inputField}>
                            <CustomInput
                                label="Nombre de usuario"
                                name="username"
                                type="text"
                                placeholder="Carlos123"
                            />
                        </div>

                        <div className={styles.inputField}>
                            <CustomInput
                                label="Contraseña"
                                name="password"
                                type="password"
                                placeholder="********"
                            />
                        </div>

                        <div className={styles.inputField}>
                            <CustomInput
                                label="Nombre"
                                name="name"
                                type="text"
                                placeholder="Carlos"
                            />
                        </div>

                        <div className={styles.inputField}>
                            <CustomInput
                                label="Correo electrónico"
                                name="email"
                                type="email"
                                placeholder="carlos@example.com"
                            />
                        </div>

                        <div className={styles.inputField}>
                            <CustomInput
                                label="Fecha de nacimiento"
                                name="birthdate"
                                type="date"
                            />
                        </div>

                        <div className={styles.inputField}>
                            <CustomInput
                                label="Número de DNI"
                                name="nDni"
                                type="text"
                                placeholder="12345678"
                            />
                        </div>

                        <button
                            type="submit"
                            className={(Object.values(props.errors).some(value => value !== "")) ? styles.disabledRegisterButton : styles.registerButton}
                            disabled={(Object.values(props.errors).some(value => value !== "")) && true}
                        >
                            Registrarme
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register
