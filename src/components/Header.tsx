import GradientText from './GradientText';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

export default function Header() {
  return (
    <header>
      <GradientText text="Linkly" fontSize="37px" />
      <div>
        <SignInButton />
        <SignUpButton />
      </div>
    </header>
  );
}
