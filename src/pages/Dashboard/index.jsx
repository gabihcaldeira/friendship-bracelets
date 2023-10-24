import { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaSlash } from "react-icons/fa";
import { countLetters } from "../../utils/functions";
import {
  CustomCard,
  FormGroup,
  TDbtn,
  TDchars,
  TDcheck,
  TDstring,
} from "./styles";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [checkedRes, setCheckedRes] = useState([]);

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
                <tr key={idx} className="d-flex align-items-center ">
                  <TDcheck>
                    <Form.Check
                      type="checkbox"
                      name={`${idx}-${str}`}
                      value={idx}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedRes((update) => {
                            return [...update, e.target.value];
                          });
                        } else {
                          const aux = checkedRes.filter(
                            (e) => e !== e.target.value
                          );
                          setCheckedRes(aux);
                        }
                      }}
                    />
                  </TDcheck>

                  <TDstring className="text-capitalize fw-bold">{str}</TDstring>

                  <TDchars>
                    {chars.map((e, idx) => (
                      <>
                        <span className="letter">{e}</span>
                        {idx !== chars.length - 1 && (
                          <span className="separator">
                            <FaSlash size={18} />
                          </span>
                        )}
                      </>
                    ))}
                  </TDchars>

                  <TDbtn>
                    <Button type="button" onClick={() => handleRemove(idx)}>
                      <FaMinus size={18} />
                    </Button>
                  </TDbtn>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </CustomCard>
  );
};

export default Dashboard;
