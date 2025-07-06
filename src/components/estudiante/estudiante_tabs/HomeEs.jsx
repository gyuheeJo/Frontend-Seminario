import React from 'react'
import 'boxicons'

function HomeEs() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Bienvenido a IntegraServicios</h1>
        <h3>Panel de usuario</h3>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Recursos</h4>
          <p>
            En la pestaña de Recursos puedes consultar los recursos disponibles
            y reservarlos si deseas. Explora la variedad de opciones a tu
            disposición.
          </p>
        </div>

        <div className="home-card">
          <h4>Reservas</h4>
          <p>
            En la pestaña de Reservas puedes consultar tus reservas vigentes y
            hacer cambios si deseas. Gestiona tus solicitudes de manera
            eficiente.
          </p>
        </div>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Ayuda</h4>
          <p>
            En la pestaña de Ayuda podrás explorar los contactos de soporte en
            caso de algún fallo en la aplicación y acceder a recursos de ayuda.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeEs
