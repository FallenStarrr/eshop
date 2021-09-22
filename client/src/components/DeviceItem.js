import React, { useContext } from "react";
import { Context } from "../index";
import { Col, Card, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE, DEVICE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import star from "../assets/star.png";
import iphone12 from "../assets/iphone12.jpg";
import { useHistory } from "react-router-dom";

const DeviceItem = ({ device }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div
          className={
            "mt-1 d-flex text-black-50 align-items-center justify-content-between"
          }
        >
          <div>Samsung...</div>

          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
