const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const conversationLog = document.querySelector('.conversation-log');

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        conversationLog.innerHTML += `<p>User: ${userMessage}</p>`;
        userInput.value = '';
        // Add JARVIS response here
        conversationLog.innerHTML += `<p>JARVIS: ${getJarvisResponse(userMessage)}</p>`;
    }
});

function getJarvisResponse(userMessage) {
    // Add your JARVIS AI logic here
    // For now, just return a simple response
    return `Received your message, ${userMessage}`;
}
