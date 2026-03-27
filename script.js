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

    else if (msg.includes("what you can do?"))
        return "I can help you in any task you want.";

    else if (msg.includes("what is artificial intelligence(ai)?"))
        return "Artificial Intelligence (AI) is a technology that allows machines to learn, think, and make decisions similar to humans.";

    if (msg.includes("can you help me with my homework?"))
        return "Of course! What subject do you need help with?";

    else if (msg.includes("math."))
        return "Great! What math problem are you working on?";

    else if (msg.includes("tell me about Python."))
        return "Do you mean Python the programming language or the snake?";

    else if (msg.includes("the programming language."))
        return "Python is a popular programming language used for web development, data science, automation, and AI.";

    else if (msg.includes("can you suggest a movie?"))
        return "Sure! What kind of movies do you like — action, comedy, or sci-fi?";

    else if (msg.includes("comedy."))
        return "You might enjoy a light comedy like Hera Fheri and Dhamal. Would you like more suggestions?";

    else if (msg.includes("thanks for helping me."))
        return "You're welcome!  Is there anything else I can help you with?";

    else if (msg.includes("no."))
        return "alright! have a great day!";

    else
        return "Sorry, I don't understand.";
}