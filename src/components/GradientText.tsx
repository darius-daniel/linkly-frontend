import GradientTextProps from '../utils/interfaces';
import './styles/GradientText.css';

export default function GradientText({ text, fontSize }: GradientTextProps) {
  const styles = {
    fontSize,
    fontWeight: 'bolder',
  };

  return (
    <span className="gradient-text" style={styles}>
      {text}
    </span>
  );
}
