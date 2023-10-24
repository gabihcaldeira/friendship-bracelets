import { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { countLetters } from "../../utils/functions";
import { CustomCard, FormGroup } from "./styles";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);

  const handleAdd = () => {
    const lettersInInput = countLetters(input);
    const obj = { str: input, chars: lettersInInput };

    setResponses((update) => {
      return [...update, obj];
    });

    setInput("");
  };

  const handleRemove = (id) => {
    const aux = responses.filter((e, idx) => idx !== id);
    setResponses(aux);
  };

  return (
    <CustomCard>
      <Card.Header>
        <FormGroup>
          <Form.Control
            placeholder="Digite aqui a frase..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="button" onClick={handleAdd}>
            <FaPlus size={30} />
          </Button>
        </FormGroup>
      </Card.Header>

      <Card.Body>
        <Table>
          <tbody>
            {responses &&
              responses.length > 0 &&
              responses.map(({ str, chars }, idx) => (
                <tr key={idx}>
                  <td>
                    <Button type="button" onClick={() => handleRemove(idx)}>
                      <AiOutlineMinus />
                    </Button>
                  </td>

                  <td>
                    <Form.Check
                      type="checkbox"
                      name={`${idx}-${str}`}
                      value={idx}
                    />
                  </td>

                  <td>{str}</td>

                  <td>
                    {chars.map(({ letter, qnt }) => (
                      <>
                        <span className="text-bold">{letter} -</span>
                        <span>{qnt}</span>
                      </>
                    ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </CustomCard>
  );
};

export default Dashboard;
