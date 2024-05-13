document.addEventListener('DOMContentLoaded', function() {
    const chats = document.querySelectorAll('.nav-link');
    const chatDisplay = document.getElementById('chat-display');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    chats.forEach(chat => {
        chat.addEventListener('click', function(event) {
            event.preventDefault();
            chats.forEach(c => c.classList.remove('active'));
            chat.classList.add('active');
            console.log(chat.textContent);
            chatDisplay.innerHTML = ''; // Clear chat display when switching chats
        });
    });

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            displayUserMessage(messageText);
            messageInput.value = '';
            setTimeout(() => {
                displayAiMessage("This is an AI response to: " + messageText);
            }, 1000);
        }
    });

    function displayUserMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message text-end';
        const badge = document.createElement('span');
        badge.className = 'badge bg-primary';
        badge.textContent = text;
        messageElement.appendChild(badge);
        chatDisplay.appendChild(messageElement);
    }

    function displayAiMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message text-start';
        const badge = document.createElement('span');
        badge.className = 'badge bg-secondary';
        badge.textContent = text;
        messageElement.appendChild(badge);
        chatDisplay.appendChild(messageElement);
    }
});
