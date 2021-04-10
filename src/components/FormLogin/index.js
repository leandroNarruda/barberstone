import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  FormComponent,
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
} from "../../styles/Form.styles";

const FormLogin = () => {
  // const { login } = useProviderUser();

  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("email inválido").required("campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { sub } = jwt_decode(response.data.accessToken);
        localStorage.clear();
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("userId", JSON.stringify(sub));
        reset();
        getUser(sub);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getUser = (userId) => {
    api
      .get(`/users/${userId}`)
      .then((response) => {
        console.log(response.data.isBarber);
        goToProfile(response.data.isBarber);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const goToProfile = (isBarber) => {
    if (isBarber) {
      history.push("/profile-barbershop");
    } else {
      history.push("/profile-client");
    }
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Email</Label>
        <Input name="email" ref={register} />
        {!!errors && <SpanError>{errors.email?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Senha</Label>
        <Input name="password" type="password" ref={register} />
        {!!errors && <SpanError>{errors.password?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Entrar</ButtonForm>
      </DivInput>
      <DivInput></DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormComponent>
  );
};

export default FormLogin;