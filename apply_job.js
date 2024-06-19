function validateForm() {
    let fullName = document.getElementById('fullName').value;
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
        alert('Full Name must contain only letters and spaces.');
        return false;
    }

    let phoneNumber = document.getElementById('phoneNumber').value;
    if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
        alert('Phone Number must be in the format 123-456-7890.');
        return false;
    }

    let linkedinUrl = document.getElementById('linkedinUrl').value;
    if (!/^https:\/\/www\.linkedin\.com\/.+/.test(linkedinUrl)) {
        alert('LinkedIn Profile URL must be a valid URL and begin with https://www.linkedin.com/');
        return false;
    }

    let coverLetter = document.getElementById('coverLetter').value;
    if (/[^a-zA-Z0-9 \n\r.,'?!;:()]/.test(coverLetter)) {
        alert('Cover Letter should not contain special characters.');
        return false;
    }

    let expectedSalary = document.getElementById('expectedSalary').value;
    if (!/^\d+(\.\d{1,2})?$/.test(expectedSalary)) {
        alert('Expected Salary must be a valid number with up to two decimal places.');
        return false;
    }

    let messageElement = document.getElementById('message');
    messageElement.innerHTML = "Application submitted successfully!";

    setTimeout(() => {
        messageElement.innerHTML = "";
    }, 5000); // Clear the message after 2 seconds

    return true;
}