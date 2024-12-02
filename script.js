function openModal(type) {
    const modal = document.getElementById('modal');
    const form = document.getElementById('request-form');
    const roomOptions = document.getElementById('room-options');
    const accessoriesOptions = document.getElementById('accessories-options');
    const rulesModal = document.getElementById('rules-modal');
    const announcementModal = document.getElementById('announcement-modal');
    const ernField = document.getElementById('ern').parentElement; // Parent includes the label
    const descriptionField = document.getElementById('description').parentElement; // Parent includes the label
    const submitButton = form.querySelector('button[type="submit"]');

    // Hide all modals first
    modal.style.display = 'none';
    rulesModal.style.display = 'none';
    announcementModal.style.display = 'none';

    // Reset form and hide specific options
    form.reset();
    roomOptions.style.display = 'none';
    accessoriesOptions.style.display = 'none';
    ernField.style.display = 'block'; // Show by default
    descriptionField.style.display = 'block'; // Show by default
    submitButton.style.display = 'block'; // Show by default

    // Show specific options based on box clicked
    if (type === 'roomChange') {
        modal.style.display = 'flex';
        roomOptions.style.display = 'block';
    } else if (type === 'accessories') {
        modal.style.display = 'flex';
        accessoriesOptions.style.display = 'block';
    } else if (type === 'rules') {
        rulesModal.style.display = 'flex';
        ernField.style.display = 'none'; // Hide ERN field
        descriptionField.style.display = 'none'; // Hide Description field
        submitButton.style.display = 'none'; // Hide Submit button
    } else if (type === 'announcements') {
        announcementModal.style.display = 'flex';
        ernField.style.display = 'none'; // Hide ERN field
        descriptionField.style.display = 'none'; // Hide Description field
        submitButton.style.display = 'none'; // Hide Submit button
    } else {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Close the modal if clicked outside the form
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};
