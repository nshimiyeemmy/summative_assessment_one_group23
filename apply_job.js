/**
 * Validates the form input fields and displays appropriate messages.
 * Prevents the form from submitting if any validation fails.
 *
 * @param {Event} event - The event object associated with form submission.
 * @returns {boolean} - Returns false to prevent the default form submission behavior.
 */
function validateForm(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Validate Full Name: should contain only letters and spaces
    let fullName = document.getElementById('fullName').value;
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
        alert('Full Name should contain only letters and spaces.');
        return false;
    }

    // Validate Phone Number: should be in the format 123-456-7890
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
        alert('Phone Number should be in the format 123-456-7890.');
        return false;
    }

    // Validate LinkedIn URL: should start with "https://www.linkedin.com/"
    let linkedinUrl = document.getElementById('linkedinUrl').value;
    if (!/^https:\/\/www\.linkedin\.com\/.+/.test(linkedinUrl)) {
        alert('Please enter a valid LinkedIn profile URL.');
        return false;
    }

    // Validate Cover Letter: should not contain special characters
    let coverLetter = document.getElementById('coverLetter').value;
    if (/[^a-zA-Z0-9 \n\r.,'?!;:()]/.test(coverLetter)) {
        alert('Cover Letter should not contain special characters.');
        return false;
    }

    // Validate Expected Salary: should be a valid number with up to two decimal places
    let expectedSalary = document.getElementById('expectedSalary').value;
    if (!/^\d+(\.\d{1,2})?$/.test(expectedSalary)) {
        alert('Expected Salary must be a valid number with up to two decimal places.');
        return false;
    }

    // Display success message
    let messageElement = document.getElementById('message');
    messageElement.innerHTML = "Application submitted successfully!";

    // Clear the message and submit the form programmatically after 3 seconds
    setTimeout(() => {
        messageElement.innerHTML = "";
        document.querySelector('form').submit();
    }, 3000);

    // Prevent the default form submission behavior
    return false;
}
