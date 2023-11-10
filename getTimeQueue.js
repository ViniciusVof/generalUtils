import dayjs from 'dayjs';

export default function getTimeQueue(startTime) {
  const oldDate = dayjs(startTime); // Utilizar dayjs para enviar startTime como ISOString
  const difference = dayjs().diff(oldDate, 'minute');

  if (difference >= 60) {
    const differenceHours = dayjs().diff(oldDate, 'hour');
    const label = differenceHours > 1 ? 'Horas' : 'Hora';
    return `${differenceHours} ${label}`;
  }
  const label = difference > 1 ? 'Minutos' : 'Minuto';
  return `${difference} ${label}`;
}
