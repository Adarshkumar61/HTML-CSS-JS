
let name = ["fir", "sec", "thi", "eig"]; // Define the name array

function sortArray() {
    name.sort();
    document.getElementById("first").innerText = name.join(', ');
}

document.getElementById('output').onclick = sortArray;
