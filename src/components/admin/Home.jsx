import React from 'react'
import 'boxicons'

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Bienvenido a IntegraServicios</h1>
        <h3>Panel de administración</h3>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Unidades de Servicio</h4>
          <p>
            En la pestaña de Unidades de Servicio podrás agregar usuarios para
            cada unidad existente en la institución y gestionar su
            configuración.
          </p>
        </div>

        <div className="home-card">
          <h4>Usuarios</h4>
          <p>
            En la pestaña de Usuarios podrás agregar a estudiantes y invitados
            asociados a la institución, así como gestionar sus permisos.
          </p>
        </div>
      </div>

      <div className="home-element">
        <div className="home-card">
          <h4>Empleados</h4>
          <p>
            En la pestaña de Empleados podrás agregar los funcionarios asociados
            a cada Unidad existente en la institución y asignar sus
            responsabilidades.
          </p>
        </div>

        <div className="home-card">
          <h4>Ayuda</h4>
          <p>
            En la pestaña de Ayuda podrás explorar los contactos de soporte en
            caso de algún fallo en la aplicación y acceder a la documentación.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
