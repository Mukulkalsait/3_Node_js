// Define the computer objects with hardware details as arrays and nested objects

const linux = {
  name: 'Linux',
  version: 'Ubuntu 22.04',
  hardware: {
    cpu: {
      brand: 'Intel',
      model: 'Core i7-14900HX',
      generation: '14th Gen',
      speed: '3.5 GHz',
      cores: 8,
    },
    ram: '16GB',
    storage: {
      type: 'SSD',
      capacity: '1TB',
    },
    gpu: 'NVIDIA GTX 1650',
  },
  software: ['Firefox', 'VSCode', 'Gimp'],
  isEnterprise: false,
};

const mac = {
  name: 'Mac',
  version: 'macOS Monterey',
  hardware: {
    cpu: {
      brand: 'Apple',
      model: 'M1 Pro',
      generation: 'Custom',
      speed: '3.2 GHz',
      cores: 10,
    },
    ram: '32GB',
    storage: {
      type: 'SSD',
      capacity: '512GB',
    },
    gpu: 'Apple M1 Pro Integrated',
  },
  software: ['Safari', 'Xcode', 'Photoshop'],
  isEnterprise: true,
};

const windows = {
  name: 'Windows',
  version: 'Windows 11',
  hardware: {
    cpu: {
      brand: 'AMD',
      model: 'Ryzen 9 5900X',
      generation: '5th Gen',
      speed: '4.8 GHz',
      cores: 12,
    },
    ram: '32GB',
    storage: {
      type: 'SSD',
      capacity: '2TB',
    },
    gpu: 'NVIDIA RTX 3080',
  },
  software: ['Edge', 'Visual Studio', 'Blender'],
  isEnterprise: true,
};

// Example of a deeply nested object
const computerStore = {
  storeName: 'TechWorld',
  location: 'Downtown',
  computers: [linux, mac, windows], // Array of computer objects
  employees: [
    {
      name: 'Alice',
      role: 'Sales Manager',
      hardware: {
        cpu: 'Intel i5',
        ram: '8GB',
      },
    },
    {
      name: 'Bob',
      role: 'Tech Support',
      hardware: {
        cpu: 'AMD Ryzen 5',
        ram: '16GB',
      },
    },
  ],
};

// ========================== FUNCTIONS ==========================

/**
 * Shallow Merge Function
 * Merges two objects at the top level, but does not merge nested objects or arrays.
 * @param {Object} obj1 - First object to merge
 * @param {Object} obj2 - Second object to merge
 * @returns {Object} - A new object containing the merged properties
 */
function shallowMerge(obj1, obj2) {
  return { ...obj1, ...obj2 }; // Copies all properties from obj1 and obj2 into a new object
}

/**
 * Deep Merge Function
 * Merges two objects deeply, including nested objects and arrays.
 * @param {Object} obj1 - First object to merge
 * @param {Object} obj2 - Second object to merge
 * @returns {Object} - A new object with merged properties and nested structures
 */
function deepMerge(obj1, obj2) {
  // Create a new object to avoid mutation of the originals
  const merged = { ...obj1 };

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
        // Recursively merge nested objects
        merged[key] = deepMerge(obj1[key] || {}, obj2[key]);
      } else if (Array.isArray(obj2[key])) {
        // Concatenate arrays
        merged[key] = [...(obj1[key] || []), ...obj2[key]];
      } else {
        // Otherwise, overwrite with obj2's value
        merged[key] = obj2[key];
      }
    }
  }

  return merged;
}

/**
 * Shallow Copy Function
 * Creates a shallow copy of an object (does not deep clone nested objects).
 * @param {Object} obj - The object to copy
 * @returns {Object} - A shallow copy of the input object
 */
function shallowCopy(obj) {
  return { ...obj }; // Using spread operator to copy properties at the top level
}

/**
 * Deep Copy Function
 * Creates a deep copy of an object, including nested objects and arrays.
 * @param {Object} obj - The object to copy
 * @returns {Object} - A deep copy of the input object
 */
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return primitive values as is
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy); // Copy each element of the array
  }

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]); // Recursively copy each property
    }
  }

  return copy;
}

/**
 * Mutation Example
 * Mutates the original object by adding a new property or modifying an existing one.
 * @param {Object} obj - The object to mutate
 * @param {String} key - The property to add or modify
 * @param {Any} value - The new value to assign to the property
 */
function mutateObject(obj, key, value) {
  obj[key] = value; // Directly modifying the original object
}

/**
 * Check if an object is mutated
 * @param {Object} original - The original object
 * @param {Object} mutated - The mutated object
 * @returns {Boolean} - Returns true if the object was mutated
 */
function isObjectMutated(original, mutated) {
  return original !== mutated; // If the objects are not the same, mutation has occurred
}

/**
 * Merge Arrays Function
 * Concatenates two arrays.
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} - A new array that is the concatenation of arr1 and arr2
 */
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]; // Concatenate both arrays without modifying the originals
}

// ========================== TESTING ==========================

// Shallow merge example
const mergedShallow = shallowMerge(linux, windows);
console.log('Shallow Merge Result:', mergedShallow);

// Deep merge example
const mergedDeep = deepMerge(linux, mac);
console.log('Deep Merge Result:', mergedDeep);

// Deep copy example
const linuxCopy = deepCopy(linux);
mutateObject(linuxCopy, 'version', 'Ubuntu 23.04');
console.log('Original Linux:', linux);
console.log('Modified Linux Copy:', linuxCopy);

// Checking mutation
console.log('Is Linux Mutated? ', isObjectMutated(linux, linuxCopy));

// Merging arrays
const allSoftware = mergeArrays(linux.software, mac.software);
console.log('Merged Software List:', allSoftware);
