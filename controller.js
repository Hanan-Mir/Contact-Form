import { getUserData } from "./model";
import { setUserData } from "./model";
import { getQueryType } from "./model";
import { userData } from "./model";
import View  from "./myView";
console.log("Hello world");
const view=new View();
view._submitBtn.addEventListener('click',function(e){
    e.preventDefault();
//Checking weather data is present there
if(!getUserData(view._firstName)){
    setUserData(view._firstNameSpan,view._message);
}
else{
    setUserData(view._firstNameSpan,'');
    userData.firstName=view._firstName.value;
}
if(!getUserData(view._lastName)){
    setUserData(view._lastNameSpan,view._message);
}else{
    setUserData(view._lastNameSpan,'')
    userData.lastName=view._lastName.value;
}
if(!getUserData(view._emailAddress)){
    setUserData(view._emailSpan,view._emailmessage)
} 
else{
    //check for valid email address
    let usermail=view._emailAddress.value;
    console.log(usermail.endsWith('.com'));
    if(!usermail.includes('@') || !usermail.endsWith('.com')){
        console.log('inside mail');
        setUserData(view._emailSpan,view._emailmessage);
    }else{

        setUserData(view._emailSpan,'');
        userData.email=view._emailAddress.value;
    }
}
if(!getUserData(view._userMessage)){
    console.log(view._message);
    setUserData(view._messageSpan,view._message);
}
else{
    setUserData(view._messageSpan,'')
    userData.message=true;
}
if(!getQueryType(view._supportChk) && !getQueryType(view._generalChk) ){
setUserData(view._querySpan,view._querymessage);
}else{
    setUserData(view._querySpan,'');
    userData.state=true;
}
if(!getQueryType(view._consentChk)){
    setUserData(view._consentSpan,view._consentmessage);
}
else{
    setUserData(view._consentSpan,'')
    userData.consent=true
}
console.log(userData);
if(userData.firstName && userData.lastName &&userData.email &&userData.state&&userData.consent&&userData.message){
    view._sucess.classList.remove('hidden');
}

})