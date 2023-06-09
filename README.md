# MEAN Stack REST API template using TypeScript
This is a simple way to get started in a mean project.

This project includes:
- express
- mongoose
- nodemailer
- dotenv
- cors
- bcrypt
- helmet
- debug
- cookie-parser
- http-errors
- jsonwebtoken
- mongo-store
- morgan
- auth routes (signup & login)
- auth middleware (authorization skeleton, authenticationRequired and apiToken required)
- basic user model
- env.example with every used variable

# Commands

```sh
npm start # build the project (prestart script) and start the server

npm run start:dev # start the project in watch mode (nodemon)

npm run serve # start the project without building the project (ts-node)

npm run build # builds the project to ./dist

npm run debug # turns on the debug mode and runs npm run start

npm run dev # turns on the debug mode and runs npm run start:dev
```

# Endpoints

I've included an [Insomnia json](./mean-api-template.json) so you can test every single endpoint by yourself.

# Contributing

See [CONTRIBUTING](./CONTRIBUTING.md) for information on how to contribute to the project

# Changelog

See the [CHANGELOG](./CHANGELOG.md) to see how is the project progressing.

# Disclaimer

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>. 