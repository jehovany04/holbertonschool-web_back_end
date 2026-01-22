# ES6 Promises

## Tasks

### 0. Keep every promise you make and only make promises you can keep
**File:** `0-promise.js`

Return a Promise object.

### 1. Don't make a promise...if you know you can't keep it
**File:** `1-promise.js`

Return a Promise object.

### 2. Catch me if you can!
**File:** `2-then.js`

Using the function prototypes `getResponseFromAPI`, append three handlers to the already-made promise.

### 3. Handle multiple successful promises
**File:** `3-all.js`

Import `uploadPhoto` and `createUser` from `utils.js`.

### 4. Simple promise
**File:** `4-user-promise.js`

Using this prototype, return a resolved promise with this object:
```javascript
{
  id: 4,
  message: 'User created in DB'
}
```

### 5. Reject the promises
**File:** `5-photo-reject.js`

Write and export a function that rejects a promise with an Error when the filename is empty.

### 6. Handle multiple promises
**File:** `6-final-user.js`

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `utils.js`.

### 7. Load balancer
**File:** `7-load_balancer.js`

Write a function that returns the value of the promise that resolved first.

### 8. Throw error / try catch
**File:** `8-try.js`

Write a function that wraps and executes the queue of promises.

### 9. Throw an error / try catch
**File:** `9-try.js`

Write a function that divides 90 by the size of `errorMsg`.
