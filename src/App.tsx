import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import logo from "./task3img.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript - Jessica Manchak
                </header>
                <h1>Task 3 Elements: </h1>
            </div>

            <img
                src={logo}
                alt="The painting: Self-Portrait with Death Playing the Fiddle"
            />
            <div>
                Ordered List:
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>
            </div>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>

            <Container>
                <Row>
                    <Col>
                        First column. <div className="rect"></div>
                    </Col>

                    <Col>
                        Second column. <div className="rect"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
