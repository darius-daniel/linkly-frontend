import { useParams } from 'react-router-dom';

import GradientText from '../components/GradientText';
import InputBar from '../components/InputBar';
import LinkTable from '../components/LinkTable';
import NameTag from '../components/NameTag';

export default function UserHome() {
  const { userName } = useParams();
  return (
    <>
      <header>
        <GradientText text="Linkly" fontSize="37px" />
        <InputBar className="header-input" />
        <NameTag username={userName} />
      </header>
      <h1 className="text-white text-bold">History</h1>
      <LinkTable />
    </>
  );
}
