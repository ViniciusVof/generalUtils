export default function addZeroNumber(number) {
  const numberFormatted =
    number <= 9 ? number?.toString().padStart(2, '0') : number;
  return numberFormatted;
}
