import { formatPhoneNumberIntl } from 'react-phone-number-input';
import StringMask from 'string-mask';

export default function formatCellphone(cellphone) {
  if (cellphone?.slice(0, 2) === '55') {
    let mask = new StringMask('+00 (00) 00000-0000', { reverse: true });
    if (cellphone?.length < 13) {
      mask = new StringMask('+00 (00) 0000-0000', { reverse: true });
    }
    return mask.apply(cellphone);
  }
  return formatPhoneNumberIntl(`+${cellphone}`);
}
