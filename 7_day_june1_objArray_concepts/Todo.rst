---
### **TODO.rst**

```rst
TODO: Refactoring `computers.js`
===============================

Goal
----

The goal is to refactor the single `computers.js` file into three separate files for better organization and maintainability:
1. **`arrays.js`**: Contains all the arrays (e.g., `computers`, `software`, etc.).
2. **`functions.js`**: Contains all the functions (`shallowMerge`, `deepMerge`, `mutateObject`, etc.).
3. **`testing.js`**: Contains the testing logic to invoke and demonstrate the functions.

Steps
-----

### 1. **Separate Arrays**
- Extract all objects (`linux`, `mac`, `windows`, `computerStore`) into a separate file, `arrays.js`.
- Ensure that all arrays and nested objects are maintained, but the file will only contain the raw data.

### 2. **Separate Functions**
- Extract all functions (`shallowMerge`, `deepMerge`, `mutateObject`, etc.) into a separate file, `functions.js`.
- Ensure that the functions are reusable, and remove any testing or example code from this file.
- Export these functions to be used in other files (e.g., `module.exports = { shallowMerge, deepMerge, ... };`).

### 3. **Separate Testing**
- Create a `testing.js` file to contain the testing logic, such as invoking the functions and displaying results.
- Import arrays and functions into this file and call them accordingly.
- Use `console.log` or assertions to demonstrate expected outputs.

### 4. **Final Clean-Up**
- In `computers.js`, only import the necessary modules (`arrays.js`, `functions.js`, and `testing.js`).
- Ensure that the final `computers.js` is as clean as possible, with minimal code other than `require()` statements and testing logic.

Expected File Structure
-----------------------

/computers
/arrays.js
/functions.js
/testing.js
/computers.js (clean file)
README.rst
TODO.rst

Notes
-----

- Ensure that **no mutations** are done to the original objects.
- Verify that all functions are correctly imported and used in `testing.js`.
