import { useRouter } from 'next/router'
 
export default function cursos() {
  const router = useRouter()
  const crusos = rounter.query.crusos;
  return<>
   <p className="texet-center">crusos</p>
   <p>className="texet-center"
    {Array.isArray(crusos)?
    {cursos.map{(valor,indice)=>{
      <div>vetro posicao:(indice),valor:(valor)</div>
    }}}: (<div className='text-center'>Vetro nao carregado</div>)} 
   </p>
   </>

}
 
 