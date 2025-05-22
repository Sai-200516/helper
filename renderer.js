const userInput = document.getElementById('userInput');
const chatOutput = document.getElementById('chatOutput');

// Send query when Enter is pressed
userInput.addEventListener('keypress', async (event) => {
  if (event.key === 'Enter' && userInput.value.trim() !== '') {
    const query = userInput.value.trim();
    // Display user's query
    const userDiv = document.createElement('div');
    userDiv.textContent = `You: ${query}`;
    chatOutput.appendChild(userDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Send query to main process using the exposed API
    const response = await window.api.chatbotQuery(query);

    // Display response
    const botDiv = document.createElement('div');
    botDiv.textContent = `Bot: ${response}`;
    chatOutput.appendChild(botDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Clear input
    userInput.value = '';
  }
});