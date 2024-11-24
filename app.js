// Mock student database
const studentData = [
    { username: "john_doe01", password: "pass123", balance: 200, goal: 500 },
    { username: "jane_smith02", password: "pass456", balance: 300, goal: 1000 }
];

// Handle login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    const user = studentData.find(
        student => student.username === username && student.password === password
    );

    if (user) {
        // Redirect to dashboard (for prototype, show an alert)
        alert(`Welcome, ${user.username}! Your balance is ₹${user.balance}.`);
        window.location.href = "dashboard.html"; // Placeholder redirection
    } else {
        // Show error message
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
    }
});
