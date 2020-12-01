import Main from "components/Main";

import * as S from "./styles";

const defaultEndpoint = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps({ query }: any) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default function Character({ data }: any) {
  const { name, image, gender, location, origin, species, status } = data;
  return(
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Image src={image}/>
    </S.Container>
  );
}
