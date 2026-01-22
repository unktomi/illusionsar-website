// JavaScript Document

var department = "Info";

function setHeaderText(txt, dept) {
	department = dept;
	document.getElementById("formheader").innerHTML = txt;
	formVis(true);
}

function submitMessage(e) {
    e.preventDefault();
    handleForm();
    formVis(false);
    return false;
}

function formVis(show) {
	if(show) {
		document.getElementById("form").style.visibility = "visible";
	} else {
		clearForm();
		document.getElementById("form").style.visibility = "hidden";
	}
}

function handleForm() {
	var name = document.getElementById("fname").value;
	var email = document.getElementById("femail").value;
	var message = document.getElementById("fmessage").value;
	
	//var mumble = department + ", " + name + ", " + email + ", " + message;

        let form = {
			filter: department,
            name: name,
            email: email,
            message: message
        };
 
        // submit the contact form
        const url = "/contact";
        fetch(url, {
                method: 'post',
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify(form)
         }).then(response => {
                 response.json().then(result => {
                         console.log(result);
                     });
             })
}

function clearForm() {
	document.getElementById("fname").value = "";
	document.getElementById("femail").value = "";
	document.getElementById("fmessage").value = "";
}