import {
  Link,
  NavigateFunction,
  useNavigate,
  useParams,
} from 'react-router-dom';

import GradientText from '../components/GradientText';
import InputBar from '../components/InputBar';
import LinkTable from '../components/LinkTable';
import NameTag from '../components/NameTag';
import axiosInstance from '../utils/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../utils/interfaces';

export default function UserHome() {
  const [shortUrlNum, setShortUrlNum] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [updateLinkArray, setUpdateLinkArray] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/getUserById/${userId}`)
      .then((response: AxiosResponse) => setUser(response.data))
      .catch((error: AxiosError) => {
        console.log(error.message, 'User with userId not found');
        navigate('/');
      });
    setUpdateLinkArray(false);
  }, [updateLinkArray]);

  return (
    <>
      <header>
        <Link to="/">
          <GradientText text="Linkly" fontSize="37px" />
        </Link>
        <InputBar
          className="header-input"
          userId={userId}
          linkArrayRefreshSetter={setUpdateLinkArray}
        />
        <NameTag username={user ? user.username : ''} />
      </header>
      <h1
        className="text-white"
        style={{ textAlign: 'left', fontSize: '18px', marginBottom: '25px' }}
      >
        History {shortUrlNum > 0 ? `(${shortUrlNum})` : null}
      </h1>
      <LinkTable userId={userId} shortUrlNumberGetter={setShortUrlNum} />
    </>
  );
}
