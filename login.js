// Replace this with the correct raw URL or GitHub Pages URL
const jsonDataUrl = "https://raw.githubusercontent.com/your-username/your-repo/main/students.json";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    // Fetch student data
    fetch(jsonDataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch JSON file. Check the URL.");
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data);

            // Validate user credentials
            const user = data.find(
                student => student.username === username && student.password === password
            );

            if (user) {
                console.log("Login Successful for:", user);
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                console.error("Invalid credentials.");
                const errorMessage = document.getElementById("errorMessage");
                errorMessage.style.display = "block";
                errorMessage.textContent = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error("Error during fetch:", error);
            alert("Error fetching student data. Please check the JSON file and URL.");
        });
});
