let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let number=document.getElementById("number");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

//showing input slider value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

let Allnumber="0123456789";
let lowerCaseLetter="abcdefghijklmnopqrstuvwxyz";
let upperCaseLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharacter="~!@#$%^&*";

//function to generate password
function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked ? lowerCaseLetter:"";
    allChars+=uppercase.checked ? upperCaseLetter:"";
    allChars+=symbols.checked ? specialCharacter:"";
    allChars+=number.checked ? Allnumber:"";

    if(allChars=="" || allChars.length==0){
        return genPassword;
    }
    
    let i=1;
    while(i<=inputSlider.value){
        genPassword+=allChars.charAt(Math.floor(Math.
            random()*allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value !="" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText='check';
        copyIcon.title="Password copied";

        setTimeout(()=>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";
        },3000)
    }
});