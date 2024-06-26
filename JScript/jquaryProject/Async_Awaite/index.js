function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("you walk the dog");
      } else {
        reject("you didnt walked the dog");
      }
    }, 1500);
  });
}

cleanKitchen = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const kitchencleaned = true;
      if (kitchencleaned) {
        resolve("you clean the kitchen");
      } else {
        reject("you didnt cleaned the kitchen");
      }
    }, 2500)
  );

function takeOutTheTrush() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trushTakedOut = true;
      if (trushTakedOut) {
        resolve("you takeout the trush ");
      } else {
        reject("you didnt takedout the trush");
      }
    }, 500);
  });
}

async function doChores() {
  const walkdogResult = await walkDog();
  console.log(walkdogResult);
  const cleankitchenresult = await cleanKitchen();
  console.log(cleankitchenresult);
  const trushoutresult = await takeOutTheTrush();
  console.log(trushoutresult);
}

doChores();

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTheTrush(() => { console.log("you finished all the chores !"); });
//     });
// });
