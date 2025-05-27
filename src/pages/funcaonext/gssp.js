import { Container, Table } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"

export async function getServerSideProps() {
  return {
    props: {
      repo: { var1: "Next", var2: "Com React" }
    }
  }
}

export default function Gssp({ repo }) {
  return (
    <>
      <Container>
        <h1>{repo.var1}</h1>
        <h1>{repo.var2}</h1>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>id</th>
              <th>título</th>
              <th>conteúdo</th>
              <th>tipo da notícia</th>
              <th>d/h</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(noticias)?
              noticias.map((noticia) => (
                <tr key={noticia.idnoticia}>
                  <td>{noticia.idnoticia}</td>
                  <td>{noticia.titulonoticia}</td>
                  <td>{noticia.conteudonoticia}</td>
                  <td>{noticia.tiponoticia}</td>
                  <td>{noticia.datahoracadastroa}</td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Nenhuma notícia disponível</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>Info 5C</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </>
  )
}
