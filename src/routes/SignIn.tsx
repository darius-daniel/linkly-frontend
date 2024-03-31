import { RefObject, useRef } from 'react';
import { Link } from 'react-router-dom';

import GradientText from '../components/GradientText';
import axiosInstance from '../utils/axiosInstance';

export default function SignIn() {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current ? emailRef.current.value : '';
    const password = pwdRef.current ? pwdRef.current.value : '';

    axiosInstance
      .post('/sign-in', { email, password })
      .then((response) => console.log(response.status))
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
