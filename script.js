const errorMessages = [
    "Oops, it looks like you're lost!",
    "Error 404: Page not found!",
    "The page you're looking for doesn't exist",
    "You've reached a dead end!",
    "Sorry, we can't find that page",
    "We can't find that page. Try searching for something else",
    "The page you're looking for is missing"

  ];
  
  const errorMessageElement = document.getElementById('error-message');
  const randomIndex = Math.floor(Math.random() * errorMessages.length);
  errorMessageElement.textContent = errorMessages[randomIndex];