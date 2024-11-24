// Mock student data for demonstration
const studentData = {
    username: "john_doe01",
    name: "John Doe",
    balance: 200,
    goal: 500
};

// Simulate loading user data into the dashboard
document.addEventListener("DOMContentLoaded", function () {
    const studentName = document.getElementById("studentName");
    const balance = document.getElementById("balance");
    const goal = document.getElementById("goal");

    // Populate the dashboard with student data
    studentName.textContent = studentData.name;
    balance.textContent = studentData.balance.toFixed(2);
    goal.textContent = studentData.goal.toFixed(2);
});

// GPT Interaction
document.getElementById("askButton").addEventListener("click", function () {
    const questionInput = document.getElementById("questionInput");
    const gptResponse = document.getElementById("gptResponse");

    // Get the student's question
    const question = questionInput.value.trim();
    if (!question) {
        gptResponse.textContent = "Please enter a question.";
        gptResponse.style.color = "red";
        return;
    }

    gptResponse.textContent = "Thinking...";
    gptResponse.style.color = "black";

    // Simulate GPT API call
    setTimeout(() => {
        // Replace this with an actual GPT API response
        const mockResponse = `Here's some advice for your question: "${question}"`;
        gptResponse.textContent = mockResponse;
    }, 2000);
});
