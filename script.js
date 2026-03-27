function botReply(msg) {

    msg = msg.toLowerCase();

    if (msg.includes("hello"))
        return "Hello! How can I help you?";

    else if (msg.includes("your name"))
        return "I am a simple chatbot.";

    else if (msg.includes("bye"))
        return "Goodbye! Have a nice day.";

    else if (msg.includes("what can you do"))
        return "I can help you in any task you want.";

    else if (msg.includes("artificial intelligence"))
        return "Artificial Intelligence (AI) is a technology that allows machines to learn, think, and make decisions similar to humans.";

    else if (msg.includes("homework"))
        return "Of course! What subject do you need help with?";

    else if (msg.includes("math"))
        return "Great! What math problem are you working on?";

    else if (msg.includes("python"))
        return "Python is a popular programming language used for web development, data science, automation, and AI.";

    else if (msg.includes("movie"))
        return "Sure! What kind of movies do you like — action, comedy, or sci-fi?";

    else if (msg.includes("comedy"))
        return "You might enjoy Hera Pheri and Dhamaal. Want more suggestions?";

    else if (msg.includes("thanks"))
        return "You're welcome! Is there anything else I can help you with?";

    else if (msg.includes("no"))
        return "Alright! Have a great day!";

    else
        return "Sorry, I don't understand.";
}