import { RefObject, useEffect, useRef, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

import GradientText from '../components/GradientText';
import { AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosInstance';

export default function SignUp() {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);
  const confirmPwdRef: RefObject<HTMLInputElement> = useRef(null);

  const navigate: NavigateFunction = useNavigate();

  const [matching, setMatching] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  useEffect(() => {
    if (password === passwordRepeat) setMatching(true);
    else setMatching(false);
  }, [pwdRef.current?.value, confirmPwdRef.current?.value]);

  const handleChange1 = () => {
    if (pwdRef.current) setPassword(pwdRef.current.value);
  };

  const handleChange2 = () => {
    if (confirmPwdRef.current) setPasswordRepeat(confirmPwdRef.current.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = {
      email: emailRef.current?.value,
      password: pwdRef.current?.value,
    };

    axiosInstance
      .post('/sign-up', credentials)
      .then((response: AxiosResponse) => {
        const { newUser } = response.data;
        console.log(newUser);
        if (response.status === 201) navigate(`/user/:${newUser.username}`);
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
          onChange={handleChange1}
        />
        <label className="text-gradient">Confirm Password:</label>
        <input
          type="password"
          name="pwd"
          className="pwd text-black bg-lite"
          placeholder="confirm password"
          required={true}
          ref={confirmPwdRef}
          onChange={handleChange2}
        />
        {matching === false && (
          <p
            className="text-primary-pink text-bold"
            style={{
              marginTop: 0,
              marginBottom: '5px',
              paddingLeft: '0.5em',
              fontSize: '12px',
            }}
          >
            No match
          </p>
        )}
        <div className="form-controls">
          <button
            type="submit"
            className="submit btn btn-primary btn-pill"
            disabled={matching === false}
          >
            Sign Up
          </button>
          <div className="options sign-up-options">
            <Link to="/sign-in" aria-disabled={true} className="text-lite">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
