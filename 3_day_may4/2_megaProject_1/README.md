<!--
Y:
/
├── src/
│ ├── shortener/ # Link shortener logic
│ │ └── index.js
│ ├── vault/ # Password vault logic
│ │ └── index.js
│ └── utils/ # Common utilities (e.g., ID gen, crypto)
│ └── logger.js
│
├── cli/
│ ├── shortener.js # CLI for link shortener
│ └── vault.js # CLI for password vault
│
├── api/
│ ├── routes/
│ │ ├── shortener.routes.js
│ │ └── vault.routes.js
│ ├── controllers/
│ │ ├── shortener.controller.js
│ │ └── vault.controller.js
│ ├── middleware/
│ └── app.js # Express app
│
├── config/
│ ├── db.config.js
│ ├── env.config.js
│ └── logger.config.js
│
├── services/
│ └── email.service.js # Placeholder for future
│
├── models/ # For any SQLite schemas
│ ├── shortener.model.js
│ └── vault.model.js
│
├── .env
├── package.json
└── README.md
-->

# /src/shortener/index.js: 🔧 Responsibilities =>

    Generate unique short code (e.g., using nanoid or custom hash)
    Save mapping to SQLite (longURL <-> shortCode)
    Retrieve long URL from short code
    List all saved URLs
