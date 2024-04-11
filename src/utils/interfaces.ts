import { Dispatch, SetStateAction } from 'react';

export interface GradientTextProps {
  text: string;
  fontSize: string;
}

export interface BarProps {
  className: string;
  userId: string | undefined;
  linkArrayUpdater: Dispatch<SetStateAction<Array<Links>>>;
}

export interface NotificationProps {
  number: number;
}

export interface NameTagProps {
  username: string;
}

export interface User {
  userId: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface Links {
  linkId: string;
  shortUrl: string;
  longUrl: string;
  clicks: number;
  created_at: Date;
  updated_at: Date;
}

export interface LinkTableProps {
  links: Array<Links>;
}

export interface RouteError {
  statusText: string;
  error: {
    message: string;
  };
}
