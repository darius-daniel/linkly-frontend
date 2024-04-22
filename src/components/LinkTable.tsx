import { useState } from 'react';
import DateObject from 'react-date-object';
import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from '../utils/axiosInstance';
import { Links, LinkTableProps } from '../utils/interfaces';

export default function LinkTable({ userId = undefined }: LinkTableProps) {
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
  if (userId) {
    axiosInstance
      .get(`/getLinksByUserId/${userId}`)
      .then((response: AxiosResponse) => setLinks(response.data))
      .catch((error: AxiosError) => console.error(error.message));
  }

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
                <a href={shortUrl} target="_blank">
                  {shortUrl}
                </a>
              </td>
              <td>{longUrl.slice(30)}</td>
              <td>{clicks}</td>
              <td>{creationDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
