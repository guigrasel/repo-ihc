import { Notify } from 'quasar';

export function notify(
  message: string,
  color: string,
  icon: string,
  timeout: number
) {
  Notify.create({
    message,
    timeout,
    color,
    icon,
  });
}

export function notifyPositive(
  message: string,
  color = 'positive',
  icon = 'check',
  timeout = 3000
) {
  notify(message, color, icon, timeout);
}

export function notifyNegative(
  message: string,
  color = 'negative',
  icon = 'error',
  timeout = 3000
) {
  notify(message, color, icon, timeout);
}