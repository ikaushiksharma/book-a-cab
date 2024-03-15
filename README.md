# Cab Booking Application

<p>
<img src="https://img.shields.io/badge/ReactJS-blue?logo=react">
<img src="https://img.shields.io/badge/NextJs-black?logo=vercel">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">

</p>

**Deployment on Vercel:**

![aws-s3](https://img.shields.io/badge/Vercel-black?logo=vercel)

**Visit The Website Now:**
[Visit Now](https://cab.kaushiksharma.tech) 🚀

**Backend Api Hosted Link:** [Backend API](https://cabapi.kaushiksharma.tech/)

This is a cab booking app, which is built using ReactJS and NodeJS. For the frontend, NextJS is used, and for the backend, NodeJS is used. The data is stored in MongoDB. The app is built to book a cab and get the shortest path and time. The user can choose the location and get the shortest path and time. The user can also choose from multiple cabs and choose the rate according to his/her own will. The user will get an email notification of booking confirmation. The admin can view all the bookings and cabs. The admin can also edit the cab pricing and details. The app is built using ReactJS, NextJS, NodeJS, MongoDB, and Nodemailer.

## 📌 Prerequisites

Before starting, make sure you have the following installed on your system:

- Node.js
- npm
- MongoDB
- Git

## 🚀 Features

- No Hassle of Login or Registration
- Multiple locations available
- Always get the shortest path and time
- Choose from Multiple Cabs
- User can choose rate on his/her own will
- Email Notification of Booking Confirmation
- Admin can view all the bookings
- Admin can view all the cabs
- Admin can edit cab pricing and details
- User friendly UI

## Local Setup

```terminal
$ git clone https://github.com/ikaushiksharma/book-a-cab.git
```

Keep in Mind, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client Setup

### Prepare your secrets

```terminal
NEXT_PUBLIC_BACKEND_API=http://localhost:8080
```

## Client Start

```terminal
$ cd client                     // go to client folder
$ yarn && yarn dev              // using yarn
$ npm install && npm run dev    // install packages using yarn
$ yarn build && yarn start      // for production
// note: Build files are saved in the /build folder
```

## Server Setup

### Prepare your secrets

```terminal
PORT=8080
MONGO_URI=<MONGO URI>
MAIL_USER=<Your Email Address>
MAIL_PASS=<Your App Password>
MAIL_SECURE=true
MAIL_SERVICE=gmail
MAIL_HOST=smtp.gmail.com
```

### Start Server

```terminal
$ cd server                     // go to server folder
$ yarn && yarn dev              // using yarn
$ npm install && npm run dev    // install packages using yarn
$ yarn build && yarn start      // for production
// note: Build files are saved in the /dist folder
```

# Dependencies(npm packages used)

| Client-side                                    | Server-side         |
| ---------------------------------------------- | ------------------- |
| @headlessui/react: ^1.7.18                     | cors: ^2.8.5        |
| @heroicons/react: ^2.1.1                       | dotenv: ^16.4.5     |
| @splidejs/react-splide: ^0.7.12                | express: ^4.18.2    |
| @splidejs/splide-extension-auto-scroll: ^0.5.3 | mongoose: ^8.2.1    |
| antd: ^5.15.2                                  | morgan: ^1.10.0     |
| axios: ^1.6.7                                  | nodemailer: ^6.9.12 |
| lucide-react: ^0.357.0                         | typescript: ^5.2.2  |
| react: ^18                                     |                     |
| react-dom: ^18                                 |                     |
| react-hot-toast: ^2.4.1                        |                     |
| react-icons: ^5.0.1                            |                     |

# Snapshots

### Cab Booking Landing Page

![ss1](https://cdn.cosmicjs.com/bdf02680-e2be-11ee-a01e-c56f185aea7b-Screenshot_15-3-2024_164718_cab.kaushiksharma.tech.jpeg)

### View All Bookings

![ss2](https://cdn.cosmicjs.com/a5462560-e2c0-11ee-a01e-c56f185aea7b-Screenshot_15-3-2024_17853_cab.kaushiksharma.tech.jpeg)

### View and Edit Cabs

![ss2](https://cdn.cosmicjs.com/bdf35ad0-e2be-11ee-a01e-c56f185aea7b-Screenshot_15-3-2024_164735_cab.kaushiksharma.tech.jpeg)

### Responsive Web Design

![ss5](https://cdn.cosmicjs.com/cae302d0-e2bf-11ee-a01e-c56f185aea7b-Screenshot_15-3-2024_16480_cab.kaushiksharma.tech-1.jpeg)
![ss7](https://cdn.cosmicjs.com/92f90bd0-e2bf-11ee-a01e-c56f185aea7b-Screenshot_15-3-2024_17029_cab.kaushiksharma.tech.jpeg)

### Booking Confirmation Mail

![ss4](https://cdn.cosmicjs.com/07661480-e2c1-11ee-a01e-c56f185aea7b-Screenshot-49.png)

## BUGS

[Create new Issues](https://github.com/ikaushiksharma/book-a-cab.git) (preferred)
