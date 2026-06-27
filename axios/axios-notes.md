# Explore Axios

## 0. Axios GET syntax

> axios.get(url, config)
--- 

## 1. Sending Query Parameters

Instead of writing: 

> axios.get('/users?page=1&limit=20');


Use:

```js
axios.get('/users', {
    params: {
        page: 1,
        limit: 20
    }
});
```

> Axios automatically generates: /users?page=1&limit=20

---

## Sending Headers

> Headers go inside the config object.

- Example:

```js
await axios.get('/users', {
    headers: {
        Authorization: 'Bearer abc123'
    }
});
```

## Sending Timeout 

```js
await axios.get('/users', {
    timeout : 5000
});
```

---

## Axios POST syntax

> axios.post(url, data, config)