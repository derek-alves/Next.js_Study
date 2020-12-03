import * as S from "./styles";
import Cards from "components/Cards";
import {motion} from 'framer-motion'

interface props {
  data: {};
  
}

const Main: React.FC<props> = ({ data }) => {
  const { results: defaultResult = [] }:any = data
  
  
  return (
    <S.Wrapper>

      <motion.div initial="hidden" animate="visible" variants={{
          hidden:{
            scale:.8,
            opacity:0
          },
          visible:{
            scale:1,
            opacity:1,
            transition:{
              delay:.4
            }
          }
      }}>

      <S.Title>Rick and morty wiki!</S.Title>
      </motion.div>
      <S.CardContainer>
        {
          defaultResult.map((result: { id: number; name: string; image:string })=>{
            const {id,name,image} = result;
            return(
              <Cards key={id} id={id} name={name} image={image}/>
            )
          })
        }
        
      </S.CardContainer>
     

    </S.Wrapper>
  );
};
export default Main;
