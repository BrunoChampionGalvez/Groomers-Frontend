import { useField } from "formik"
import styles from "./CustomInputLogin&Register.module.css"

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
      <>
          <label htmlFor="">{label}</label>
          <input
            {...field}
            {...props}
            className={meta.error && meta.touched ? styles.inputError : styles.registerInput}
          />
          {meta.error && meta.touched && <p className={styles.errorMessage}>{meta.error}</p>}
      </>
  )
}

export default CustomInput
