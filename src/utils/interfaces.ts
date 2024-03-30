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

export interface RouteError {
  statusText: string;
  error: {
    message: string;
  }
}
