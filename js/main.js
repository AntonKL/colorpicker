var setBackground,
    colorPicker,
    resetInput,
    colorSchema,
    colorLookup;

colorSchema = [
  {
    name: "Piggy Pink",
    red: 1,
    green: 2,
    blue: 3
  },
  {
    name: "Sun Yellow",
    red: 1,
    green: 2,
    blue: 3
  }
];    

// Define colorPicker to be form input
colorPicker = document.getElementById("colorPicker");

// Add a event listner to the input
colorPicker.addEventListener("change", function(pickedColor){

  pickedColor = colorPicker.value;

  setBackground(pickedColor);

});

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

for (var i = 0; i < colorSchema.length; i++) {
  console.log(colorSchema[i].name);
}