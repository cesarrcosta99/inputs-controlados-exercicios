import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  const {dataNascimento,onChangeDataNascimento,telefone,onChangeTelefone,cidade,onChangeCidade,sendForm}=props
  return (
    <Form>
      <input placeholder="Data de nascimento" value={dataNascimento} onChange={onChangeDataNascimento}/>
      <input placeholder="Telefone" value={telefone} onChange={onChangeTelefone}/>
      <input placeholder="Cidade" value={cidade} onChange={onChangeCidade}/>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;