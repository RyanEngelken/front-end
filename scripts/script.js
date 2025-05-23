//we are going to make an event listener it will trigger when the DOM is loaded (aka upon visiting the webpage)
addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("https://deluxe-changeable-triangle.glitch.me/api/songs");
    const songs = await response.json();

    let html = "";
    for (let song of songs){
        let songID = song._id; // get the ID of the song
        html += `<li>${song.title} - ${song.artist} - ${song.username} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a> </li>`
    }

    this.document.querySelector("#list_of_songs").innerHTML = html;
})