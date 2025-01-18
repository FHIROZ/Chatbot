
const messagesContainer = document.getElementById('chat-messages');

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();

    if (userMessage === '') return;

    displayMessage(userMessage, 'user');

    userInput.value = '';

    setTimeout(() => {
        const botMessage = generateBotResponse(userMessage);
        displayMessage(botMessage, 'bot');
    }, 500);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.textContent = message;

    messageElement.appendChild(contentElement);
    messagesContainer.appendChild(messageElement);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMessage) {
    const responses = {
        hello: 'Hi there! How can I assist you today?',
        hi: 'Hello! How can I help you?',
        help: 'Sure! What do you need help with?',
        bye: 'Goodbye! Have a great day!',
        name: 'I am your friendly chatbot. What is your name?',
        weather: 'The weather is great today! How about where you are?',
        time: 'I am not a clock, but your device should have the time!',
        tellmeajoke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
        food: 'I don’t eat, but I hear pizza is a good choice!',
        hobby: 'I like chatting with you! What are your hobbies?',
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "I'm sorry, I didn't understand that.";
}

