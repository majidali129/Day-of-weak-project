
setInterval(() => {
  let currentDate = new Date();  // date object of current system
  let date = currentDate.toLocaleDateString();  // getting date
  let day = currentDate.getDay();  // getting day
  let hour = currentDate.getHours();  // getting hours
  let minute = currentDate.getMinutes();  // getting minutes 
  let second = currentDate.getSeconds();   // getting seconds 
  if(second<10){
    second = "0"+second;
  }
  let finalTime =`${date} , ${hour}:${minute}:${second}`;  // combining all things to get final output
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  // setting values to display to user
  document.querySelector(".time").innerHTML = finalTime;
  document.querySelector(".day").innerHTML = day;

}, 1000);
