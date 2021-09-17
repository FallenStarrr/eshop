import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Context } from '../../index'
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-overlays/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


function CreateDevice({ show, onHide }) {
  const {device} = useContext(Context)
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
         <Dropdown>
             <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
              </Dropdown.Menu>
         </Dropdown>
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
