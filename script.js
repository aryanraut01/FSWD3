function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value;

    if (message === "") return;

    addMessage(message, "user");

    let response = botReply(message);

    setTimeout(() => {
        addMessage(response, "bot");
    }, 500);

    input.value = "";
}

function addMessage(text, type) {

    let chatbox = document.getElementById("chatbox");

    let msg = document.createElement("div");
    msg.classList.add(type);
    msg.innerText = text;

    chatbox.appendChild(msg);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function botReply(msg) {

    msg = msg.toLowerCase();

    if (msg.includes("hello"))
        return "Hello! How can I help you?";

    else if (msg.includes("your name"))
        return "I am a simple chatbot.";

    else if (msg.includes("bye"))
        return "Goodbye! Have a nice day.";

    else if (msg.includes("What you can do?"))
        return "I can help you in any task you want.";

    else if (msg.includes("What is Artificial Intelligence(AI)?"))
        return "Artificial Intelligence (AI) is a technology that allows machines to learn, think, and make decisions similar to humans.";

    if (msg.includes("Can you help me with my homework?"))
        return "Of course! What subject do you need help with?";

    else if (msg.includes("Math."))
        return "Great! What math problem are you working on?";

    else if (msg.includes("Tell me about Python."))
        return "Do you mean Python the programming language or the snake?";

    else if (msg.includes("The programming language."))
        return "Python is a popular programming language used for web development, data science, automation, and AI.";

    else if (msg.includes("Can you suggest a movie?"))
        return "Sure! What kind of movies do you like — action, comedy, or sci-fi?";

    else if (msg.includes("Comedy."))
        return "You might enjoy a light comedy like Hera Fheri and Dhamal. Would you like more suggestions?";

    else if (msg.includes("Thanks for helping me."))
        return "You're welcome!  Is there anything else I can help you with?";

    else if (msg.includes("No."))
        return "Alright! Have a great day!";

    else
        return "Sorry, I don't understand.";
}