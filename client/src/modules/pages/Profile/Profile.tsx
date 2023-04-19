import { useQuery } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { GET_USERS } from 'apollo/queries/users';
import { client } from 'apollo/client';

export const Profile = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(GET_USERS, { fetchPolicy: 'network-only' });

  const logout = () => {
    localStorage.removeItem('token');
    client.writeQuery({ query: GET_USERS, data: { ...data, me: null } });
    navigate('/');
  };

  if (loading) return <p>Loading...</p>;

  if (data.me)
    return (
      <>
        <p>{data.me.githubLogin}</p>
        <button onClick={logout}>Log out</button>
      </>
    );

  return (
    <>
      <p>Пользователь не авторизован</p>
      <Link to="/">Авторизоваться</Link>
    </>
  );
};

export default Profile;
