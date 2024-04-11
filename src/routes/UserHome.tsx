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
import { useState } from 'react';
import { Links, User } from '../utils/interfaces';

export default function UserHome() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const navigate: NavigateFunction = useNavigate();
  const [links, setLinks] = useState<[] | Array<Links>>([])

  axiosInstance
    .post('/get_user', { userId })
    .then((response: AxiosResponse) => setUser(response.data))
    .catch((error: AxiosError) => {
      console.error(error.message);
      navigate('/');
    });

  return (
    <>
      <header>
        <Link to="/">
          <GradientText text="Linkly" fontSize="37px" />
        </Link>
        <InputBar className="header-input" userId={userId} linkArrayUpdater={setLinks} />
        <NameTag username={user ? user.username : ''} />
      </header>
      <h1 className="text-white text-bold">History</h1>
      <LinkTable links={links} />
    </>
  );
}
