import './styles/Table.css';

export default function Table() {
  const columns: Array<string> = [
    'Short Link',
    'Original Link',
    'Clicks',
    'Date Created',
  ];
  const rows: Array<{
    short: string;
    long: string;
    clicks: number;
    date: string;
  }> = [
      {
        short: 'https://linkly.com/Bn41aCOlnxj',
        long: 'https://www.twitter.com/tweets/8erelCoihu/',
        clicks: 1313,
        date: 'Oct-10-2023',
      },
      {
        short: 'https://linkly.com/Bn41aCOlnxj',
        long: 'https://www.twitter.com/tweets/8erelCoihu/',
        clicks: 1313,
        date: 'Oct-10-2023',
      },
      {
        short: 'https://linkly.com/Bn41aCOlnxj',
        long: 'https://www.twitter.com/tweets/8erelCoihu/',
        clicks: 1313,
        date: 'Oct-10-2023',
      },
      {
        short: 'https://linkly.com/Bn41aCOlnxj',
        long: 'https://www.twitter.com/tweets/8erelCoihu/',
        clicks: 1313,
        date: 'Oct-10-2023',
      },
      {
        short: 'https://linkly.com/Bn41aCOlnxj',
        long: 'https://www.twitter.com/tweets/8erelCoihu/',
        clicks: 1313,
        date: 'Oct-10-2023',
      },
    ];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, idx) => (
            <th scope="col" key={idx}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          const { short, long, clicks, date } = row;
          return (
            <tr key={idx}>
              <td>{short}</td>
              <td>{long}</td>
              <td>{clicks}</td>
              <td>{date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
