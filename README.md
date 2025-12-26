# AI_scholar
An AI-powered study helper built to support students by generating summaries, notes, MCQs, and answers. Developed using HTML, CSS, and JavaScript with secure Gemini API integration via Cloudflare Workers. This project reflects my learning journey, problem-solving skills, and teamwork experience.


The project uses Google Gemini (gemini-2.5-flash) through a secure backend proxy built with Cloudflare Workers, ensuring that the API key is never exposed on the frontend.

---

## Features

- Generate summaries for any topic
- Generate detailed study notes
- Generate multiple choice questions (MCQs)
- Get answers to custom questions
- Clean and readable AI responses
- Download output as PDF or TXT
- Secure API handling (no API key in frontend)
- Works for all users without requiring their own API key

---

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- Google Gemini API (gemini-2.5-flash)
- Cloudflare Workers (backend proxy)
- GitHub Pages (deployment)

---

## Project Structure

ai-study-helper/
│
├── index.html # Main HTML file
├── script.js # Frontend JavaScript logic
├── style.css # Styling
└── README.md # Project documentation


---

## How It Works

1. The user enters a topic or question.
2. The user selects the type of output (Summary, Notes, MCQs, or Answer).
3. The frontend sends the request to a Cloudflare Worker.
4. The Worker securely forwards the request to the Gemini API using a secret API key.
5. The AI-generated response is returned to the frontend.
6. The user can view the response or download it as a PDF or TXT file.

---

## Security

- The Gemini API key is stored as a secret in Cloudflare Workers.
- The API key is never included in frontend code.
- The project is safe to host publicly on GitHub.
- All users can use the app without providing their own API key.

---

## Setup and Deployment

### Frontend (GitHub Pages)

1. Upload the project files to a GitHub repository.
2. Go to repository Settings.
3. Enable GitHub Pages using the main branch.
4. Open the provided GitHub Pages URL.

### Backend (Cloudflare Worker)

1. Create a Cloudflare Worker.
2. Add the Gemini API key as a secret variable named `GEMINI_API_KEY`.
3. Deploy the Worker.
4. Update the Worker URL in `script.js`.

---

## Usage

- Enter a topic to generate summaries, notes, or MCQs.
- Enter a question to get a direct answer.
- Click Generate to receive AI output.
- Use the Download button to save the output as PDF or TXT.

---

## Limitations

- Response speed depends on Gemini API availability.
- Free API quota may have daily limits.
- Requires an active internet connection.

---

## Future Improvements

- User authentication
- Usage limits per user
- Improved UI/UX
- Support for more AI models
- History of generated content

---

## Author

Developed by Zamin Ali

Developed by Qasim Ali

Aspiring frontend developer and AI enthusiast

---

## License

This project is open source and available under the MIT License.


