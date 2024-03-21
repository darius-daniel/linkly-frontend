import GradientTextProps from '../utils/interfaces';
import './styles/Text.css';

export default function GradientText({ text, fontSize }: GradientTextProps) {
  const styles = {
    fontSize,
    fontWeight: 'bolder',
  };

  return (
    <span className="text-gradient" style={styles}>
      {text}
    </span>
  );
}
