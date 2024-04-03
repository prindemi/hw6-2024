var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#player1").play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	document.querySelector("#player1").pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Increase the current video speed each time the speed up button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down.

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Skip ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning");
	} else {
		video.currentTime += 10;
		console.log("Current location " + video.currentTime);
	}
});

// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

// Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100 + "%");
});

// Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage");
});

// Remove the oldSchool class from the video.

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});