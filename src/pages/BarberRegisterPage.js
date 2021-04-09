import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../services/api";
import * as yup from "yup";
import FormAction from "../components/FormAction";
import InputForm from "../components/InputForm";
import GlobalContainer from "../components/GlobalContainer";
import GlobalWrap from "../components/GlobalWrap";
import Footer from "../components/Footer";
import ButtonBackToHome from "../components/ButtonBackToHome";
import { ButtonWrap, ElemP } from "./styles";
import LinkToLogin from "../components/LinkToLogin";

const BarberRegisterPage = () => {
  const [inputTitle, setInputTitle] = useState("");

  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    sobrenome: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Formato do campo inválido")
      .required("Campo obrigatório"),
    senha: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    console.log(data);

    await api
      .post("/register", data)
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((e) => console.log(e.response));
  };

  return (
    <>
      <GlobalContainer>
        <GlobalWrap>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <FormAction
            handleSubmit={handleSubmit(handleForm)}
            titleName="Cadastre-se"
            buttonName="Cadastrar"
          >
            <InputForm
              name="nome"
              inputRef={register}
              error={errors.nome}
              value={inputTitle}
              setInputValue={setInputTitle}
            >
              Nome
            </InputForm>
            <InputForm
              name="sobrenome"
              inputRef={register}
              error={errors.sobrenome}
              value={inputTitle}
              setInputValue={setInputTitle}
            >
              Sobrenome
            </InputForm>
            <InputForm
              name="email"
              inputRef={register}
              error={errors.email}
              value={inputTitle}
              setInputValue={setInputTitle}
            >
              Email
            </InputForm>
            <InputForm
              name="senha"
              inputRef={register}
              error={errors.senha}
              value={inputTitle}
              setInputValue={setInputTitle}
            >
              Senha
            </InputForm>
          </FormAction>
          <ElemP>
            Ja possui uma conta? <LinkToLogin>Entre Agora</LinkToLogin>
          </ElemP>

          <Footer />
        </GlobalWrap>
      </GlobalContainer>
    </>
  );
};

export default BarberRegisterPage;
