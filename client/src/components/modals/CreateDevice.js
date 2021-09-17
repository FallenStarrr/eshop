import React, {useContext, useState} from "react";
import Modal from "react-bootstrap/Modal";
import { Button,  Col, Dropdown, Form, Row } from "react-bootstrap";
import { Context } from '../../index'
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-overlays/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


function CreateDevice({ show, onHide }) {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([]) 

  const addInfo = () => {
      setInfo([...info, {title: '', description: '', number: Date.now()}])   
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
         <Dropdown className="mt-2 mb-2">
             <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
              </Dropdown.Menu>
         </Dropdown>
         <Dropdown className="mt-2 mb-2">
             <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand => 
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
              </Dropdown.Menu>
         </Dropdown>

         <Form.Control
            className="mt-3"
            placeholder="Введите название устройства"
         />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
         />
          <Form.Control
            className="mt-3"
            type="file"
         />
         <hr />
         <Button
         variant={'outline'}
         onClick={addInfo}
         >
           Добавить новое свойство
         </Button>
         {
           info.map(i =>
                <Row key={i.number}>
                  <Col md={4}>
                    <Form.Control
                      placeholder="название характеристики"
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Control
                      placeholder="описание характеристики"

                    />
                  </Col>
                  <Col md={4}>
                      <Button
                      onClick={() => removeInfo(i.number)}
                      variant={"outline-danger"}
                      >Удалить</Button>
                  </Col>
                </Row>
           )
         }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateDevice;
