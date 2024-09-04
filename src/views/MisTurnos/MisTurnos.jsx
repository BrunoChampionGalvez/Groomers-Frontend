import styles from "./MisTurnos.module.css"
import AppointmentsList from "../../components/AppointmentsList/AppointmentsList.jsx"
import { useState } from "react"
import CreateAppointment from "../../components/CreateAppointment/CreateAppointment.jsx"

function MisTurnos({ userAppointments, user }) {
    const [showCreateForm, setShowCreateForm] = useState(false)

    const handleShowCreate = () => {
        if (!showCreateForm) setShowCreateForm(true)
        else setShowCreateForm(false)
    }

    return (
        <div className={styles.container}>
            {showCreateForm && <CreateAppointment handleShowCreate={handleShowCreate} showCreateForm={showCreateForm} />}
            {!showCreateForm && <AppointmentsList handleShowCreate={handleShowCreate} showCreateForm={showCreateForm} />}
        </div>
    )
}

export default MisTurnos