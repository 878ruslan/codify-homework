function isBefore(target, base) {
    let targetDate = new Date(target);
    let baseDate = new Date(base);
    if (targetDate < baseDate) {
        return(true);
      } else {
        return(false);
      }
     
    }
console.log(isBefore('01.01.2023', '01.02.2022')); // false
console.log(isBefore('01.02.2022', '01.01.2023')) // true
console.log(isBefore('01.02.2022', '01.02.2022')) // false

