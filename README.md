## About

This is a simple React + TypeScript project demonstrating the usage of React Query for data fetching and state management in React applications.

## Table of Contents

* Project Setup

* Project Purpose

* React Query Basics

* Key React Query Properties

* Running the Project

* Contributing

## Installation Guide

Install Node.js and npm: If you haven’t already, you’ll need to install Node.js and npm (which comes with Node.js). You can download Node.js from the official website. To check if you have Node.js installed, run this command in your terminal:

### node -v

To confirm that you have npm installed, run:

### npm -v

Clone the Repository: Navigate to the directory where you want to clone the repository and run the following command:

### git clone https://github.com/Madhumitha-Ganesh/tanstack-query.git

Navigate to the Project Directory: Change to the directory of the project you want to work on. For example, if you want to work on the first project, you would do:

### cd tanstack-query

Install Dependencies: Once you’re in the project directory, you can install the necessary dependencies by running:

### npm install

Start the Development Server: After all dependencies are installed, you can start the development server by running:

### npm start

Now, you should be able to see the project running at http://localhost:3000 in your web browser.

## Project Purpose

# The purpose of this project is to:

* Demonstrate the basics of React Query

* Understand how to fetch, cache, and manage server state in a React app

* Explore key React Query properties and hooks

This is ideal for developers who want to quickly learn how to integrate React Query into a TypeScript + React project.

### React Query Basics

React Query is a powerful library for data fetching and caching in React. It helps reduce boilerplate code for server state management and provides:

* Automatic caching and re-fetching

* Background updates

* Error handling and retries

### Core Concepts:

* QueryClient:
The central piece that manages all queries and cache. You create it once and provide it via QueryClientProvider.

* QueryClientProvider:
Wraps your app to make the QueryClient available to all components.

* useQuery:
React hook to fetch and cache data.

const { data, error, isLoading } = useQuery(['key'], fetchDataFunction);


### Query Properties:

#### Property	Description
```
data	The data returned from the server
```
```
error	Error information if the request fails
```
```
isLoading	Boolean flag indicating if the request is in progress
```
```
isFetching	Boolean flag if the query is fetching in background
```
```
staleTime	Time until data is considered stale
```
```
cacheTime	Time before cached data is garbage collected
```
