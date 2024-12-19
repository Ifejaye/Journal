// Toggle Location Field Based on Dropdown Value
function toggleLocationField() {
    const emotionDropdown = document.getElementById("emotion");
    const locationField = document.getElementById("locationField");

    // Show location field only for 'Hourly Reports' or 'To-Do'
    if (emotionDropdown.value === "Hourly Reports" || emotionDropdown.value === "To-Do") {
        locationField.style.display = "block";
    } else {// Toggle Location Field Based on Dropdown Value
function toggleLocationField(): void {
    const emotionDropdown: HTMLSelectElement = document.getElementById("emotion") as HTMLSelectElement;
    const locationField: HTMLDivElement = document.getElementById("locationField") as HTMLDivElement;

    // Show location field only for 'Hourly Reports' or 'To-Do'
    if (emotionDropdown.value === "Hourly Reports" || emotionDropdown.value === "To-Do") {
        locationField.style.display = "block";
    } else {
        locationField.style.display = "none";
        (document.getElementById("locationError") as HTMLSpanElement).innerText = ""; // Clear location error
    }
}

// Validate Form Before Submission
function validateForm(): boolean {
    let isValid: boolean = true;

    const emotionDropdown: HTMLSelectElement = document.getElementById("emotion") as HTMLSelectElement;
    const thoughtBox: HTMLTextAreaElement = document.getElementById("thought") as HTMLTextAreaElement;
    const locationField: HTMLInputElement = document.getElementById("location") as HTMLInputElement;
    const emotionError: HTMLSpanElement = document.getElementById("emotionError") as HTMLSpanElement;
    const thoughtError: HTMLSpanElement = document.getElementById("thoughtError") as HTMLSpanElement;
    const locationError: HTMLSpanElement = document.getElementById("locationError") as HTMLSpanElement;

    // Reset error messages
    emotionError.innerText = "";
    thoughtError.innerText = "";
    locationError.innerText = "";

    // Check if emotion dropdown has a value
    if (!emotionDropdown.value) {
        emotionError.innerText = "Please select an input type.";
        isValid = false;
    }

    // Check if Thought box is empty
    if (!thoughtBox.value.trim()) {
        thoughtError.innerText = "Please enter your thought.";
        isValid = false;
    }

    // If Location is displayed, validate it
    if (emotionDropdown.value === "Hourly Reports" || emotionDropdown.value === "To-Do") {
        if (!locationField.value.trim()) {
            locationError.innerText = "Please enter a location.";
            isValid = false;
        }
    }

    return isValid; // Only submit if all validations pass
}
        locationField.style.display = "none";
        document.getElementById("locationError").innerText = ""; // Clear location error
    }
}

// Validate Form Before Submission
function validateForm() {
    let isValid = true;

    const emotionDropdown = document.getElementById("emotion");
    const thoughtBox = document.getElementById("thought");
    const locationField = document.getElementById("location");
    const emotionError = document.getElementById("emotionError");
    const thoughtError = document.getElementById("thoughtError");
    const locationError = document.getElementById("locationError");

    // Reset error messages
    emotionError.innerText = "";
    thoughtError.innerText = "";
    locationError.innerText = "";

    // Check if emotion dropdown has a value
    if (!emotionDropdown.value) {
        emotionError.innerText = "Please select an input type.";
        isValid = false;
    }

    // Check if Thought box is empty
    if (!thoughtBox.value.trim()) {
        thoughtError.innerText = "Please enter your thought.";
        isValid = false;
    }

    // If Location is displayed, validate it
    if (emotionDropdown.value === "Hourly Reports" || emotionDropdown.value === "To-Do") {
        if (!locationField.value.trim()) {
            locationError.innerText = "Please enter a location.";
            isValid = false;
        }
    }

    return isValid; // Only submit if all validations pass
}
