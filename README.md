# Event Talks App

This project contains a simple, single-page website for a one-day tech event. The website is generated as a single, serverless HTML file.

## Project Structure

- `src/`: Contains the source files (HTML template, CSS, client-side JS, and data).
- `build.js`: A Node.js script to build the final `index.html`.
- `index.html`: The generated website file. This file is not checked into the repository.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## How to Build and Run

1.  **Build the website:**
    To generate the `index.html` file, run the build script:
    ```bash
    node build.js
    ```

2.  **Run the website:**
    To preview the website locally, start a simple Python web server in the project's root directory:
    ```bash
    python3 -m http.server
    ```
    Then, open your browser and go to `http://localhost:8000`.
