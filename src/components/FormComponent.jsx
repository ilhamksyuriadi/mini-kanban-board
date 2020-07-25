import React, { Component } from 'react';
import './FormComponent.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Col, Row } from 'react-bootstrap';

export class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

        this.title = React.createRef(); 

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose(){
        this.setState({show: false})
    }

    handleShow(){
        this.setState({show: true})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit clicked', event)
        console.log('asdas', this.state.title)
    }

    render() {
        return(
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Launch modal
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <br />
                            <Form.Group>
                                <Form.Row>
                                <Form.Label column lg={2}>Title</Form.Label>
                                <Col>
                                    <Form.Control onChange={this.props.onTitleChange} ref={this.props.title} placeholder="Enter task title..." />
                                </Col>
                                </Form.Row>
                            </Form.Group>
                            <br />
                            <Form.Group>
                            <Form.Row>
                                <Form.Label column lg={2}>Assignee</Form.Label>
                                <Col>
                                    <Form.Control onChange={this.props.onAssigneeChange} ref={this.props.assignee} placeholder="Enter assignee name..." />
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
}