/* This array represents a weekly weather forecast.
  Each object in the array represents a day in the week.

  Below are exercises which use this array for modern javascript
  and iteration methods practice.

  Please don't change weeklyForecast array.
*/

const weeklyForecast = [
  { day: "Monday", temperature: 20, cloudCoverage: "broken", wind: 16 },
  { day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10 },
  { day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5 },
  { day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5 },
  { day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18 },
  { day: "Saturday", temperature: 19, cloudCoverage: "broken", wind: 25 },
  { day: "Sunday", temperature: 17, cloudCoverage: "overcast", wind: 30 }
]

/* Map 

In weeklyForecast array, the temperature properties are in Celcius
Please write an arrow function which takes weeklyForecast as an argument and returns a new array.
The new array should include day objects like in
weeklyForecast array but the temperature value should be converted to Faherenheit.

the value of the first item in the new array should be 

{day: "Monday", temperature: 68, cloudCoverage: "broken", wind: 16}

The formula for converting Celcius to Faherenheit is: 
Divide by 5, then multiply by 9, then add 32

*/


const celciusToFaherenheit = weeklyForecast.map((dayForecast) => {
  const temp = dayForecast.temperature;
  //return Math.floor((temp / 5) * 9 + 32);
  const tempFah = Math.floor((temp / 5) * 9 + 32);
  //return { day: weeklyForecast.day, temperature: tempFah, cloudCoverage: weeklyForecast.cloudCoverage, wind: weeklyForecast.wind }
  return { ...dayForecast, temperature: tempFah }
});
//
//console.log(celciusToFaherenheit);



/* Filter

  We would like to know which days of the week are sunny. 
  Please write an arrow function which accepts weeklyForecast as an argument 
  and returns an array of day objects. It should only contain days
  where cloud coverage is "clear" or "few". 

  when successful the return value should look like this:

  [
    {day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10},
    {day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5},
    {day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5},
    {day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18},
  ]

*/

const sunDays = weeklyForecast.filter((sunnyday) => {
  const cloud = sunnyday.cloudCoverage
  if (cloud === "clear" || cloud === "few") {
    return true
  }

})
//console.log(sunDays)


/*
  Destructuring array -
  Refactor the code below to use destructuring to assign values to these 7 variables
*/

//const monday = weeklyForecast[1]
// const tuesday = weeklyForecast[2]
// const wednesday = weeklyForecast[3]
// const thursday = weeklyForecast[4]
// const friday = weeklyForecast[5]
// const saturday = weeklyForecast[6]
// const sunday = weeklyForecast[7]

let [{ day, temperature, cloudCoverage, wind }] = weeklyForecast;

console.log(day);
console.log(temperature);

/*
  Destructuring objects - 
  Refactor the code below to use destructuring to assign values to these 3 variables
*/

// const mondayTemperature = monday.temperature
// const mondayCloudCoverage = monday.cloudCoverage
// const mondayWind = monday.wind

const { day: mondayTemperature, cloudCoverage: mondayCloudCoverage, wind: mondayWind } = weeklyForecast;


//const { day, mondayCloudCoverage, mondayWind } = weeklyForecast
//console.log(day)

/*Spread operator*/

/* 
We have received information that Sunday cloudCoverage will be 
"broken" instead of "overcast".  
Use the spread operator to reassign the sunday variable to an object containing all of the properties 
and values currently on sunday but with a cloudCoverage property set to "broken"

The new sunday object should look like this: 
{day: "Sunday", temperature: 17, cloudCoverage: "broken", wind: 30}
*/
let cloudCover = "broken"
//const newSunday = [...weeklyForecast, cloudCoverage: cloudCover]

/* 
  We need to generate a biweekly forecast from 2 weekly forecasts. 
  Please use spread operator to create biweeklyForecast array which includes the data 
  of weekOneForecast and weekTwoForecast and save the result in a variable biweeklyForecast
*/

const weekOneForecast = [
  { day: "Monday", temperature: 20, cloudCoverage: "broken", wind: 16 },
  { day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10 },
  { day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5 },
  { day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5 },
  { day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18 },
  { day: "Saturday", temperature: 19, cloudCoverage: "broken", wind: 25 },
  { day: "Sunday", temperature: 17, cloudCoverage: "overcast", wind: 30 }
]

const weekTwoForecast = [
  { day: "Monday", temperature: 20, cloudCoverage: "broken", wind: 16 },
  { day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10 },
  { day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5 },
  { day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5 },
  { day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18 },
  { day: "Saturday", temperature: 19, cloudCoverage: "broken", wind: 25 },
  { day: "Sunday", temperature: 17, cloudCoverage: "overcast", wind: 30 }
]

const biweeklyForecast = [...weekOneForecast, weekTwoForecast]
//console.log(biweeklyForecast)