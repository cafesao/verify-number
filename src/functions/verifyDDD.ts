import listDDD from '../helpers/listDDD';

export default function verifyDDD(input: number) {
  const inputString = input.toString();
  const ddd = inputString.slice(0, 2);
  if (listDDD[ddd]) {
    return listDDD[ddd];
  } else {
    return false;
  }
}
