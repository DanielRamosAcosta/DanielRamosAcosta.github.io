export const sortBy = <T>(compareFn: (a: T, b: T) => number) => (arr: T[]) =>
  [...arr].sort(compareFn)
