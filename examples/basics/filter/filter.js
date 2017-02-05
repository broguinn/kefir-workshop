const famousFoods = [
  {name: "Sir Francis Bacon",
   birthYear: 1561},
  {name: "Edward Montagu, Earl of Sandwich",
   birthYear: 1625},
  {name: "James Cook",
   birthYear: 1728}
]

console.log(
  famousFoods.filter(food => food.birthYear % 2 === 1)
);
