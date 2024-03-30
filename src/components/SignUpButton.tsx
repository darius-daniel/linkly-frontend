import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function SignUpButton() {
  const navigate: NavigateFunction = useNavigate();

  return (
    <button
      type="button"
      className="btn btn-primary btn-pill btn-shadow"
      onClick={() => navigate('/sign-up')}
    >
      Register Now
    </button>
  );
}
