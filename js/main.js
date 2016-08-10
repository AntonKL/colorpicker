var setBackground,
    colorPicker,
    resetInput,
    colorSchema,
    colorLookup,
    diffCalc;

var userInput = [255,0,180];

colorSchema = [
  {
    name: "Piggy Pink",
    red: 255,
    green: 182,
    blue: 193
  },
  {
    name: "Sun Yellow",
    red: 255,
    green: 255,
    blue: 0
  }
];    

// Define colorPicker to be form input
colorPicker = document.getElementById("colorPicker");

// Add a event listner to the input
colorPicker.addEventListener("change", function(pickedColor){

  pickedColor = colorPicker.value;

  setBackground(pickedColor);

});

diffCalc = function(a, b) {
  return Math.abs(a - b);
};

// Set backgrund color
setBackground = function(color){
  var el = document.body;

  el.style.backgroundColor = color;
  resetInput();
};

resetInput = function(){
  colorPicker.value = "";
};

colorLookup = function(red, green, blue){

};

var matchColor = function(input){
  var redDiff,
      greenDiff,
      blueDiff,
      diffPoints,
      matchArray;

  matchArray = [];

  for (var i = 0; i < colorSchema.length; i++) {

    redDiff = diffCalc(input[0], colorSchema[i].red);
    greenDiff = diffCalc(input[1], colorSchema[i].green);
    blueDiff = diffCalc(input[2], colorSchema[i].blue);

    diffPoints = redDiff + greenDiff + blueDiff;

    matchArray.push(diffPoints);
  }
  return matchArray;
};

var match = matchColor(userInput);
