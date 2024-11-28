# Step-by-Step Guide to Run the Program

# 1. Open the Project Folder
Open the dog-image-gallery folder in Visual Studio Code.

# 2. Open a New Terminal
In VS Code, go to the menu and select Terminal > New Terminal.

# 3. Ensure You Are in the Correct Directory
Check that the terminal is pointed to the dog-image-gallery folder.
If not, use the following command to navigate to it:

cd path/to/dog-image-gallery

# 4. Install Project Dependencies
Install the necessary dependencies listed in the package.json file by running:

npm install

# 5. Install Required Libraries
Ensure the following libraries are installed for the program to work correctly:

React Router DOM: For routing between pages.
React Icons: For adding icons to the header, footer, and buttons.
Framer Motion: For animations.
Run the following commands one by one:

npm install react-router-dom

npm install react-icons

npm install framer-motion

# 6. Start the Development Server
Start the application by running:

npm run dev
This will start a local development server and provide a URL (e.g., http://localhost:5173/).

Open this URL in your browser to view the application.

# Explanation of the Program
The Dog Image Gallery is a React-based web application that allows users to explore images of different dog breeds using the Dog CEO API. Here’s a breakdown of what happens in the program:

# Header
The Header displays navigation links to two pages:

Home Page: Contains the form for selecting the dog breed and the number of images to display.
Gallery Page: Displays the fetched dog images in a responsive grid layout.
Icons:

Home uses the house icon (<FaHome />).
Gallery uses the images icon (<FaImages />).
Home Page: Form for Breed Selection

# Form:

The user selects a dog breed from a dropdown and specifies the number of images (1–100).
A button labeled "Build Your Gallery" triggers the process of fetching images.
Data Handling:

The BreedSelector component:
Fetches the list of all dog breeds from the Dog CEO API when the page loads.
Sends the selected breed and number of images to the parent component (App.jsx) upon form submission.

# Navigation:

After submitting the form, the user is navigated to the Gallery Page.
Animation:

The submit button includes hover and tap animations using Framer Motion for interactivity.

# Gallery Page

Fetching Images:

The selected breed and number of images are used to fetch random images for the specified breed from the Dog CEO API.
Loader:

While images are being fetched, a spinning loader is displayed.
Image Grid:

Once the images are fetched:
They are displayed in a responsive grid layout with:
1 column on small screens (< 500px),
2 columns on medium screens (500px–799px),
3 columns on large screens (800px–1199px),
4 columns on extra-large screens (≥ 1200px).
Each image includes:
Hover effects (zoom, shadow, and brightness).
Accessibility features (keyboard focus, descriptive captions).

# Animation:

Images are animated as they appear, with each image sliding into view.

# Footer
The Footer includes links to social media platforms (GitHub, LinkedIn, Twitter), each represented by icons from React Icons.
Hover effects change the icon colors for a polished look.

Key Features of the Program
Interactive Animations:

Smooth page transitions and button/image animations are implemented using Framer Motion.
Responsive Design:

The app layout adapts to different screen sizes for a consistent user experience.

# Accessibility:

Semantic HTML elements (<fieldset>, <figure>, <section>, etc.).
Focusable images (tabIndex="0").
aria-labels for screen readers.
Real-Time Data:

Images are fetched dynamically from the Dog CEO API.

# Expected User Flow

Visit the Home Page:

Select a breed (e.g., "Retriever").

Specify the number of images (e.g., "5").

Click "Build Your Gallery."

Navigate to the Gallery Page:

See a loader while the images load.

View the fetched images in a responsive grid.

# Explore the Gallery:

Hover over images to see zoom and brightness effects.

Use keyboard navigation to focus on individual images.

# Conclusion
The Dog Image Gallery is a modern, responsive web application with real-time data fetching, smooth animations, and accessible design. This guide covers everything from setup to understanding how the app works, ensuring users can run and explore the project seamlessly.
