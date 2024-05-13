new Vue({
    el: '#app',
    data: {
        chats: ['Chat-1', 'Chat-2', 'Chat-3'],
        activeChat: null,
        messages: [],
        newMessage: ''
    },
    methods: {
        selectChat(chat) {
            this.activeChat = chat;
            console.log(chat);
            this.messages = []; // Clear messages when switching chats
        },
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.displayUserMessage(this.newMessage);
                this.tempMessage = this.newMessage;
                this.newMessage = '';
                // Simulate AI response
                setTimeout(() => {
                    this.displayAiMessage("This is an AI response to: " + this.tempMessage);
                }, 1000);
            }
        },
        displayUserMessage(text) {
            this.messages.push({ text: text, type: 'user' });
        },
        displayAiMessage(text) {
            this.messages.push({ text: text, type: 'ai' });
        }
    }
});