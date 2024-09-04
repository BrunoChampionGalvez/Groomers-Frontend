import axios from "axios";
import styles from "./Appointment.module.css";
import { useDispatch } from "react-redux";
import { addUserAppointments } from "../../redux/reducer";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'

function Appointment({ id, title, date, time, status }) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const cancelOnClick = async (event) => {
        event.preventDefault()
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertirlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancelar Turno"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.put(`http://localhost:3000/appointment/cancel/${id}`);
                    const response = await axios.get(`http://localhost:3000/users/${user.id}`);
                    const appointments = response.data.user.appointments
                    appointments.sort((a, b) => b.id - a.id)
                    dispatch(addUserAppointments(appointments))
                    Swal.fire({
                        title: "¡Cancelado!",
                        text: "Tu turno fue cancelado.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire({
                        title: "¡Error!",
                        text: "Hubo un error al cancelar el turno.",
                        icon: "error"
                    });
                }
            }
        });
    }

    return (
        <div className={styles.appointment}>
            <h3 className={styles.tableServicio}>{title}</h3>
            <p>{date}</p>
            <p>{time}</p>
            {(status === "Activo") ? <p className={styles.active}>{status}</p> : <p className={styles.cancelled}>{status}</p>}
            {(status === "Activo") ? <button id={id} onClick={cancelOnClick} className={styles.buttonActive}>Cancelar</button> : <button className={styles.buttonInactive}>Cancelar</button>}
        </div>
    );
}

export default Appointment;
