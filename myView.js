
export default  class View{
    //From element selections
 _firstName=document.querySelector('#FName');
 _lastName=document.querySelector('#LName');
 _emailAddress=document.querySelector('#emailaddress');
 _userMessage=document.querySelector('#message');
 _submitBtn=document.querySelector('.submit');
 _firstNameSpan=document.querySelector('.FName');
 _lastNameSpan=document.querySelector('.LName');
 _emailSpan=document.querySelector('.emailreq');
 _messageSpan=document.querySelector('.messagereq');
 _generalChk=document.querySelector('#general');
 _supportChk=document.querySelector('#support');
 _querySpan=document.querySelector('.queryreq');
 _consentChk=document.querySelector('#consent');
 _consentSpan=document.querySelector('.consentreq');
 _sucess=document.querySelector('.sendMessage')
 //Messages to be displayed
 _message="This feild is required";
 _emailmessage="Please enter a valid email address";
_querymessage="Please select a query";
_consentmessage="To submit this form,please consent to being contacted"
}