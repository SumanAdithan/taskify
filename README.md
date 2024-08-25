# Taskify

Taskify is a task management application built with Vite, React, and TypeScript. It leverages Tailwind CSS for styling and includes features for managing tasks and subtasks efficiently. The application utilizes Framer Motion for animations, `hello-pangea/dnd` for drag-and-drop functionality, and `uuid` for generating unique IDs. State management is handled using React Context and Reducers.

## Features

-   Add, edit, and delete tasks
-   Strike out tasks by double-clicking
-   Manage tasks and subtasks using drag-and-drop
-   Smooth animations with Framer Motion
-   Styled with Tailwind CSS
-   Global state management with Context and Reducer

## Technologies Used

-   **Vite**: Fast build tool and development server
-   **React**: JavaScript library for building user interfaces
-   **TypeScript**: Superset of JavaScript for static typing
-   **Tailwind CSS**: Utility-first CSS framework
-   **Framer Motion**: Animation library for React
-   **hello-pangea/dnd**: Drag-and-drop library for React
-   **uuid**: Library for generating unique identifiers

## Installation

To get started with Taskify, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/SumanAdithan/taskify.git
    ```
2. Navigate to the project directory:
    ```bash
    cd taskify
    ```
3. Install the dependencies using Yarn:
    ```bash
    yarn install
    ```
4. Start the development server:
    ```bash
    yarn dev
    ```
5. Open your browser and visit http://localhost:5173 to see the application in action.

## Folder Structure

```
taskify/
│
├── public/               # Public assets and static files
│   └── index.html        # HTML entry point
│
├── src/                  # Source files
│   ├── action/           # Action creators for reducers
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # React components
│   ├── constants/        # Application constants
│   ├── context/          # React Context for state management
│   ├── contextProvider/  # Context providers
│   ├── hooks/            # Custom hooks
│   ├── layout/           # Layout components
│   ├── models/           # TypeScript interfaces and types
│   ├── pages/            # Page components
│   ├── reducer/          # Reducers for state management
│   ├── routes/           # Application routes
│   ├── styles/           # Tailwind CSS and global styles
│   ├── ui/               # UI components (buttons, modals, etc.)
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Root component
│   ├── image.d.ts        # TypeScript declaration for images
│   ├── main.tsx          # Entry point for React application
│   └── vite-env.d.ts     # Vite environment type definitions
│
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore file
├── index.html            # HTML entry point
├── package.json          # Project metadata and dependencies
├── postcss.config.ts     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript configuration for the app
├── tsconfig.json         # Base TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node.js
├── vite.config.ts        # Vite configuration
├── yarn.lock             # Yarn lock file
```

## Usage

-   Adding Tasks: Type into the input field and press "Enter" to add a new task.
-   Editing Tasks: Double-click a task to enter edit mode.
-   Striking Out Tasks: Double-click a task again to strike it out.
-   Drag-and-Drop: Rearrange tasks and subtasks using drag-and-drop functionality.
-   Animations: Enjoy smooth transitions and animations powered by Framer Motion.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This repository is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or inquiries, please contact me at sumanadithan34@gmail.com.
