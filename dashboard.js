// Replace with the URL of your hosted JSON file
const jsonDataUrl = "https://raw.githubusercontent.com/your-username/your-repo/main/students.json";

// Fetch the data from the JSON file
document.addEventListener("DOMContentLoaded", function () {
    fetch(jsonDataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch student data.");
            }
            return response.json();
        })
        .then(data => {
            // Simulate getting the logged-in user's username (e.g., from localStorage or query params)
            const currentUser = localStorage.getItem("currentUser");
            const loggedInUsername = currentUser ? JSON.parse(currentUser).username : null;

            if (!loggedInUsername) {
                document.getElementById("errorMessage").textContent = "No user is currently logged in.";
                return;
            }

            // Find the user data from the fetched JSON
            const userData = data.find(student => student.username === loggedInUsername);

            if (userData) {
                // Populate the dashboard with user data
                document.getElementById("studentName").textContent = userData.name;
                document.getElementById("balance").textContent = 
                    userData.balance ? userData.balance.toFixed(2) : "0.00";
                document.getElementById("goal").textContent = 
                    userData.goal ? userData.goal.toFixed(2) : "0.00";
            } else {
                document.getElementById("errorMessage").textContent = "User data not found!";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("errorMessage").textContent = 
                "Unable to load data. Please try again later.";
        });
});
