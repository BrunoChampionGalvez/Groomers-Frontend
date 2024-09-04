import React, { useEffect, useState } from "react";
import styles from "./AppointmentsList.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "../Appointment/Appointment";
import { addUserAppointments } from "../../redux/reducer";
import CreateAppointment from "../CreateAppointment/CreateAppointment";

const AppointmentsList = ({handleShowCreate, showCreateForm}) => {
    const userAppointments = useSelector((state) => state.userAppointments);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchAppointments = async () => {
            if (!user || !user.id) {
                return;
            }
            try {
                const response = await axios.get(`http://localhost:3000/users/${user.id}`);
                const appointments = response.data.user.appointments
                appointments.sort((a, b) => b.id - a.id)
                dispatch(addUserAppointments(appointments))
            } catch (error) {
                console.error(error);
            }
        };

        fetchAppointments();
    }, [user]);

    return (
        <>
            <div className={styles.appointmentsAndTitle}>
                <span onClick={handleShowCreate} className={styles.showCreateAppointmentButton}>Agendar Turno</span>
                <h2 className={styles.appointmentsTitle}>Mis Turnos</h2>
                {userAppointments.length !== 0 ? (
                    <>
                        <div className={styles.headerTableContainer}>
                            <h3 className={styles.servicioTitle}>Servicio</h3>
                            <h3 className={styles.datosTitle}>Fecha</h3>
                            <h3 className={styles.datosTitle}>Hora</h3>
                            <h3 className={styles.datosTitle}>Estado</h3>
                            <div className={styles.datosDiv}></div>
                        </div>
                        <div className={styles.appointmentsContainer}>
                            {userAppointments.map((appointment) => (
                                <Appointment key={appointment.id} {...appointment} />
                            ))}
                        </div>
                    </>
                ) : (
                    <h3>No hay turnos agendados.</h3>
                )}
            </div>
        </>
    );
};

export default AppointmentsList;
