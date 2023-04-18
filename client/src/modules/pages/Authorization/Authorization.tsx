import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useMutation } from '@apollo/client';

import { GITHUB_AUTH } from 'apollo/mutations/auth';

export const AuthorizationPage = () => {
  const [isDisabledBtn, setDisabledBtn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [githubAuth] = useMutation(GITHUB_AUTH);

  useEffect(() => {
    if (location.search.match(/code=/)) {
      setDisabledBtn(true);
      const code = location.search.replace('?code=', '');
      githubAuth({
        variables: { code },
        onCompleted: ({ githubAuth: { token } }) => authComplete(token),
      });
    }
  }, []);

  const authComplete = (token: string) => {
    localStorage.setItem('token', token);
    navigate('/');
    setDisabledBtn(false);
  };

  const requestCode = () => {
    const clientID = process.env.REACT_APP_CLIENT_ID;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`;
  };

  return (
    <button onClick={requestCode} disabled={isDisabledBtn}>
      Sign In with GitHub
    </button>
  );
};

export default AuthorizationPage;
