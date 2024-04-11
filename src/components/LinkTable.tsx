import { LinkTableProps } from '../utils/interfaces';

export default function LinkTable({ links }: LinkTableProps) {
  const tableHeaders: Array<string> = [
    'Short Link',
    'Original Link',
    'Clicks',
    'Date',
  ];

  return (
    <table className="link-table">
      <thead>
        <tr className="text-lite">
          {tableHeaders.map((colHead, idx) => (
            <th scope="col" key={idx} className="text-lite">
              {colHead}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {links.map((data, idx) => {
          const { shortUrl, longUrl, clicks, created_at } = data;
          const date = `${created_at.getDate()}-${created_at.getMonth()}-${created_at.getFullYear()}`;
          return (
            <tr key={idx} className="text-lite">
              <td>{shortUrl}</td>
              <td>{longUrl}</td>
              <td>{clicks}</td>
              <td>{date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
