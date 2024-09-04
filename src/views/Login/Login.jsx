import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/reducer";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import CustomInput from "../../components/CustomInputLogin&Register/CustomInputLogin&Register";
import { loginSchema } from "../../schemas/loginSchema";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await toast.promise(
                axios.post("https://groomers-backend.onrender.com/users/login", values),
                {
                    pending: 'Cargando...',
                    success: '¡Inicio de sesión satisfactorio!',
                    error: 'Hubo un error.'
                }
            )
            const loggedIn = response.data.login;
            if (loggedIn) {
                dispatch(addUser(response.data.user));
                navigate("/");
                window.scrollTo(0, 0)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Inicio de Sesión</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={loginSchema}
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
                        <button
                            type="submit"
                            className={(Object.values(props.errors).some(value => value !== "")) ? styles.disabledLoginButton : styles.loginButton}
                            disabled={(Object.values(props.errors).some(value => value !== "")) && true}
                        >
                            Iniciar Sesión
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
