# Explore Axios

## 0. Axios GET syntax

> axios.get(url, config)

---

## 1. Sending Query Parameters

Instead of writing:

> axios.get('/users?page=1&limit=20');

Use:

```js
axios.get("/users", {
  params: {
    page: 1,
    limit: 20,
  },
});
```

> Axios automatically generates: /users?page=1&limit=20

---

## Sending Headers

> Headers go inside the config object.

- Example:

```js
await axios.get("/users", {
  headers: {
    Authorization: "Bearer abc123",
  },
});
```

## Sending Timeout

```js
await axios.get("/users", {
  timeout: 5000,
});
```

---

## Axios POST syntax

> axios.post(url, data, config)

## Error Handling

```js
console.log(error.message);

console.log(error.response?.status);

console.log(error.response?.data);
```

## Interceptors

### What is an Interceptor?

> An interceptor is a function that Axios executes:

- Before sending a request (Request Interceptor)
- After receiving a response (Response Interceptor)

- Think of it as middleware for Axios.

```
Your Code
    │
    ▼
Request Interceptor
    │
    ▼
HTTP Request
    │
    ▼
Server
    │
    ▼
HTTP Response
    │
    ▼
Response Interceptor
    │
    ▼
Your Code
```

> Why Do We Need Interceptors?

Imagine your application makes 100 API calls.

> Without interceptors:

```js
await axios.get(url1, {
  headers: {
    Authorization: token,
  },
});

await axios.post(url2, body, {
  headers: {
    Authorization: token,
  },
});

await axios.patch(url3, body, {
  headers: {
    Authorization: token,
  },
});
```

> You're repeating yourself.

> Request Interceptor

- A request interceptor runs before Axios sends the HTTP request.

```js
axios.interceptors.request.use((config) => {
  console.log("Request is about to be sent");
  return config; //Axios expects the interceptor to return the request configuration.
});
```

> What is config?

- Every Axios request is converted into a configuration object.

```js
await axios.get('/users', {
    headers: {
        Authorization: 'Bearer abc'
    }
});

{
    method: 'get',
    url: '/users',
    headers: {
        Authorization: 'Bearer abc'
    }
}
```

---

## Axios Instances

```js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
```

Now:

Instead of:

```js
await axios.get(
    'https://jsonplaceholder.typicode.com/users'
);
```

> You simply write:

```js
await api.get('/users');
```

*Notice:*

- The instance automatically prefixes:

> https://jsonplaceholder.typicode.com
