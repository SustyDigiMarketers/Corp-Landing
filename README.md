# SustyDigi Marketers - Corporate Landing Page

This repository contains the source code for the official corporate website of SustyDigi Marketers Pvt. Ltd. It's a premium, futuristic website designed to showcase their cutting-edge software and digital solutions, featuring a world-class animated UI/UX.

## ✨ Key Features

- **Dynamic & Animated UI/UX**: Built with modern animations and transitions for a fluid, engaging user experience.
- **Comprehensive Service & Product Pages**: Detailed sections for all company offerings, including Web/App Development, Digital Marketing, Enterprise Software, and SaaS products.
- **AI-Powered Assistant**: An integrated chat assistant powered by the Google Gemini API to answer user queries in real-time.
- **Interactive Portfolio & Gallery**: Showcases past projects and company culture.
- **Career Portal**: A dedicated section for job listings and company culture highlights.
- **Admin Dashboard**: A hidden, protected dashboard for managing site content like images, blogs, and pop-ups.
- **Fully Responsive**: Optimized for a seamless experience across desktops, tablets, and mobile devices.
- **Automated Deployment**: Continuous deployment to GitHub Pages is configured via GitHub Actions.

## 🚀 Technology Stack

This project uses a modern, lightweight setup without a complex build process:

- **Frontend**: React 19 (loaded via CDN)
- **Routing**: React Router DOM (via CDN)
- **Styling**: Tailwind CSS (loaded via CDN)
- **AI**: Google Gemini API for the chat assistant
- **Transpilation**: Babel Standalone (for in-browser JSX/TSX transpilation)
- **Hosting**: GitHub Pages

## 🏁 Getting Started

Because this project doesn't require a build step, running it locally is very simple.

### Prerequisites

You just need a modern web browser and a code editor.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SustyDigiMarketers/Corp-Landing.git
    cd Corp-Landing
    ```

2.  **Run with a Live Server:**
    The easiest way to run the project is by using a live server, as it correctly handles file paths. If you are using Visual Studio Code, you can use the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

    - Right-click on `index.html`.
    - Select "Open with Live Server".

    The site will open in your default browser.

3.  **API Key Configuration**:
    For the AI Assistant to function, the execution environment must have the `API_KEY` environment variable configured for the Google Gemini API.

## ⚙️ Admin Dashboard Access

The website includes a hidden administrative dashboard for content management.

1.  **How to Access**:
    - On any page of the website, type the word `setting` on your keyboard.
    - A login modal will appear.

2.  **Credentials**:
    - **Username**: `admin`
    - **Password**: `password`

Upon successful login, you will be redirected to the `/dashboard` route.

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages.

- **Trigger**: A push to the `main` branch will automatically trigger the deployment workflow defined in `.github/workflows/deploy.yml`.
- **Process**: The workflow uploads the repository's contents as a GitHub Pages artifact and deploys it.
- **Custom Domain**: The site can be configured with a custom domain (`sustydigimarketers.com`) directly in the repository's "Pages" settings. The GitHub Action does not need to be modified for this.