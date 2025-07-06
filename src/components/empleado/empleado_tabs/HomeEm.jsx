import React from 'react'
import 'boxicons'

function HomeEm() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Bienvenido a IntegraServicios</h1>
        <h3>Panel de empleado</h3>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Recursos</h4>
          <p>
            En la pestaña de Recursos, puedes registrar los recursos disponibles
            en la unidad a la que perteneces y además consultar los recursos
            disponibles más reservados.
          </p>
        </div>

        <div className="home-card">
          <h4>Préstamos</h4>
          <p>
            En la pestaña de Préstamos puedes consultar las reservas vigentes
            por parte de los usuarios y prestar el recurso si es necesario.
          </p>
        </div>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Solicitudes</h4>
          <p>
            En la pestaña de Solicitudes, podrás mirar y aceptar las solicitudes
            de devolución vigentes de los recursos prestados.
          </p>
        </div>

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

export default HomeEm
