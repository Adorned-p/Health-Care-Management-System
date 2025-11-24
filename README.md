# Health-Care-Management-System

A web-based healthcare management platform built using **Java Servlets, JSP, and JDBC**.  
The system enables **patients** to book appointments, **doctors** to manage schedules and records, and **administrators** to oversee operations—all through dedicated dashboards.

---

## ✅ Features

###  Admin
- Manage users (create/update/delete)
- Oversee appointment scheduling
- Update system settings
- View performance and usage analytics

###  Doctor
- Manage availability schedules
- Access/update patient medical records
- Confirm or update appointments
- View patient feedback

###  Patient
- Book, reschedule, and cancel appointments
- View medical history
- Manage personal profile
- Track appointment history

---

##  Tech Stack

### **Backend**
- Java Servlets & JSP
- JDBC for database connectivity
- Servlet container: **Apache Tomcat**

### **Database**
- MySQL
- Tables such as:
  - `users`
  - `appointments`
  - `patient_records`
  - `feedback`

### **Frontend**
- React, Tailwind, React router 

- JSP for dynamic pages

---

##  Installation & Setup

### ✅ Prerequisites
- JDK 17 (or preferred version)
- Apache Tomcat 9/10
- MySQL Server
- IDE: Eclipse / IntelliJ / NetBeans

---

### 🔹 1. Clone the Repository
```bash
https://github.com/Adorned-p/Health-Care-Management-System.git
cd online-healthcare-management
```

---

### 🔹 2. Configure Database (MySQL)

Create database:
```sql
CREATE DATABASE healthcare_db;
```

Import schema:
```sql
source database/schema.sql;
```

Update DB credentials in:
```
/src/main/java/com/app/util/DBConnection.java
```

Example:
```java
private static final String URL = "jdbc:mysql://localhost:3306/healthcare_db";
private static final String USER = "root";
private static final String PASSWORD = "yourpassword";
```

---

### 🔹 3. Deploy on Tomcat

#### Using Eclipse:
1. File → Import → Dynamic Web Project
2. Add project to Tomcat server
3. Run → Run on Server

App URL:
```
http://localhost:8080/healthcare
```

---

##  Folder Structure

```
project-root/
├── src/
│   ├── com.app.controller/   # Servlets
│   ├── com.app.dao/          # JDBC data access
│   ├── com.app.model/        # POJO classes
│   ├── com.app.util/         # DB connection helper
├── WebContent/
│   ├── views/                # JSP pages
│   ├── assets/               # CSS/JS/images
│   └── WEB-INF/
│       └── web.xml           # Servlet configuration
├── database/
│   └── schema.sql
└── README.md
```

---

##  Usage

### Login roles:
- **Admin** → manage all users & appointments
- **Doctor** → view/update schedules & patient records
- **Patient** → book & manage appointments

---

##  Future Enhancements

- Email/SMS notifications
- Prescription uploads
- Role-based authentication filters
- Pagination & search in dashboards
- REST API integration

---

##  Contribution

1. Fork the repo  
2. Create a feature branch  
3. Submit a pull request 
