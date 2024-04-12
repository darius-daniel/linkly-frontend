import { Dispatch, SetStateAction } from 'react';
import DateObject from 'react-date-object';

export interface GradientTextProps {
  text: string;
  fontSize: string;
}

export interface BarProps {
  className: string;
  userId: string | undefined;
  linkArrayRefreshSetter: Dispatch<SetStateAction<boolean>>;
}

export interface NotificationProps {
  number: number;
}

export interface NameTagProps {
  username: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  createdAt: DateObject;
  updatedAt: DateObject;
}

export interface Links {
  linkId: string;
  shortUrl: string;
  longUrl: string;
  clicks: number;
  createdAt: DateObject;
  updatedAt: DateObject;
}

export interface LinkTableProps {
  userId: string | undefined;
}

export interface RouteError {
  statusText: string;
  error: {
    message: string;
  };
}
