import React from 'react'
import {Container, Card, Row, Col, Button } from 'react-bootstrap'
import AddNote from './addnote'

export default class NoteList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            noteTitle: '',
            noteBody: '',
            notes: [],
            addnotesactive: false
        }
    }

    addNotesButton = () => {
        let buttonActive = this.state.addnotesactive
        if (!buttonActive) {
            return (
                <Button
                variant="primary"
                size="lg"
                onClick={this.addNote}>
                    Add new note
                </Button>
            )
        } else {
            return null
        }
    }

    addNote = () => {
        let buttonActive = this.state.addnotesactive
        console.log(this.state.notes)
            if (buttonActive) {
                this.setState({addnotesactive: false})
            } else {
                this.setState({addnotesactive: true})
            }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitNoteButton = () => {
        let buttonActive = this.state.addnotesactive
        if (buttonActive) {
            return (
                <Button
                variant="success"
                size="lg"
                onClick={this.submitNote}>
                    Add
                </Button>
            )
        } else {
            return null
        }
    }

    submitNote = (e) => {
        e.preventDefault()
        this.setState({notes: [...this.state.notes, ...[[{title: this.state.noteTitle}, {body: this.state.noteBody}]]]})
        this.setState({addnotesactive: false})
    }

    

    render() {
        return (
            <Container>
                <br></br>
                <Row>
                    <Col>
                        {this.addNotesButton()}
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <AddNote
                        addnotesactive={this.state.addnotesactive}
                        handleChange={this.handleChange}
                        noteTitle={this.state.noteTitle}
                        noteBody={this.state.noteBody}/>
                    </Col>
                    <Col>
                    {this.submitNoteButton()}
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        {this.state.notes.map((note => {
                            return (
                                <Card>
                                    <Card.Title>
                                        {note[0].title}
                                    </Card.Title>
                                    <Card.Body>
                                        {note[1].body}
                                    </Card.Body>
                                </Card>
                            )
                        }))}
                    </Col>
                </Row>
            </Container>

        )
    }
}
