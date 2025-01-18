# 01-18-gemini-hackathon

## Project Setup

This project consists of a React + TypeScript frontend and a Python backend.

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
   The frontend will be available at `http://localhost:5173`

### Backend Setup

#### Option 1: Local Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment (recommended):
   ```bash
   # Windows
   python -m venv venv
   .\venv\Scripts\activate

   # Linux/Mac
   python -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```bash
   python -m app.main
   ```
   The backend API will be available at `http://localhost:8000`

#### Option 2: Docker Setup

1. Build the Docker image:
   ```bash
   cd backend
   docker build -t gemini-hackathon-backend .
   ```

2. Run the container:
   ```bash
   docker run -p 8000:8000 gemini-hackathon-backend
   ```
   The backend API will be available at `http://localhost:8000`

## Development

- Frontend development server includes Hot Module Replacement (HMR) for instant updates
- Backend includes automatic reload when running locally (not in Docker)
- API documentation is available at `http://localhost:8000/docs` when the backend is running
