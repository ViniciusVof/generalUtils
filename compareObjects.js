export default function compareObjects(objX, objY) {
  const objXProps = Object.getOwnPropertyNames(objX);
  const objYProps = Object.getOwnPropertyNames(objY);

  if (objXProps.length !== objYProps.length) {
    return false;
  }

  for (let i = 0; i < objXProps.length; i++) {
    const propName = objXProps[i];
    if (objX[propName] !== objY[propName]) {
      return false;
    }
  }
  return true;
}
