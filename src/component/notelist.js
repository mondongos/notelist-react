import React from 'react'
import {Container, Card, Row, Col, Button } from 'react-bootstrap'

export default class NoteList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [
                [{title: "Title 1"}, {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],
                [{title: "Title 2"}, {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],
                [{title: "Title 3"}, {body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}]
            ]
        }
    }

    render() {
        return (
            <Container>
                <br></br>
                <Row>
                    <Col>
                        <Button
                        variant="primary"
                        size="lg">
                            Add new note
                        </Button>
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
