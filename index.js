//Uppgift 1 ------------------------------------------

function getEvenNumbers(arr) {
  // Returnera en sträng
  // let evenNumbers = "";
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // evenNumbers = evenNumbers + arr[i] + " ";
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

getEvenNumbers([1, 2, 3, 4, 5, 6]);

//Uppgift 2 ------------------------------------------

function multiplyArray(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
}

console.log(multiplyArray([1, 2, 3, 4, 5, 6]));

//Uppgift 3 ------------------------------------------

function findStrawberries(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Jordgubbar") {
      // console.log("Hittade jordgubbar!");
      return true;
    } else {
      // console.log(arr[i] + " är inte riktigt jordgubbar");
    }
  }
  // console.log("Hittade aldrig några jordgubbar :( ");
  return false;
}

// findStrawberries(["Pizza", "Kebab", "Jordgubbar", "Banan"]);

// Uppgift 4 -----------------------------------------

function oddOrEven(arr) {
  let oddNumbers = 0;
  let evenNumbers = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers++;
    } else {
      oddNumbers++;
    }
  }

  if (oddNumbers > evenNumbers) {
    return "Odd array";
  } else if (evenNumbers > oddNumbers) {
    return "Even array";
  } else {
    return "Balanced Array";
  }
}

console.log(oddOrEven([1, 2, 3, 4, 5, 8, 10]));
