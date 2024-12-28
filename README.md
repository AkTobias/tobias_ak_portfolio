--IMPORTANT--
After downloading the repository, run npm install to all required modules, as node_modules folder is excluded from Git to save space.

This a school project where I practiced building my omw website with specific funtions and features.

--Technologies Used--

-  React: The core libary for building the user interface.
-  CSS: for styling components and ensuring a consistent look.
-  React Hooks (useState) for managing state, especially in functional components.
-  Formspree: For handeling the contact form submission.

--Project Structure--
The project is divided into the following components and files:

-  about.jsx: Contains the About section of the site.
-  contact.jsx: The Contact page that integrates a form for users to submit inquiries.
-  footer.jsx: Contains the footer section of the site.
-  header.jsx: The header section of the site, including a navigation bar.
-  home.jsx: The homepage of the site.
-  portfolio.jsx: Displaying my projects.
-  referrals.jsx: Section showcasing referrals.
-  technologies.jsx: Section showcasing technologies that I've worked with.
-  contact.jsx: Sention for contacting me using formspree.
-  App.js: Contains the main layout and routing of the app.
-  about.jsx: Contains information about me.
-  index.css: Global CSS for the project.

--Principles and Methods--
Component-Based Architecture: The project follows React's best practice of breaking down the UI into smaller, reusable components. This ensures maintainability and scalability.

React Hooks (useState): The useState hook is used to manage component state, especially in the Contact form for handling form inputs and submission.
External Form Handling: Instead of creating a back-end API to handle form submissions, I have used Formspree for form handling, which simplifies the process by managing the server-side logic for us.

CSS Organization: All global CSS styles are placed in the index.css, while component-specific styles are kept inside the respective components (e.g., in App.js).

--External Links and Privacy--

To ensure the security and privacy of users, rel="noopener noreferrer" is used in all external links. This serves two purposes:

noopener: Prevents the newly opened page from being able to access the original page’s JavaScript, which protects against malicious pages.
noreferrer: Ensures that no Referer header is sent to the target page, adding an extra layer of privacy by not revealing the origin of the request.
