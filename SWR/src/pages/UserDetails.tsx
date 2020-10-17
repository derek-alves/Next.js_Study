import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
}

const UserDetails: React.FC = () => {
  //--------Default API usage --------
  
  
  // const [data, setData] = useState<User>();

  // useEffect(() => {
  //   fetch(`http://localhost:3333/users/${id}`).then((response) => {
  //     response.json().then((user) => {
  //       setData(user);
  //     });
  //   });
  // }, [id]);

  //SWR + API
  const { id } = useParams();
  const { data } = useFetch<User>(`users/${id}`);



  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      <li>ID: {data?.id}</li>
      <li>Name: {data?.name}</li>
    </ul>
  );
};

export default UserDetails;
