Explanation of Functions:
Computer Documentation Example
=============================

This repository contains examples of various JavaScript object manipulation techniques, including:

- Merging objects (shallow and deep merge)
- Copying objects (shallow and deep copy)
- Mutating objects
- Merging arrays

Overview
--------

The examples use three computer objects representing different operating systems and their hardware/software configurations:

1. **Linux** (Ubuntu 22.04)
2. **Mac** (macOS Monterey)
3. **Windows** (Windows 11)

Each object contains various properties, including nested objects for hardware details and arrays for software lists.

Functions
---------

The file also includes functions to manipulate these objects:

- **shallowMerge**: Merges two objects at the top level.
- **deepMerge**: Merges two objects deeply, including nested objects and arrays.
- **shallowCopy**: Creates a shallow copy of an object.
- **deepCopy**: Creates a deep copy of an object, including nested objects.
- **mutateObject**: Modifies an object's properties.
- **mergeArrays**: Concatenates two arrays.

How to Use
-----------

Clone the repository, then run `computers.js` using Node.js:

```bash
node computers.js
