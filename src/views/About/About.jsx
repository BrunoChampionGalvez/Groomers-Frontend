import styles from "./About.module.css"

function About() {
  return (
      <div className={styles.container}>
          <div className={styles.header}>
              <h1>Sobre Nosotros</h1>
              <h2>Bienvenidos a Groomers</h2>
          </div>

          <h3>Nuestra Historia</h3>
          <p>En Groomers, creemos que cada mascota merece ser tratada con amor, cuidado y respeto. Fundada en 2020, nuestra misión es proporcionar servicios de grooming de alta calidad que no solo realcen la belleza de tu mascota, sino que también promuevan su bienestar y felicidad.</p>

          <p>La idea de Groomers nació de una profunda pasión por los animales y el deseo de ofrecer un servicio excepcional en el cuidado de mascotas. Desde nuestros humildes comienzos, hemos crecido gracias a la confianza y lealtad de nuestros clientes, quienes valoran nuestro compromiso con la excelencia y el trato amable hacia sus queridos compañeros de vida.</p>

          <h3>Nuestro Equipo</h3>
          <p>Contamos con un equipo de profesionales altamente capacitados y apasionados por los animales. Cada miembro de nuestro equipo ha sido seleccionado no solo por su habilidad técnica, sino también por su dedicación y amor hacia las mascotas. Nuestro personal se mantiene al día con las últimas tendencias y técnicas en grooming para asegurar que tu mascota reciba el mejor cuidado posible.</p>

          <h3>Nuetros Servicios</h3>
          <p>En Groomers, ofrecemos una amplia gama de servicios de grooming adaptados a las necesidades específicas de cada mascota. Desde baños y cortes de pelo hasta tratamientos especiales y masajes relajantes, nos aseguramos de que cada visita sea una experiencia agradable y sin estrés para tu amigo peludo.</p>

          <h3>Nuestro Compromiso</h3>
          <p>Nos comprometemos a mantener un ambiente seguro, limpio y amigable en todas nuestras instalaciones. Utilizamos productos de alta calidad y técnicas suaves para garantizar la comodidad y seguridad de tu mascota en todo momento. En Groomers, entendemos que cada mascota es única y nos esforzamos por personalizar nuestros servicios para satisfacer sus necesidades individuales.</p>

          <h3>Conéctate con Nosotros</h3>
          <p>En Groomers, valoramos la comunicación abierta y transparente con nuestros clientes. Estamos aquí para responder cualquier pregunta y asegurarnos de que tanto tú como tu mascota tengan una experiencia positiva con nosotros. Síguenos en nuestras redes sociales y no dudes en visitarnos para descubrir cómo podemos ayudar a tu mascota a lucir y sentirse lo mejor posible.</p>

          <p>Gracias por elegir Groomers. ¡Esperamos poder cuidar y consentir a tu mascota pronto!</p>

          <div className={styles.imgContainer}>
            <img src="https://cdn.pixabay.com/photo/2016/11/29/09/58/dog-1868871_1280.jpg" alt="perro feliz" />
            <p>Rocky saliendo de su sesión de grooming en la sede de San Borja.</p>
          </div>
      </div>
  )
}

export default About
