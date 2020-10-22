/* select elements */
const topics = document.querySelectorAll(".topic-text");

/* events */
// on div topic click
document.body.addEventListener("click", (e) => {
	// hide all paragraphs & unbold titles
	topics.forEach((topic) => {
		// access titles and unbold
		topic.parentElement.children[0].children[0].classList.remove("bold");
		// hide all the paragraphs
		topic.classList.remove("show");
		// rotate arrows
		topic.parentElement.children[0].children[1].classList.add("rotate0");
		topic.parentElement.children[0].children[1].classList.remove("rotate180");
	});

	if (e.target.className.includes("topic-wrapper")) {
		console.log(1);
		/* if div topic wrapper is clicked */
		// make h4 bold
		e.target.children[0].classList.add("bold");
		// rotate the arrow
		e.target.children[1].classList.remove("rotate0");
		e.target.children[1].classList.add("rotate180");
		// show paragraph
		e.target.parentElement.children[1].classList.toggle("show");
	} else if (e.target.className.includes("topic-title")) {
		console.log(2);
		/* if h4 topic title is clicked */
		// make h4 bold
		e.target.classList.add("bold");
		// rotate the arrow
		e.target.nextElementSibling.classList.remove("rotate0");
		e.target.nextElementSibling.classList.add("rotate180");
		// show paragraph
		e.target.parentElement.parentElement.children[1].classList.toggle("show");
	} else if (e.target.className.includes("arrow")) {
		console.log(3);
		/* if img arrow is clicked */
		// make h4 bold
		e.target.parentElement.children[0].classList.add("bold");
		// rotate the arrow
		e.target.classList.remove("rotate0");
		e.target.classList.add("rotate180");
		// show paragraph
		e.target.parentElement.parentElement.children[1].classList.toggle("show");
	} else if (e.target.className === "topic") {
		console.log(4);
		/* if div topic is clicked */
		// make h4 bold
		e.target.children[0].children[0].classList.add("bold");
		// rotate the arrow
		e.target.children[0].children[1].classList.remove("rotate0");
		e.target.children[0].children[1].classList.add("rotate180");
		// show paragraph
		e.target.children[1].classList.toggle("show");
	}
});

/* functions */
