function addNewWeField(){
  let newNode = document.createElement('textarea')
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField(){
  let newNode = document.createElement('textarea')
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating resume
function generateCV(){
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById('nameT1'); 
  nameT1.innerHTML = nameField;

  //direct
  document.getElementById("nameT2").innerHTML = nameField;
  // contactT
  document.getElementById("contactT").innerHTML =document.getElementById("contactField").value;
  // address
  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

  document.getElementById("instaT").innerHTML =document.getElementById("instaField").value;
  // address
  document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
  document.getElementById("gitT").innerHTML =document.getElementById("gitField").value;
  // address
  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
  // objective
  document.getElementById("objectiveT").innerText = document.getElementById("objectiveField").value;
  
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for(let e of wes){
    str +=`<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for(let e of aqs){
  str1 += `<li>${e.value}<li>`;
  }
  document.getElementById("aqT").innerHTML = str1;


}