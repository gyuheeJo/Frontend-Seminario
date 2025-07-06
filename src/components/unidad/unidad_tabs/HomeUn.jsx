import React from 'react'
import 'boxicons'

function HomeUn() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Bienvenido a IntegraServicios</h1>
        <h3>Panel Unidad de Servicio</h3>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Disponibilidad</h4>
          <p>
            En la pestaña de Disponibilidad podrás definir las horas disponibles
            de tu unidad de servicio y gestionar el calendario de atención.
          </p>
        </div>

        <div className="home-card">
          <h4>Recursos</h4>
          <p>
            En la pestaña de Recursos podrás agregar nuevos recursos y consultar
            los tipos de recursos asociados a tu unidad de servicio.
          </p>
        </div>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Empleados</h4>
          <p>
            En la pestaña de Empleados podrás visualizar los empleados asociados
            a tu unidad y gestionar sus asignaciones y responsabilidades.
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

export default HomeUn
