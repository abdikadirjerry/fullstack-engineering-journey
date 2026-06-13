const country = "Somaliland";

function levelOne() {
  function levelTwo() {
    function levelThree() {
      console.log(country);
    }

    levelThree();
  }

  levelTwo();
}

levelOne();
