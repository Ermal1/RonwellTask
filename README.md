# RonwellTask

## Setup instructions
1. Clone the repository:
```bash
git clone https://github.com/Ermal1/RonwellTask.git
```

2. Initialize npm and TypeScript
```bash
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

3. Install packages
```bash
npm install express pg reflect-metadata
npm install typeorm class-transformer class-validator
npm install dotenv
npm install @types/express --save-dev
```
4. Set Up PostgreSQL Database
```bash
Install PostgreSQL 
CREATE DATABASE eshop;
In .env file set your database settings, like:
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=eshop
```

