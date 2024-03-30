export default function LinkTable() {
  const tableHeaders: Array<string> = [
    'Short Link',
    'Original Link',
    'Clicks',
    'Date',
  ];
  const testData: Array<{
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
        {testData.map((data, idx) => {
          const { short, long, clicks, date } = data;
          return (
            <tr key={idx} className="text-lite">
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
