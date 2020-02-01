import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Add from '../Add';
import { useDispatch } from 'react-redux';
import { deleteToDO } from '../../State/Actions';

export default function SimpleModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    function openModal() {
        handleShow();
    }
    function deleteData(){
        if(props.data.status===1){
            alert('cant delete done todo')
        }
        else {
            dispatch(deleteToDO(props.data.id));
            handleClose();
        }
    }
    return (
        <>
            <Button variant="primary" onClick={openModal}>
                {props.title}
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>To Do</Modal.Title>
                </Modal.Header>
                <Modal.Body><Add data={props.data} isEdit={props.isEdit} closeModal={handleClose}></Add></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    {props.isEdit > 0 && <Button variant="primary" onClick={deleteData}>
                        Delete
                    </Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

