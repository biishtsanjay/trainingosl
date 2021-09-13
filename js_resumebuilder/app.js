const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}



// generating resume

function generateCV() {
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("step-5").style.display = "none";

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  let firstNameT1 = document.getElementById('firstNameT1');
  firstNameT1.innerHTML = firstName;
  let lastNameT1 = document.getElementById('lastNameT1');
  lastNameT1.innerHTML = lastName;

  //name
  document.getElementById("firstNameT2").innerHTML = firstName;
  document.getElementById("lastNameT2").innerHTML = lastName;

  // address
  document.getElementById("emailT").innerHTML = document.getElementById("email").value;

  // phone No.
  document.getElementById("phoneNoT").innerHTML = document.getElementById("phoneNo").value;


  // links
  document.getElementById("websiteT").innerHTML = document.getElementById("website").value;
  document.getElementById("linkedInT").innerHTML = document.getElementById("linkedIn").value;
  document.getElementById("githubT").innerHTML = document.getElementById("github").value;


  // education details
  document.getElementById("collegeT").innerText = document.getElementById("college").value;
  document.getElementById("fromdate1T").innerText = document.getElementById("fromdate1").value;
  document.getElementById("tilldate1T").innerText = document.getElementById("tilldate1").value;
  document.getElementById("qualification1T").innerHTML = document.getElementById("qualification1").value;
  document.getElementById("description1T").innerHTML = document.getElementById("description1").value;
  document.getElementById("schoolT").innerText = document.getElementById("school").value;
  document.getElementById("fromdate2T").innerText = document.getElementById("fromdate2").value;
  document.getElementById("tilldate2T").innerText = document.getElementById("tilldate2").value;
  document.getElementById("qualification2T").innerHTML = document.getElementById("qualification2").value;
  document.getElementById("description2T").innerHTML = document.getElementById("description2").value;


  // projects developed
  document.getElementById("title1T").innerText = document.getElementById("title1").value;
  document.getElementById("link1T").innerText = document.getElementById("link1").value;
  document.getElementById("description3T").innerText = document.getElementById("description3").value;
  document.getElementById("title2T").innerText = document.getElementById("title2").value;
  document.getElementById("link2T").innerText = document.getElementById("link2").value;
  document.getElementById("description4T").innerText = document.getElementById("description4").value;


  // Experience Details
  document.getElementById("institute1T").innerText = document.getElementById("institute1").value;
  document.getElementById("position1T").innerText = document.getElementById("position1").value;
  document.getElementById("duration1T").innerText = document.getElementById("duration1").value;
  document.getElementById("description5T").innerText = document.getElementById("description5").value;
  document.getElementById("institute2T").innerText = document.getElementById("institute2").value;
  document.getElementById("position2T").innerText = document.getElementById("position2").value;
  document.getElementById("duration2T").innerText = document.getElementById("duration2").value;
  document.getElementById("description6T").innerText = document.getElementById("description6").value;

  // extra details
  document.getElementById("skill1T").innerText = document.getElementById("skill1").value;
  document.getElementById("skill2T").innerText = document.getElementById("skill2").value;
  document.getElementById("skill3T").innerText = document.getElementById("skill3").value;

  document.getElementById("interest1T").innerText = document.getElementById("interest1").value;
  document.getElementById("interest2T").innerText = document.getElementById("interest2").value;
  document.getElementById("interest3T").innerText = document.getElementById("interest3").value;



}

