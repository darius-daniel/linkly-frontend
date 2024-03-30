import { RefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import GradientText from '../components/GradientText';
import { usePost } from '../utils/hooks';

export default function SignIn() {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = {
      email: emailRef.current?.value,
      password: pwdRef.current?.value,
    };
    usePost('/sign-in', credentials);
  };

  return (
    <>
      <header onClick={() => navigate('/')}>
        <GradientText text="Linkly" fontSize="37px" />
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
          <a href="/" aria-disabled={true} className="options">
            Forgot password?
          </a>
        </div>
      </form>
    </>
  );
}
