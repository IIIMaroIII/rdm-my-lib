import '../Array';

// const arr: number[] = [1, 2, 3];
const arrObj: CustomObj[] = [
  {
    car: 'Dodge',
    realeseYear: 1991,
  },
  {
    car: 'Mercedes',
    realeseYear: 2010,
  },
  {
    car: 'Mazda',
    realeseYear: 2020,
  },
];
arrObj.myPush({
  car: 'Kia',
  realeseYear: 2021,
});
console.log('arrObj', arrObj);
