document.addEventListener("DOMContentLoaded", function () {


const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const clickText = document.getElementById("clickText");

envelope.addEventListener("click", function () {

    // Prevent opening again
    if (envelope.classList.contains("open")) {
        return;
    }

    // Open the envelope
    envelope.classList.add("open");

    // Change the text
    clickText.innerHTML = "Your letter is opening... 💜💌";

    // Wait for the envelope animation
    setTimeout(function () {

        // Show the letter
        letter.classList.add("show");

        // Change message
        clickText.innerHTML = "A letter from your baby to you 💜🥺";

        // Scroll down to the letter
        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Make hearts appear
        createLoveHearts();

    }, 1000);
});


function createLoveHearts() {

    const loveEmojis = [
        "💜",
        "💗",
        "💖",
        "💕",
        "💞",
        "🥺",
        "😘",
        "💋"
    ];

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-40px";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const animation = heart.animate(
            [
                {
                    transform: "translateY(0) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(-100vh) scale(1.5) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random() * 3000,
                easing: "ease-out"
            }
        );

        animation.onfinish = function () {
            heart.remove();
        };
    }
}


});
