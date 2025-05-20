import { Col, Container, Row, TabContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Cadnoticias() {
  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formTituloNoticia">
        <Form.Label>Informe o título da Notícia</Form.Label>
        <Form.Control type="text" placeholder="Informe o Título" className='.bg-warning-subtle' />
        <Form.Text className="text-muted">
          Informe o título da sua notícia.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="noticia">
        <Form.Label>Informe a Noticia</Form.Label>
        <Form.Control as="textarea" rows={3}  className='.bg-warning-subtle'/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="noticia">
<Row>
  <Col sm={3}>
  <Form.Label>Informe a Noticia</Form.Label>
  </Col> 
  <col sm={9}>
   <Form.Select className='.bg-warning-subtle' >
      <option>Selecione uma abaixo</option>
      <option value="1">Ciencia</option>
      <option value="2">Educaçao</option>
      <option value="3">Pespisa</option>
      <option value="4">Esporte</option>
      <option value="5">Cultura</option>
      <option value="6">Entereimento</option>
    </Form.Select>
 
  </col>
</Row>
      </Form.Group>

     

      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check type="checkbox" label="Confirmo que as informações estão corretas" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar Notícia
      </Button>
    </Form>
    </Container>
  );
}