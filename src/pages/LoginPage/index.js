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
import LinkGoTo from "../../components/LinkGoTo";
import FormLogin from "../../components/FormLogin";
import FooterForm from "../../components/FooterForm";
import FooterPage from "../../components/FooterPage";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundLogin.jpg";
import Notification from "../../components/Notification";
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../../services/pageTransition'

const Login = () => {
  const init = pageVariants.in
  const out = pageVariants.out
  const initial = pageVariants.initial
  return (
    <motion.div
      key="/entrar  "
      initial={initial}
      animate={init}
      exit={out}
      variants={pageVariants}
      transition={pageTransition}
    >
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerForm>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <H1Title>Entrar</H1Title>
          <FormLogin />
          <ElemP>
            Ainda não possui uma conta?{" "}
            <LinkGoTo to={"/"} isRegister>
              Cadastre-se
            </LinkGoTo>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerLogin>
          <H1Login>Encontre aqui a melhor barbearia da sua região!</H1Login>
          <FooterPage />
        </ContainerLogin>
        <Notification />
      </GlobalContainer>
    </motion.div>
  );
};

export default Login;
