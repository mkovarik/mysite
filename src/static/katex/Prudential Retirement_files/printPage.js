function printPage() { 

var sponsorUser = "true";
var sWinNavHTML = "";
var sPrintArea0HTML = "";
var sPrintArea1HTML = "";
var sPrintDisclaimerHTML = "";

if (document.getElementById('superPlanName') != null)
{
	sPrintArea0HTML = document.getElementById('superPlanName').innerHTML;	  
}
if ( document.getElementById('printArea1') != null)
{
  sPrintArea1HTML = document.getElementById('printArea1').innerHTML;
}
if ( document.getElementById('printArea2') != null)
{
  sWinNavHTML = document.getElementById('printArea2').innerHTML;
}
if ( document.getElementById('printDisclaimerArea') != null)
{
  sPrintDisclaimerHTML = document.getElementById('printDisclaimerArea').innerHTML;
}

myWin= open("", "displayWindow","toolbar=0,menubar=0,location=0,directories=0,status=0,scrollbars=1,resizable=0,copyhistory=0,width=710,height=500"); 
myWin.document.open();
myWin.document.write("<html><head><title>Printer Friendly</title>");
myWin.document.write('<link rel="stylesheet" type="text/css" href="/UnProtected/web/style/corners.css" />');
myWin.document.write('<link rel="stylesheet" type="text/css" href="/UnProtected/web/style/common_print.css" />'); 
myWin.document.write('<sc'+'ript>');
myWin.document.write('function disableAnchor(disable){objLinks = document.links;');
myWin.document.write('for(i=0;i<objLinks.length;i++){objLinks[i].disabled = disable;objLinks[i].href=' + "#" + ';}}');
myWin.document.write('</sc'+'ript>');
myWin.document.write('<div>&nbsp;</div><table cellspacing="0" cellpadding="0" border="0" width="695"><tr><td align="right"><input type=button name=print value="Print" ' + 'onClick="javascript:window.print()">&nbsp;&nbsp;</td></tr></table><div>&nbsp;</div>');
myWin.document.write('<table cellpadding="0" cellspacing="0"  WIDTH="695"><tr><td><h1 STYLE="font-size: 12px;">');
myWin.document.write('&nbsp;&nbsp;' + sPrintArea0HTML);          
myWin.document.write('</h1></td></tr></table>');
myWin.document.write('<table cellpadding="4"  cellspacing="0" WIDTH="695"><tr><td>');
myWin.document.write(sPrintArea1HTML);          
myWin.document.write('</td></tr></table>');
myWin.document.write('<table cellpadding="4"  cellspacing="0" WIDTH="695"><tr><td>');
myWin.document.write(sPrintDisclaimerHTML);          
myWin.document.write('</td></tr></table>');
myWin.document.write('<table cellpadding="4" cellspacing="0" WIDTH="695"><tr><td>');
myWin.document.write(sWinNavHTML);         
myWin.document.write('</td></tr></table>'); 
myWin.document.write('<SCRIPT>disableAnchor(true)' + '<' + '/script>');
myWin.document.write('</head><body></html>'); 
myWin.document.close(); 
myWin.document.focus(); 

}      
function printSecondaryPage() { 

var sPrintAreaHTML = "";
if ( document.getElementById('printArea') != null)
{
  sPrintAreaHTML = document.getElementById('printArea').innerHTML;
}
myWin= open("", "displayWindow","toolbar=0,menubar=0,location=0,directories=0,status=0,scrollbars=1,resizable=0,copyhistory=0,width=720,height=500"); 
myWin.document.open();
myWin.document.write("<html><head><title>Printer Friendly</title>");
myWin.document.write('<sc'+'ript>');
myWin.document.write('function disableAnchor(disable){objLinks = document.links;');
myWin.document.write('for(i=0;i<objLinks.length;i++){objLinks[i].disabled = disable;objLinks[i].href=' + "#" + ';}}');
myWin.document.write('</sc'+'ript>');
myWin.document.write('<link rel="stylesheet" type="text/css" href="/UnProtected/web/style/corners.css" />');
myWin.document.write('<link rel="stylesheet" type="text/css" href="/UnProtected/web/style/common_print.css" /></head>'); 
myWin.document.write('<center><br><input type=button name=print value="Print"' + 'onClick="javascript:window.print()"></center>');
myWin.document.write('&nbsp;&nbsp;' + sPrintAreaHTML);          
myWin.document.write('<SCRIPT>disableAnchor(true)' + '<' + '/script>');
myWin.document.write('<body style="padding-left:10px;"></html>'); 
myWin.document.close(); 
myWin.document.focus(); 
myWin.location.reload();
}

