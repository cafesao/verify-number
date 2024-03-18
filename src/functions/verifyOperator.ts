import operators from '../helpers/listOperator';

export default function verifyOperator(input: number) {
  const numberString = input.toString();
  const prefix = numberString.substring(3, 5);

  const listOperatores = [];

  for (const operator in operators) {
    if (operators[operator].includes(prefix)) {
      listOperatores.push(operator);
    }
  }
  if (listOperatores.length === 0) {
    return false;
  }
  return listOperatores;
}
