# User Management Dashboard

### Ajackus Software Engineering Internship Assessment

This repository contains my implementation of the User Management Dashboard assignment for the Ajackus Software Engineering Internship position.

## Project Overview

A responsive web application that implements CRUD operations for user management, built using React and Vite. The application integrates with JSONPlaceholder API for simulating backend operations.

## Technical Implementation

### Core Technologies

- React 18
- Vite
- React Router DOM for navigation
- Axios for API integration
- Tailwind CSS for responsive design

### Project Structure

```
src/
├── components/
│   ├── Toast.jsx        // To notify the operations
│   ├── Footer.jsx       // Simple footer for the app
│   ├── Modal.jsx        // For confirmations
│   ├── Navbar.jsx       // Basic navbar with logo branding
│   ├── UserCard.jsx     // Cards to display the users
│   ├── UserList.jsx     // List of usercards with pagination
│   └── UserForm.jsx     // Form for adding and editing users
├── pages/
│   ├── Home.jsx         // Main home page
│   └── Form.jsx         // Page for editing and creating users
├── services/
│   └── apiService.js
├── App.jsx
└── main.jsx
```

### Features Implemented

1. **User Management**

   - View users in a paginated list
   - Add new users
   - Edit existing user details
   - Delete users with confirmation

2. **UI/UX Considerations**

   - Responsive design for all screen sizes
   - Toast notifications for feedback
   - Form validation with error messages
   - Confirmation modals for actions

3. **API Integration**
   - Implemented RESTful API integration with JSONPlaceholder
   - Error handling for failed requests
   - Loading states during API operations

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/sanjesh17/user-management-dashboard.git
cd user-management-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Access the application at `http://localhost:5173`

## Requirements Done

- ✓ Implemented all CRUD operations
- ✓ Responsive design
- ✓ Form validation
- ✓ Error handling
- ✓ Pagination
- ✓ Clean code structure
- ✓ Modern UI components

## Technical Decisions

1. **Vite Selection**: Chose Vite for my familiarity and fast build times.
2. **Component Structure**: Implemented components for better reusability and easy to read code.
3. **State Management**: Used React hooks for state management.
4. **Error Handling**: Implemented error handling for API operations and user input validation.

## Areas for Enhancement

Given additional time, these features could be implemented:

1. Implement search functionality
2. Add sorting capabilities
3. Add unit tests using Jest/React Testing Library
4. Implement data caching with something like Redis
5. Add filtering options

## Development Approach

The development process followed these steps:

1. Initial project setup with Vite and React
2. Component planning
3. Implementation of core features
4. UI enhancement
5. Error handling implementation
6. Code cleanup and documentation

_This project was completed as part of the Ajackus Software Engineering Internship assignment by R.G.Sanjesh._
