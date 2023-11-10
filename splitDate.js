export default function splitDate(date) {
  const [day, month, year] = date.split('/');
  const dateSplitted = new Date(+year, +month - 1, +day);
  return dateSplitted;
}
