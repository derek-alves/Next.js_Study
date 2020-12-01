import React from 'react';

import * as S from "./styles";

interface Personagens{
  name:string;
  image:string;
}
const Cards: React.FC<Personagens> = (props) => {
  return (
    <S.Container>
      <S.Img src={props.image} alt="character image"/>
    <S.Name>{props.name}</S.Name>
    </S.Container>
  );
}

export default Cards;