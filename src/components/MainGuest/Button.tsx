import "./styles/Button.css";

interface ButtonProps {
  text: string;
  href: string;
  className: string;
}

export default function Button({ text, className, href }: ButtonProps) {
  return (
    <button className={className} type="button">
      <a href={href}>{text}</a>
    </button>
  );
}
