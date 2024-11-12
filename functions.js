// Function to apply different bottom margins based on the previous element
function applyCustomMarginBasedOnPreviousElement(newElement, previousElement) {
  if (previousElement.classList.contains('scene-block') && newElement.classList.contains('scene-block')) {
    newElement.style.marginTop = '32px'; // Condition 1
  } else if (previousElement.classList.contains('scene-block') && newElement.classList.contains('dialog')) {
    newElement.style.marginTop = '16px'; // Condition 2
  } else if (previousElement.classList.contains('dialog') && newElement.classList.contains('scene-block')) {
    newElement.style.marginTop = '32px'; // Condition 3
  } else if (previousElement.classList.contains('dialog') && newElement.classList.contains('dialog')) {
    newElement.style.marginTop = '16px'; // Condition 4
  } else if (previousElement.classList.contains('dialog') && newElement.classList.contains('scene-line')) {
    newElement.style.marginTop = '16px'; // Condition 5
  } else if (previousElement.classList.contains('scene-line') && newElement.classList.contains('dialog')) {
    newElement.style.marginTop = '16px'; // Condition 6
  }
};

// Function to hide the "character" textarea in the second adjacent "parent" element
function hideCharacterInSecondAdjacentParen(newElement) {
    const pageDiv = document.getElementById('page');
    const children = Array.from(pageDiv.children);

    // Check if the new element and the previous one both contain the "parent" class
    const lastIndex = children.indexOf(newElement);
    if (lastIndex > 0) {
        const previousElement = children[lastIndex - 1];

        if (previousElement.classList.contains('parent') && newElement.classList.contains('parent')) {
            const characterTextarea = newElement.querySelector('.character');
            const parenTextarea = newElement.querySelector('.paren');
            
            // Hide the character textarea
            if (characterTextarea) {
                characterTextarea.style.display = 'none';
            }

            // Focus the paren textarea if available
            if (parenTextarea) {
                parenTextarea.focus();
            }
        }
    }

    // Remove top margin from "paren" textarea if preceded by a "lines" textarea
    const previousLinesTextarea = newElement.querySelector('.script-container .lines');
    const parenTextarea = newElement.querySelector('.paren');

    if (previousLinesTextarea && parenTextarea) {
        parenTextarea.style.marginTop = '0px';
    }
}

// Event listener for 's' key to add a scene-block
document.addEventListener('keydown', function(event) {
    if ((event.key === 's' || event.key === 'S') && 
    document.activeElement.tagName !== 'TEXTAREA' &&
    !event.metaKey && // Exclude when Command key is pressed (Mac)
    !event.ctrlKey) {
        event.preventDefault();
        const codeBlock = `
            <div class="scene scene-block">
              <div class="script-container">
                <textarea rows="1" id="inputText" class="slug" placeholder="Slugline"></textarea>
                <textarea rows="5" id="inputText" class="action" placeholder="Actionline" ></textarea>
              </div>
            </div>
        `;

        const pageDiv = document.getElementById('page');
        if (pageDiv) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('scene-block');

            const lastChild = pageDiv.lastElementChild;
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            pageDiv.appendChild(newDiv);

            const firstTextarea = newDiv.querySelector('textarea.slug');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});

// Event listener for 'd' key to add a dialog-block
document.addEventListener('keydown', function(event) {
    if ((event.key === 'd' || event.key === 'D') && document.activeElement.tagName !== 'TEXTAREA') {
        event.preventDefault();
        const codeBlock = `
            <div>
              <div class="script-container">
                <textarea rows="1" id="inputText" class="character" placeholder="Character"></textarea>
                <textarea rows="4" id="inputText" class="lines" placeholder="Lines"></textarea>
              </div>
            </div>
        `;

        const pageDiv = document.getElementById('page');
        if (pageDiv) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('dialog', 'dialog-block');
           

            const lastChild = pageDiv.lastElementChild;
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            pageDiv.appendChild(newDiv);

            const firstTextarea = newDiv.querySelector('textarea.character');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});

// Event listener for 'p' key to add a parent dialog-block
document.addEventListener('keydown', function(event) {
    if ((event.key === 'p' || event.key === 'P') && document.activeElement.tagName !== 'TEXTAREA' &&
    !event.metaKey && // Exclude when Command key is pressed (Mac)
    !event.ctrlKey) {
        event.preventDefault();
        const codeBlock = `
            <div>
              <div class="script-container">
                <textarea rows="1" id="inputText" class="character" placeholder="Character"></textarea>
                <textarea rows="1" id="inputText" class="paren" placeholder="Parenthetical"></textarea>
                <textarea rows="4" id="inputText" class="lines" placeholder="Lines"></textarea>
              </div>
            </div>
        `;

        const pageDiv = document.getElementById('page');
        if (pageDiv) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('dialog', 'parent'); // Ensure 'parent' class is added

            const lastChild = pageDiv.lastElementChild;
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            pageDiv.appendChild(newDiv);

            hideCharacterInSecondAdjacentParen(newDiv); // Call function to hide the character textarea

            const firstTextarea = newDiv.querySelector('textarea.character');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});

// Event listener for 'l' key to add a scene-line block
document.addEventListener('keydown', function(event) {
    if ((event.key === 'l' || event.key === 'L') && document.activeElement.tagName !== 'TEXTAREA' &&
    !event.metaKey && // Exclude when Command key is pressed (Mac)
    !event.ctrlKey) {
        event.preventDefault();
        const codeBlock = `
            <div class="scene-line">
              <div class="script-container">
                <textarea rows="1" id="inputText" class="sl" placeholder="Scene line"></textarea>
              </div>
            </div>
        `;

        const pageDiv = document.getElementById('page');
        if (pageDiv) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = codeBlock;
            newDiv.classList.add('scene-line');

            const lastChild = pageDiv.lastElementChild;
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            pageDiv.appendChild(newDiv);

            const firstTextarea = newDiv.querySelector('textarea.sl');
            if (firstTextarea) {
                firstTextarea.focus();
            }
        }
    }
});

// Tab navigation for textareas
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab' && document.activeElement.tagName === 'TEXTAREA') {
        event.preventDefault();
        const textareas = Array.from(document.querySelectorAll('textarea'));
        const currentIndex = textareas.indexOf(document.activeElement);
        let nextIndex = currentIndex + 1;
        if (nextIndex >= textareas.length) {
            nextIndex = 0;
        }
        textareas[nextIndex].focus();
    }
});

let undoStack = []; // Stack to store removed elements for redoing
let redoStack = []; // Stack to store undone elements for redoing

// Function to undo (remove last child from the "page" div)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'z' && !event.shiftKey) {
        const pageDiv = document.getElementById('page');

        if (pageDiv && pageDiv.lastElementChild) {
            const lastChild = pageDiv.lastElementChild;
            undoStack.push(lastChild);
            pageDiv.removeChild(lastChild);
        }
    }
});

// Function to redo (re-add the last removed element to the "page" div)
document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'z' && event.shiftKey) {
        const pageDiv = document.getElementById('page');

        if (undoStack.length > 0) {
            const elementToRedo = undoStack.pop();
            redoStack.push(elementToRedo);
            pageDiv.appendChild(elementToRedo);
        }
    }
});

function printSpecificElements() {
    var printElement = document.getElementById('page');
    var paragraphs = printElement.getElementsByTagName('p');

    // Store the current page content
    var originalContents = document.body.innerHTML;

    // Replace the body content with the content of the "page" div
    document.body.innerHTML = printElement.innerHTML;

    // Print the page
    window.print();

    // Restore the original page content after printing
    document.body.innerHTML = originalContents;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement.tagName === 'TEXTAREA') {
        event.preventDefault();
        const textareas = Array.from(document.querySelectorAll('textarea'));
        const currentIndex = textareas.indexOf(document.activeElement);

        for (let i = currentIndex + 1; i < textareas.length; i++) {
            if (textareas[i].value.trim() === '') {
                textareas[i].focus();
                return;
            }
        }
        document.activeElement.blur();
    }
});

document.addEventListener('blur', function(event) {
    if (event.target.classList.contains('paren')) {
        const textarea = event.target;
        let inputValue = textarea.value.trim();

        if (!inputValue.startsWith('(') || !inputValue.endsWith(')')) {
            textarea.value = `(${inputValue})`;
        }
    }
}, true);

function convert() {
    const textareas = document.querySelectorAll('textarea');

    textareas.forEach((textarea, index) => {
        // Create a new paragraph element
        const paragraph = document.createElement('p');

        // Set the paragraph's text content to the textarea's value
        paragraph.textContent = textarea.value;

        // Copy all attributes from the textarea to the paragraph
        Array.from(textarea.attributes).forEach(attr => {
            paragraph.setAttribute(attr.name, attr.value);
        });

        // Determine the next textarea element, if it exists
        const nextTextarea = textareas[index + 1];
        
        /*Apply spacing based on the conditions
        if (nextTextarea) {
            if (textarea.classList.contains('scene-block') && nextTextarea.classList.contains('scene-block')) {
                paragraph.style.marginTop = '32px'; // Condition 1
            } else if (textarea.classList.contains('scene-block') && nextTextarea.classList.contains('dialog-block')) {
                paragraph.style.marginTop = '8px'; // Condition 2
            } else if (textarea.classList.contains('dialog-block') && nextTextarea.classList.contains('scene-block')) {
                paragraph.style.marginTop = '32px'; // Condition 3
            } else if (textarea.classList.contains('dialog-block') && nextTextarea.classList.contains('dialog-block')) {
                paragraph.style.marginTop = '0px'; // Condition 4
            } else if (textarea.classList.contains('dialog-block') && nextTextarea.classList.contains('scene-line')) {
                paragraph.style.marginTop = '0px'; // Condition 5
            }
        }*/

        // Replace the textarea with the new paragraph in the DOM
        textarea.replaceWith(paragraph);
    });
  document.getElementById('convert').style.display = "none";
 document.getElementById('revert').style.display = "inline-block";
  document.getElementById('print').style.display = "inline-block";
}


function revert() {
    document.querySelectorAll('p').forEach(paragraph => {
        // Create a new textarea element
        const textarea = document.createElement('textarea');

        // Set the textarea's value to the paragraph's text content
        textarea.value = paragraph.textContent;

        // Copy over all attributes from the paragraph to the textarea
        Array.from(paragraph.attributes).forEach(attr => {
            textarea.setAttribute(attr.name, attr.value);
        });

        // Replace the paragraph with the new textarea in the DOM
        paragraph.replaceWith(textarea);
    });
  document.getElementById('revert').style.display = "none";
  document.getElementById('print').style.display = "none";
 document.getElementById('convert').style.display = "inline-block";
}

document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault(); // Prevent the default save action of the browser
        saveToLocalStorage();   // Call the save function
    }
});

document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'l') {
        event.preventDefault(); // Prevent the default load action of the browser
        loadFromLocalStorage();   // Call the load function
    }
});

document.addEventListener('keydown', function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'p') {
        event.preventDefault(); // Prevent the default print action of the browser
        printSpecificElements();   // Call the print function
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'c' && 
    document.activeElement.tagName !== 'TEXTAREA') {
        event.preventDefault(); // Prevent the default print action of the browser
        convert();   // Call the print function
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'r' && 
    document.activeElement.tagName !== 'TEXTAREA') {
        event.preventDefault(); // Prevent the default print action of the browser
        revert();   // Call the print function
    }
});

// Function to save all textarea values and types to localStorage, including the title
function saveToLocalStorage() {
    const pageDiv = document.getElementById('page');
    const elementsData = [];

    // Save the title separately if it exists
    const titleTextarea = pageDiv.querySelector('textarea.title');
    const titleData = titleTextarea ? { 
        value: titleTextarea.value, 
        placeholder: titleTextarea.placeholder,
        rows: titleTextarea.rows,
        classList: Array.from(titleTextarea.classList) 
    } : null;

    // Save other elements
    Array.from(pageDiv.children).forEach((child, index) => {
        // Skip the title as it's already saved separately
        if (index === 0 && child.querySelector('textarea.title')) return;

        const textareas = Array.from(child.querySelectorAll('textarea'));
        const elementData = {
            classList: Array.from(child.classList),  // Save all classes for div (e.g., dialog, dialog-block)
            textareas: textareas.map(textarea => ({
                value: textarea.value,
                classList: Array.from(textarea.classList),
                placeholder: textarea.placeholder,
                rows: textarea.rows,
                cols: textarea.cols || undefined
            }))
        };
        elementsData.push(elementData);
    });

    // Store both title and content in localStorage
    localStorage.setItem('pageData', JSON.stringify({ title: titleData, elements: elementsData }));
    alert('Data saved to localStorage.');
}

// Function to load and recreate elements from localStorage, including the title
function loadFromLocalStorage() {
    const pageDiv = document.getElementById('page');
    pageDiv.innerHTML = ''; // Clear existing content

    const savedData = JSON.parse(localStorage.getItem('pageData'));

    if (savedData) {
        // Load the title if available
        if (savedData.title) {
            const titleTextarea = document.createElement('textarea');
            titleTextarea.rows = savedData.title.rows;
            titleTextarea.placeholder = savedData.title.placeholder;
            titleTextarea.value = savedData.title.value;
            savedData.title.classList.forEach(cls => titleTextarea.classList.add(cls));

            // Ensure the title resizes to content
            titleTextarea.oninput = function() {
                this.style.height = "";
                this.style.height = this.scrollHeight + "px";
            };

            pageDiv.appendChild(titleTextarea);
        }

        // Load other elements
        savedData.elements.forEach(elementData => {
            const newDiv = document.createElement('div');
            
            // Apply all saved classes to the div (e.g., dialog, dialog-block)
            if (elementData.classList) {
                elementData.classList.forEach(cls => newDiv.classList.add(cls));
            }

            const scriptContainer = document.createElement('div');
            scriptContainer.classList.add('script-container');
            newDiv.appendChild(scriptContainer);

            elementData.textareas.forEach(textareaData => {
                const textarea = document.createElement('textarea');
                textarea.value = textareaData.value;
                textarea.placeholder = textareaData.placeholder;
                textarea.rows = textareaData.rows;
                if (textareaData.cols) textarea.cols = textareaData.cols;

                // Apply saved classes to the textarea
                if (textareaData.classList) {
                    textareaData.classList.forEach(cls => textarea.classList.add(cls));
                }
                
                scriptContainer.appendChild(textarea);
            });

            const lastChild = pageDiv.lastElementChild;
            if (lastChild) {
                applyCustomMarginBasedOnPreviousElement(newDiv, lastChild);
            }

            pageDiv.appendChild(newDiv);
        });
    } else {
        alert('No saved data found.');
    }
}
