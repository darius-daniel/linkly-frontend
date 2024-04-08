export interface GradientTextProps {
  text: string;
  fontSize: string;
}

export interface BarProps {
  className: string;
}

export interface NotificationProps {
  number: number
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

export interface UserProps {
  user: User;
}

export interface RouteError {
  statusText: string;
  error: {
    message: string;
  }
}
