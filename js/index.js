function generateEmail({ firstName, lastName }) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`;
}

const newEmail = {
  firstName: "MAX",
  lastName: "MUSTERMANN",
};

const email = generateEmail(newEmail);
console.log(email);

function getNameFromEmail(email) {
  if (!email.includes("@")) {
    return null;
  }

  const [firstNameLastName, domain] = email.split("@");

  if (!firstNameLastName.includes(".")) {
    return null;
  }

  const [firstName, lastName] = firstNameLastName.split(".");

  return {
    firstName,
    lastName,
  };
}

/////////////////////////////////////////////////////////////////////////////////

const updateGeneratedEmail = (email) => {
  const generatedEmailElement = document.querySelector(
    '[data-js="generated-email"]'
  );
  generatedEmailElement.textContent = email;
};

const emailFormSubmit = (event) => {
  event.preventDefault();
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = generateEmail({ firstName, lastName });
  updateGeneratedEmail(email);
};

const emailForm = document.querySelector("form");
emailForm.addEventListener("submit", emailFormSubmit);

/////////////////////////////////////////////////////////////////////////////////////

const updateGeneratedUsername = (username) => {
  const generatedUsernameElement = document.querySelector(
    '[data-js="generated-username"]'
  );
  generatedUsernameElement.textContent = username;
};

const usernameFormSubmit = (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("emailToUser");
  const email = emailInput.value;
  const { firstName, lastName } = getNameFromEmail(email) || {};
  const username = `${firstName} ${lastName}`;
  updateGeneratedUsername(username);
};

const usernameForm = document.querySelector(".generatorUsername");
usernameForm.addEventListener("click", usernameFormSubmit);
