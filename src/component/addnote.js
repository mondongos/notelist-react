import React from 'react'
import {Form} from 'react-bootstrap'


export default class AddNote extends React.Component {
    render() {
        if (this.props.addnotesactive === false) {
            return null
        } else {
            return (
                <Form.Group>
                    <Form.Label><strong>Title</strong></Form.Label>
                    <Form.Control 
                    as ="textarea" 
                    rows="1"
                    name="noteTitle"
                    value={this.props.noteTitle}
                    onChange={this.props.handleChange}/>
                    <Form.Label><strong>Whats on your mind?</strong></Form.Label>
                    <Form.Control 
                    as ="textarea" 
                    rows="3"
                    name="noteBody"
                    value={this.props.noteBody}
                    onChange={this.props.handleChange}/>
                </Form.Group>
            )
        }
    }
}