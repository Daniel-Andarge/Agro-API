<h1 align="center">Welcome to Agro-API 👋</h1>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="y" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/DanielAndarge" target="_blank">
    <img alt="Twitter: DanielAndarge" src="https://img.shields.io/twitter/follow/DanielAndarge.svg?style=social" />
  </a>
</p>

### 🏠 Homepage

![Home](images/Home.png?raw=true)

---

## 📚 Table of Contents

<details>
  <summary>Expand to view</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#screen-shots">Screen Shots</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#show-your-support">Show Your Support</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

---

## About The Project

AgroAPI is a RESTful web service application that provides data and information related to poultry and dairy farming.
In addition, it streamlines the industry’s supply chain by directly connecting farmers with buyers and farm input dealers, effectively eliminating middlemen (brokers) from the process


**NOTE:** The primary focus of this project is to implement best practices in back-end development, The front-end has been designed primarily to facilitate interaction with the back-end. However, it can be enhanced or improved as needed.

### Project Highlights:

- **User Authentication:** Secure sign-up and login with JSON Web Tokens for enhanced data protection.
- **Access Control:** Role-based access control mechanisms for precise user privilege management.
- **Performance Optimization:** Request rate limitations and caching strategies for improved efficiency.
- **Dynamic UI:** User interface built with React.
- **Pagination:** Server-side pagination for optimized data retrieval.
- **Thorough Documentation:** Comprehensive API documentation for ease of use.

### Technologies Utilized:

- **Node.js:** For server-side JavaScript execution.
- **Express.js:** Backend framework for robust API creation.
- **React:** For creating interactive user interfaces.
- **Bootstrap:** For responsive and attractive UI design.
- **Axios:** For efficient API requests.
- **PostgreSQL:** Relational database management.
- **Sequelize ORM:** Seamless interaction with PostgreSQL.
- **JWT (JSON Web Token):** Secure and stateless authentication.
- **SwaggerHub:** Comprehensive API documentation.

---

## Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Express][Express.js]][Express-url]
- [![Node][Node.js]][Node-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![Sequelize ORM][SequelizeORM]][Sequelize-url]
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

---

## Getting Started

### Prerequisites

```sh
   . npm >= 8.6.0
   . node >= 18.0.0

   . Create a PostgreSQL database:
        - Database Name: agroapi
        - Username: admin
        - Password: admin
```

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Daniel-Andarge/Agro-API.git
   ```

2. Install dependencies and start the backend server:

   ```sh
   cd backend
   npm install
   npm start
   ```

3. Install dependencies and start the frontend server:
   ```sh
   cd client
   npm install
   npm start
   ```

---

## Usage

**Open the following ports on your browser:**

- Frontend @ [http://localhost:8081](http://localhost:8081)
- Backend @ [http://localhost:8080](http://localhost:8080)

---

## Screen Shots

### Home

![Home](images/Home.png?raw=true)

### SignUp

![SignUp](images/signup.png?raw=true)

### Login

![Login](images/login.png?raw=true)

### Admin SignUp From Postman

![Admin SignUp](images/admin_Signup.png?raw=true)

### Admin Login

![Admin Login](images/AdminLogin.png?raw=true)
![Admin Home](images/adminHome.png?raw=true)

### Role-Based Profile Screenshot: User Information & Assigned Access Token

![Admin Profile](images/adminBoard.png?raw=true)
![User Profile](images/Role_Based_Profile.png?raw=true)

### Role-Based Content Screenshots: Customized Content Visibility by User Role

![Admin Content](images/admin2.png?raw=true)
![Admin Moderator Content](images/admin3.png?raw=true)
![User Content](images/Role_Based_Content.png?raw=true)

---

### Database Screenshot: Password Encryption Implemented

![Database](https://github.com/Daniel-Andarge/Agro-API/blob/main/images/database.png)

---

## Author

👤 **Daniel Andarge**

- LinkedIn: [Daniel Andarge](https://www.linkedin.com/in/danielandarge/)

---

## Show Your Support

If you find this project useful, give it a ⭐️!

---

## 📝 License

Copyright © 2023 [Daniel Andarge](https://github.com/Daniel-Andarge).

---

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: nodejs.org
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org
[SequelizeORM]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org
