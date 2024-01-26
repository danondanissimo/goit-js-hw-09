const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '';

feedbackForm.addEventListener('input', event => {
  const userEmail = event.currentTarget.elements.email.value.trim();
  const userMessage = event.currentTarget.elements.message.value.trim();

  const userData = {
    email: userEmail,
    message: userMessage,
  };

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
    feedbackForm.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
});

function loadFromLS(key = 'empty') {
  try {
    const result = data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

function restoreData() {
  const { email, message } = loadFromLS(STORAGE_KEY) || {};

  feedbackForm.elements.email.value = email || '';
  feedbackForm.elements.message.value = message || '';
}

restoreData();
