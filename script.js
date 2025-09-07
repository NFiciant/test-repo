// Simple interactivity
document.addEventListener("DOMContentLoaded", () => {
	const magicBtn = document.getElementById("magicBtn");
	const noteInput = document.getElementById("noteInput");
	const addNoteBtn = document.getElementById("addNote");
	const notesList = document.getElementById("notesList");

	magicBtn.addEventListener("click", () => {
		alert("Yeay! Lo berhasil klik tombol. 🎉");
	});

	// Load notes dari localStorage (simple)
	const saved = JSON.parse(localStorage.getItem("myNotes") || "[]");
	saved.forEach((n) => pushNoteToDOM(n));

	addNoteBtn.addEventListener("click", () => {
		const text = noteInput.value.trim();
		if (!text) return alert("Isi dulu catatannya, bos!");
		const notes = JSON.parse(localStorage.getItem("myNotes") || "[]");
		notes.push(text);
		localStorage.setItem("myNotes", JSON.stringify(notes));
		pushNoteToDOM(text);
		noteInput.value = "";
	});

	function pushNoteToDOM(text) {
		const li = document.createElement("li");
		li.textContent = text;
		li.style.padding = "6px 0";
		notesList.appendChild(li);
	}
});
