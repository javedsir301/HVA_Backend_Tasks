const form = document.getElementById("search-form");
const wordInput = document.getElementById("word-input");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const word = wordInput.value.trim();
  if (!word) return;

  resultDiv.innerHTML = '<p class="loading">Searching...</p>';

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!response.ok) {
      throw new Error("Word not found");
    }
    const data = await response.json();
    displayResult(data[0]);
  } catch (error) {
    resultDiv.innerHTML = `<p id="error-message">Error: ${error.message}</p>`;
  }
});

function displayResult(wordData) {
  let html = `
    <div class="word-container">
      <h2 class="word-title">${wordData.word}</h2>
      <div class="phonetic">Phonetic: <em>${wordData.phonetic || "Not available"}</em></div>
    </div>
  `;

  wordData.meanings.forEach((meaning) => {
    html += `
      <div class="meaning-container">
        <h3 class="part-of-speech">Part of Speech: <strong>${meaning.partOfSpeech}</strong></h3>
    `;
    meaning.definitions.forEach((def) => {
      html += `
        <div class="definition-container">
          <div class="definition">
            <strong>Definition:</strong> ${def.definition}
          </div>
      `;
      if (def.example) {
        html += `<div class="example"><strong>Example:</strong> "${def.example}"</div>`;
      }
      // Handle Synonyms
      html += `<div class="synonyms"><strong>Synonyms:</strong> ${def.synonyms && def.synonyms.length > 0 ? def.synonyms.join(", ") : "Not available"}</div>`;
      // Handle Antonyms
      html += `<div class="antonyms"><strong>Antonyms:</strong> ${def.antonyms && def.antonyms.length > 0 ? def.antonyms.join(", ") : "Not available"}</div>`;
      html += `</div>`; // Close definition-container
    });
    html += `</div>`; // Close meaning-container
  });

  resultDiv.innerHTML = html;
}
