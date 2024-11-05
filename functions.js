
// Function to apply different bottom margins based on the previous element
function applyCustomMarginBasedOnPreviousElement(newElement, previousElement) {
  // Check the classes of the previous and new elements to apply the correct margin
  if (previousElement.classList.contains('scene-block') && newElement.classList.contains('scene-block')) {
    newElement.style.marginTop = '32px'; // Condition 1
  } else if (previousElement.classList.contains('scene-block') && newElement.classList.contains('dialog-block')) {
    newElement.style.marginTop = '8px'; // Condition 2
  } else if (previousElement.classList.contains('dialog-block') && newElement.classList.contains('scene-block')) {
    newElement.style.marginTop = '32px'; // Condition 3
  } else if (previousElement.classList.contains('dialog-block') && newElement.classList.contains('dialog-block')) {
    newElement.style.marginTop = '8px'; // Condition 4
  } else if (previousElement.classList.contains('dialog-block') && newElement.classList.contains('scene-line')) {
    newElement.style.marginTop = '0px'; // Condition 5
  }
}

// Event listener for 's' key to add a scene-block
document.addEventListener('keydown', function(event) {
    // Check if no textarea is currently focused
    if ((event.key === 's' || event.key === 'S') && document.activeElement.tagName !== 'TEXTAREA') {
        // Prevent the default 's' or 'S' character input
        event.preventDefault();

        // Define the new code block
        const codeBlock = `
            <div class="scene scene-block">
              <div class="script-container">
                <textarea rows="1" class="slug" placeholder="Slugline"></textarea>
                <textarea rows="1" class="action" placeholder="Actionline" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
              </div>
            </div>
        `;

        // Find the div with the id "page"
        const pageDiv = document.getElementById('page');

        if (pageDiv) {
            // Create a new div element to contain the code block
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('scene-block'); // Add class to identify the type

            // Get the last child (previous element)
            const lastChild = pageDiv.lastElementChild;

            // Apply margin based on the previous element
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            // Append it as the last child
            pageDiv.appendChild(newDiv);

            // Focus on the first textarea (the slugline)
            const firstTextarea = newDiv.querySelector('textarea.slug');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});


// Event listener for 'd' key to add a dialog-block
document.addEventListener('keydown', function(event) {
    // Check if no textarea is currently focused
    if ((event.key === 'd' || event.key === 'D') && document.activeElement.tagName !== 'TEXTAREA') {
        // Prevent the default 'd' or 'D' character input
        event.preventDefault();

        // Define the new code block
        const codeBlock = `
            <div class="dialog dialog-block">
              <div class="script-container">
                <textarea rows="1" class="character" placeholder="Character"></textarea>
                <textarea rows="1" class="lines" placeholder="Lines" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
            </div>
              </div>
        `;

        // Find the div with the id "page"
        const pageDiv = document.getElementById('page');

        if (pageDiv) {
            // Create a new div element to contain the code block
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('dialog-block'); // Add class to identify the type

            // Get the last child (previous element)
            const lastChild = pageDiv.lastElementChild;

            // Apply margin based on the previous element
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            // Append it as the last child
            pageDiv.appendChild(newDiv);

            // Focus on the first textarea (the character name field)
            const firstTextarea = newDiv.querySelector('textarea.character');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});

document.addEventListener('keydown', function(event) {
    // Check if no textarea is currently focused
    if ((event.key === 'p' || event.key === 'P') && document.activeElement.tagName !== 'TEXTAREA') {
        // Prevent the default 'p' or 'P' character input
        event.preventDefault();

        // Define the new code block
        const codeBlock = `
            <div class="dialog dialog-block">
              <div class="script-container">
                <textarea rows="1" class="character" placeholder="Character"></textarea>
                <textarea rows="1" class="paren" placeholder="Parenthetical"></textarea>
                <textarea rows="1" class="lines" placeholder="Lines" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
            </div>
              </div>
        `;

        // Find the div with the id "page"
        const pageDiv = document.getElementById('page');

        if (pageDiv) {
            // Create a new div element to contain the code block
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('dialog-block'); // Add class to identify the type

            // Get the last child (previous element)
            const lastChild = pageDiv.lastElementChild;

            // Apply margin based on the previous element
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            // Append it as the last child
            pageDiv.appendChild(newDiv);

            // Focus on the first textarea (the character name field)
            const firstTextarea = newDiv.querySelector('textarea.character');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});


// Event listener for 'l' key to add a scene-line block
document.addEventListener('keydown', function(event) {
    // Check if no textarea is currently focused
    if ((event.key === 'l' || event.key === 'L') && document.activeElement.tagName !== 'TEXTAREA') {
        // Prevent the default 'l' or 'L' character input
        event.preventDefault();

        // Define the new code block
        const codeBlock = `
            <div class="scene-line">
              <div class="script-container">
                <textarea rows="1" class="sl" placeholder="Scene line" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
            </div>
              </div>
        `;

        // Find the div with the id "page"
        const pageDiv = document.getElementById('page');

        if (pageDiv) {
            // Create a new div element to contain the code block
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('scene-line'); // Add class to identify the type

            // Get the last child (previous element)
            const lastChild = pageDiv.lastElementChild;

            // Apply margin based on the previous element
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            // Append it as the last child
            pageDiv.appendChild(newDiv);

            // Focus on the first textarea (the scene line input)
            const firstTextarea = newDiv.querySelector('textarea.sl');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});



let undoStack = []; // Stack to store removed elements for redoing
let redoStack = []; // Stack to store undone elements for redoing

// Function to undo (remove last child from the "page" div)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'z' && !event.shiftKey) {
        const pageDiv = document.getElementById('page');

        // Check if there's a last child to remove
        if (pageDiv && pageDiv.lastElementChild) {
            // Remove the last child and store it in the undoStack
            const lastChild = pageDiv.lastElementChild;
            undoStack.push(lastChild); // Store the removed element for redo
            pageDiv.removeChild(lastChild);
        }
    }
});

// Function to redo (re-add the last removed element to the "page" div)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'z' && event.shiftKey) {
        const pageDiv = document.getElementById('page');

        // Check if there are any elements in the undoStack
        if (undoStack.length > 0) {
            const elementToRedo = undoStack.pop(); // Get the last removed element
            redoStack.push(elementToRedo); // Store it in the redo stack
            pageDiv.appendChild(elementToRedo); // Re-add it to the page
        }
    }
});

function printSpecificElements() {
    // Get the element you want to print
    var printElement = document.getElementById('page');

    // Find all the textareas in the element
    var textareas = printElement.getElementsByTagName('textarea');

    // Loop through each textarea and set its innerHTML to its current value
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].innerHTML = textareas[i].value;
    }

    // Save the original content of the entire page
    var originalContents = document.body.innerHTML;

    // Replace the body content with the content to print
    document.body.innerHTML = printElement.innerHTML;

    // Trigger the print dialog
    window.print();

    // Restore the original page content after printing
    document.body.innerHTML = originalContents;
}

document.addEventListener('keydown', function(event) {
    // Check if the Tab key is pressed and a textarea is currently focused
    if (event.key === 'Tab' && document.activeElement.tagName === 'TEXTAREA') {
        // Prevent the default tab behavior
        event.preventDefault();

        // Get all textarea elements on the page
        const textareas = Array.from(document.querySelectorAll('textarea'));

        // Find the index of the currently focused textarea
        const currentIndex = textareas.indexOf(document.activeElement);

        // Determine the next index (looping back to the first one if necessary)
        let nextIndex = currentIndex + 1;

        // If we're at the last textarea, loop back to the first one
        if (nextIndex >= textareas.length) {
            nextIndex = 0;
        }

        // Focus the next textarea
        textareas[nextIndex].focus();
    }
});

document.addEventListener('keydown', function(event) {
    // Check if the Enter key is pressed and the focused element is a textarea
    if (event.key === 'Enter' && document.activeElement.tagName === 'TEXTAREA') {
        // Prevent the default behavior (optional)
        event.preventDefault();

        // Get all textarea elements in the document
        const textareas = Array.from(document.querySelectorAll('textarea'));

        // Find the index of the currently active textarea
        const currentIndex = textareas.indexOf(document.activeElement);

        // Check if there is a textarea below the current one that is empty
        for (let i = currentIndex + 1; i < textareas.length; i++) {
            if (textareas[i].value.trim() === '') { // Check if the textarea is empty
                textareas[i].focus(); // Move focus to the empty textarea
                return; // Exit the function after focusing
            }
        }

        // If no empty textarea is found, remove focus from the current textarea
        document.activeElement.blur();
    }
});

document.addEventListener('blur', function(event) {
    // Check if the event target has the class "paren"
    if (event.target.classList.contains('paren')) {
        const textarea = event.target;
        let inputValue = textarea.value.trim();

        // Check if the input already starts and ends with parentheses
        if (!inputValue.startsWith('(') || !inputValue.endsWith(')')) {
            // Add parentheses around the input
            textarea.value = `(${inputValue})`;
        }
    }
}, true); // 'true' enables event capturing so blur can be detected
