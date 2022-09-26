
/* javascript */
// $("h1").hide();
// callback funciton goes in click

document.getElementById('submit').onclick= function(e){
  e.preventDefault();
  var name = document.getElementById('fname').value;

// section1 70%
  var numClass = document.getElementById('numClass').value;
  var c1 = parseInt(document.getElementById('Class1').value);
  var c2 = parseInt(document.getElementById('Class2').value);
  var c3 = parseInt(document.getElementById('Class3').value);
  var c4 = parseInt(document.getElementById('Class4').value);
  var c5 = parseInt(document.getElementById('Class5').value);
// total creddits
var allCredits = 0;

if(c1>=0 &&numClass>=1){
  allCredits+=c1;
}
if (c2>=0 && numClass>=2){
  allCredits+=c2;
}
if (c3>=0 && numClass>=3){
  allCredits+=c3;
}
if (c4>=0 && numClass>=4){
  allCredits+=c4;
}
if (c5>=0 && numClass>=5){
  allCredits+=c5;
}


var credeffect = 0

if(allCredits<16){
  credeffect = 0
}
else{
  var diff =  allCredits - 16
  var credeffect= diff*(-2)
}



var studyHrs =  parseInt(document.getElementById('HoursStudying').value);

var studyeffect = 0

if(studyHrs<8){
  diff = studyHrs-8
  studyeffect = diff*(2)
}
else if(studyHrs>8){
  diff = studyHrs-8
  studyeffect = diff*2
}



var one = ((.66 *70)-credeffect)+((.34 * 70)+studyeffect)

if((one-70)>0){
  one = 70
}
else if((one-70)<0){
  one = 0
}


// section2 18%
var studyProf = document.getElementById('StudyingProficiency').value;

var wellness = document.getElementById('Wellness').value;

var two = (.9*studyProf)+(.9*wellness)

if(two>18){
  two = 18
}

// section 3 12%

var otherAct = document.getElementById('otherAct').value;
  // console.log(form);

var three = 12-otherAct

if(three<0){
  three = 0
}

var total = one + two + three

// console.log(total)


alert(name+" based on the information you provided your expected GPA will be- "+ (total/25)+".")


}

//   let str = "";
//   if (requiredUsername == username){
//     console.log("welcome secret agent");
//     str =`
//     <div class="alert alert-secondary" role="alert">
//       A simple secondary alert—check it out!
//     </div>`;
// }
//
// $('output').html(str);
//
// });
