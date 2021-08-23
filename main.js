function checkPassword() {
  event.preventDefault();
  if (document.getElementById("password").value == "1234") {
    console.log("Correct Password!");
    location.href = "https://9ubdz.csb.app";
  } else {
    console.log("Password is Wrong");
    alert("These records are private and property of Wild Bird Rehabilitation");
    return false;
  }
}
