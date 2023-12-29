[![freeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)](https://www.freecodecamp.org/)

<p style="text-align: center">
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/></a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript"/></a>
  <a href="http://nextjs.org"><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="NextJS" /></a>
  <a href="http://tailwindcss.com"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" /></a>
  <a href="https://npmjs.com"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" /></a>
  <a href="https://eslint.org"><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" /></a>
  <a href="https://prettier.io"><img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier" /></a>
</p>

# Ticketing App

A full-stack ticketing web application built with NextJS, Tailwind CSS and MongoDB.

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Libraries / Frameworks / Databases Used

- **Application**
    - NextJS
    - Tailwind CSS
- **Database**
    - MongoDB

## Pre-requisite

This project relies on MongoDB Atlas cloud instances for managing resources such as `/shorturl` and `/users`. If you
intend to clone this repository and run it locally, please follow these steps:

1. Create a MongoDB Atlas Account: To get started, you'll need to create an account on MongoDB Atlas, and the good news
   is, it's absolutely free! You can follow the step-by-step instructions in the
   [MongoDB Atlas Tutorial – How to Get Started](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)
   provided by freeCodeCamp to set up your own cluster.
2. Configure Your Environment Variables: After setting up your MongoDB Atlas cluster, you'll need to configure your
   environment variables. To do this, rename the `.env.sample` file in your project directory to `.env`. Then, open the
   `.env` file and insert the MongoDB URI from your Atlas cluster.

Here's what it should look like:

```dotenv
# Database variables
MONGODB_ATLAS_URI=mongodb+srv://<MONGODB_USER>:<MONGODB_PASSWORD>@<MONGODB_CLUSTER_HOST>/<MONGODB_DB_NAME>?retryWrites=true&w=majority
```

Note: In the example snippet above, you'll notice that the URI includes a database name. While this field is technically
optional, it's highly recommended that you create your own database instance on your MongoDB Atlas cluster. This
practice helps maintain organization and clarity in your project.

## Getting Started

1. Clone the repo:
   ```git
   git clone git@github.com:mrarvind90/fcc-ticketing-app.git
   ```
2. Navigate to the repository:
    ```shell
    cd <repository_directory>
    ```
   Change <repository_directory> to the name of the cloned directory.
3. Install Dependencies:
    ```shell
    npm install
    ```
   This command will install all the necessary dependencies for the application.
4. Configure Environment Variables: Rename the `.env.sample` file in your project directory to `.env.local` and update
   it with the
   relevant credentials:
    ```shell
     cp .env.sample .env.local
    ```
5. Run the application:
    ```shell
     npm run dev
    ```

## Future Improvements

While developing this project, there are several areas I plan to focus on for enhancements and refinements
which can be found on [GitHub](https://github.com/mrarvind90/fcc-ticketing-app/issues).

