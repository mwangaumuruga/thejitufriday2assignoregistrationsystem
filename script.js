// Get the form element
const form = document.getElementById('myForm');

// Get the table body element
const tableBody = document.querySelector('#myTable tbody');

// Listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the form data
  const name = document.getElementById('name').value;
  const idNumber = document.getElementById('id_number').value;
  const country = document.getElementById('country').value;
  const language = document.getElementById('language').value;

  // Create a new row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${idNumber}</td>
    <td>${country}</td>
    <td>${language}</td>
    <td>
      <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
      <button class="update-btn" onclick="updateRow(this)">Update</button>
    </td>
  `;

  // Add the new row to the table
  tableBody.appendChild(row);

  // Reset the form
  form.reset();
});

// Handle delete button click
function deleteRow(btn) {
  const row = btn.closest('tr
