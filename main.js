const nameInput = document.querySelector('#name-input');
const maleRadio = document.querySelector('#male-radio');
const femaleRadio = document.querySelector('#female-radio');
const checkboxSelected = document.querySelector('#checkbox-input');
const btnEle = document.querySelector('#button');
const dataEle = document.getElementById('data');

// to check if the values are valid 
nameInput.addEventListener('input', validate);
maleRadio.addEventListener('change', validate);
femaleRadio.addEventListener('change', validate);
checkboxSelected.addEventListener('change', validate);
function validate() {
  if(nameInput.value!=='' && (maleRadio.checked||femaleRadio.checked) && checkboxSelected.checked) {
    btnEle.removeAttribute('disabled');
  } else {
    btnEle.setAttribute('disabled', 'disabled');
  }
}

const inputData = []; 
btnEle.addEventListener('click', () => {
  const genderSelected = document.querySelector('input[type="radio"]:checked');
  const genderValue = genderSelected.value;
  const data = {
    name: nameInput.value,
    gender: genderValue,
    accept: checkboxSelected.checked
  }
  inputData.push(data);
  // to clear the form
  document.forms[0].reset();
  console.log(inputData);

  // to clear all child element
  while(dataEle.lastElementChild) {
    dataEle.removeChild(dataEle.lastElementChild);
  }

  // display data in inputData array
  inputData.forEach((ele, index) => {
    const nameEle = document.createElement('div');
    nameEle.style.paddingTop = '10px';
    dataEle.appendChild(nameEle).innerHTML = (index+1) + '. ' + 'Name &nbsp&nbsp: ' + ele.name;
    const genderEle = document.createElement('div');
    dataEle.appendChild(genderEle).innerHTML = '&nbsp&nbsp&nbsp&nbspGender : ' + ele.gender;
    const accpeptEle = document.createElement('div');
    dataEle.appendChild(accpeptEle).innerHTML =  '&nbsp&nbsp&nbsp&nbspAccept : ' + ele.accept;
  })
});
