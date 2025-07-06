# **JWT Authorization Guard — FastAPI + React**

This is a basic project to understand how **JWT (JSON Web Token)** authentication works using **FastAPI** and **React**.

It is **not connected to a real backend or database** — usernames and passwords are hardcoded in the Python code (`main.py`).  
The next step in development would be to integrate a real backend and dynamic user handling.

---

## **Tech Stack**
- **Backend**: FastAPI + JWT (`python-jose`)
- **Frontend**: React + Axios + React Router
- **Styling**: Custom CSS with a pastel theme

---

## **How It Works**
1. Login form sends username/password  
2. Backend checks hardcoded credentials  
3. If valid, returns a JWT  
4. Token is stored on the frontend  
5. Protected route can be accessed using the token in headers
