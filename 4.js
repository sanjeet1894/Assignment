function daysInMonth(month,year){
  return new Date(year,month,0).getDate();
  
}
let month=3;
let year=2019;
document.write("The days in month of march 2019 is:" + daysInMonth(month,year));