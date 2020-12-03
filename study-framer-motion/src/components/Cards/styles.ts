import styled from "styled-components";
import {motion} from 'framer-motion';

 export const Container = styled(motion.div)`
  height: 23rem;
  width: 25rem;
  margin: 2rem;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 3rem;
  background-color: white;
  max-width: 230px;

a{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-decoration:none;
}
  transition:background 0.2s;
  &:hover{
    background:rgba(255,255,255,0.1);
    img{
      border-width:0.5rem;
      border-color:blue;
    }

    span{
      color:white;
    }
  }

  @media (max-width: 743px) {
    width: 100%;
  }

  @media (min-width: 821px) and (max-width: 1089px) {
    width: 40%;
  }
`;

export const Img = styled.img`
  width: 15rem;
  margin: 1.5rem 1rem 1rem 1rem;
  border: 1px solid #06092b;
  border-radius: 3rem;
`;

export const Name = styled.span`
  color: black;
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: bold;

`;

