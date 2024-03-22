import GradientText from '../components/GradientText';
import InputBar from '../components/InputBar';
import SignInButton from '../components/SignInButton';
import SignUpButton from '../components/SignUpButton';

export default function UserHome() {
  return (
    <header>
      <GradientText text="Linkly" fontSize="37px" />
      <InputBar className="header-input" />
      <div>
        <SignInButton />
        <SignUpButton />
      </div>
    </header>
  );
}
