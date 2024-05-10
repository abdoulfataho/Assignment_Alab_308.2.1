/*values of plants and areas*/
const gardenRadius = 5;
const plantRadius = 0.8;
const plantsWeekOne = 20;
const plantsWeekTwo = 40;
const plantsWeekThree = 80;
const PI = 3.1415;
const gardenArea = PI * gardenRadius * gardenRadius;
console.log( gardenArea);
/*functions to find out what you should do with the garden.*/
const plantArea = 0.8;
if (plantArea > 0.8 * gardenArea)
 {console.log("Prune")}
 
if (plantArea >= 0.5 * gardenArea && plantArea <= 0.8 * gardenArea)
 {console.log("Monitor")}
 
if (plantArea < 0.5 * gardenArea)
 {console.log("Plant")}
//  Part 2
 /*prediciton of plant growth after number of weeks */
 console.log(
    'Plant growth after the first week is ${plantsWeekOne * plantArea}'
 )
console.log(
    `Plant growth after the second week is ${plantsWeekTwo * plantArea}`
 )
console.log(
    `Plant growth after the third week is ${plantsWeekThree * plantArea}`
)
