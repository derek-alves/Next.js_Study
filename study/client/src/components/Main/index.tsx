import  * as S  from "./styles";

const Main: React.FC = () => 
   (
     <S.Wrapper>
       <S.Logo src="/img/logo.svg" alt="Logo"/>
        <S.Title>Ola Mundo</S.Title>
        <S.Description>TypeScript, NextJS e Styled Components</S.Description>
        <S.Illustration src="img/hero-illustration.svg" alt="Ilustração"/>
     </S.Wrapper>
  );
;

export default Main;
