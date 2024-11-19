const userForm = document.getElementById("userForm");
const userTableBody = document.querySelector("#userTable tbody");

let users = []; // Array to store users
let editUserId = null; // Track user being edited

// Function to render users in the table
function renderUsers() {
  userTableBody.innerHTML = ""; // Clear the table

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.dob}</td>
      <td>
        <button class="edit" onclick="editUser(${index})">Edit</button>
        <button class="delete" onclick="deleteUser(${index})">Delete</button>
      </td>
    `;

    userTableBody.appendChild(row);
  });
}

// Function to handle form submission
userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;

  if (editUserId !== null) {
    // Update existing user
    users[editUserId] = { name, email, dob };
    editUserId = null;
    document.getElementById("submitBtn").textContent = "Add User";
  } else {
    // Add new user
    users.push({ name, email, dob });
  }

  userForm.reset();
  renderUsers();
});

// Function to edit a user
function editUser(index) {
  const user = users[index];

  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("dob").value = user.dob;

  editUserId = index;
  document.getElementById("submitBtn").textContent = "Update User";
}

// Function to delete a user
function deleteUser(index) {
  users.splice(index, 1); // Remove user from array
  renderUsers();
}
