# Dapp-Penalty Documentation

Interview challenge application. 

## Tech stack

- **React + TypeScript**: Utilizes React with TypeScript for type safety and efficient development.
- **Redux + Redux Toolkit**: For global state management.
- **Radix UI**: As the base component library.
- **Vite Integration**: for fast development and hot module replacement.
- **ESLint Configuration**: Provides a basic setup with options to extend for production applications.

## Project Structure
- **`src/components`**: Reusable components unaware of any business logic.
- **`src/features`**: Business logic components and screens that are hooked up to the store.
- **`src/app`**: Main route component.


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fristaildg/dapp-penalty
   ```
2. Navigate to the project directory:
   ```bash
   cd dapp-penalty
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

### Building the Application

Build for production:
```bash
npm run build
```