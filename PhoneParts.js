export default function PhoneParts(part, patient, values) {
  const number = patient
    ? values.phoneNumber.replace(/\D/g, '')
    : values.phoneResponsible.replace(/\D/g, '');
  const numberValid = number.length >= 12 ? number : null;

  const ddi = numberValid?.slice(0, 2) || '';
  const ddd = numberValid?.slice(2, 4) || '';
  const phone = numberValid?.slice(4) || '';
  if (part === 'ddi') return ddi;
  if (part === 'ddd') return ddd;
  if (part === 'phone') return phone;
}
