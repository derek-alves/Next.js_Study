import Link from "next/link";


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
  const { name, image, gender, location, origin, status } = data;
  return (
    <S.Container>
      <h1>{name}</h1>
      <S.Wrapper>
        <S.Image src={image} />
        <S.Profile>
          <h2>Character Details</h2>
          <ul>
            <li>
              <strong>Name:</strong>
              {name}
            </li>
            <li>
              <strong>Status:</strong>
              {status}
            </li>
            <li>
              <strong>Gender:</strong>
              {gender}
            </li>
            <li>
              <strong>Location:</strong>
              {location?.name}
            </li>
            <li>
              <strong>Name:</strong>
              {name}
            </li>
            <li>
              <strong>Originally from:</strong>
              {origin?.name}
            </li>
          </ul>
        </S.Profile>
      </S.Wrapper>

      <p>
        <Link href="/">
          <a>Back to all Charactes</a>
        </Link>
      </p>
    </S.Container>
  );
}
