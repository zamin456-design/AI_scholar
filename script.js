document.addEventListener("DOMContentLoaded", () => {

  // DOM elements
  const generateBtn = document.getElementById("generateBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const outputBox = document.getElementById("outputBox");
  const topicInput = document.getElementById("topicInput");
  const questionInput = document.getElementById("questionInput");

  // YOUR Cloudflare Worker URL here
  const WORKER_URL = "https://ai-study-builder-api.q-jafry512.workers.dev"; // <-- Replace with your Worker URL

  // Generate button click
  generateBtn.addEventListener("click", async () => {

    const topic = topicInput.value.trim();
    const question = questionInput.value.trim();
    const selectedOption = document.querySelector('input[name="outputType"]:checked');

    if (!selectedOption) {
      outputBox.textContent = "Please select what you want to generate.";
      return;
    }

    if (topic === "" && question === "") {
      outputBox.textContent = "Please enter a topic or ask a question.";
      return;
    }

    outputBox.textContent = "Generating response...";

    const type = selectedOption.value;
    let prompt = "";

    if (type === "summary") {
      prompt = `Create a short, simple summary about "${topic}". Plain text only. Capital letters for headings. No bullets or symbols.`;
    } else if (type === "notes") {
      prompt = `Create simple study notes about "${topic}". Plain text. Capital letters for headings. Short paragraphs. No bullets or symbols.`;
    } else if (type === "mcqs") {
      prompt = `Create 5 multiple choice questions (MCQs) about "${topic}". Each MCQ should have: Question, A), B), C), D), Correct Answer. Plain text only.`;
    } else if (type === "answer") {
      prompt = `Answer this question in simple words: "${question}". Plain text. Short paragraphs. No symbols or markdown.`;
    }

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();

      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      outputBox.textContent = aiText;

    } catch (error) {
      console.error(error);
      outputBox.textContent = "Something went wrong while generating the response.";
    }
  });

// Download button
downloadBtn.addEventListener("click", () => {

  const text = outputBox.textContent.trim();

  if (!text) {
    alert("Nothing to download.");
    return;
  }

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "AI_Study_Output.txt";
  a.click();

  URL.revokeObjectURL(url);
})});


