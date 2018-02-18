import React from 'react'
import { Col, Row } from 'reactstrap'

const PortfolioPage = ({ title, imgURL, text }) => (
    <Row>
        <div style={{textAlign:"center"}}>
        <Col xs={12}>
            <h1>{title.toUpperCase()}</h1>
        </Col>
        <Col xs={12}>
            <img alt="representation of project" style={{ maxWidth: '400px' }} src={imgURL} />
        </Col>
        <Col xs={12}>
            <p>{text}</p>
        </Col>
        </div>
    </Row>
)

export default PortfolioPage