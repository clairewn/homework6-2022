var video = document.querySelector("#player1")

// Loading
window.addEventListener("load", function() {
	console.log("Page Load")
	video.autoplay = false
	video.loop = false
	video.load()
});

// Play
document.querySelector('#play').addEventListener("click", function() {
	console.log("Play Button")
	video.play()
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});

// Pause
document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Button")
	video.pause()
});

// Slow
document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *= 0.95
	console.log("New speed: " + video.playbackRate)
});

// Speed up
document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate /= 0.95
	console.log("New speed: " + video.playbackRate)
})

// Skip
document.querySelector('#skip').addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 15;
	if (video.duration == video.currentTime) {
		video.currentTime = 0;
	}
	console.log("New time: " + video.currentTime)
})

// Mute
document.querySelector('#mute').addEventListener("click", function() {
	console.log("Mute")
	if (this.innerHTML == 'Mute') {
		video.muted = true;
		this.innerHTML = 'Unmute'
	}
	else {
		video.muted = false;
		this.innerHTML = 'Mute'
	}
})

// Volume
document.querySelector('#slider').addEventListener("click", function() {
	console.log("Volume Slider")
	video.volume = this.value / 100
	console.log(video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
})

// Vintage
document.querySelector('#vintage').addEventListener("click", function() {
	console.log("Styled")
	document.querySelector('#player1').classList.add("oldSchool")
})

// Original
document.querySelector('#orig').addEventListener("click", function() {
	console.log("Original")
	document.querySelector('#player1').classList.remove("oldSchool")
})