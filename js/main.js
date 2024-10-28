var Name=document.getElementById("name");
var errorname=document.querySelector(".error-name");
var holdername=document.querySelector(".holder-name");
Name.addEventListener("keyup",(e)=>{
    holdername.textContent= e.target.value;
    if(holdername.textContent.length == 0){
        holdername.textContent="Jane Appleseed";
    }
    if(Name.value == ""){
        errorname.textContent="";
        Name.style.borderColor="";
    }
    else if(!/^[a-zA-Z\s]+$/.test(holdername.textContent)){
        errorname.textContent="wrong-format,texts only";
        Name.style.borderColor="hsl(0, 100%, 66%)";
    }else{

        errorname.textContent="";
        Name.style.borderColor="";
    }
})
/////////////////////////////////////////////
var number=document.getElementById("number");
var errornumber=document.querySelector(".error-number");
var holdernumber=document.querySelector(".holder-number");
number.addEventListener("keyup",(e)=>{
    try{
    holdernumber.textContent= e.target.value.match(/.{1,4}/g).join(" ");
    if(holdernumber.textContent.length == 0){
        holdernumber.textContent="0000 0000 0000 0000";
    }
    if(number.value == " "){
        errornumber.textContent="";
        number.style.borderColor="";
        holdernumber.textContent="0000 0000 0000 0000";
    }
    else if(!/^[0-9\s]+$/.test(holdernumber.textContent)){
        errornumber.textContent="wrong-format,numbers only";
        number.style.borderColor="hsl(0, 100%, 66%)";
    }else{
        errornumber.textContent="";
        number.style.borderColor="";
    }
}catch(err){
    holdernumber.textContent="0000 0000 0000 0000";
}
})
// //////////////////////////////////////////
var mm=document.getElementById("mm");
var holdermm=document.querySelector(".holder-mm")
mm.addEventListener("keyup",(e)=>{
    holdermm.textContent=String(e.target.value).padStart(2,"0");
    if(holdermm.textContent.length == 0){
        holdermm.textContent="00";
    }
    if(mm.value == " "){
        errorexp.textContent="";
        mm.style.borderColor="";
        holdermm.textContent="00";
    }
    else if(!/^[0-9\s]+$/.test( holdermm.textContent)){
        errorexp.textContent="can not be blank";
        mm.style.borderColor="hsl(0, 100%, 66%)";
    }else{
        errorexp.textContent="";
        mm.style.borderColor="";
    }

})
// /////////////////////////////////////
var yy=document.getElementById("yy");
var holderyy=document.querySelector(".holder-yy")
var errorexp=document.querySelector(".error-exp");
yy.addEventListener("keyup",(e)=>{
    holderyy.textContent= String(e.target.value).padStart(2,"0");
    if(holderyy.textContent.length == 0){
        holderyy.textContent="00";
    }
    if(yy.value == " "){
        errorexp.textContent="";
        yy.style.borderColor="";
        holderyy.textContent="00";
    }
    else if(!/^[0-9\s]+$/.test( holderyy.textContent)){
        errorexp.textContent="can not be blank";
        yy.style.borderColor="hsl(0, 100%, 66%)";
    }else{
        errorexp.textContent="";
        yy.style.borderColor="";
    }
})
// /////////////////////////////////////
var cv=document.getElementById("cv");
var holdercvc=document.querySelector(".holder-cvc")
var errorcv=document.querySelector(".error-cv");
cv.addEventListener("keyup",(e)=>{
    holdercvc.textContent= String(e.target.value).padStart(3,"0");
    if(holdercvc.textContent.length == 0){
        holdercvc.textContent="00";
    }
    if(cv.value == " "){
        errorcv.textContent="";
        cv.style.borderColor="";
        holdercvc.textContent="00";
    }
    else if(!/^[0-9\s]+$/.test( holdercvc.textContent)){
        errorcv.textContent="can not be blank";
        cv.style.borderColor="hsl(0, 100%, 66%)";
    }else{
        errorcv.textContent="";
        cv.style.borderColor="";
    }
})
//////
var form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(yy.value == " " || Name.value == "" || number.value == " " || mm.value == " "|| cv.value == " "){
        Name.style.borderColor="hsl(0, 100%, 66%)";
        number.style.borderColor="hsl(0, 100%, 66%)";
        mm.style.borderColor="hsl(0, 100%, 66%)";
        yy.style.borderColor="hsl(0, 100%, 66%)";
        cv.style.borderColor="hsl(0, 100%, 66%)";
    }else{
        complete.style.display="flex";
        form.style.display="none";
    }
})
// ////
var complete=document.querySelector(".complete");
var Continue=document.querySelector(".continue");
Continue.addEventListener("click",()=>{
    complete.style.display="none";
    form.style.display="block";  
    holdername.textContent="Jane Appleseed";
    holdernumber.textContent="0000 0000 0000 0000";
    holdermm.textContent="00";
    holderyy.textContent="00";
    holdercvc.textContent="00";
    Name.value= " ";
   number.value=" ";
   mm.value=" ";
   yy.value=" ";
   cv.value=" ";
   Name.setAttribute("placeholder","e.g. Jane Appleseed");
   number.setAttribute("placeholder","e.g. 1234 5678 9123 0000");
   mm.setAttribute("placeholder","MM");
   yy.setAttribute("placeholder","YY");
   cv.setAttribute("placeholder","e.g. 123");

})