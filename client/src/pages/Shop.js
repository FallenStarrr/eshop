import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceItem from '../components/DeviceItem'
import DeviceList from '../components/DeviceList'
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
                    <DeviceList/>
</Col>
            </Row>
        </Container>
    )
}


export default Shop