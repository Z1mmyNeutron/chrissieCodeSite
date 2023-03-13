import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

const content = [
 "Software engineer"
];

const values = [
    "JavaScript",
    "Java",
    "Python",
    "React.js",
    "TypeScript"
]

export default function HomePage() {
    return <><Row>
        <Col sm={7}>
            <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold", paddingLeft: "10%" }}>The Law Offices of Jane M. Fearn-Zimmer, Esquire</h5>
            <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2, paddingLeft: "10%" }}>{content.map(c => <><p style={{ paddingTop: 5 }}>{c}</p></>)}</p>
            <ul style={{paddingLeft:"15%"}}>
                {values.map(value => <li style={{ textAlign: "left", lineHeight: 3, fontFamily: "Spectral-Regular" }}>{value}</li>)}
            </ul>
            <Link to="/Attorney-Profiles"><p style={{ fontFamily: "Spectral-Regular" }}>Find out more.</p></Link>
        </Col>
        <Col sm={5}>
            <Image
                height="auto"
                width="100%"
                src={require("../media/images/jane-portrait.jpg")}
                rounded
            />
        </Col>
    </Row>
    </>
}