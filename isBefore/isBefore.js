function isBefore(target, base) {
    let targetDate = new Date(target);
    let baseDate = new Date(base);
    if (targetDate < baseDate) {
        console.log(true);
      } else {
        console.log(false);
      }
     
    }

isBefore('01.01.2023', '01.02.2022') // false
isBefore('01.02.2022', '01.01.2023') // true
isBefore('01.02.2022', '01.02.2022') // false

