import logo from "./img/test1.jpg";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from './data.js'
import { useState } from "react";

function App() {
  let[shoes] = useState(data)
  return (
    <>
      <Button variant="primary">Primary</Button>{" "}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="headImg">
        <img src={logo} width="100%" />
      </div>
      <div className="pdList">
        {shoes.map((a,i)=>{
          return(
            <Card shoes={shoes[i]} i={i} key={i}/>
          )
        })}
      {/* {변수.map((a,i)=>{return(<짜놓은정보 />)})} */}

        {/* <Card shoes={shoes[1]}/>
        <Card shoes={shoes[2]}/> */}
        {/* <div className="list">
          <img src={`${process.env.PUBLIC_URL}/img/product02.jpg`}/>
          <p>{data[1].title}</p>
          <p>{data[1].content}</p>
          <p>{data[1].price}</p>
        </div>
        <div className="list">
          <img src={`${process.env.PUBLIC_URL}/img/product03.jpg`}/>
          <p>{data[2].title}</p>
          <p>{data[2].content}</p>
          <p>{data[2].price}</p>
        </div> */}
      </div>
    </>
  );
}

function Card(props){return(
  <div className="list">
          <img src={`${process.env.PUBLIC_URL}/img/product0${props.i+1}.jpg`}/>
          <p>{props.shoes.title}</p>
          <p>{props.shoes.content}</p>
          <p>{props.shoes.price}</p>
        </div>
)}
export default App;
