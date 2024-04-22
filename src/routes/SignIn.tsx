import { RefObject, useRef, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from '../utils/axiosInstance';
import GradientText from '../components/GradientText';

export default function SignIn() {
  const userNameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);
  const navigate: NavigateFunction = useNavigate();

  const [validated, setValidated] = useState<boolean>(false);
  const [message, setMessage] = useState<null | string>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userNameRef.current && pwdRef.current) {
      const credentials = {
        username: userNameRef.current.value,
        password: pwdRef.current.value,
      };

      axiosInstance
        .post('/sign_in', credentials)
        .then((response: AxiosResponse) => {
          const { id: userId } = response.data;
          setValidated(true);
          navigate(`/user/${userId}`);
        })
        .catch((error: AxiosError) => {
          setValidated(false);

          const { response } = error;
          if (response?.status === 401) setMessage('Incorrect password');
          else if (response?.status === 404) setMessage('User does not exist');
        });
    }
  };

  return (
    <>
      <header>
        <Link to="/">
          <GradientText text="Linkly" fontSize="37px" />
        </Link>
      </header>
      <form onSubmit={handleSubmit} className="user-form bg-grey">
        <label className="text-gradient">Username:</label>
        <input
          type="input"
          name="username"
          className="usr text-black bg-lite"
          placeholder="username"
          required={true}
          ref={userNameRef}
        />
        <label className="text-gradient">Password:</label>
        <input
          type="password"
          name="pwd"
          className="pwd text-black bg-lite"
          placeholder="password"
          required={true}
          ref={pwdRef}
        />
        {validated === false && (
          <p
            className="text-primary-pink text-bold"
            style={{
              marginBottom: '8px',
              paddingLeft: '0.5em',
              fontSize: '12px',
            }}
          >
            {message}
          </p>
        )}
        <div className="form-controls">
          <button type="submit" className="submit btn btn-primary btn-pill">
            Log In
          </button>
          <Link to="/sign_up" aria-disabled={true} className="options">
            Sign Up
          </Link>
          <Link to="/" aria-disabled={true} className="options">
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  );
}
