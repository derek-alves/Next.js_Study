import {useEffect, useState} from 'react';

import * as S from "./styles";
import Cards from "components/Cards";

interface props {
  data: {};
  
}

const Main: React.FC<props> = ({ data }) => {
  const { results: defaultResult = [] }:any = data
  
  
  return (
    <S.Wrapper>
      <S.Title>Rick and morty wiki!</S.Title>

      <S.CardContainer>
        {
          defaultResult.map((result: { id: number; name: string; image:string })=>{
            const {id,name,image} = result;
            return(
              <Cards key={id} name={name} image={image}/>
            )
          })
        }
        
      </S.CardContainer>
     

    </S.Wrapper>
  );
};
export default Main;
