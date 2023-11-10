import { removeMask } from "./index";
import { isValidPhoneNumber } from "react-phone-number-input";

export default function validatePhone(value) {
  const number = removeMask("phone", value);
  const numberCheck = number?.match(
    /(((\+?)[0-9]{2})?)((\(?)([0-9]{2})(\)?))(([0-9]{9})|([0-9]{5}(\?)[0-9]{4}))/
  );
  const onlyPhone = number?.slice(4);

  const blackList = [
    "11111111",
    "22222222",
    "33333333",
    "44444444",
    "55555555",
    "66666666",
    "77777777",
    "88888888",
    "99999999",
    "00000000",
    "111111111",
    "222222222",
    "333333333",
    "444444444",
    "555555555",
    "666666666",
    "777777777",
    "888888888",
    "999999999",
    "000000000",
  ];

  if (!number) return true;

  function checkLength() {
    if (number?.length > 0 && number?.length >= 12) return true;
    return false;
  }
  if (checkLength() && numberCheck && !blackList.includes(onlyPhone)) {
    if (isValidPhoneNumber(`+${number}`)) {
      return true;
    }
    return false;
  }

  return false;
}
