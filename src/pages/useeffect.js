import { useState } from "react";
import { Container } from "react-bootstrap"

export default function Useeffect() {
    const [titulo, SetTitulo] = useState("");
    setTimeout(() => {
     document.title="Bem vindo a UseEffect";
       setTimeout(mudaTitulo());
    },3000);
    
   
    return <>
        <Container classNme="texet-center">
            <h1>{titulo===""?"Bem vindo ":titulo}</h1>
            <p>


            </p>

        </Container>

    </>
}
function mudaTitulo(params) {
    return "Bem vindo a UseEffect"

    
}