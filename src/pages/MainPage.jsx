import React, { Component } from 'react';
import './MainPage.css';
import { FormComponent } from '../components/FormComponent';

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.title = React.createRef();
        this.assignee = React.createRef();
        this.start_date = React.createRef();

        this.state = {
            title : '',
            assignee : ''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAssignee = this.handleChangeAssignee.bind(this);
    }

    handleChangeTitle(){
        const value = this.title.current.value;
        this.setState({title: value})
    }

    handleChangeAssignee(){
        const value = this.assignee.current.value;
        this.setState({assignee: value})
    }

    render() {
        return(
            <div>
                <FormComponent 
                    onTitleChange = {this.handleChangeTitle} 
                    title = {this.title}
                    onAssigneeChange = {this.handleChangeAssignee}
                    assignee = {this.assignee}
                ></FormComponent>
            </div>
        )
    }
}