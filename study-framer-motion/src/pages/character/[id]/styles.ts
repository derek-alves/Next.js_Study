import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  

  h1{
    font-size:10rem;
    margin-bottom:3rem;
  }

p{
  margin:2rem;
  padding:2rem;
  font-size:2rem;
 a{
   text-decoration:none
 }
}
 
`;

export const Image = styled.img`
  width: 30rem;
  height: 30rem;
  margin-right:6rem;
`;

export const Profile = styled.div`
  margin-top: 3rem;
  font-size:3rem;

  h2{
    margin-bottom:1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 726px) {
    flex-direction: column;
  }
`;