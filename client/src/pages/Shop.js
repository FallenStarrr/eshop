import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import TypeBar from '../components/TypeBar'

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2"> 
                    <Col md={3}>
                      <TypeBar></TypeBar>

                    </Col>

                    <Col md={9}>
                    <BrandBar/>
</Col>
            </Row>
        </Container>
    )
}


export default Shop