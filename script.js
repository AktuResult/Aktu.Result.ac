
function generatePDF() {
    const correctRollNumber = "2203490100058";
    const correctDob = "16/04/2005";
    
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const dob = document.getElementById("dob").value.trim();

    if (rollNumber === correctRollNumber && dob === correctDob) {
        // Redirect to a preview page instead of direct download
        window.location.href = `preview.html`;
    } else {
        alert("❌ Error: Invalid Roll Number or Date of Birth");
    }
}
