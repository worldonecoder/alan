<?php

// Email where the form will be sent to
define('EMAIL_TO', 'adam@worldonewebdesign.com');

// Subject of the email
define('SUBJECT', 'Someone Filled Out Your Form');

function main() {
	// Basically, $formStatus is an array. the "dataSent" index is responsible to 
	// tell us if data was sent with the form or not. The 'hasError' index will tell 
	// us if the form contains errors like an empty email field. The 'errors' index 
	// will hold the actual error message and the 'formEmailed' will tell us if the form 
	// was mailed or not./
	$formStatus = array('dataSent' => false, 
						'hasError' => false, 
						'errors' => array(), 
						'data' => array('email' =>'', 'message' => ''), 
						'formEmailed' => false);

	// We check if at least something was sent using the form.
	if (isDataSent()) {
		// Here we set the 'dataSent' of $formStatus to true because
		// the user filled at least one field.
		$formStatus['dataSent'] = true;

		// We'll have the data sent through the form in the array $formData
		$formData = getFormData();

		// Then, we save the data into $formStatus. We'll use it later
		// to display it back to the user in the input fields.
		$formStatus['data'] = $formData;

		// We'll get the errors (if any) into the $errors array.
		$errors = getFormErrors($formData);

		// If the array $errors is empty, it means that there are no errors
		// So, we can send the form by email and redirect.
		if (empty($errors)) {
			sendContactForm($formData);
			redirectSuccess();
		} else {
			// If we are here, it means that there is at least one error
			// We initialize the index 'errors' with the actual errors and
			// indicate that there was an error on the form.
			$formStatus['errors'] = $errors;
			$formStatus['hasError'] = true;
		}

	}

	return $formStatus;
}

// This returns an array containing all the data sent through the form
// the index 'email' will hold the email entered by the user and  the index
// 'message' the message.
function getFormData() {
	$email = $_POST['email'];
	$message = $_POST['message'];

	return array('email' => $email, 'message' => $message);
}

// This method checks if the email field has something in it and
// if it's a valid email address. It also validates the message
// field. It will return an array of error messages.
function getFormErrors($formData) {
	$errors = array();

	// If the email is empty, add an error
	if (empty($formData['email'])) {		
		$errors['email'] = 'Email is mandatory';
	} else if (filter_var($formData['email'], FILTER_VALIDATE_EMAIL) === false) {
		// The email is invalid, add an error.
		$errors['email'] = 'Please enter a valid email address';
	}

	// If the message is empty, add an error message
	if (empty($formData['message'])) {
		$errors['message'] = 'Please enter your message';
	}

	return $errors;
}

// This simple function just checks if something was filled by the user
// We use it to determine if we should validate the form or not. If we didn't
// check, there would be an error message when the user first get into the page
// telling him that the email and message is mandatory.
function isDataSent() {
	if (empty($_POST['email']) && empty($_POST['message'])) {
		return false;
	}
	return true;
}

// This function will send the contact form to you with the
// PHP mail() function.
function sendContactForm($formData) {
	$message = sanitizeEmailBody($formData['message']);
	$headers = 'From: ' . $formData['email'];
	mail(EMAIL_TO, SUBJECT, $message, $headers);
}

// This is here to sanitize the message entered by the user to prevent
// HTTP header injection. Basically, somebody (or something), could use
// an insecure form to send custom messages to custom people if you don't check
// form injected headers.
function sanitizeEmailBody(&$message) {
	return str_replace(array("\r", "\n", "%0a", "%0d"), '', stripslashes($message));	
}

// Here we redirect to the same page with a flag (?success=1) to indicate
// that the form was successfuly sent. We use a redirect to prevent the user
// to hit refresh after sending the form and double-submit it.
function redirectSuccess() {
	header( 'Location: ./contact-form.php?success=1' ) ;
	die();
}

// Here we start the program with "main" function
$formStatus = main();

?>