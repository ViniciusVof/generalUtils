export default function removeMask(type, value) {
  if (type === 'passport') return value;
  if (type === 'cpf') return value?.replace(/[^0-9]/g, '');
  return value?.replace(/[^a-zA-Z0-9]/g, '');
}
