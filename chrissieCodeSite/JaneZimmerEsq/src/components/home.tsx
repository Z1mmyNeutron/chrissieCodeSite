import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

const content = [
"I'm a lot of things. I'm an artist, a teacher, a programmer, a writer, and an adventurer. Life has a lot to choose from, and I love being able to explore all it has to offer. What fostered my love of technology is how it's designed to make exploring life simpler. It's here to automate, enhance and improve our environment and our tools. It's so versatile that with the right attitude, some research and elbow grease you can create anything you know how to ask for. You can overlay your paintings with augmented reality to create a more immersive way to share your story. We don't have to punch out keys on typewriters all day, we have word documents and spell check and everything that seems like magic but is just a careful array of data structures. Hell, we can even 3D print our own trays for braces. Technology is the next industrial revolution and I'm thrilled to be alive and curious at such a pivotal moment in history. It's incredible, and I'm ecstatic to be a part of it. Cheers to the future. I can't wait to build it with you." 
];

export default function HomePage() {
    return <><Row>
        <Col sm={7}>
            <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold", paddingLeft: "10%" }}>Hello and Welcome, my name is Christina Zimmer</h5>
            <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2, paddingLeft: "10%" }}>{content.map(c => <><p style={{ paddingTop: 5 }}>{c}</p></>)}</p>
          
            <Link to="/Attorney-Profiles"><p style={{ fontFamily: "Spectral-Regular", fontSize:20 }}>To learn more about me click here.</p></Link>
        </Col>
        <Col sm={5}>
            <Image
                height="auto"
                width="100%"
                src={require("../media/images/chrissiePlaceHolder.jpeg")}
                rounded
            />
        </Col>
    </Row>
    </>
}