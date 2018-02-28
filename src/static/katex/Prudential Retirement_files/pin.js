function jsfIsNumberString (InString) {
	if (InString.length == 0) {
		return false;
	}
	var RefString = "1234567890";
	for (Count = 0; Count < InString.length; Count++) {
		TempChar = InString.substring (Count, Count+1);
		if (RefString.indexOf (TempChar, 0) == -1) {
			return (false);
		} 
    }
    return true;
}

function submit_me(obj) {

	if (checkActNumPINUser(obj)) document.login.submit()

}

function checkActNumUser(obj) 
{
	var month = obj.dobMonth.value;
	var day = obj.dobDay.value;
	var year = obj.dobYear.value;
	
	if (obj.accountNumber.value.length == 0) {
		alert ("Social Security Number is required.");
		obj.accountNumber.focus();
		return false;
	}
	
	if (jsfIsNumberString (obj.accountNumber.value)==false) {
		window.alert ("Social Security Number can only contain numbers.");
		obj.accountNumber.focus();
		return false;
	}
	if (obj.accountNumber.value.length < 9 || obj.accountNumber.value.length > 9) {
		alert ("Social Security Number must be 9 digits.");
		obj.accountNumber.focus();
		return false;
	}
	
	if (jsfIsNumberString (obj.dobMonth.value)==false) {
		window.alert ("Month can only contain numbers.");
		obj.dobMonth.focus();
		return false;
	}
	if (obj.dobMonth.value.length < 2 || obj.dobMonth.value.length > 2) {
		alert ("Month must be 2 digits.");
		obj.dobMonth.focus();
		return false;
	}
	if (month < 1 || month > 12) { // check month range
		alert("Month must be between 1 - 12.");
		obj.dobMonth.focus();
		return false;
	}
	if (jsfIsNumberString (obj.dobDay.value)==false) {
		window.alert ("Day can only contain numbers.");
		obj.dobDay.focus();
		return false;
	}
	if (obj.dobDay.value.length < 2 || obj.dobDay.value.length > 2) {
		alert ("Day must be 2 digits.");
		obj.dobDay.focus();
		return false;
	}
	if (day < 1 || day  > 31) {
		alert("Day must be between 1 - 31.");
		obj.dobDay.focus();
		return false;
	}
	if (jsfIsNumberString (obj.dobYear.value)==false) {
		window.alert ("Year can only contain numbers.");
		obj.dobYear.focus();
		return false;
	}
	if (obj.dobYear.value.length < 4 || obj.dobYear.value.length > 4) {
		alert ("Year must be 4 digits.");
		obj.dobYear.focus();
		return false;
	}
	if (year > 3000)
	{
		alert ("Year entered is invalid.");
		obj.dobYear.focus();
		return false;
	}
	if (jsfIsNumberString (obj.zipCode.value)==false) {
		window.alert ("Zip Code can only contain numbers.");
		obj.zipCode.focus();
		return false;
	}
	if (obj.zipCode.value.length < 5 || obj.zipCode.value.length > 5) {
		alert ("Zip Code must be 5 digits.");
		obj.zipCode.focus();
		return false;
	}
  return true;
}

function checkPINs(obj) 
{
	if (jsfIsNumberString (obj.userPIN.value)==false) {
		window.alert ("Password (PIN) can only contain numbers.");
		obj.userPIN.focus();
		return false;
	}
	 if (obj.userPIN.value.length < 6 || obj.userPIN.value.length > 10) {
		alert ("Password (PIN) must be between 6 to 10 digits.")
		obj.userPIN.focus();
		return false;
	} 
	if (jsfIsNumberString (obj.repeatUserPIN.value)==false) {
		window.alert ("Re-Entered Password (PIN) can only contain numbers.");
		obj.repeatUserPIN.focus();
		return false;
	}
	if (obj.repeatUserPIN.value.length < 6 || obj.repeatUserPIN.value.length > 10) {
		alert ("Re-Entered Password (PIN) must be between 6 to 10 digits.")
		obj.repeatUserPIN.focus();
		return false;
	}
	if (obj.userPIN.value != obj.repeatUserPIN.value) {
		alert ("Selected Password (PIN) does not match Re-Entered Password (PIN).")
		obj.repeatUserPIN.focus();
		return false;
	}
	return true; 
}

function checkUserIdPIN(obj) 
{
	if (obj.userID.value.length < 6) {
		alert ("User ID must be at least 6 characters.")
		obj.userID.focus();
		return false;
	} 
	
  	if (!userIdEdit(obj.userID))
  	{
  		return false;
  	}
   
	if (jsfIsNumberString (obj.userPIN.value)==false) {
		window.alert ("Password (PIN) can only contain NUMBERS.");
		obj.userPIN.focus();
		return false;
	}
	 if (obj.userPIN.value.length < 6 || obj.userPIN.value.length > 10) {
		alert ("Password (PIN) must be between 6 to 10 digits.")
		obj.userPIN.focus();
		return false;
	} 
	if (jsfIsNumberString (obj.repeatUserPIN.value)==false) {
		window.alert ("Re-Entered Password (PIN) can only contain NUMBERS.");
		obj.repeatUserPIN.focus();
		return false;
	}
	if (obj.repeatUserPIN.value.length < 6 || obj.repeatUserPIN.value.length > 10) {
		alert ("Re-Entered Password (PIN) must be between 6 to 10 digits.")
		obj.repeatUserPIN.focus();
		return false;
	}
	if (obj.userPIN.value != obj.repeatUserPIN.value) {
		alert ("Selected Password (PIN) does not match Re-Entered Password (PIN).")
		obj.repeatUserPIN.focus();
		return false;
	}
	return true; 
}

function checkUserIdPassword(obj) 
{
	if (obj.userId.value.length == 0)
	{
		window.alert ("User ID is required");
		obj.userId.focus();
		return false;
	}
	if (obj.userId.value.length < 6) {
		alert ("User ID must be at least 6 characters.")
		obj.userId.focus();
		return false;
	} 
	
	if (!userIdEdit(obj.userId))
  	{
  		return false;
  	}

	if (obj.password.value.length == 0) {
		alert ("Password (PIN) is required.")
		obj.password.focus();
		return false;
	} 
	if (jsfIsNumberString (obj.password.value)==false) {
		window.alert ("Password (PIN) can only contain numbers.");
		obj.password.focus();
		return false;
	}
	 if (obj.password.value.length < 4 || obj.password.value.length > 10) {
		alert ("Password (PIN) must be between 6 - 10 digits.")
		obj.password.focus();
		return false;
	} 

	return true; 
}

function checkNewUserId(obj) 
{
	if (obj.newUserId.value.length < 6) {
		alert ("User ID must be at least 6 characters.")
		obj.newUserId.focus();
		return false;
	} 
	
	if (!userIdEdit(obj.newUserId))
  	{
  		return false;
  	}
	
	if (obj.newUserId.value != obj.repeatNewUserId.value) {
		alert ("Selected User ID does not match Re-Entered User ID.")
		obj.repeatNewUserId.focus();
		return false;
	}
	return true; 
}

function userIdEdit(userID)
{
	var iChars = "!%^&*()+=-_~`[]\\\';,/{}|\":<>?";
	
    for (var i = 0; i < userID.value.length; i++) {
  	  if (iChars.indexOf(userID.value.charAt(i)) != -1) {
  	  alert (" Invalid characters entered in User ID field.\n Please Try Again.");
  	  return false;
  	 }
    }
    return true;
}

function popUp(URL) 
{
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600');");
}

/* Opens new window for url, height, width provided*/
function w_open(url, name, w, h)
{
    var win = window.open(url, name, 'width=' + w + ', height=' + h + ', ' + 'scrollbars=yes, resizable=yes');
    win.resizeTo(w, h);
}


function jsfSetFocus (thisForm) {
        thisForm.focus ();
       
}    

function submitPage(obj){
        if (checkActNumUser(obj) == true) {
      	if(navigator.appName.indexOf("WebTV") != -1) {//WebTV detected
                   alert("Attention! When using WebTV "+
                       "the Online Retirement Center may not work as expected!");
              }
		obj.submit();
	}
}

function submitUserIdPage(obj){
        if (checkUserIdPIN(obj) == true) {
      	if(navigator.appName.indexOf("WebTV") != -1) {//WebTV detected
                   alert("Attention! When using WebTV "+
                       "the Online Retirement Center may not work as expected!");
              }
		obj.submit();
	}
} 

function submitPINPage(obj){
        if (checkPINs(obj) == true) {
      	if(navigator.appName.indexOf("WebTV") != -1) {//WebTV detected
                   alert("Attention! When using WebTV "+
                       "the Online Retirement Center may not work as expected!");
              }
		obj.submit();
	}
} 

function submitChangeUserIdPage(obj){
        if (checkUserIdPassword(obj) == true) {
      	if(navigator.appName.indexOf("WebTV") != -1) {//WebTV detected
                   alert("Attention! When using WebTV "+
                       "the Online Retirement Center may not work as expected!");
              }
		obj.submit();
	}
}

function submitChangeUserIdPage2(obj){
        if (checkNewUserId(obj) == true) {
      	if(navigator.appName.indexOf("WebTV") != -1) {//WebTV detected
                   alert("Attention! When using WebTV "+
                       "the Online Retirement Center may not work as expected!");
              }
		obj.submit();
	}
} 
