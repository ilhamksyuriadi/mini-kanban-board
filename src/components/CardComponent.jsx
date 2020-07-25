import React, { Component } from 'react';
import { FormComponent } from './FormComponent';
import { v4 as uuid } from 'uuid'

export class CardComponent extends Component {

    constructor(props){
        super(props)

        this.title = React.createRef();
        this.assignee = React.createRef();
        this.tag = React.createRef();
        this.start_date = React.createRef();
        this.end_date = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        let new_task = {
            issue_id: uuid(),
            title: this.title.current.value,
            assignee: this.assignee.current.value,
            start_date: this.start_date.current.value,
            end_date: this.end_date.current.value,
            tags: this.tag.current.value,
        }
        console.log('submit clicked', new_task)
    }

    render() {
        return(
            <div>
                <FormComponent
                    onSubmit = {this.handleSubmit}
                    title = {this.title}
                    assignee = {this.assignee}
                    tag = {this.tag}
                    start_date = {this.start_date}
                    end_date = {this.end_date}
                ></FormComponent>
            </div>
        )
    }

}