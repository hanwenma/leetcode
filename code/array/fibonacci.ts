/**
 * 斐波那契数列(递归)
 * 时间复杂度：O(2^n)
 * @param n
 */
export function fibonacci1(n: number): number {
  if (n === 0 || n === 1) return n;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

/**
 * 斐波那契数列(循环)
 * 时间复杂度：O(n)
 * @param n
 */
export function fibonacci2(n: number, cash: number[] = [1, 1]): number {
  if (n < cash.length) {
    return cash[n - 1];
  }
  let i = n - cash.length;
  while (i > 0) {
    cash.push(cash[cash.length-1] + cash[cash.length - 2]);
    i--;
  }
  return cash[n - 1];
}

/**
 * 斐波那契数列(循环)
 * 时间复杂度：O(n)
 * @param n
 */
export function fibonacci3(n: number): number {
   if(n <= 0) return 0;
   if(n === 1) return 1;
   
   let n1 = 1;
   let n2 = 1;
   for (let i = 2; i < n; i++) {
     let rs = n1 + n2;
     n2 = n1;
     n1 = rs;
   }
   return n1;
}
