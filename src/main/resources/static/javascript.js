
// Definerer et array for å lagre billettobjekter
let billetter = [];

// Kjøp billett-funksjon
function kjopBillett() {
    // Henter verdier fra input-feltene
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    // Validerer input-feltene
    if (!isValidAntall(antall)) {
        displayErrorMessage("antall", "Må skrive noe inn i antall");
        return;
    }

    if (!isValidFornavn(fornavn)) {
        displayErrorMessage("fornavn", "Må skrive noe inn i fornavn");
        return;
    }

    if (!isValidEtternavn(etternavn)) {
        displayErrorMessage("etternavn", "Må skrive noe inn i etternavn");
        return;
    }

    if (!isValidTelefonnr(telefonnr)) {
        displayErrorMessage("telefonnr", "Må skrive noe inn i  telefonnr");
        return;
    }

    if (!isValidEpost(epost)) {
        displayErrorMessage("epost", "Må skrive noe inn i epost");
        return;
    }

    // Oppretter en billett
    const billett = {
        film,
        antall,
        fornavn,
        etternavn,
        telefonnr,
        epost
    };

    // Legger til billetten i arrayet
    billetter.push(billett);

    // Viser alle billettene
    visBilletter();

    // Tømmer inputfeltene
    clearInputFields();

}

// Valideringsfunksjoner til input-feltene
function isValidAntall(value) {
    return /^\d+$/.test(value) && parseInt(value) > 0;
}

function isValidFornavn(value) {
    return /^[a-zA-Z]+$/.test(value);
}

function isValidEtternavn(value) {
    return /^[a-zA-Z]+$/.test(value);
}

function isValidTelefonnr(value) {
    return /^\d{8}$/.test(value);
}

function isValidEpost(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Viser feilmeldinger
function displayErrorMessage(fieldId, message) {
    const errorMessageElement = document.getElementById(`${fieldId}-error`);
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = "red";
}

// Vis alle billettene
function visBilletter() {
    const alleBilletterElement = document.getElementById("alleBilletter");
    alleBilletterElement.innerHTML = "";

    // Går gjennom billettene og legger dem til i listen
    billetter.forEach((billett) => {
        const enkeltBillett = document.createElement("p");
        enkeltBillett.textContent = `${billett.film} ${billett.antall} ${billett.fornavn} ${billett.etternavn} ${billett.telefonnr} ${billett.epost}`;
        alleBilletterElement.appendChild(enkeltBillett);
    });
}

// Tømmer inputfeltene
function clearInputFields() {
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

// Sletter alle billettene
function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

