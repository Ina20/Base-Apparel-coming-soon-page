function validateemail() {
  var inputField = document.getElementById("emailInput");
  var x = inputField.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
    inputField.style.border = "2px solid hsl(0, 93%, 68%)";
    document.getElementById("error").style.display = "inline";
    document.getElementById("errorHelpText").style.display = "block";
    return false;
  }else {
    inputField.style.border = "1px solid hsl(0, 36%, 70%)";
    document.getElementById("error").style.display = "none";
    document.getElementById("errorHelpText").style.display = "none";
  }
}
