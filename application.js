const form = document.getElementById('feedbackForm');
const statusMessage = document.getElementById('status');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the page from refreshing

  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;

  // Basic validation
  if (name.trim() === '' || feedback.trim() === '') {
    statusMessage.textContent = 'Please fill out all fields.';
    return;
  }

  // Show success message and clear the form
  statusMessage.textContent = `Thank you for your feedback, ${name}!`;
  form.reset();
});
