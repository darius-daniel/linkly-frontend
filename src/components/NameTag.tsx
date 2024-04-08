import { NameTagProps } from '../utils/interfaces';

export default function NameTag({ username }: NameTagProps) {
  return (
    <span className="nametag bg-grey">
      <p className="text-lite text-bold">Welcome</p>
      <h1 className="text-white text-bold">{username}</h1>
    </span>
  );
}
