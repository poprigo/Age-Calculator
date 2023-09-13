function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('result').innerHTML = "Please select your date of birth.";
        return;
    }

    dob = new Date(dob);
    var today = new Date();

    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateAge();
});