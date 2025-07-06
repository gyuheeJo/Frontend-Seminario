import React from 'react'
import Divider from '@mui/joy/Divider'

function AyudaEm() {
  return (
    <div className="ayuda">
      <div className="ayuda-info">
        <div className="ayuda-header">
          <h3>Universidad Distrital Francisco José de Caldas</h3>
          <h4>Seminario de Ingenieria de Software</h4>
          <h4>Docente: Santiago Salazar Fajardo</h4>
          <Divider sx={{ marginTop: 1 }} />
        </div>
        <div className="ayuda-estudiante">
          <p>Gyuhee Jo</p>
          <p>Codigo: 20212020035</p>
        </div>
        <div className="ayuda-estudiante">
          <p>Diana Paola Ferraro Cardenas </p>
          <p>Codigo: 20182020048 </p>
        </div>
        <div className="ayuda-estudiante">
          <p>Brayan David Santiago Botero Niño </p>
          <p>Codigo: 20212020018</p>
        </div>
        <div className="ayuda-estudiante">
          <p>Sergio David Bohada Vargas </p>
          <p>Codigo: 20191020033</p>
        </div>
        <div className="ayuda-estudiante">
          <p>Orlando Javier Carranza</p>
          <p>Codigo: 20212020037</p>
        </div>
      </div>
    </div>
  )
}

export default AyudaEm
