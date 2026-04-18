<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/9518c05d-af6c-43bd-83ff-d70d48c37f01

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

A GitHub Actions workflow has been pre-configured to automatically deploy this application to **GitHub Pages** whenever you push to the `main` or `master` branch.

**Steps to enable GitHub Pages deployment:**
1. Push this code to a GitHub repository.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. Important: If your repository is not a user page (e.g., `username.github.io`), but a project page (`username.github.io/repo-name`), you will need to add `base: '/repo-name/'` to your `vite.config.ts`.

## Version Control

A `.gitignore` file is included and configured with best practices for a React/Vite project. It ensures that:
*   **Dependencies** (`node_modules/`) are not committed.
*   **Build artifacts** (`dist/`, `build/`) are ignored.
*   **Environment files** containing sensitive data (like `.env`, `.env.local`) are excluded, protecting your `GEMINI_API_KEY`.
*   System files (like `.DS_Store`) and debug logs are ignored.
