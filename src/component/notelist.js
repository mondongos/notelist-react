import React from 'react'
import {Container, Card, Row, Col, Button } from 'react-bootstrap'

export default class NoteList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            note1: "This is how I represent", 
            note2: "I rock the mic 110 percent", 
            note3: "Its intimate, I keeps the party moving like an immigrant"
        }
    }

    render() {
        const {note1, note2, note3} = this.state
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Notes App</h1>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button
                        variant="primary">
                            Add new note
                        </Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                {this.state.note1}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>

        )
    }
}