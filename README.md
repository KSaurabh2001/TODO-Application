# ✅ TODO App – Backend API with Spring Boot

A simple yet powerful backend application built with **Java**, **Spring Boot**, and **MySQL** to manage daily tasks. This REST API handles all basic task operations — create, update, delete, and mark as done — making it ideal for learning CRUD, JPA, and RESTful practices.

---

## 🚀 Features

- 📝 Create tasks with title and description
- ✏️ Update existing tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 📋 List all tasks (by status or ID)

---

## 🧰 Tech Stack

| Layer     | Tech Stack                              |
|-----------|------------------------------------------|
| Language  | Java                                     |
| Backend   | Spring Boot, Spring MVC, Spring Data JPA |
| Database  | MySQL                                    |
| Tools     | Maven, Postman, Git, GitHub              |

---

## 📂 Project Structure

todo-app/
├── src/
│ ├── main/
│ │ ├── java/com/todo/... (controllers, services, models)
│ │ └── resources/application.properties
└── pom.xml


---

## 📑 API Endpoints

| Method | Endpoint        | Description               |
|--------|-----------------|---------------------------|
| POST   | `/api/tasks`    | Create a new task         |
| GET    | `/api/tasks`    | Get all tasks             |
| GET    | `/api/tasks/{id}` | Get a task by ID        |
| PUT    | `/api/tasks/{id}` | Update a task           |
| DELETE | `/api/tasks/{id}` | Delete a task           |

---

## 🧠 Learning Highlights

- Designed CRUD REST APIs using Spring Boot
- Practiced layered architecture and service abstraction
- Worked with MySQL and Spring Data JPA
- Strengthened backend development skills through real use-case

---

## 🧪 How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/KSaurabh2001/TODO-Application.git
cd TODO-Application
```
## 🧪  Configure MySQL database

```spring:
  datasource:
    url: jdbc:mysql://localhost:3306/todo_db
    username: yourUsername
    password: yourPassword
```

## 📬 Contact
📧 saurabh.kumar20010218@gmail.com
🔗 GitHub: KSaurabh2001
