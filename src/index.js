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
];

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
const weeklyForecastFarenheight = (weatherArray) => {
  return weatherArray.map((day) => {
    day.temperature = (day.temperature * 9) / 5 + 32;
    return day;
  });
};
console.log(weeklyForecastFarenheight(weeklyForecast));

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
const clearDays = (weatherArray) => {
  return weatherArray.filter(
    (day) => day.cloudCoverage === "clear" || day.cloudCoverage === "few"
  );
};
console.log(clearDays(weeklyForecast));
/*
  Destructuring array -
  Refactor the code below to use destructuring to assign values to these 7 variables
*/

let [
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
] = weeklyForecast;
// const monday = weeklyForecast[1];
// const tuesday = weeklyForecast[2];
// const wednesday = weeklyForecast[3];
// const thursday = weeklyForecast[4];
// const friday = weeklyForecast[5];
// const saturday = weeklyForecast[6];
// const sunday = weeklyForecast[7];

/*
  Destructuring objects - 
  Refactor the code below to use destructuring to assign values to these 3 variables
*/

// const mondayTemperature = monday.temperature;
// const mondayCloudCoverage = monday.cloudCoverage;
// const mondayWind = monday.wind;

const [mondayTemperature, mondayCloudCoverage, mondayWind] = [
  monday.temperature,
  monday.cloudCoverage,
  monday.wind
];

console.log(mondayTemperature, mondayCloudCoverage, mondayWind);

/*Spread operator*/

/* 
We have received information that Sunday cloudCoverage will be 
"broken" instead of "overcast".  
Use the spread operator to reassign the sunday variable to an object containing all of the properties 
and values currently on sunday but with a cloudCoverage property set to "broken"

The new sunday object should look like this: 
{day: "Sunday", temperature: 17, cloudCoverage: "broken", wind: 30}
*/
sunday = { ...sunday, cloudCoverage: "broken" };
console.log(sunday);
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
];

const weekTwoForecast = [
  { day: "Monday", temperature: 20, cloudCoverage: "broken", wind: 16 },
  { day: "Thuesday", temperature: 22, cloudCoverage: "few", wind: 10 },
  { day: "Wednesday", temperature: 26, cloudCoverage: "clear", wind: 5 },
  { day: "Thursday", temperature: 24, cloudCoverage: "clear", wind: 5 },
  { day: "Friday", temperature: 24, cloudCoverage: "few", wind: 18 },
  { day: "Saturday", temperature: 19, cloudCoverage: "broken", wind: 25 },
  { day: "Sunday", temperature: 17, cloudCoverage: "overcast", wind: 30 }
];
const biweeklyForecast = [...weekOneForecast, ...weekTwoForecast];
