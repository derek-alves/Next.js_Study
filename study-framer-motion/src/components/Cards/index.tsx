import Link from "next/link";
import {motion} from 'framer-motion';

import * as S from "./styles";

interface Personagens {
  id: number;
  name: string;
  image: string;
}
const Cards: React.FC<Personagens> = (props) => {
  return (
    <S.Container whileHover={{
      scale:1.2,
      transition:{
        duration:.2
      }
    }}>
      <Link href="/character/[id]" as={`/character/${props.id}`}>
        <a>
          <S.Img src={props.image} alt="character image" />
          <S.Name>{props.name}</S.Name>
        </a>
      </Link>
    </S.Container>
  );
};

export default Cards;
