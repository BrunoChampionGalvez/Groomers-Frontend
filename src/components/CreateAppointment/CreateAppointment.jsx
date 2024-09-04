import { useEffect, useState } from "react"
import styles from "./CreateAppointment.module.css"
import { useDispatch, useSelector } from "react-redux"
import { addUserAppointment } from "../../redux/reducer"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import CustomInput from "./CustomInputCreateAppointment/CustomInputCreateAppointment"
import { Form, Formik, useField } from "formik"
import CustomInputSelect from "./CustomInputSelect/CustomInputSelect"
import { createAppointmentSchema } from "../../schemas/createAppointmentSchema"
import { toast } from "react-toastify"

const CreateAppointment = ({handleShowCreate, showCreateForm}) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const userAppointments = useSelector((state) => state.userAppointments)
    
    const user = useSelector((state) => state.user)

    const [id, setId] = useState(0)

    

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await axios.get("http://localhost:3000/appointments")
            setId(response.data.appointments.length + 1)
        }
        fetchAppointments()
    }, [userAppointments])

    const handleOnSubmit = async (values, { setSubmitting }) => {
        try {
            const appointmentToAddToBack = {
                ...values,
                userId: user.id
            }
            const response = await toast.promise(
                axios.post("http://localhost:3000/appointment/schedule", appointmentToAddToBack),
                {
                    pending: 'Cargando...',
                    success: '¡Turno creado!',
                    error: 'Hubo un error.'
                }
            )

            if (response.data === "Turno creado") {
                const appointmentToAddToFront = {
                    ...appointmentToAddToBack,
                    user: {id: user.id},
                    status: "Activo",
                    id: id
                }
                dispatch(addUserAppointment(appointmentToAddToFront));
                values.title = "";
                values.date = "";
                values.time = "";

                handleShowCreate()
            }
        } catch (error) {
        console.error("Error scheduling appointment:", error);
        }
    };

    return (
        <>
            <div className={styles.createAppointmentContainer}>
                <span onClick={handleShowCreate} className={styles.showCreateAppointmentButton}>Mis Turnos</span>
                <h2 className={styles.appointmentsTitle}>Agendar Turno</h2>
                <Formik
                    initialValues={{ title: '', date: '', time: '' }}
                    onSubmit={handleOnSubmit}
                    validationSchema={createAppointmentSchema}
                >
                    {(props) => {
                        // console.log(props.errors); // Log the errors to see if they are set
                        // console.log(props.touched); // Log touched fields
                        
                        return (
                            <Form className={styles.form}>
                                <div className={styles.inputFieldsContainer}>
                                    <CustomInputSelect name="title" label="Servicio:" />
                                    <CustomInput label="Fecha:" name="date" type="date"/>
                                    <CustomInput label="Hora:" name="time" type="time"/>
                                </div>
                                <button
                                    type="submit"
                                    className={(Object.values(props.errors).some(value => value !== "")) ? styles.disabledCreateAppointmentButton : styles.createAppointmentButton}
                                    disabled={(Object.values(props.errors).some(value => value !== "")) && true}
                                    >Agendar</button>
                            </Form>
                        )
                        }}
                    
                </Formik>
            </div>
        </>
    )
}

export default CreateAppointment