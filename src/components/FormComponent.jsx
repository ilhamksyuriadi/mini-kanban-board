import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Col, Row } from 'react-bootstrap';

export class FormComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Button variant="light" size="sm" onClick={this.props.onShowModal}>
                    + Add Task
                </Button>
                <Modal show={this.props.modal_state} onHide={this.props.onHideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.onSubmit}>
                            <br />
                            <Form.Group>
                                <Form.Row>
                                <Form.Label column lg={2}>Title</Form.Label>
                                <Col>
                                    <Form.Control ref={this.props.title} placeholder="Enter task title..." />
                                </Col>
                                </Form.Row>
                            </Form.Group>
                            <br />
                            <Form.Group>
                            <Form.Row>
                                <Form.Label column lg={2}>Assignee</Form.Label>
                                <Col>
                                    <Form.Control ref={this.props.assignee} placeholder="Enter assignee name..." />
                                </Col>
                                </Form.Row>
                            </Form.Group>
                            <br />
                            <Form.Group>
                            <Form.Row>
                                <Form.Label column lg={2}>Tags</Form.Label>
                                <Col>
                                    <Form.Control ref={this.props.tag} as="select" defaultValue="Front End">
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
                                            <Form.Control ref={this.props.start_date} size="sm" type="date" placeholder="Enter start date..." />
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control ref={this.props.end_date} size="sm" type="date" placeholder="Enter end date..." />
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
}