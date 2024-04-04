import { RefObject, useRef } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import GradientText from '../components/GradientText';
import axiosInstance from '../utils/axiosInstance';

export default function SignIn() {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);
  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current ? emailRef.current.value : '';
    const password = pwdRef.current ? pwdRef.current.value : '';

    axiosInstance
      .post('http://127.0.0.1:5000/sign-in', { email, password })
      .then((response: AxiosResponse) => {
        const { userId } = response.data;
        navigate(`/user/${userId}`);
      })
      .catch((error: Error) => console.error(error.message));
  };

  return (
    <>
      <header>
        <Link to="/">
          <GradientText text="Linkly" fontSize="37px" />
        </Link>
      </header>
      <form onSubmit={handleSubmit} className="user-form bg-grey">
        <label className="text-gradient">Email:</label>
        <input
          type="email"
          name="email"
          className="usr text-black bg-lite"
          placeholder="example@email.com"
          required={true}
          ref={emailRef}
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
        <p
          className="text-primary-pink text-bold"
          style={{
            marginBottom: '20px',
            paddingLeft: '0.5em',
            fontSize: '12px',
          }}
        >
          Incorrect username or password
        </p>
        <div className="form-controls">
          <button type="submit" className="submit btn btn-primary btn-pill">
            Log In
          </button>
          <Link to="/sign-up" aria-disabled={true} className="options">
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
