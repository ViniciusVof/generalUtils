export default function checkResponsibleAge(data) {
  const responsibleDate = new Date(data);
  const fullYear = responsibleDate.getFullYear() + 18;
  const fullMonth = responsibleDate.getUTCMonth();
  const fullUTC = responsibleDate.getUTCDate();
  const actualDate = new Date();
  const responsibleAge = new Date(fullYear, fullMonth, fullUTC);
  return responsibleAge <= actualDate;
}
