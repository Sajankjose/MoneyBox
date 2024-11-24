fetch(jsonDataUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch student data.");
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched Data:", data); // Log the fetched data for debugging
        const user = data.find(student => student.username === username && student.password === password);
        if (user) {
            console.log("User Found:", user); // Log the matched user
            localStorage.setItem("loggedInUser", username);
            window.location.href = "dashboard.html";
        } else {
            console.error("Invalid credentials."); // Log invalid login attempts
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.display = "block";
            errorMessage.textContent = "Invalid username or password.";
        }
    })
    .catch(error => {
        console.error("Error:", error); // Log any fetch or network errors
        alert("An error occurred while logging in. Please try again.");
    });
