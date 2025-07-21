import { useState } from "react";
import { Container } from "react-bootstrap"

export default function Useeffect() {
    const [titulo] = useState("");
    const [numero, setNumero] = useState("0");
    setTimeout(() => {
        document.title = "Bem vindo a UseEffect:${numero}";
        setTimeout(mudaTitulo());
    }, 3000);

    useState(() => {
        console.log("titulo Alterado");
    }, [titulo, numero])
    return <>
        <Container classNme="texet-center">
            <h1>{titulo === "" ? "Bem vindo " : titulo}:{numero} </h1>
            <p>
            </p>
            <input type="button" onClick={()=>setNumero(somaNumero(numero))} value="soam numero" />

        </Container>

    </>
}
function mudaTitulo() {
    return "Bem vindo a UseEffect"
}
function somaNumero(number) {
    number++;
    return number;

}
