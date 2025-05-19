# SHORT-URL: URL Shortener Service

A full-featured URL shortener service built with Node.js, Express, and MongoDB that allows users to create shortened URLs, track click analytics, and manage their URLs through a user authentication system.

## Features

- **URL Shortening**: Convert long URLs to short, manageable links
- **Click Analytics**: Track the number of clicks and visit history for each shortened URL
- **User Authentication**: Secure signup and login functionality
- **Role-Based Access Control**: Different access levels for normal users and administrators
- **User Dashboard**: View all your shortened URLs in one place
- **Admin Panel**: Administrators can view and manage all URLs in the system

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for storing URL and user data
- **Mongoose**: MongoDB object modeling for Node.js
- **EJS**: Template engine for generating HTML with JavaScript
- **JWT (jsonwebtoken)**: For secure user authentication
- **nanoid**: For generating unique short URL IDs
- **Cookie-parser**: Parse Cookie header and populate req.cookies

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone https://github.com/Karanpratap7/SHORT-URL.git
   cd SHORT-URL
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Set Up MongoDB**
   - Make sure MongoDB is installed and running on your system
   - The application is configured to connect to `mongodb://localhost:27017/short-url`

4. **Start the Application**
   ```
   npm start
   ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:8001`

## API Endpoints

### URL Endpoints
- `POST /url` - Create a new short URL
- `GET /url/:shortId/analytics` - Get analytics for a specific short URL
- `GET /url/:shortId` - Redirect to the original URL

### User Endpoints
- `POST /user/signup` - Register a new user
- `GET /user/signup` - Render signup page
- `POST /user/login` - User login
- `GET /user/login` - Render login page

### Static Routes
- `GET /` - Home page (requires authentication)
- `GET /admin/urls` - Admin dashboard to view all URLs (requires ADMIN role)

## User Roles

- **NORMAL**: Regular users who can create and manage their own shortened URLs
- **ADMIN**: Administrative users who can view and manage all URLs in the system

## Dependencies

```json
{
  "cookie-parser": "^1.4.7",
  "ejs": "^3.1.10",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongoos": "^0.0.1-security",
  "nanoid": "^5.1.5",
  "nodemon": "^3.1.10",
  "uuid": "^11.1.0"
}
```

## Project Structure

```
SHORT-URL/
├── connect.js            # MongoDB connection setup
├── controllers/          # Request handlers
│   ├── url.js            # URL-related controllers
│   └── user.js           # User-related controllers
├── index.js              # Application entry point
├── middlewares/
│   └── auth.js           # Authentication middleware
├── models/
│   ├── url.js            # URL data model
│   └── user.js           # User data model
├── routes/
│   ├── staticRouter.js   # Static page routes
│   ├── url.js            # URL API routes
│   └── user.js           # User authentication routes
├── service/
│   └── auth.js           # Authentication service
└── views/                # EJS templates
    ├── home.ejs          # Dashboard view
    ├── login.ejs         # Login form
    └── signup.ejs        # Signup form
```

## License

ISC

