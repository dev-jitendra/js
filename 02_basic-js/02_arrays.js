const marvel_heors = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//push() -> array method
marvel_heors.push(dc_heros);    // -> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heors[3][1]);    // -> 'flash'

//concat() -> array method
marvel_heors.concat(dc_heros);  // -> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heors);

const allHeros = marvel_heors.concat(dc_heros);
console.log(allHeros);

//spread operator ... -> concatination array method
const all_new_Heros = [...marvel_heors, ...dc_heros];
console.log(all_new_Heros);

//flat() -> array method
const another_array = [1, 2, 3, [4, 5, 6, [6, 7, [4, 5]]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//from() -> array method
console.log(Array.isArray("Narendra"));
console.log(Array.from("Narendra"));
console.log(Array.from({name:"Narendra"}));     //intresting

//Array.of() -> array method
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));