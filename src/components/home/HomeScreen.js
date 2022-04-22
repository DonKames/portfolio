import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const HomeScreen = () => {
  return (
    <Row className="mt-3 flex-row-reverse">
        <Col xs={12} md={6}>
            <img className="img rounded mx-auto d-block" alt="Profile" src="https://via.placeholder.com/450x500/cccccc"/>
        </Col>
        <Col xs={12} md={6} className="ps-5  d-flex flex-column">
            
            <p className="fs-3 mt-auto">Bienvenido</p>
            <p className="fs-1">Yo soy, <strong>Camilo</strong></p>
            <p className="fs-1 fw-bold">Santander.</p>
            <p className="fs-5">Desarrollador Back-End</p>
        </Col>
    </Row>
  )
}
