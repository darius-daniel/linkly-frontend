import { useEffect, useState } from 'react';
import DateObject from 'react-date-object';
import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from '../utils/axiosInstance';
import { Links, LinkTableProps } from '../utils/interfaces';
import getFavicon from '../utils/getFavicon';

export default function LinkTable({
  userId = undefined,
  shortUrlNumberGetter = undefined,
}: LinkTableProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [links, setLinks] = useState<Array<Links>>([
    {
      linkId: 'e996ef20-f827-11ee-abc6-2f5541a137ce',
      shortUrl: 'https://linkly.com/8jdwe4yu',
      longUrl: 'https:/npmjs.com/package/react-date-object',
      clicks: 0,
      createdAt: new DateObject(),
      updatedAt: new DateObject(),
    },
  ]);

  useEffect(() => {
    if (userId) {
      axiosInstance
        .get(`/getLinksByUserId/${userId}`)
        .then((response: AxiosResponse) => {
          setLinks(response.data);
          if (shortUrlNumberGetter) shortUrlNumberGetter(response.data.length);
        })
        .catch((error: AxiosError) => console.error(error.message));
    }
  }, [userId, shortUrlNumberGetter]);

  useEffect(() => {
    setTimeout(() => setCopied(false), 5 * 1000);
  }, [copied]);

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
        {links.map((link: Links, idx: number) => {
          const { shortUrl, longUrl, clicks, createdAt } = link;
          const creationDate = createdAt.toString().split('T')[0];
          return (
            <tr key={idx} className="text-lite">
              <td>
                <a
                  href={shortUrl}
                  target="_blank"
                  className="shortUrl text-lite"
                >
                  {shortUrl}
                </a>
                <span
                  className="clipboard"
                  onClick={async () => {
                    await navigator.clipboard.writeText(shortUrl);
                    setCopied(true);
                  }}
                >
                  {!copied ? (
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginTop: '8px' }}
                    >
                      <path
                        d="M13.125 11.625H7.5C6.44531 11.625 5.625 10.8047 5.625 9.75V2.25C5.625 1.22461 6.44531 0.375 7.5 0.375H11.6016C11.9531 0.375 12.334 0.550781 12.5977 0.814453L14.5605 2.77734C14.8242 3.04102 15 3.42188 15 3.77344V9.75C15 10.8047 14.1504 11.625 13.125 11.625ZM1.875 4.125H4.6875V5.53125H1.875C1.61133 5.53125 1.40625 5.76562 1.40625 6V13.5C1.40625 13.7637 1.61133 13.9688 1.875 13.9688H7.5C7.73438 13.9688 7.96875 13.7637 7.96875 13.5V12.5625H9.375V13.5C9.375 14.5547 8.52539 15.375 7.5 15.375H1.875C0.820312 15.375 0 14.5547 0 13.5V6C0 4.97461 0.820312 4.125 1.875 4.125Z"
                        fill="#C9CED6"
                      />
                    </svg>
                  ) : (
                    <span
                      className="text-primary-green"
                      style={{ fontSize: '12px' }}
                    >
                      Copied
                    </span>
                  )}
                </span>
              </td>
              <td className="container">
                <img
                  alt="site favicon"
                  src={getFavicon(longUrl)}
                  style={{
                    height: '32px',
                    width: '32px',
                  }}
                />{' '}
                <p className="text-lite">
                  {longUrl.slice(0, 30)}
                  {longUrl.length >= 30 ? '...' : null}
                </p>
              </td>
              <td className="clearfix">{clicks}</td>
              <td>{creationDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
