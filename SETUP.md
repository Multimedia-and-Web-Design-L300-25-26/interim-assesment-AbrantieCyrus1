# Local Setup Guide

## Backend

1. Create or confirm `.env` exists in the backend root.
2. Confirm these values:
   - `PORT=5000`
   - `MONGO_URI` should point to either a local MongoDB or MongoDB Atlas.
     - Local example: `mongodb://127.0.0.1:27017/coinbase-clone`
     - Atlas example: `mongodb+srv://<username>:<password>@<cluster-url>/coinbase-clone?retryWrites=true&w=majority`
   - `JWT_SECRET=change_this_secret`
   - `CLIENT_URL=http://localhost:5173`

3. Start backend:

```bash
npm run dev
```

## Frontend

1. Create or confirm `frontend/.env` exists.
2. Confirm this value:
   - `VITE_API_URL=http://localhost:5000/api`

3. Start frontend:

```bash
cd frontend
npm run dev
```

## Notes

- The backend currently uses MongoDB at `127.0.0.1:27017`.
- If MongoDB is not installed locally, you must either:
  1. install MongoDB and start the service, or
  2. use MongoDB Atlas and update `MONGO_URI` in `.env`.
- The frontend will call the backend at `http://localhost:5000/api`.
- If `http://localhost:5173` is not the frontend URL, update `CLIENT_URL` in the backend `.env`.
