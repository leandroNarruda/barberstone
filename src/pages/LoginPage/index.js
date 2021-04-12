import GlobalContainer from "../../components/GlobalContainer";
import ButtonBackToHome from "../../components/ButtonBackToHome";
import {
  ButtonWrap,
  ElemP,
  ContainerForm,
  ContainerLogin,
  H1Login,
  H1Title,
} from "./styles";
import LinkToHome from "../../components/LinkToHome";
import FormLogin from "../../components/FormLogin";
import FooterForm from "../../components/FooterForm";
import FooterPage from "../../components/FooterPage";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundLogin.jpg";
import Notification from "../../components/Notification";

const BarberRegisterPage = () => {
  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerForm>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <H1Title>Entrar</H1Title>
          <FormLogin />
          <ElemP>
            Ainda não possui uma conta? <LinkToHome>Cadastre-se</LinkToHome>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerLogin>
          <H1Login>Encontre aqui a melhor barbearia da sua região!</H1Login>
          <FooterPage />
        </ContainerLogin>
        <Notification />
      </GlobalContainer>
    </>
  );
};

export default BarberRegisterPage;
