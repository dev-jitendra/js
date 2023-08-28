console.table([(2 == 1), (2 === 1), (2 > 1), (2 < 1), (2 >= 1), (2 >= 1), (2 != 1)]);
/**
 * console.log(2 == 1); -> false
 * console.log(2 === 1);    -> false
 * console.log(2 > 1);  -> true
 * console.log(2 < 1);  -> false
 * console.log(2 >= 1); -> true
 * console.log(2 >= 1); -> true
 * console.log(2 != 1); -> true
 */


console.table([("2" > 1), ("2" >= 1)]);
/**
console.log("2" > 1);   -> true
console.log("2" >= 1);  -> true
*/

console.table([(null > 0), (null == 0), (null >= 0)]);
/**
 * console.log(null > 0);   -> false
 * console.log(null == 0);   -> false
 * console.log(null >= 0);   -> true
 */

console.table([(undefined > 0), (undefined == 0), (undefined >= 0)]);
/**
 * console.log(undefined > 0);   -> false
 * console.log(undefined == 0);   -> false
 * console.log(undefined >= 0);   -> false
 */


// ===
console.table([("2" == 2), ("2" === 2)])
/**
 * console.log("2" == 2);   -> true
 * console.log("2" === 2);   -> false
 */