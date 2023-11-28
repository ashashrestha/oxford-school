// homepage slider
var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 5000);


// news tab
        $(document).ready(function() {
            $('.nav-pills a').on('click', function() {
                $(this).tab('show');
            });
        });        

// admission-form
document.getElementById("admissionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var dob = document.getElementById("dob").value;
  var contactNumber = document.getElementById("contactNumber").value;
  var address = document.getElementById("address").value;
  var parentsName = document.getElementById("parentsName").value;
  var parentContact = document.getElementById("parentContact").value;
  var stream = document.getElementById("stream").value;
  var previousSchool = document.getElementById("previousSchool").value;
  var gpa = document.getElementById("gpa").value;
  var email = document.getElementById("email").value;
  var programOfInterest = document.getElementById("programOfInterest").value;

  if (
      fullName === "" ||
      gender === "" ||
      dob === "" ||
      contactNumber === "" ||
      address === "" ||
      parentsName === "" ||
      parentContact === "" ||
      stream === "" ||
      previousSchool === "" ||
      gpa === "" ||
      email === "" ||
      programOfInterest === ""
  ) {
      alert("Please fill in all the fields.");
      return;
  }

  if (parseFloat(gpa) < 0 || parseFloat(gpa) > 4) {
      alert("GPA should be between 0 and 4.");
      return;
  }

  // Form is valid, proceed with form submission
  alert("Admission form submitted successfully!");
  // You can perform additional actions here, such as sending the form data to a server using AJAX.
});

//event and notice
document.getElementById("link").addEventListener("click", function() {
    // Open the container of another page
    window.location.href = "news.html#n-event";
});

