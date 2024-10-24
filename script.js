// Array, in dem die Integer gespeichert werden
let numberArray = [];

// Event-Listener für die Enter-Taste bei Eingabe
document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addToArray();
    }
});

// Funktion, um die Eingabe dem Array hinzuzufügen und das Array anzuzeigen
function addToArray() {
    const inputElement = document.getElementById("numberInput");
    const number = parseInt(inputElement.value);

    // Überprüfen, ob der eingegebene Wert eine Zahl ist
    if (!isNaN(number)) {
        // Überprüfen, ob die Zahl bereits im Array vorhanden ist
        if (!numberArray.includes(number)) {
            numberArray.push(number);  // Zahl dem Array hinzufügen
            sortArray();               // Array sortieren
            displayArray();            // Array anzeigen
        } else {
            alert("Die Zahl ist bereits im Array vorhanden.");
        }
    } else {
        alert("Bitte eine gültige Zahl eingeben.");
    }

    // Eingabefeld nach jeder Eingabe zurücksetzen
    inputElement.value = '';
}

// Funktion, um das Array zu sortieren
function sortArray() {
    numberArray.sort((a, b) => a - b);  // Numerische Sortierung
}

// Funktion, um das Array anzuzeigen
function displayArray() {
    const arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.textContent = JSON.stringify(numberArray);
}

// Funktion, um eine Zahl aus dem Array zu löschen
function deleteFromArray() {
    const deleteInputElement = document.getElementById("deleteInput");
    const deleteNumber = parseInt(deleteInputElement.value);

    // Überprüfen, ob der eingegebene Wert eine Zahl ist
    if (!isNaN(deleteNumber)) {
        const index = numberArray.indexOf(deleteNumber);

        // Überprüfen, ob die Zahl im Array vorhanden ist
        if (index !== -1) {
            numberArray.splice(index, 1);  // Zahl aus dem Array entfernen
            displayArray();                // Array aktualisiert anzeigen
            alert("Die Zahl wurde erfolgreich gelöscht.");
        } else {
            alert("Die Zahl ist nicht im Array vorhanden.");
        }
    } else {
        alert("Bitte eine gültige Zahl zum Löschen eingeben.");
    }

    // Eingabefeld nach jeder Löschung zurücksetzen
    deleteInputElement.value = '';
}
