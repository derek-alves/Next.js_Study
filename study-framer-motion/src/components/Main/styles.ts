import styled from "styled-components";

export const Wrapper = styled.div`
  background: #06092b;
  color: #fff;
  height: 100%;
  padding: 3rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const CardContainer = styled.div`
  width:100%;
  height:100%;
  margin-top:3rem;
  display:flex;
  flex-shrink:1;
  flex-wrap:wrap;
  justify-content:space-around;
  background:#06092b;
  overflow-y: scroll;
  max-width:900px;

  ::-webkit-scrollbar{
      width:0.5px;
    }
    ::-webkit-scrollbar-thumb{
      background-color:none;
   
    }
    ::-webkit-scrollbar-track{
        background-color:none;
    }

`;

export const Input = styled.input`
  height:3rem;
  width:30rem;
  outline: none;
  padding:1rem ;
  margin-right:1rem;
  border-radius:0.5rem;
`;

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  font-size: 2rem;
  border-radius:0.5rem;
  outline: none;
`;

export const SearchWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 3rem 0 3rem 0;
`;
