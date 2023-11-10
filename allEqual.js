export default function allEqual(input) {
  return input.split('').every(char => char === input[0]);
}
