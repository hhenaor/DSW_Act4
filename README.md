# DSW_Act4

A simple RESTful API made with JavaScript, Express, and Supabase.

> [!IMPORTANT]
> DEPLOY LINK:  ...
> 
> This link will no longer work after 2025.

## Requirements

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/) (for testing the API)
- [Supabase](https://supabase.com/) project (URL and ANON KEY)

## How to run locally

### 1. Clone the repository

```bash
git clone https://github.com/hhenaor/DSW_Act4
cd DSW_Act4
````

### 2. Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following content:

```env
SUPABASE_URL=https://<your-supabase-url>.supabase.co
SUPABASE_ANON_KEY=your-anon-key
JWT=Saldetoken
PORT=3000 #optional
```

### 4. Start the server

```bash
npm start
```

The server will be available at:

```
http://localhost:3000
```

## API Endpoints

> All `/api/asignaturas` endpoints require a valid JWT.

| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| POST   | /api/auth/register    | Register a new user           |
| POST   | /api/auth/login       | Log in and receive a token    |
| GET    | /api/asignaturas      | List all user's asignaturas   |
| GET    | /api/asignaturas/\:id | Get a specific asignatura     |
| POST   | /api/asignaturas      | Create a new asignatura       |
| PUT    | /api/asignaturas/\:id | Update an existing asignatura |
| DELETE | /api/asignaturas/\:id | Delete an asignatura          |

## Testing with Postman

1. Import `postman.json` into Postman.
2. Make a request to `POST /api/auth/login`.
3. Copy the `token` value from the response.
4. Set the `token` as a global or environment variable in Postman.
5. All `asignaturas` requests include `Authorization: Bearer {{token}}`.

## Notes

* All data is stored and managed by Supabase (PostgreSQL).
* `squema.sql` is for reference or optional local migration.
