import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListaNoticias from "./ListaNoticias";

const Formulario = ({noticia, categoria, setCategoria}) => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h6>Buscar por categoria:</h6>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setCategoria(e.target.value)}
            
          >
            <option value="">Opciones</option>
            <option value="sports">Deportes</option>
            <option value="top">Top</option>
            <option value="business">Negocios</option>
            <option value="technology">Tecnologia</option>
          </Form.Select>
        </Col>
      </Row>
      <ListaNoticias noticia={noticia} categoria={categoria}></ListaNoticias>
    </Container>

  );
};

export default Formulario;
