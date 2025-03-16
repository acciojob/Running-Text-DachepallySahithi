//your JS code here. If required.
const text = "We love Programming!";
        
        // Get the input and text elements
        const speedInput = document.getElementById('speed');
        const textDiv = document.getElementById('text');

        // Function to render the text
        function renderText(speed) {
            textDiv.textContent = ""; // Clear any previous text
            let i = 0;

            // Set the speed based on the input value
            const speedFactor = 500 / speed;

            // Function to render one character at a time
            function typeCharacter() {
                if (i < text.length) {
                    textDiv.textContent += text[i]; // Add the next character to the div
                    i++;
                    setTimeout(typeCharacter, speedFactor); // Call the function again with the adjusted speed
                }
            }

            typeCharacter(); // Start typing the characters
        }

        // Initially render the text based on the default speed (1)
        renderText(speedInput.value);

        // Add event listener to re-render the text whenever the input value changes
        speedInput.addEventListener('input', () => {
            renderText(Number(speedInput.value)); // Re-render text based on the new speed
        });