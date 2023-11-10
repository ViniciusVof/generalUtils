export default function splitMask(text, separator) {
  if (separator === '@') {
    return text.replace(/^(.{3})[^@]+/, '$1******');
  }
  return text.replace(/^[^-]+/, '(**)*****');
}
