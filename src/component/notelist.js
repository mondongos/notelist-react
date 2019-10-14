import React from 'react'
import {Container, Card, Row, Col, Button } from 'react-bootstrap'
import AddNote from './addnote'

export default class NoteList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            noteTitle: '',
            noteBody: '',
            notes: [
                [{title: "Title 1"}, {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],
                [{title: "Title 2"}, {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],
                [{title: "Title 3"}, {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}]
            ],
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
            if (buttonActive) {
                this.setState({addnotesactive: false})
            } else {
                this.setState({addnotesactive: true})
            }
            console.log(this.state.addnotesactive)
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    

    render() {
        console.log(this.state)
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
