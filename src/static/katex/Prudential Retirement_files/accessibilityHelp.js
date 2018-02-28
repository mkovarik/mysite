
function accessibilyHelpLinkTarget(){
	var sourceHost = window.location.host;
	if(sourceHost.indexOf("localhost") != -1){
		targetURL = "http://web-qa.prudential.com/view/page/public/31865";
	}else if(sourceHost.indexOf("qa") != -1 || sourceHost.indexOf("stage") != -1){
		targetURL = "http://web-qa.prudential.com/view/page/public/31865";
	}else{
		targetURL = "http://www.prudential.com/accessibilityhelp";
	}
	var sourceURLIs = window.location.protocol + "//" + window.location.host;
	var targetURLIs = targetURL+"?sourceURL="+sourceURLIs;
	window.open( targetURLIs , "_blank");
}
function accessibilyHelpPublicLinkTarget(){
	var sourceHost = window.location.host;
	if(sourceHost.indexOf("localhost") != -1){
		targetURL = "http://web-qa.prudential.com/view/page/public/31865";
	}else if(sourceHost.indexOf("qa") != -1 || sourceHost.indexOf("stage") != -1){
		targetURL = "http://web-qa.prudential.com/view/page/public/31865";
	}else{
		targetURL = "http://www.prudential.com/accessibilityhelp";
	}
	var sourceURLIs = window.location.protocol + "//" + window.location.host + "/planinfo";
	var targetURLIs = targetURL+"?sourceURL="+sourceURLIs;
	window.open( targetURLIs , "_blank");
}