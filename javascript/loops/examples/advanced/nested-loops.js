for (let row = 1; row <= 5; row++) {
  let line = "";

  for (let column = 1; column <= row; column++) {
    line += "* ";
  }

  console.log(line);
}
