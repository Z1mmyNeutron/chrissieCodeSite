import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

const content = [
    "Christina Zimmer is a software engineer. She graduated from Rowan University in May of 2023, but she started her coding journey long before that. She's done several projects, completed two internships, won a hackathon and worked as an independent contractor for some websites. Her languages are:  JavaScript, Python, Java, C++ and Golang."
];

const projects = [
    "Fearn-Zimmer Law (June 2023): Worked with a team member to create a fully functional website using a MERN stack (Mongo, Express, React, Node.js) for an independent elder law website. Created web pages using hooks, async requests, working contact form and email page",
    "TechDeck Project (May 2023): Worked with a team member to create a fully functional website using a MERN (Mongo,  Express, React, Node.js) stack. Site pulled live data from various news articles via Mongo integration and API keys, contained fully functioning search bar, thematic light and dark mode + ability to switch between such, authenticating create user and login form.",
    "Montclair State University HawkHack Superlative Category Winner (April 2023): Froodie. Worked with a team of four to create an interactive react website that allowed the user to input ingredient suggestions to chatgpt and the ai generates a list of recipes that can be made designed to solve the problem of one having a mishmash of ingredients in the fridge with no plan to make a meal in place. Connected express server, built a react front-end, integrated python flask back-end, served on node.js. Tech: Python, REACT.js, Node.js, Express, JSON, JavaScript",
    "Music Trends Project: Led a team of four students to create a fully functional website using JavaScript, HTML, CSS, MongoDB and an express server.  Parsed data from a get request and pushed to an array to be able to sort through matching data with a corresponding API key. This allowed for creation of a searchable interface to find the top 25 songs in the US by any particular artist.",
    "Seismic Infographic (June -August 2022): When buildings are designed they must be up to the zoning code of the region so they can survive in the event of a natural disaster whether it be hurricanes, tornadoes, earthquakes ect. I created a seismic design category color coded 3D map info graphic for the entire globe. This project required taking functions of latitude and longitude on the surface of the earth and digitizing them with contour points, minima and maxima and special area regions. Since this involves taking a 3D plane and converting it down to a 2D plane, tensor calculus was needed to understand how to transform from polar coordinates to Cartesian ones, as the purpose was to project a sphere/ ellipsoidal shape onto a flat surface. I obtained the first goal of transforming from 3D to 2D by creating functions to handle vector addition, subtraction, multiplication, and dot products to create a metric tensor. This allowed for data to be taken in as points, put into a circle buffer which generated arcs, lines, circles and points thus satisfying the representation of contour points, minima and maxima and the special area regions. Tech: JavaScript, TypeScript NodeJS, HTML.",
    "Tokenizing and Parsing (June - August 2022): I converted excel data into usable code to compare thousands of lines of data accurately, quickly, and comfortably. To do this I created usable formulas data from excel tables. By coding inline conversion to JSON file format, I was able to export 16MB, 23MB files of excel data into JSON code in seconds. Now as this is the raw data for the outlines of the country’s shapes, they need to be passed into the metric tensor functions for visual rendering so the contour points were able to be visualized, which needed a couple steps. First, I created a file reader in JavaScript for both of my files using async functions. I used flags, error handling and chained if statements to create a tokenizer and a parser to use. I then created a function to assign my parsed, tokenized files to their own HashMap to compared for unique keys versus duplicates, written to two separate JSON files. Tech: JavaScript, JSON, Microsoft Excel, TypeScript, Node.js.",
    "Wind Maps (May- August 2021):  I added to a visual rendering of the United States designed to calculated wind zoning codes for construction permits after acquiring a list of ACII latitude and longitudes and the zoning max wind speeds. I used data as calibrating for a projection map that accounted for contours, coastal regions and special wind zones. I overlaid both maps, created and used a program written for Newton-Rhapson to align canvas x and y coordinates to correspond with US latitude and longitude regions. I wired everything through with web sockets connected to buttons, used functional programming and a top down approach.",
    "Adjustable Harmonic Damping Project (May- August 2021): I combined calculus, physics and JavaScript to create an adjustable animation of the harmonic oscillation of three individual springs with adjustable inputs for dampening, mass and speed. I used HTML canvas for my front-end with JavaScript as a back-end. I created a graph with the corresponding sin waves for each individual spring rendered to allow for the visualization of the time-step. Tech: HTML, CSS, WebSockets, JavaScript, Calculus + Physics, Node.js.",
    "Capstone Project: I lead a team of four to create a fully functional website using JavaScript, HTML, CSS, MongoDB and an express server. I parsed data from a get request and pushed it to an array to be able to sort through matching data with a corresponding API key. This allowed for creation of a searchable interface to find the top 25 songs in the US by any particular artist.",
    "Oxford Lithograph: I created a fully functioning website complete with email request specific to client’s needs using React.js. I created a serverless backend yo procedurally send emails hosted through an AWS lambda function. I also implemented a custom grid system utilizing an object map to control and style the website. This also made it automatically resize depending on the screen size.",
    "Rutgers University Hackathon Superlative Category Winner: Pomodoro Study Timer: I lead a team of four to created a Pomodoro study timer with a functioning music library, 25 to 5 minute interval timer, useful links, navbar, footer and a goal list using HTML canvas and JavaScript. I wired through postman, hosted through heroku and node.js, gave lessons on github, node.js, JavaScript, HTML, and wore many hats while actively bringing down processing time. I encouraged the team to finish, delegated tasks after paving the way by creating and explaining easy patterns for them to follow from repetitive tasks to maximize efficiency while keeping the project moving forward. Tech: HTML, Postman, Node.js, JSON, MongoDB, CSS, JavaScript, (April 2022)"

]




export default function AttorneyProfiles() {
    return <><Row>
    <Col xs={12} sm={9}>
        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold", paddingLeft: "10%" }}>About Christina Zimmer </h5>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2,paddingLeft: "10%" }}>{content.map(c => <><p style={{ paddingTop: 5 }}>{c}</p></>)}</p>
       
        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold",paddingLeft: "10%" }}>Projects</h5>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2,paddingLeft: "10%" }}>{projects.map(projects => <><p style={{ paddingTop: 5 }}>{projects}</p></>)}</p>
        <h4 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold", paddingLeft: "10%" }}>My languages:</h4>
     
   

    </Col>
    <Col xs={12} sm={3}>
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