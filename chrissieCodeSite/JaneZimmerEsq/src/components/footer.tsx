import { Col, Row } from "react-bootstrap";

export default function Footer() {
    return <>
    <br/><br/>
    <div style={{background:"rgb(5,0,0)"}}>
    <br/>
        <Row>
            <Col sm={4}><span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>Website created by Christina Zimmer 2023</span><br/></Col>
            <Col sm={4}> <span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>The hiring of a web developer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.</span><br/></Col>
            <Col sm={4}><span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>Website Disclaimer | Privacy Policy </span><br/></Col>
        </Row>
         <span style={{ fontFamily: "Spectral-Regular", color: "rgb(150,150,150)" }}>Web Design by Christina Zimmer </span><br/><br/>
    </div></>
}