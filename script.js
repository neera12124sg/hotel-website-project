document.addEventListener("DOMContentLoaded", function() {
    // Track Request Button
    const trackRequestBtn = document.getElementById("trackRequestBtn");
    trackRequestBtn.addEventListener("click", function() {
        alert("Track your request functionality will be implemented.");
    });

    // Admin Panel
    const adminLoginBtn = document.getElementById("admin-login-btn");
    const adminPasswordInput = document.getElementById("admin-password");
    const adminControls = document.getElementById("admin-controls");
    
    adminLoginBtn.addEventListener("click", function() {
        const password = adminPasswordInput.value;
        if (password === "admin123") {  // Example password for admin login
            document.getElementById("admin-section").style.display = "none";
            adminControls.style.display = "block";
        } else {
            alert("Incorrect password!");
        }
    });

    // Update Request Status
    const updateStatusBtn = document.getElementById("update-status-btn");
    updateStatusBtn.addEventListener("click", function() {
        const requestId = document.getElementById("request-select").value;
        const status = document.getElementById("status-select").value;
        const requestStatus = document.getElementById("request-status");

        // Update request status on the page
        const statusIcon = status === "completed" ? "&#x2714;" : "&#x2718;";
        const statusColor = status === "completed" ? "green" : "red";
        
        const requestItem = requestStatus.querySelectorAll("p")[requestId - 1];
        requestItem.innerHTML = `Request ${requestId}: ${status.charAt(0).toUpperCase() + status.slice(1)} <span class="status-icon ${status}">${statusIcon}</span>`;
        requestItem.querySelector(".status-icon").style.color = statusColor;
    });
});
