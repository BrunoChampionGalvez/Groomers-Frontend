import { useField } from "formik"
import styles from './CustomInputSelect.module.css'

const CustomInputSelect = ({ label, name }) => {
  const [field, meta] = useField(name);
  const { onBlur, onChange, ...rest } = field;
    // className={styles.inputfieldTurnosTitleServicio}
  return (
    <div className={styles.inputField}>
      <label
        className={styles.inputfieldTurnosTitleServicio}
      >{label}</label>
          <select {...rest}
            name={name}
            onChange={(e) => {
            onChange(e);
            }}
            onBlur={(e) => {
            onBlur(e);
        }}
            className={meta.error && meta.touched ? styles.inputError : styles.registerInput}
          >
              <option value="">Selecciona una opción</option>
              <option value="Baño y cepillado">Baño y cepillado</option>
              <option value="Corte de pelo">Corte de pelo</option>
              <option value="Corte de uñas">Corte de uñas</option>
              <option value="Limpieza de oídos">Limpieza de oídos</option>
              <option value="Baño contra pulgas y garrapatas">Baño contra pulgas y garrapatas</option>
              <option value="Acondicionadores para piel irritada">Acondicionadores para piel irritada</option>
              <option value="Tratamiento de aromaterapia">Tratamiento de aromaterapia</option>
              <option value="Limpieza de glándulas anales">Limpieza de glándulas anales</option>
          </select>
      {meta.touched && meta.error && <p className={styles.errorMessage}>{meta.error}</p>}
    </div>
  )
}

export default CustomInputSelect
