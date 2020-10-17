import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mutate as mutateGlobal} from 'swr';
import { useFetch } from "../hooks/useFetch";
import api from "../services/api";

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const { data, mutate } = useFetch<User[]>("users");

  const handleNameChange = useCallback(
    (id: number) => {
      api.put(`users/${id}`, { name: "Boooom" });

      const updataUsers = data?.map((user) => {
        if (user.id === id) {
          return { ...user, name: "Boooom" };
        }
        return user;
      });
      mutate(updataUsers, false);
      mutateGlobal(`users/${id}`,{id,name: "Boooom"})
    },
    [data, mutate]
  );

  if (!data) {
    return <p>Cerregango...</p>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          <button type="button" onClick={() => handleNameChange(user.id)}>
            Alterar nome
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
