export function joinTrim(arr: Array<string | number | undefined>): string {
  const rst = arr.filter((x) => x !== 'undefined');
  return rst.join(' ').trim();
}
