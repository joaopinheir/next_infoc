import { useRouter } from 'next/router'

export default function cursos() {
  const router = useRouter()
  const curso = router.query.cursos;
  return <>

    <div className="text-center">
      <h1>Rota Diamico Vetro</h1>
      {Array.isArray(curso) ?
        (curso.map((valor, indice) => (
          <div key={indice}> posiçao: <b>{indice} </b>,valor:<b>{valor}</b></div>
        ))) : (<div className='text-center'>Vetro nao carregado</div>)}
    </div>
  </>

}

