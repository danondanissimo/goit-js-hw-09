const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', event => {
  const userEmail = event.currentTarget.elements.email.value;
  const userMessage = event.currentTarget.elements.message.value;

  console.log(userEmail, userMessage);

  const userData = {
    email: userEmail,
    message: userMessage,
  };
  console.log(userData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  if (email.length === 0 || message.length === 0) {
    alert('All form fields must be filled in');
  } else {
    const formDetails = { email, message };

    console.log(formDetails);
  }
  feedbackForm.reset();
});

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function restoreData() {
  const { email, message } = loadFromLS(STORAGE_KEY);

  feedbackForm.elements.email.value = email;
  feedbackForm.elements.message.value = message;
}

restoreData();
