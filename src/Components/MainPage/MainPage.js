import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";

const MainPage = () => {
  const [data, setData] = useState({});
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [confirmaEmail, setconfirmaEmail] = useState("");
  //3.1 crie aqui os estados dataNascimento, telefone e cidade para o exercício 3

  const [dataNascimento,setDataNascimento]=useState("")
  const [telefone,setTelefone]=useState("")
  const [cidade,setCidade]=useState("")

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeconfirmaEmail = (event) => {
    setconfirmaEmail(event.target.value);
  };

  //3.2 Crie aqui as funções de onChange do exercício 3

  const onChangeDataNascimento=(event)=>{
    const {target:{value}}=event
    setDataNascimento(value)
  }

  const onChangeTelefone=(event)=>{
    const {target}=event
    setTelefone(target.value)
  }

  const onChangeCidade=(event)=>{
    const {target}=event
    setCidade(target.value)
  }

  const sendData = () => {
    setFormFlow(2);
    setData({ ...data, nome, idade, email })
  };
  const sendForm = () => {
    setFormFlow(3);
    setData({ ...data, dataNascimento, telefone, cidade })
  };

  const mudarPagina = () => {
    if (formFlow === 1) {
      return (
        <NameForm
          nome={nome}
          idade={idade}
          email={email}
          confirmaEmail={confirmaEmail}
          onChangeNome={onChangeNome}
          onChangeIdade={onChangeIdade}
          onChangeEmail={onChangeEmail}
          onChangeconfirmaEmail={onChangeconfirmaEmail}
          sendData={sendData}
        />
      );
    } else if (formFlow === 2) {
      return (
        <ConfirmationForm
          dataNascimento={dataNascimento}
          telefone={telefone}
          cidade={cidade}
          onChangeDataNascimento={onChangeDataNascimento}
          onChangeTelefone={onChangeTelefone}
          onChangeCidade={onChangeCidade}
          sendForm={sendForm}
          //3.3 passe as props do exercicio 3 aqui
        />
      );
    } else {
      return <ConfirmationPage data={data} />;
    }
  };
  console.log(data)

  return <MainContainer>{mudarPagina()}</MainContainer>;
};

export default MainPage;
