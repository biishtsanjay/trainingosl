function validation() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('conf_password').value;
  var fos = document.getElementById('fieldOfStudy').value;
  var univ = document.getElementById('university').value;
  var job = document.getElementById('job').value;
  var company = document.getElementById('company').value;
  var city = document.getElementById('city').value;

  const steps = Array.from(document.querySelectorAll("form .step"));
  // console.log(steps)
  const nextBtn = document.querySelectorAll("form .next-btn");
  const prevBtn = document.querySelectorAll("form .prev-btn");
  const form = document.getElementById('form');

  



nextBtn.forEach(button=>{
  button.addEventListener('click', (e)=>{
    changeStep('next');
  })
})

function changeStep(btn){
  let index = 0;
  const active = document.querySelector('form .step .active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  if(btn === 'next'){
    index++;
  }
  steps[index].classList.add("active");
  console.log(index);
}




  var usercheck = /^[A-Za-z. ]{3,20}$/;
  var passcheck = /^[A-Za-z.]{3,20}$/;
  var foscheck  = /^[A-Za-z.]{3,20}$/;
  var univcheck = /^[A-Za-z.]{3,20}$/;
  var jobcheck = /^[A-Za-z.]{3,20}$/;
  var companycheck = /^[A-Za-z.]{3,20}$/;
  var citycheck = /^[A-Za-z.]{3,20}$/;

  if (usercheck.test(username)) {
    document.getElementById('usererror').innerHTML = " ";
} else {
    document.getElementById('usererror').innerHTML = "* Username is invalid";
    return false;
}
  if (passcheck.test(password)) {
  document.getElementById('passerror').innerHTML = " ";
} else {
  document.getElementById('passerror').innerHTML = "* password is invalid";
    return false;
}
  if (confirmPassword != password) {
  document.getElementById('conferror').innerHTML = "* confirm password is invalid";
  return false;
}
if (foscheck.test(fos)) {
  document.getElementById('foserror').innerHTML = " ";
} else {
  document.getElementById('foserror').innerHTML = "* field of study is invalid";
  return false;
}
if (univcheck.test(univ)) {
  document.getElementById('univerror').innerHTML = " ";
} else {
  document.getElementById('univerror').innerHTML = "* university is invalid";
  return false;
}
if (jobcheck.test(job)) {
  document.getElementById('joberror').innerHTML = " ";
} else {
  document.getElementById('joberror').innerHTML = "* this field is required";
  return false;
}
if (companycheck.test(company)) {
  document.getElementById('companyerror').innerHTML = " ";
} else {
  document.getElementById('companyerror').innerHTML = "* this field is required";
  return false;
}
if (citycheck.test(city)) {
  document.getElementById('cityerror').innerHTML = " ";
} else {
  document.getElementById('cityerror').innerHTML = "* this field is required";
  return false;
}


function showAlert(){
  alert("Form Submitted Successfully");
}

}