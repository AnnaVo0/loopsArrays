// My top five favorite TV shows
let favShows = ["Arcane", "Arknights", "Supernatural", "Lycoris Recoil", "Violet Evergarden"];

// Logs even numbers from 1000 to 0
for (i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

// For loop from 0 to 10000
for (i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!");
    }
}

// Favorite TV shows ranking loop
for (i = 0; i < favShows.length; i++) {
    // (i + 1) is necessary so that ranking numbers are correct--there is no #0 favorite tv show
    console.log("My #" + (i + 1) + " favorite tv show is " + favShows[i]);
}