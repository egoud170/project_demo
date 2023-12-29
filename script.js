



const uname = document.getElementsByClassName("name");
const email = document.getElementsByClassName("email");
const number = document.getElementsByClassName("number");
// const form=document.getElementById("myForm");
const send = document.querySelector('.send')
const uname_error = document.getElementById("name_error");


send.addEventListener('click',(e)=>{
  
    if(uname.value === '' || uname.value==null || uname.value===uname.value.length<=5)
    {
       const validName=document.querySelector('.validname')
      e.preventDefault();
      validName.style.display = 'block'
      console.log('hi')
    // uname_error.innerHTML='Name is required'
    }else{
      validName.style.display = 'none '

    }

      // Validate email

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail=document.querySelector('.validemail')



  // Validate number
  const validNumber=document.querySelector('.validnumber')
 
  
  if (!emailRegex.test(email.value)||email.value.trim()==='') {
        validEmail.style.display = 'block'
        console.log('hi ue')
        // alert("Invalid email address.");
        return;
      }

})