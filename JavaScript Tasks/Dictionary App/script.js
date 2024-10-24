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
                <div class="word-title">${wordData.word}</div>
                <div class="phonetic">${wordData.phonetic || ""}</div>
            `;

  wordData.meanings.forEach((meaning) => {
    html += `<div class="part-of-speech">${meaning.partOfSpeech}</div>`;
    meaning.definitions.forEach((def) => {
      html += `
                        <div class="definition">
                            <strong>Definition:</strong> ${def.definition}
                        </div>
                    `;
      if (def.example) {
        html += `<div class="example"><strong>Example:</strong> ${def.example}</div>`;
      }
      if (def.synonyms && def.synonyms.length > 0) {
        html += `<div class="synonyms"><strong>Synonyms:</strong> ${def.synonyms.join(
          ", "
        )}</div>`;
      }
      if (def.antonyms && def.antonyms.length > 0) {
        html += `<div class="antonyms"><strong>Antonyms:</strong> ${def.antonyms.join(
          ", "
        )}</div>`;
      }
    });
  });

  resultDiv.innerHTML = html;
}
