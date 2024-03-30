import { RefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import GradientText from '../components/GradientText';
import { usePost } from '../utils/hooks';

export default function SignUp() {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);
  const confirmPwdRef: RefObject<HTMLInputElement> = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = {
      email: emailRef.current?.value,
      password: pwdRef.current?.value,
    };
    console.log(credentials);
    usePost('/sign-up', credentials);
  };

  return (
    <>
      <header onClick={() => navigate('/')}>
        <GradientText text="Linkly" fontSize="37px" />
      </header>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="user-form bg-grey"
      >
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
        <label className="text-gradient">Confirm Password:</label>
        <input
          type="password"
          name="pwd"
          className="pwd text-black bg-lite"
          placeholder="confirm password"
          required={true}
          ref={confirmPwdRef}
        />
        <div className="form-controls">
          <button type="submit" className="submit btn btn-primary btn-pill">
            Sign Up
          </button>
          <div className="options sign-up-options">
            <a href="/sign-in" aria-disabled={true} className="text-lite">
              Sign in
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
