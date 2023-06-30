# Project Name: Promptosphere
================================

## Overview
--------

Promptosphere is an open-source web application built with Next.js 13 for both the front end and the back end. This document provides step-by-step instructions for setting up the project locally.

## Prerequisites
-------------

Before setting up Promptosphere locally, ensure you have the following prerequisites installed:

-   Node.js (version 14 or above)
-   npm (Node Package Manager)
-   MongoDB (Community Edition)

## Installation Steps
------------------

### 1\. Clone the Repository

Start by cloning the Promptosphere repository to your local machine using the following command:


`git clone https://github.com/xsankalp13/PromptoSphere`


### 2\. Install Dependencies

Navigate to the project directory and install the required dependencies using npm:


`cd promptosphere
npm install`


### 3\. Obtain Google API Credentials

Promptosphere uses Google Sign-In for authentication. To obtain the necessary credentials:

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project or select an existing one.
3.  Enable the Google Sign-In API for your project.
4.  In the left sidebar, navigate to Credentials.
5.  Click on Create Credentials and select OAuth client ID.
6.  Configure the OAuth consent screen by providing a name and email address.
7.  Select Web Application as the application type.
8.  Enter a name for your client ID (e.g., "Promptosphere").
9.  Under Authorized JavaScript origins, add `http://localhost:3000`.
10. Under Authorized redirect URIs, add `http://localhost:3000/api/auth/callback/google`.
11. Click Create to generate the client ID and client secret.
12. Copy the generated Client ID and Client Secret.

### 4\. Configure Environment Variables

#### 1\. Rename `.env.example` file to `.env` file in the project root directory and add the following environment variables:

`GOOGLE_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
MONGODB_URI=YOUR_MONGODB_URI
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET`

#### 2\. To create NEXTAUTH_SECRET run this command here: [openssl tool](https://www.cryptool.org/en/cto/openssl)

`openssl rand -base64 32`

#### 2\. or you can use this secret key:

`ncb3VLkqSbXL3va+TVquTF+HinIdD46vBpE/3/9IXm4=`

#### 3\. Replace the placeholders

(`YOUR_GOOGLE_CLIENT_ID`, `YOUR_GOOGLE_CLIENT_SECRET`, `YOUR_MONGODB_URI`, and `YOUR_NEXTAUTH_SECRET` ) 

with the values obtained from the previous step.

### 5\. Set Up MongoDB

Make sure MongoDB is installed and running on your local machine. If not, refer to the MongoDB documentation for installation instructions.

### 6\. Start the Application

Start the Promptosphere application by running the following command:


`npm run dev`


### 7\. Access Promptosphere

Open your web browser and navigate to `http://localhost:3000` to access the Promptosphere web application.

Congratulations! You have successfully set up Promptosphere locally.

Please note that this documentation assumes a basic understanding of setting up a Next.js application and working with environment variables. If you encounter any issues during the setup process, refer to the Next.js and MongoDB documentation or consult the community for further assistance.
