const fetch = require('node-fetch');

const processWeatherData = async (data) => {
  const sorted = [...data].sort((a, b) => Number(b.temperatura) - Number(a.temperatura));
  // if (Number(b.temperatura) > Number(a.temperatura)) {
  //   return 1;
  // }
  // if (Number(a.temperatura) > Number(b.temperatura)) {
  //   return -1;
  // }
  // return 0;
  // );
  // console.log(sorted);
  const {
    stacja: stationMax,
    temperatura: temperatureMax,
  } = sorted[0];
  const {
    stacja: stationMin,
    temperatura: temperatureMin,
  } = sorted[sorted.length - 1];
  const dataAndTime = new Date().toLocaleString();
  console.log(`${dataAndTime}`);
  console.log(`Highest temperature ${temperatureMax} st. C is in the ${stationMax}`);
  console.log(`Lowest temperature ${temperatureMin} st. C is in the ${stationMin}`);
  // eslint-disable-next-line no-restricted-syntax
  for (const {
    stacja,
    temperatura,
  } of sorted) {
    console.log(`${stacja} - ${temperatura}`);
  }
  // 2 sposob
  // const result = [...data]
  //   .sort((a,b) => b.temperatura - a.temperatura)
  //   .map( el => `${el.stacja}: \t${el.temperatura} °C`)
  //   .join('\n');
  //
  // console.log(result);
  // };
};

const findWarmestPlaceInPl = async () => {
  try {
    const res = await fetch('http://danepubliczne.imgw.pl/api/data/synop');
    const data = await res.json();
    await processWeatherData(data);
  } catch (error) {
    console.log('Error has occurred :(', error);
  }
};

findWarmestPlaceInPl();
