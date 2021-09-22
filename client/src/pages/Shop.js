import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import DeviceItem from "../components/DeviceItem";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchTypes,  fetchDevices } from "../http/deviceApi";

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevice(data.rows))
  }, [])
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>

        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
