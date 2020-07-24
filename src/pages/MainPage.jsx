import React from 'react';
import './MainPage.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Col, Row } from 'react-bootstrap';

function MainPage() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="layout">
            <Button variant="primary" onClick={handleShow}>
                Launch modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <br />
                        <Form.Group>
                            <Form.Row>
                            <Form.Label column lg={2}>Title</Form.Label>
                            <Col>
                                <Form.Control placeholder="Enter task title..." />
                            </Col>
                            </Form.Row>
                        </Form.Group>
                        <br />
                        <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={2}>Assignee</Form.Label>
                            <Col>
                                <Form.Control placeholder="Enter assignee name..." />
                            </Col>
                            </Form.Row>
                        </Form.Group>
                        <br />
                        <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={2}>Tags</Form.Label>
                            <Col>
                                <Form.Control as="select" defaultValue="Front End">
                                    <option>Front End</option>
                                    <option>Back End</option>
                                    <option>Research</option>
                                    <option>Dev Ops</option>
                                    <option>Design</option>
                                </Form.Control>
                            </Col>
                            </Form.Row>
                        </Form.Group>
                        <br />
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Row>
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control size="sm" type="date" placeholder="Enter start date..." />
                                    </Form.Row>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Row>
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control size="sm" type="date" placeholder="Enter end date..." />
                                    </Form.Row>
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md="auto">
                                <Button className="submit-button" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MainPage