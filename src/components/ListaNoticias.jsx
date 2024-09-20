import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Noticia from "./Noticia";
import ListGroup from "react-bootstrap/ListGroup";

const ListaNoticias = ({ noticia, categoria }) => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <ListGroup>
            {noticia.map((noticia, indice) => (
              <Noticia noticia={noticia} key={indice}></Noticia>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ListaNoticias;
