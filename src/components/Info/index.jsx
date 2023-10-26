import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsInfoCircle } from "react-icons/bs";
import { ContainerInfo } from "./styles";
import { useState } from "react";

const Info = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <ContainerInfo>
      <p>
        Descubra quantas e quais letras precisa para fazer sua pulseira da
        amizade!!
      </p>

      <Button variant="light" onClick={() => setShowInfo(!showInfo)}>
        <BsInfoCircle size={12} />
        <p>Como funciona?</p>
      </Button>

      {showInfo && (
        <div className="info">
          <p>
            Digite a palavra ou frase que desejar e clique no botão com sinal de
            "+".
          </p>
          <p>
            Ao Adicionar a frase, já aparece quantas e quais letras ela possui.
            faça isso quantas vezes quiser.
          </p>
          <p>
            Se quiser remover alguma frase, basta selecionar o checkbox
            correspondente e clicar em remover.
          </p>
          <p>
            Para saber o total de mais de uma frase, é só selecionar as frases
            desejadas e clicar em total.
          </p>
          <p>E para remover todas as frase de uma vez clique em cancelar.</p>
        </div>
      )}
    </ContainerInfo>
  );
};

export default Info;
