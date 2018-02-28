/*
	User security JavaScript
*/

//Global Variable . Functions call this at will
var textBoxName="password"
var scoreTextArray = [];
var scoreTextCount = 0;
var validNumeric = new checkInput('01234567890');
var validAlphaNumeric = new checkInput('01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-@.,|!$%/?[]{}~` ');
var oldValues = [];

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numericChar = "0123456789";
var specialChar = "_-@.,|!$%/?[]{}~` ";

var errorsPSM = [];
var errorCountPSM = 0;

var errors = [];
var errorCount = 0;
var ERROR_INVALID_SOCIAL = "Social Security number must be 9 digits.";
var ERROR_INVALID_DOB_MONTH_1 = "Month must be 2 digits.";
var ERROR_INVALID_DOB_MONTH_2 = "Month must be between 1-12.";
var ERROR_INVALID_DOB_DAY_1 = "Day must be 2 digits.";
var ERROR_INVALID_DOB_DAY_2 = "Day must be between 1-31.";
var ERROR_INVALID_DOB_YEAR_1 = "Year must be 4 digits.";
var ERROR_INVALID_DOB_YEAR_2 = "Year entered is invalid.";
var ERROR_INVALID_ZIP = "Zip Code must be 5 digits.";

var ERROR_USERID_LENGTH = "User ID must be at least 6 characters."
var ERROR_USERID_INVALID_CHAR = "Invalid symbols entered in User ID field. The following list of symbols are allowed: @ . $"
var ERROR_USERID_REENTER_MISMATCH = "Selected User ID does not match Re-entered User ID."
var ERROR_USERID_REPEAT_CHAR = "User ID must not contain more than 3 consecutive repeating characters."
var ERROR_USERID_ATLEAST_ONE_ALPHA = "User ID must contain at least one alpha character."
var ERROR_USERID_ATLEAST_ONE_NUM = "User ID must contain at least one number."
var ERROR_USERID_9_CONSECUTIVE_NUM = "User ID cannot contain more than 8 consecutive numbers."
var ERROR_USERID_NO_SPACES_ALLOWED = "User ID cannot contain spaces."


var ERROR_PWD_LENGTH = "Password must be between 8 and 20 characters."
var ERROR_PWD_INVALID_CHAR = "Invalid symbols entered in Password field. The following list of symbols are allowed:  _ - @ . | ! $ % / ? [] {} ~ ` #"
var ERROR_PWD_LENGTH_4_20 = "Password must be between 4 and 20 characters."
var ERROR_PWD_REENTER_MISMATCH = "Selected Password does not match Re-entered Password."
var ERROR_PWD_REPEAT_CHAR = "Password must not contain more than 3 consecutive repeating characters."
var ERROR_PWD_ATLEAST_ONE_NUM = "Password must contain at least one number."
var ERROR_PWD_ATLEAST_ONE_ALPHA = "Password must contain at least one alpha character."
var ERROR_PWD_MATCHES_USERID = "Password must not match User ID."  // This may be a server side edit
var ERROR_PASSWORD_9_CONSECUTIVE_NUM = "Password cannot contain more than 8 consecutive numbers."
var ERROR_PWD_NO_SPACES_ALLOWED = "Password cannot contain spaces."

var ERROR_SECURITY_ANSWER_EMPTY = "Security Answer not entered.";
var SECURE_CODE_ERROR = "Security Code does not match word in Security Image.";
var ERROR_CHALLENGE_ANSWERS_EMPTY = "Answers must be filled for challenge questions.";
var ERROR_CHALLENGE_QUESTIONS_EMPTY = "Challenge questions must be selected.";
var ERROR_SECURITY_ANSWER_EMPTY = "Security Answer not entered.";
var ERROR_USER_ID_PWD_EMPTY = "User Id and Password must be entered.";
var ERROR_USERID_EMPTY = "User Id must be entered.";
var ERROR_PWD_EMPTY = "Password must be entered.";

function verifyUserIdentity()
{
  var accountNum = document.userIdentityForm.accountNumber.value;
  var zip = document.userIdentityForm.zipCode.value;
  var dobDay = document.userIdentityForm.dobDay.value;
  var dobMonth = document.userIdentityForm.dobMonth.value;
  var dobYear = document.userIdentityForm.dobYear.value;   	   	
  var securCode = document.userIdentityForm.uniqSecurityCode.value;   

  clearErrors();
  
  if (accountNum.length == null || accountNum.length == 0)
  {
		addError(ERROR_INVALID_SOCIAL);
		displayErrorMessage();
		document.userIdentityForm.accountNumber.focus();
   }	
   validateAccount(accountNum);

   if (dobMonth.length == null || dobMonth.length == 0)
   {
		addError(ERROR_INVALID_DOB_MONTH_1);
		displayErrorMessage();
   }
   validateDobMonth(dobMonth);
    
   if (dobDay.length == null || dobDay.length == 0)
   {
		isFieldBlank = false;  
		addError(ERROR_INVALID_DOB_DAY_1);
		displayErrorMessage();
   }   
   validateDobDay(dobDay);	
   
   if (dobYear.length == null || dobYear.length == 0)
   {
		isFieldBlank = false;  
		addError(ERROR_INVALID_DOB_YEAR_1);
		displayErrorMessage();
   }
   validateDobYear(dobYear);
   
   if (zip.length == null || zip.length == 0)
   {
		isFieldBlank = false;  
		addError(ERROR_INVALID_ZIP);
		displayErrorMessage();
   }
   validateZipCode(zip) 
  
   if (errors.length == 0)	 
   {
  	  document.userIdentityForm.submit();
   }
}

function checkIfFilled()
{  
	var accountNum = document.userIdentityForm.accountNumber.value;
   	var zip = document.userIdentityForm.zipCode.value;
   	var dobDay = document.userIdentityForm.dobDay.value;
   	var dobMonth = document.userIdentityForm.dobMonth.value;
   	var dobYear = document.userIdentityForm.dobYear.value;   	   	
   	var securCode = document.userIdentityForm.uniqSecurityCode.value;   	   	   	   	

     clearErrors();   	   	   	   	
	 
	 validateAccount(accountNum);
	 validateDobMonth(dobMonth)
	 validateDobDay(dobDay)	
	 validateDobYear(dobYear)	 
	 validateZipCode(zip) 
	 //validateSecurityCode(securCode)

    
}
function validateAccount(accountNum)
{
   	if (!isBlank(trim(accountNum)))
   	{
		if (accountNum.length != 9)
	  	{
			addError(ERROR_INVALID_SOCIAL);
			displayErrorMessage();	
		}
	}

}
function validateDobMonth(dobMonth)
{	
   	if (!isBlank(trim(dobMonth)))
	{
		isFieldBlank = false;
		if (trim(dobMonth).length !=2)
		{
			addError(ERROR_INVALID_DOB_MONTH_1);
			displayErrorMessage();		
		}
		if (dobMonth < 1 || dobMonth > 12)
		{
			addError(ERROR_INVALID_DOB_MONTH_2);
			displayErrorMessage();		
		}
	}
}
function validateDobDay(dobDay)
{	
   	if (!isBlank(trim(dobDay)))
   	{
		isFieldBlank = false;   	
		if (trim(dobDay).length !=2)
		{
			addError(ERROR_INVALID_DOB_DAY_1);
			displayErrorMessage();	
		}
		if (dobDay < 1 || dobDay > 31)
		{
			addError(ERROR_INVALID_DOB_DAY_2);
			displayErrorMessage();	
		}	
	}
	
}
function validateDobYear(dobYear)
{	
   	if (!isBlank(trim(dobYear)))
   	{
		isFieldBlank = false;   	
		if (trim(dobYear).length !=4)
		{
			addError(ERROR_INVALID_DOB_YEAR_1);
			displayErrorMessage();	
		}
		if (dobYear > 3000)
		{
			addError(ERROR_INVALID_DOB_YEAR_2);
			displayErrorMessage();		
		}
	}
		
}
function validateZipCode(zipCode)
{	
   	if (!isBlank(trim(zipCode)))
   	{
		isFieldBlank = false;   	
		if (trim(zipCode).length != 5)
		{
			addError(ERROR_INVALID_ZIP);
			displayErrorMessage();	
		}
	}
	
}
function validateSecurityCode(securityCode)
{	   
   if (!isBlank(trim(securityCode)))
   	{
		isFieldBlank = false;   
		addError(SECURE_CODE_ERROR);	
		displayErrorMessage();	
	}
		
}
function checkIfUserIdFilled()
{
	var userId       = trim(document.userIdForm.userId.value);
   	var reenterUserId = trim(document.userIdForm.reenterUserId.value);
   	var userIdAllNumericOrLetter=document.userIdForm.userIdAllNumericOrLetter.value;
   
   	clearErrors();   	   	   	   	

	validateUserId(userId);
	
		
    if(userIdAllNumericOrLetter=='true'){
    	if(isBlank(trim(userId)) || isBlank(trim(reenterUserId)))
       	{	
    		switchDisplay(false);
       	}
       	else
       	{
    		switchDisplay(true);   		
       	}
    	    	
    }
	
}
function checkIfEnterUserIdFilled()
{
	clearErrors();

	var userId = document.userIdForm.userId.value;
   	if (isBlank(trim(userId)) || userId.length < 1) 
   	{	
		addError(ERROR_USERID_LENGTH);
		displayErrorMessage();	
		document.userIdForm.userId.focus();
   	} 
   
   	if (errors.length == 0)
   	{
   		 document.userIdForm.submit();
   	}
   	
}
function checkIfChangeUserIdFilled()
{
	var userId   = trim(document.changeUserIdForm.userId.value);
   	var password = trim(document.changeUserIdForm.password.value);
   	clearErrors();   	   	
   	
   	if(isBlank(userId) && isBlank(password))
   	{
   		addError(ERROR_USER_ID_PWD_EMPTY);
		displayErrorMessage();
		document.changeUserIdForm.userId.focus();
   	}  
   	else if (isBlank(userId))     
   	{
   		addError(ERROR_USERID_EMPTY);
		displayErrorMessage();
		document.changeUserIdForm.userId.focus();
   	}	
   	else if (isBlank(password))
   	{
   		addError(ERROR_PWD_EMPTY);
		displayErrorMessage();
		document.changeUserIdForm.password.focus();
   	}
   
   	if (errors.length == 0)	 
    {
  	    document.changeUserIdForm.submit();
    }
}
/* 
function checkIfChangeUserIdPasswordFilled()
{
	//alert ("checkIfChangeUserIdPasswordFilled");
	var userId = document.changeUserIdForm.userId.value;
   	var password = document.changeUserIdForm.password.value;
   	clearErrors();   	   	   	   	

	validateChangeUserIdPassword(password);

   	if(isBlank(trim(userId)) || isBlank(trim(password)))
   	{	
		switchDisplay(false);
   	}
   	else if (errors.length == 0)
   	{   		
   		switchDisplay(true);
   	}
   	else
   	{
		switchDisplay(false);   		
   	}
}
function validateChangeUserIdPassword(password)
{
	clearErrors();
	//alert ("validateChangeUserIdPassword");
	var trimmedPwd = trim(password);
   	if (!isBlank(trimmedPwd))
   	{
		if (trimmedPwd.length < 8 || trimmedPwd.length > 20)
	  	{
			addError(ERROR_PWD_LENGTH);
		}
		else if (isMoreThanTwoConsecutiveRepeatedChar(password))
		{
			addError(ERROR_PWD_REPEAT_CHAR);		
		}								
		else if (isInValidCharPwd(password))
		{
			addError(ERROR_PWD_INVALID_CHAR);		
		}									
		else if (isNineDigitConsecutiveNumber(password))
		{
			addError(ERROR_PASSWORD_9_CONSECUTIVE_NUM);		
		}										
		else if (!isAtleastOneAlphaCharUsed(password))
		{
			addError(ERROR_PWD_ATLEAST_ONE_ALPHA);
		}																
		else if (!isAtleastOneNumberUsed(password))
		{
			addError(ERROR_PWD_ATLEAST_ONE_NUM);	
		}
		displayErrorMessage();	
	}
	else
	{
   		switchDisplay(false);	
	}
}*/
function validatePasswordWithOldSecurity(password)
{
	//alert ("validatePasswordWithOldSecurity");
	var trimmedPwd = trim(password);
   	if (!isBlank(trimmedPwd))
   	{
		if (trimmedPwd.length < 4 || trimmedPwd.length > 20)
	  	{
			addError(ERROR_PWD_LENGTH_4_20);
		}
										
		else if (isInValidCharPwd(password))
		{
			addError(ERROR_PWD_INVALID_CHAR);		
		}									
		
		displayErrorMessage();	
	}
	else
	{
   		switchDisplay(false);	
	}
}
function checkIfChallengeAnswerFilled()
{
	clearErrors();
	//alert ("checkIfChallengeAnswerFilled");
	var answer = document.challengeQuestionsForm.answer1.value;

   	if (isBlank(trim(answer)) || answer.length < 1) 
   	{	
		addError(ERROR_SECURITY_ANSWER_EMPTY);
		displayErrorMessage();	
   	} 
   
   	if (errors.length == 0)
   	{
   		document.challengeQuestionsForm.submit();
   	}
}
function checkIfReenterUserIdFilled()
{
	var userId = document.userIdForm.userId.value;
   	var reenterUserId = document.userIdForm.reenterUserId.value;
   	var userIdAllNumericOrLetter=document.userIdForm.userIdAllNumericOrLetter.value;
	//alert ("checkIfReenterUserIdFilled user ID is " + userId + " reentered userid is " + reenterUserId);
   	clearErrors();   	   	   	   	

	validateReenterUserId(userId, reenterUserId);

    if(userIdAllNumericOrLetter=='true'){
    	if(isBlank(trim(userId)) || isBlank(trim(reenterUserId)))
       	{	
    		switchDisplay(false);
       	}
    	else
       	{
    		switchDisplay(true);   		
       	}
    	
    	
    }
   
}
function validateUserId(userId)
{
	var trimmedUserId = trim(userId);
   	if (!isBlank(trimmedUserId))
   	{
		if (trimmedUserId.length < 6)
	  	{
			addError(ERROR_USERID_LENGTH);
		}
		else if (isInValidChar(userId))
		{
			addError(ERROR_USERID_INVALID_CHAR);				
		}	
		else if (containsSpace(userId))
		{
			addError(ERROR_USERID_NO_SPACES_ALLOWED);
		}
		else if (isMoreThanThreeConsecutiveRepeatedCharUserId(userId))
		{
			addError(ERROR_USERID_REPEAT_CHAR);				
		}								
		else if (!isAtleastOneAlphaCharUsed(userId))
		{
			addError(ERROR_USERID_ATLEAST_ONE_ALPHA);				
		}																
		else if (!isAtleastOneNumberUsed(userId))
		{
			addError(ERROR_USERID_ATLEAST_ONE_NUM);				
		}
		else if (isNineDigitConsecutiveNumber(userId))
		{
			addError(ERROR_USERID_9_CONSECUTIVE_NUM);				
		}	
		displayErrorMessage();				
	}
	//else
	//{
   	//	switchDisplay(false);	
	//}
}
function validateUserIdWithOldSecurity(userId)
{
	var trimmedUserId = trim(userId);
   	if (!isBlank(trimmedUserId))
   	{
		if (trimmedUserId.length < 6)
	  	{
			addError(ERROR_USERID_LENGTH);
		}
		else if (isInValidChar(userId))
		{
			addError(ERROR_USERID_INVALID_CHAR);				
		}		
		
		displayErrorMessage();				
	}
	else
	{
   		switchDisplay(false);	
	}
}
function validateReenterUserId(userId, reenterUserId)
{
	var trimmedUserId = trim(userId);
	var trimmedReenterUserId = trim(reenterUserId);
   	if (!isBlank(trimmedUserId))
   	{
		if (trimmedUserId.length < 6)
	  	{
			addError(ERROR_USERID_LENGTH);
		}
		else if (isInValidChar(userId))
		{
			addError(ERROR_USERID_INVALID_CHAR);				
		}		
		else if (containsSpace(userId))
		{
			addError(ERROR_USERID_NO_SPACES_ALLOWED);
		}
		else if (isMoreThanThreeConsecutiveRepeatedCharUserId(userId))
		{
			addError(ERROR_USERID_REPEAT_CHAR);				
		}								
		else if (!isAtleastOneAlphaCharUsed(userId))
		{
			addError(ERROR_USERID_ATLEAST_ONE_ALPHA);				
		}																
		else if (!isAtleastOneNumberUsed(userId))
		{
			addError(ERROR_USERID_ATLEAST_ONE_NUM);				
		}
		else if (isNineDigitConsecutiveNumber(userId))
		{
			addError(ERROR_USERID_9_CONSECUTIVE_NUM);				
		} 
		else if (trimmedUserId.length > 0 && trimmedUserId != trimmedReenterUserId)
		{
			addError(ERROR_USERID_REENTER_MISMATCH);		
		}		
		displayErrorMessage();				
	}
	//else
	//{
   	//	switchDisplay(false);	
	//}
}
function checkIfPasswordFilled()
{
	
	computePasswordStrength(document.passwordForm.password,1);
	
	//var password= document.passwordForm.password.value;  3/1/12
   	//var repeatPassword = document.passwordForm.repeatPassword.value;  3/1/12
	//alert ("checkIfPasswordFilled password is " + password + " Repeat Password is " + repeatPassword);
   	//clearStrutsErrors();  	   	   	   	

	//validatePassword(password, repeatPassword);  3/1/12
	
	/*
   	if(isBlank(trim(password)) || isBlank(trim(repeatPassword)))
   	{	
		switchDisplay(false);
   	}
   	else if (errors.length == 0 && errorsPSM.length == 0)
   	{   		
   		switchDisplay(true);
   	}
   	else
   	{
		switchDisplay(false);   		
   	}*/
}
function checkIfRepeatPasswordFilled()
{
	
	computePasswordStrength(document.passwordForm.password,1);
	//var password= document.passwordForm.password.value;  3/12
   	//var repeatPassword = document.passwordForm.repeatPassword.value; 3/12
	//alert ("checkIfRepeatPasswordFilled password is " + password + " Repeat Password is " + repeatPassword);
   //clearStrutsErrors();   	   	   	   	3/12

	//validateRepeatPassword(password, repeatPassword); 3/12
	
	/*
   	if(isBlank(trim(password)) || isBlank(trim(repeatPassword)))
   	{	
		switchDisplay(false);
   	}
   	else if (errors.length == 0 && errorsPSM.length == 0)
   	{   		
   		switchDisplay(true);
   	}
   	else
   	{
		switchDisplay(false);   		
   	}*/
}
function validatePassword(password, repeatPassword)
{
	clearErrors();
	var trimmedPwd = trim(password);
	var trimmedRepeatPwd = trim(repeatPassword);
   	if (!isBlank(trimmedPwd))
   	{
		if (trimmedPwd.length < 8 || trimmedPwd.length > 20)
	  	{
			addError(ERROR_PWD_LENGTH);
			clearPasswordStrengthMeter(document.passwordForm.password,1);	
		}
		else if (isMoreThanThreeConsecutiveRepeatedChar(password))
		{
			addError(ERROR_PWD_REPEAT_CHAR);		
			clearPasswordStrengthMeter(document.passwordForm.password,1);			
		}								
		else if (isInValidCharPwd(password))
		{
			addError(ERROR_PWD_INVALID_CHAR);		
			clearPasswordStrengthMeter(document.passwordForm.password,1);			
		}
		else if (containsSpace(password))
		{
			addError(ERROR_PWD_NO_SPACES_ALLOWED);
		}
		else if (isNineDigitConsecutiveNumber(password))
		{
			addError(ERROR_PASSWORD_9_CONSECUTIVE_NUM);		
			clearPasswordStrengthMeter(document.passwordForm.password,1);	
		}										
		else if (!isAtleastOneAlphaCharUsed(password))
		{
			addError(ERROR_PWD_ATLEAST_ONE_ALPHA);
			clearPasswordStrengthMeter(document.passwordForm.password,1);					
		}																
		else if (!isAtleastOneNumberUsed(password))
		{
			addError(ERROR_PWD_ATLEAST_ONE_NUM);	
			clearPasswordStrengthMeter(document.passwordForm.password,1);				
		}
		else if (trimmedPwd.length > 0 && trimmedRepeatPwd.length > 0 && trimmedPwd != trimmedRepeatPwd)
		{
			addError(ERROR_PWD_REENTER_MISMATCH);	
			//clearPasswordStrengthMeter(document.passwordForm.password,1);		
		}	
		displayErrorMessage();	
		if (errors.length == 0 && errorsPSM.length == 0) 
		{
			computePasswordStrength(document.passwordForm.password,1);
		}					
	}
	//else
	//{
   	//	switchDisplay(false);	
	//}
}
function validateRepeatPassword(password, repeatPassword)
{
    clearErrors();
	var trimmedPwd = trim(password);
	var trimmedRepeatPwd = trim(repeatPassword);
   	if (!isBlank(trimmedPwd))
   	{
		if (trimmedPwd.length < 8 || trimmedPwd.length > 20)
	  	{
			addError(ERROR_PWD_LENGTH);
			clearPasswordStrengthMeter(document.passwordForm.password,1);		
		}
		else if (isMoreThanThreeConsecutiveRepeatedChar(password))
		{
			addError(ERROR_PWD_REPEAT_CHAR);
			clearPasswordStrengthMeter(document.passwordForm.password,1);						
		}	
		else if (isInValidCharPwd(password))
		{
			addError(ERROR_PWD_INVALID_CHAR);		
			clearPasswordStrengthMeter(document.passwordForm.password,1);			
		}				
		else if (containsSpace(password))
		{
			addError(ERROR_PWD_NO_SPACES_ALLOWED);
		}
		else if (isNineDigitConsecutiveNumber(password))
		{
			addError(ERROR_PASSWORD_9_CONSECUTIVE_NUM);		
			clearPasswordStrengthMeter(document.passwordForm.password,1);	
		}											
		else if (!isAtleastOneAlphaCharUsed(password))
		{
			addError(ERROR_PWD_ATLEAST_ONE_ALPHA);	
			clearPasswordStrengthMeter(document.passwordForm.password,1);					
		}																
		else if (!isAtleastOneNumberUsed(password))
		{
			addError(ERROR_PWD_ATLEAST_ONE_NUM);	
			clearPasswordStrengthMeter(document.passwordForm.password,1);					
		}
		else if (trimmedPwd.length > 0 && trimmedPwd != trimmedRepeatPwd)
		{
			addError(ERROR_PWD_REENTER_MISMATCH);	
			//clearPasswordStrengthMeter(document.passwordForm.password,1);		
		}		
		displayErrorMessage();	
		if (errors.length == 0 && errorsPSM.length == 0) 
		{
			computePasswordStrength(document.passwordForm.password,1);
		}			
	}
	//else
	//{
   	//	switchDisplay(false);	
	//}
}
function validateChallengeQuestions()
{
    clearErrors();
	var question1 = document.challengeQuestionsForm.question1.value;
   	var answer1 = document.challengeQuestionsForm.answer1.value;
   	var question2 = document.challengeQuestionsForm.question2.value;
   	var answer2 = document.challengeQuestionsForm.answer2.value;
   	var question3 = document.challengeQuestionsForm.question3.value;
   	var answer3 = document.challengeQuestionsForm.answer3.value;
   	var question4 = document.challengeQuestionsForm.question4.value;
   	var answer4 = document.challengeQuestionsForm.answer4.value;
	var question5 = document.challengeQuestionsForm.question5.value;
   	var answer5 = document.challengeQuestionsForm.answer5.value;

     
    if(question1 == 0 || question2 == 0 || question3 == 0 || question4 == 0 || question5 == 0 )
   	{
   		addError(ERROR_CHALLENGE_QUESTIONS_EMPTY);
		displayErrorMessage();	
   	}
	else if(isBlank(answer1) || isBlank(answer2)|| isBlank(answer3) || isBlank(answer4) || isBlank(answer5) )
   	{
   		addError(ERROR_CHALLENGE_ANSWERS_EMPTY);
		displayErrorMessage();				
   	}
   //	else
	//{
		/*if (question1 != 0 && answer1 != "" 
		&&  question2 != 0 && answer2 != "" 
		&&  question3 != 0 && answer3 != ""  
		&&	question4 != 0 && answer4 != "" 
		&&  question5 != 0 && answer5 != "")  
		{
			//switchDisplay(true);			
		}
		else
		{
			addError(ERROR_CHALLENGE_QUESTIONS_EMPTY);
			displayErrorMessage();				
		}	*/
	//}
	if (errors.length == 0)
	{
		 document.challengeQuestionsForm.submit();
	}
}
function isInValidChar(userId)
{
	var iChars = "!%^&*()+=-_~`[]\\\';,/{}|\":<>?#";	
    for (var i = 0; i < userId.length; i++) 
    {
		if (iChars.indexOf(userId.charAt(i)) != -1) 
		{
			return true;
		}
	}
    return false;
}

function containsSpace(userId)
{
	var spaceChar = " ";	
    for (var i = 0; i < userId.length; i++) 
    {
		if (spaceChar.indexOf(userId.charAt(i)) != -1) 
		{
			return true;
		}
	}
    return false;
}

function isInValidCharPwd(password)
{	
	var iChars = "^&*()+=\\\';()\":<>";
    for (var i = 0; i < password.length; i++) 
    {
		if (iChars.indexOf(password.charAt(i)) != -1) 
		{
			return true;
		}
	}
    return false;
}
function isMoreThanThreeConsecutiveRepeatedChar(userId)
{
    for (var i = 0; i < userId.length; i++) 
    {
		if (userId.charAt(i) == userId.charAt(i+1) && userId.charAt(i+1) == userId.charAt(i+3)) 
		{
			return true;
		}
	}
    return false;
}
function isMoreThanThreeConsecutiveRepeatedCharUserId(userId)
{
    for (var i = 0; i < userId.length; i++) 
    {
		if (userId.charAt(i).toLowerCase() == userId.charAt(i+1).toLowerCase() && userId.charAt(i+1).toLowerCase() == userId.charAt(i+2).toLowerCase()
				&& userId.charAt(i+2).toLowerCase() == userId.charAt(i+3).toLowerCase()) 
		{
			return true;
		}
	}
    return false;
}
function isAtleastOneNumberUsed(userId)
{
	var reg = /[0-9]/;	
	if (userId.match(reg))
	{
		return true;
	}	
	return false;
}
function isAtleastOneAlphaCharUsed(userId)
{
	var reg = /.*[a-zA-Z].*/;
	if (userId.match(reg))
	{
		return true;
	}
	return false;
}
function isNineDigitConsecutiveNumber(userId)
{
	var reg = /[0-9]/;
	var kount = 0;
    for (var i = 0; i < userId.length; i++) 
    {
		if (userId.charAt(i).match(reg)) 
		{
			kount = kount + 1;
		}
		else
		{
			kount = 0;
		}
		if (kount > 8)
		{
			return true;
		}
	}
	return false;
}

function isBlank(strg) 
{
    for(var i = 0; i < strg.length; i++) 
    {
        var character = strg.charAt(i);
        if ((character != ' ') && (character != '\n') && (character != '\t')) 
        {
           return false;
      	}
    }
    return true;
}
function ltrim ( s )
{
	return s.replace( /^\s*/, "" )
}
function rtrim ( s )
{
	return s.replace( /\s*$/, "" );
}
function trim ( s )
{
	return rtrim(ltrim(s));
}
function switchDisplay(onOff)
{
/* This function has a specific purpose of disabling the transaction submission capability of the page.
It will be called from the javascript function that performs page validation before submission.
The button and inactive image should be enclosed in spans named "_enabled" and "_disabled" for this to work.
*/
	if (!document.getElementById ) return;

	if (onOff) 
	{
		document.getElementById("_ungreyed").style.display="inline";
		document.getElementById("_greyed").style.display="none";
	} 
	else 
	{
		document.getElementById("_ungreyed").style.display="none";
		document.getElementById("_greyed").style.display="inline";
	}
}
function addError(msg)
{	
	errors[errorCount] = msg;
	errorCount++; 
}
function addErrorPSM(msg)
{	
	errorsPSM[errorCountPSM] = msg;
	errorCountPSM++; 
}
function clearErrors()
{	
	errors = [];
	errorCount = 0;
	document.getElementById("errors").style.display="none";
}

function clearStrutsErrors()
{
	if (document.getElementById("strutsErrors") != null)
	{
		document.getElementById("strutsErrors").style.display="none";
	}
}
function clearErrorsPSM()
{	
	errorsPSM = [];
	errorCountPSM = 0;
}
function displayErrorMessage()
{
	if (errors.length > 0)
	{
		document.getElementById("errors").style.display="block";
		var appendedErrors = "<font color='red_text'><ul>";
		for (i=0; i<errors.length; i++)
		{
			appendedErrors += "<li>&bull;&nbsp;" + errors[i] + "</li>";
			if (i == errors.length)
			{
				appendedErrors +=  appendedErrors + "</ul></font>";
			}
		}
		document.getElementById("myError").innerHTML = appendedErrors;
		if (document.getElementById("serverErrors"))
		{
			document.getElementById("serverErrors").style.display="none";
		}
	}
}
// Allows Numbers only in User Input
function allowNumbersonly(e)
{
	var unicode=e.charCode? e.charCode : e.keyCode
	if (unicode!=8)
	{ //if the key isn't the backspace key (which we should allow)
		if ((unicode<48||unicode>57) && (unicode != 9 && unicode !=13))
		{
			 //if not a number
			return false //disable key press
		}
	}
	if (unicode == 13)
	{
		checkIfFilled();
		return true;
	}
}
function submitUpgrade(actionToSubmit)
{
	document.upgradeSecurityForm.upgrade.value = actionToSubmit;
    document.upgradeSecurityForm.submit();		
}	

//************************************************************************************
//Password Strength Meter Functions
//************************************************************************************
function loadEventTrigger()
{
	initialize();
	lockTextBoxes();		
}
function initialize()
{
	var actualPassword=document.getElementById("actualPASSWORD").value;
	document.passwordForm.password.value=actualPassword;
	document.passwordForm.password.style.color="black"
	computePasswordStrength(document.passwordForm.password,1);	
}
//Every Value change will trigger an onchange event and then determine if the bar has to be refreshed
function lockTextBoxes() 
{
	//Iterate through all textboxes and make sure that atleast one value has changed from the initial display
	var textboxes = [];
	textboxes = document.getElementsByName(textBoxName);		
	for (var i=0; i<textboxes.length; i++) 
	{		
		//Allow only number input			
		textboxes[i].onkeypress = function(event) 
		{
			// validateInput(this,validAlphaNumeric,event);	
		}			
		textboxes[i].onmouseup = function(event) 
		{
			// validateInput(this,validAlphaNumeric,event);	
		}			
		textboxes[i].onkeyup = function(evt) 
		{		
			//textboxes[i].onblur = function(event) {
			computePasswordStrength(document.passwordForm.password,1);				
			if (window.event && !window.event.cancelBubble) 
			{
				window.event.cancelBubble = "true";
			} 
			else 
			{
				evt.stopPropagation();
			}
		}
	}
}
function addScoreText(msg)
{
	//alert(msg);
	scoreTextArray[scoreTextCount] = msg;
	scoreTextCount++; 
}
function displayScoreText(color)
{
	//Find the scoreText display section
	var scoreTextSection = document.getElementById("score_text");
	
	if(scoreTextSection)
	{
		if(scoreTextArray.length>0)
		{		
			var scoreTextMessage = "<font color='" + color + "'>";
			for(i = 0;i<scoreTextArray.length;i++)
			{
				scoreTextMessage += scoreTextArray[i] + "<br/>";
			}
			scoreTextMessage += "</font>";
			scoreTextSection.innerHTML = scoreTextMessage;		
			
			//Finally clear scoreText messages
			scoreTextArray = [];
			scoreTextCount = 0;		
		}
		else
		{
			scoreTextSection.innerHTML = "";
			//alert(scoreTextSection.innerHTML);
		}
	}
}
function clearScoreText()
{
	//alert ("PSMALERT ClearScoreText called");
	var scoreTextSection = document.getElementById("score_text");
	scoreTextArray = [];
	scoreTextCount = 0;
	scoreTextSection.innerHTML = "";
}
function checkInput(strValid, strMsg) 
{
	//	Variables
	var reWork = new RegExp('[a-z]','gi');		//	Regular expression\

	//	Properties
	if(reWork.test(strValid))
	{
		this.valid = strValid.toLowerCase() + strValid.toUpperCase();
	}
	else
	{
		this.valid = strValid;
	}
	if((strMsg == null) || (typeof(strMsg) == 'undefined'))
	{
		this.message = '';
	}
	else
	{
		this.message = strMsg;
	}
	//	Methods
	this.getValid = getValidValue;

	function getValidValue() 
	{
		return this.valid.toString();
	}
}
function validateInput(objForm, objKeyb,event) 
{
	strWork = objKeyb.getValid();
	strMsg = '';						// Error message
	blnValidChar = false;				// Valid character flag
	var keyPressed;
	if(event)
	{
		keyPressed = event.which;
	}
	else
	{
		keyPressed = window.event.keyCode;
	}	
	// Part 1: Validate input
	if(!blnValidChar)
	{
		for(i=0;i < strWork.length;i++)
		{
			if(keyPressed == strWork.charCodeAt(i)) 
			{
				blnValidChar = true;
				break;
			}
		}
	}
	if(keyPressed == 8 || keyPressed == 0)
	{
		blnValidChar = true;		
	}
	// Part 2: Build scoreText message
	if(!blnValidChar) 
	{
		if(event)
		{
			event.preventDefault();
		}		
		else
		{
			window.event.returnValue = false;		// Clear invalid character
		}
		objForm.focus();							// Set focus
	}
}
//compute password strength
function clearPasswordStrengthMeter(obj, tabID) 
{
        
	var score = 0;
	var scoreTxt;
    var tabIDString;
    var colorCode = "#000000";
    if (tabID == 1) 
    {
    	tabIDString = "tab1Id";
    }
	
	if (errorsPSM.length > 0 || errors.length > 0) 
	{
		scoreTxt="Invalid Password";
		addScoreText(scoreTxt);
 	} 
 	else 
 	{
		scoreTxt="";
		addScoreText(scoreTxt);
 	}
	displayScoreText("black");
	//alert ('PSMALERT clearMeter SCORE and txt = ' + score + scoreTxt);	
 	drawBarChart(score,tabIDString,colorCode);
}
//compute password strength
function computePasswordStrength(obj, tabID) 
{         
	var scoreTxt;
    var tabIDString;
    var colorCode = "#000000";
    if (tabID == 1) 
    {
    	tabIDString = "tab1Id";
    }
	var contribVal=obj.value;
	var lengthPassword = contribVal.length;
	var score = (parseInt(lengthPassword) * 4);
	
	var repeatCount = 0;
	repeatCount = countRepeating(obj);
		
	var numericCount = 0;
	numericCount = countNumerics(obj);
	
	var upperCount = 0;
	var lowerCount = 0;
	var alphaCount = 0;
	var specialCount = 0;
	upperCount = countCharacters(obj, upperChar);
	lowerCount = countCharacters(obj, lowerChar);
	alphaCount = countCharacters(obj, lowerChar + upperChar);
	specialCount = countCharacters(obj, specialChar);
		
	score = score - repeatCount;
	if (numericCount >= 3) 
	{
		score = score + 5;
	}
	if (specialCount >= 2) 
	{
		score = score + 5;
	}	
	if (lowerCount > 0 && upperCount > 0) 
	{
		score = score + 10;
	}
	if (numericCount > 0 && alphaCount > 0) 
	{
		score = score + 15;
	}
	if (numericCount > 0 && specialCount > 0) 
	{
		score = score + 15;
	}
	if (specialCount > 0 && alphaCount > 0) 
	{
		score = score + 15;
	}
	if (alphaCount > 0 && specialCount == 0 && numericCount == 0) 
	{
		score = score - 10;
	}
	if (score < 0) 
	{
		score = 0;
	}
	if (score > 100) 
	{
		score = 100;
	}	
	if (score != 0 && score < 25) 
	{
		scoreTxt="Very Weak";
	    addScoreText(scoreTxt);
	 	//displayScoreText("red");
	 	colorCode="D2492A";
	}
	if (score >= 25 && score < 34) 
	{
		scoreTxt="Weak";
	    addScoreText(scoreTxt);
	 	//displayScoreText("orange");	
	 	colorCode="CA7C02";
	}
	if (score >= 34 && score < 50) 
	{
		scoreTxt="Average";
	    addScoreText(scoreTxt);
	 	//displayScoreText("yellow");		
	 	colorCode="FFFF66";
	}
	if (score >= 50 && score < 68) 
	{
		scoreTxt="Strong";
	    addScoreText(scoreTxt);
	 	//displayScoreText("blue");	
	 	colorCode="0073CF";
	}
	if (score >= 68 && score < 90) 
	{
		scoreTxt="Secure";
	    addScoreText(scoreTxt);
	 	//displayScoreText("lightgreen");
	 	colorCode="66CC33";
	}
	if (score >= 90) 
	{
		scoreTxt="Very Secure";
	    addScoreText(scoreTxt);
	 	//displayScoreText("green");
	 	colorCode="2E720C";
	}
	displayScoreText("black");
		
	//clearErrorsPSM(); 3/12

	//if (errorsPSM.length > 0) 
	//{
	//	//alert('PSMALERT computePasswordStrength errorsPSM length ' + errorsPSM.length);
	//	score = 0;
	//	scoreTxt="Invalid Password";
	// 	displayScoreText("black");
	//	clearPasswordStrengthMeter(document.passwordForm.password,1);
	//} 
	//else 
	//{
	 	drawBarChart(score,tabIDString,colorCode);
 	//}
 	//drawBarChart(score,tabIDString,colorCode);
}
function drawBarChart(contribVal, tableRow1Id, colorCode)
{
	barColor = colorCode;
	//password strength meter 		
	if (parseInt(contribVal)>0 && parseInt(contribVal)<100 ) 
	{
		myrow=document.getElementById(tableRow1Id);			
		removeAll(myrow); 
	 	mycell = document.createElement("td");	 	
		mycell.setAttribute("width" ,2*contribVal);
	 	mycell.setAttribute("align", "center");		 	
	 	mycell.style.border="0";	 	
	 	mycell.style.backgroundColor = '#'+barColor;
	 	myrow.appendChild(mycell);
	 	mycell = document.createElement("td");		 			
	 	mycell.setAttribute("align", "center");	 	
	 	mycell.style.background ="#ffffff";
	 	myrow.appendChild(mycell);	
	} 
	else 
	if (parseInt(contribVal)==0 || isNaN(contribVal)) 
	{		 
	 	myrow=document.getElementById(tableRow1Id);
	 	removeAll(myrow); 		 
		mycell = document.createElement("td");		 
		mycell.setAttribute("colspan" ,"2");
		mycell.setAttribute("width" ,"200");
	 	mycell.style.border="0"	;
	 	mycell.setAttribute("align", "center");
	 	mycell.style.color='#'+barColor;
		myrow.appendChild(mycell);
	 	cellText = document.createTextNode("?");		 	 
        mycell.appendChild(cellText);	 
	} 
	else 
	{
		myrow=document.getElementById(tableRow1Id);
	 	removeAll(myrow); 	
	 	mycell = document.createElement("td");		 
		mycell.setAttribute("colspan" ,"2");
	 	mycell.setAttribute("width" ,"200");
	 	mycell.style.border="0";
	 	mycell.setAttribute("align", "center");
	 	mycell.style.backgroundColor = '#'+barColor;
	 	mycell.style.color="#FFF";
	 	myrow.appendChild(mycell);
	 	cellText = document.createTextNode("100");		 	 
       	mycell.appendChild(cellText);
	}
}
//remove all child nodes
function removeAll(myrow)
{		
	if ( myrow.hasChildNodes() ) {
		while ( myrow.childNodes.length >= 1 ) {
  			myrow.removeChild( myrow.firstChild );       
  		} 
	}	
}	
function countRepeating(obj)
{
	var text = obj.value;
	var character; 
	var thischar = text.charAt(0);
	var prevchar = "";
	var count = 0;
	var subCount = 1;
	var matchFound = false;
	var anyMatchFound = false;
	if(text.length > 1 )
	{
		for(i=0; i<text.length; i++) {
		 	thischar = text.charAt(i);
		 	//alert('prevchar = ' + prevchar + ' thischar = ' + thischar);
		 	if (thischar == prevchar) {
               // double character!
               //alert('MATCHFOUND'); 
			   count = count + 1;
			   matchFound = true;
			   anyMatchFound = true;
		 	} else {
		 		if (matchFound == true) {
		 			//alert('ADD BREAK COUNT'); 
		 			matchFound = false;
		 			count = count + 1;
		 		}
		 	}
		 	prevchar = thischar;
		}
	}	
	if (matchFound == true) {
		//alert('ADD BREAK COUNT'); 
		matchFound = false;
		count = count + 1;
	}
	if (!anyMatchFound) {
		//alert('SET TO ZERO'); 
		count = 0;
	}
	return count;
}
function countNumerics(obj)
{
	var text = obj.value;
	var thischar = text.charAt(0);
	var count = 0;
	if (text.length > 1 ) {
		for(i=0;i<text.length;i++)
		{
		 	thischar = text.charAt(i);
		 	if (isNaN(thischar) == false) {
				count++;
			}
		}
	}	
	return count;
}
function countCharacters(obj, strWork)
{
	var text = obj.value;
	var thischar = text.charAt(0);
	var count = 0;
	
	if (text.length > 1 ) {
		for(i=0;i<text.length;i++)
		{
		 	thischar = text.charAt(i);
		 	
			for(j=0;j < strWork.length;j++)
			{
				if (thischar == strWork.charAt(j)) {
					count++;
					break;
				}
			}
		}
	}	
	return count;
}
function setFocus()
{
	for (i=0; i<document.forms[0].length; i++) 
	{
		if ((document.forms[0][i].type != "hidden") && (document.forms[0][i].type != "disabled"))
		{
			document.forms[0][i].focus();
			break;
		}
	}
}
function isEmailFilled()
{
	var emailId = document.emailForm.emailId.value;
	var repeatEmailId = document.emailForm.repeatEmailId.value;
	
   	if(isBlank(trim(emailId)) || isBlank(trim(repeatEmailId)))
   	{	
		switchDisplay(false);
   	}
   	else
   	{
		switchDisplay(true);
   	}
}
function playCaptcha() 
{
	var wavUrl = '"/TRSWeb/CaptchaAudio"';
 	var embedCode = '<embed src=' + wavUrl + ' hidden="true" autostart="true" type="audio/wav"/>';
 	document.getElementById("player").innerHTML = embedCode; 
}
function popupFlexibleWindow(baseURL,winName,winHeight,winWidth, theAnchor) 
{
   var c = ((screen.height - winHeight)/2);
   var d = ((screen.width - winWidth)/2);
   var theURL;
   theURL = baseURL + theAnchor; 
   
   features = "height=" + winHeight + ",width=" + winWidth + ",toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=center,directories=no,status=no";
   features += "screenX=" + d + ",left=" + d + ",screenY=" + c + ",top=" + c;	   
   this.name = "main";
   
   win2=window.open(theURL,'popup',features);   
   win2.focus(); 
}
function checkEnter(e)
{ //e is event object passed from function invocation
	var characterCode //literal character code will be stored in this variable
	
	if(e && e.which)
	{ //if which property of event object is supported (NN4)
		e = e
		characterCode = e.which //character code is contained in NN4's which property
	//alert ("checkEnter.which = " + characterCode);
	}
	else
	{
		e = event
		characterCode = e.keyCode //character code is contained in IE's keyCode property
	//alert ("checkEnter.e " + characterCode);
	}	
	if(characterCode == 13)
	{ //if generated character code is equal to ascii 13 (if enter key)
		return false 
	}
}

	
