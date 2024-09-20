import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Titulo = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand className="mx-auto display-1 f-1">Noticias</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Titulo;
