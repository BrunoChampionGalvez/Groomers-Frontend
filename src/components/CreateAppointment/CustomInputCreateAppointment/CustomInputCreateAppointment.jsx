import { useField } from "formik"
import styles from "./CustomInputCreateAppointment.module.css"

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)


    // className={styles.inputFieldTitle}
    return (
        <div className={styles.inputField}>
            <label className={styles.inputFieldTitle}>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.error && meta.touched ? styles.inputError : styles.registerInput}
            />
            {meta.error && meta.touched && <p className={styles.errorMessage}>{meta.error}</p>}
        </div>
    )
}

export default CustomInput
