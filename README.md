# 01-18-gemini-hackathon

## Setup Instructions

### Backend Setup

1. Make sure you have Docker and Docker Compose installed on your system

2. From the root directory, build and start the backend service:
   ```bash
   docker compose up --build
   ```

The backend will be available at:
- API: `http://localhost:8000`
- API documentation: `http://localhost:8000/docs`

To stop the service:
```bash
docker compose down
```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

## Development Notes

- Frontend includes Hot Module Replacement (HMR) for instant updates
- API documentation is available at `http://localhost:8000/docs`
