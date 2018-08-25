const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1;
const takeNumber = (bandName) => {
    const bandString = `<h3> ${bandNumber}. ${bandName} </h3>`;
    bandNumber += 1;
    printToDom(bandString, 'bandz');
};
 takeNumber("Galactic Scum");
 takeNumber("Underdogs");