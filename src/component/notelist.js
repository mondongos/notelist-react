import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

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
        return (
            <Container>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>

        )
    }
}