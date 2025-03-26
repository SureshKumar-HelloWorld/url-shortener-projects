# URL Shortener Project Using Spring Boot And React

 A simple URL shortener application built using Spring Boot (backend) and React (frontend). This project allows users to shorten long URLs and retrieve the original URL using a short alias.

### Features

- Shorten long URLs

- Redirect shortened URLs to the original link

- Store URL mappings in a database

- REST API for creating and retrieving URLs

- Responsive React frontend for user interaction

## Technologies Used

### Backend (Spring Boot)

- Java 17+

- Spring Boot

- Spring Web

- Spring Data JPA

- H2 Database (or MySQL/PostgreSQL)

- Lombok

- Swagger for API documentation

## Frontend (React)

- React.js (Vite or Create React App)

- Axios for API requests

- TailwindCSS/Bootstrap for styling

- React Router for navigation

## Setup Instructions

### Prerequisites

- Java 17+

- Node.js (for React frontend)

- Maven 

- Database (H2, MySQL, or PostgreSQL)

## Backend Setup

1. Clone the repository:

git clone https://github.com/SureshKumar-HelloWorld/url-shortener-projects.git
cd url-shortener-sb

2. Build and run the Spring Boot application:

mvn spring-boot:run

3. API will be available at http://localhost:8080

##Frontend Setup

1.Navigate to the frontend directory:

cd ../url-shortener-frontend

2.Install dependencies:

npm install

3.Start the React app:

npm run dev

4.Open http://localhost:5173 (or as per Vite configuration) in the browser.

## API Endpoints

### Create a Short URL

#### POST /api/shorten

##### Request Body:

{
  "longUrl": "https://example.com"
}

Response:

{
  "shortUrl": "http://localhost:8080/s/abc123"
}

## Redirect to Original URL

###GET /s/{shortCode}
Redirects to the original URL.

##Future Enhancements

- User authentication

- Custom short URLs

- Analytics (click tracking)

- Expiration time for short links

## License

This project is licensed under the MIT License.
