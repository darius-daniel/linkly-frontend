import { RefObject, useEffect, useRef, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

import GradientText from '../components/GradientText';
import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosInstance';

export default function SignUp() {
  const userNameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwdRef: RefObject<HTMLInputElement> = useRef(null);
  const confirmPwdRef: RefObject<HTMLInputElement> = useRef(null);

  const navigate: NavigateFunction = useNavigate();

  const [matching, setMatching] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [isAvailable, setAvailability] = useState<boolean>(true);

  useEffect(() => {
    if (password === passwordRepeat) setMatching(true);
    else setMatching(false);
  }, [pwdRef.current?.value, confirmPwdRef.current?.value]);

  useEffect(() => {
    if (username) {
      axiosInstance
        .get(`/getUserNameAvailabilty/${username}`)
        .then((response: AxiosResponse) => {
          setAvailability(response.data);
        })
        .catch((error: AxiosError) => console.error(error.message));
    }
  }, [username]);

  const handleChange = (
    refObj: RefObject<HTMLInputElement>,
    stateHookSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (refObj.current) stateHookSetter(refObj.current.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = { username, password };

    axiosInstance
      .post('/sign_up', credentials)
      .then((response: AxiosResponse) => {
        const { id: userId } = response.data;
        navigate(`/user/${userId}`);
      })
      .catch((error: AxiosError) => {
        const { status } = error;
        if (status === 403) setAvailability(false);
      });
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
        <label className="text-gradient">Username:</label>
        <input
          type="input"
          name="username"
          className="usr text-black bg-lite"
          placeholder="username"
          required={true}
          ref={userNameRef}
          onChange={() => handleChange(userNameRef, setUsername)}
        />
        {isAvailable === false && (
          <p
            className="text-primary-pink text-bold"
            style={{
              fontSize: '12px',
              marginBottom: '8px',
            }}
          >
            Username is already taken
          </p>
        )}
        <label className="text-gradient">Password:</label>
        <input
          type="password"
          name="pwd"
          className="pwd text-black bg-lite"
          placeholder="password"
          required={true}
          ref={pwdRef}
          onChange={() => handleChange(pwdRef, setPassword)}
        />
        <label className="text-gradient">Confirm Password:</label>
        <input
          type="password"
          name="pwd"
          className="pwd text-black bg-lite"
          placeholder="confirm password"
          required={true}
          ref={confirmPwdRef}
          onChange={() => handleChange(confirmPwdRef, setPasswordRepeat)}
        />
        {matching === false && (
          <p
            className="text-primary-pink text-bold"
            style={{
              marginBottom: '8px',
              paddingLeft: '0.5em',
              fontSize: '12px',
            }}
          >
            Password fields do not match
          </p>
        )}
        <div className="form-controls">
          <button
            type="submit"
            className="submit btn btn-primary btn-pill"
            disabled={!isAvailable || !matching}
          >
            Sign Up
          </button>
          <div className="options sign-up-options">
            <Link to="/sign_in" aria-disabled={true} className="text-lite">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
