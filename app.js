// Mock student database
const studentData = [
    { username: "john_doe01", password: "pass123", balance: 200, goal: 500 },
    { username: "jane_smith02", password: "pass456", balance: 300, goal: 1000 }
];

// Handle login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Validate input fields
    const errorMessage = document.getElementById("errorMessage");
    if (!username || !password) {
        errorMessage.textContent = "Please fill in both fields.";
        errorMessage.style.display = "block";
        return;
    }

    // Validate credentials
    const user = studentData.find(
        student =>
            student.username.toLowerCase() === username.toLowerCase() &&
            student.password === password
    );

    if (user) {
        // Hide error message and redirect
        errorMessage.style.display = "none";
        alert(`Welcome, ${user.username}! Your balance is ₹${user.balance}.`);
        window.location.href = "dashboard.html"; // Placeholder redirection

        // Optional: Save user to localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
        // Show error message
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }

    // Reset form fields
    document.getElementById("loginForm").reset();
});
