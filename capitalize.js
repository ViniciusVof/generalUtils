export default function capitalize(phrase) {
  const finalSentence = phrase?.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase()
  );
  return finalSentence;
}
