import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaSlash } from "react-icons/fa";
import { countLetters } from "../../utils/functions";
import {
  BtnFooter,
  CustomCard,
  FormGroup,
  TBody,
  TDbtn,
  TDchars,
  TDcheck,
  TDstring,
  TotalBody,
} from "./styles";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [checkedRes, setCheckedRes] = useState([]);
  const [totalChars, setTotalChars] = useState([]);

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

  const handleTotal = () => {
    const checked = responses.filter((e, idx) => checkedRes.includes(idx));

    const checkedStr = checked.map(({ str }) => str);

    const totalLetters = countLetters(checkedStr.join(";"));
    setTotalChars(totalLetters);
    console.log(totalLetters);
  };
  useEffect(() => {
    // console.log("checkedRes", checkedRes);
  }, [checkedRes]);

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
          <TBody>
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
                            return [...update, idx];
                          });
                        } else {
                          const aux = checkedRes.filter((e) => e !== idx);
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
          </TBody>
        </Table>
      </Card.Body>

      <ListGroup>
        <ListGroup.Item className="d-flex align-items-center justify-content-start px-3">
          <BtnFooter type="button" onClick={handleTotal} className="me-3">
            Total
          </BtnFooter>

          <BtnFooter
            type="button"
            onClick={() => {
              setResponses([]);
              setTotalChars([]);
              setCheckedRes([]);
            }}
          >
            Cancelar
          </BtnFooter>
        </ListGroup.Item>

        {totalChars?.length > 0 && (
          <ListGroup.Item>
            <TotalBody>
              {totalChars.map((e, idx) => (
                <tr key={idx}>
                  <td>{e}</td>
                </tr>
              ))}
            </TotalBody>
          </ListGroup.Item>
        )}
      </ListGroup>
    </CustomCard>
  );
};

export default Dashboard;
