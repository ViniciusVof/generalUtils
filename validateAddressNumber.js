export default function validateAddressNumber(value) {
  const blackList = ['0', '00', '000', '0000', '00000'];

  if (value?.length > 0 && !blackList.includes(value)) return true;
  return false;
}
