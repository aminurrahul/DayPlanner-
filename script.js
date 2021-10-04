var tenInput=$("#text10AM");
var saveBtn=$("#save-btn");
var textInput;

//Selectors

var timeDisplayEl = $('#time-display');


//functions

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

function btnFunction(){
    console.log("print something");
    textInput=tenInput.val();
    console.log(textInput);
    
    localStorage.setItem('tenAM',textInput);
  }
  
tenInput.text(localStorage.getItem('tenAM'));


// function planSubmit(event) {
//     event.preventDefault();
  
//     var planName = planNameInputEl.val().trim();
    
//     var dueHour = dueHourInputEl.val().trim();
  
//     printPlanData(planName, dueHour);
  
//     planSubmitEl.reset();
//   }



  //event listeners

  saveBtn.on("click",btnFunction)

  setInterval(displayTime, 1000);

  
