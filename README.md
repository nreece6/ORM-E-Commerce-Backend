# ORM-E-Commerce-Backend


![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)



## Descritption

This application is an E Commerce Back End develloped using Express, MySQL, and Sequelize. The application takes advantage of multiple tables within a database and interrelationalship connections to build a connection between products, categories, and tags.

The application allows the user to view all of the products, categories, and tags for the E-Commerce site, view the categories and tags for the products, view individual products, categories, and tags, as well as add/edit/delete data.


## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Questions](#questions)
  

## Installation

To install this application, navigate to the repo on my github account https://github.com/nreece6/ORM-E-Commerce-Backend. Clone the repo and open the folder location of the program in the terminal. You must have node installed in order to run the application. You must also use 

```
npm install
```

In your shell to install all necessary dependencies.

Once you have the repo location open in your terminal, run the program with 

```
node server.js
 ``` 
Open the application in Insomnia using the route localhost:3001/api/? where ? is products, tags, or categories.

## Usage

You must have node.js, the express package, the mysql2 package, and the sequilize package installed to run this application.

SQL credentials have been witheld. Create a .env pointing to your own SQL credentials. Run MySQL, source the schema 

```
source db/schema.sql
```
and seed the tables

```
npm run seed
```

Video example of usage once database has been created and seeded available at:

https://drive.google.com/file/d/1QtURkXapdvdzJBgWolpyRNfE29YHbh5e/view  

Run the program in the terminal using 

```
node server.js
```

Follow the routes /api/products / /api/tags / /api/categories to view existing table data with the appropriate relationship information. Using the PUT method, you can add new data to the tables if entered following the json object format.

You can also view individual rows from the tables by using the above routes and adding the ID you wish to view to the end (ex: localhost:3001/api/products/2). Using this same route format you can also update data (PUT) or delete data (DELETE).


## Contributing

To contribute, clone this repo and push any changes.


## License

https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

MIT License

Copyright (c) 2021 Othneil Drew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Tests

Tests available in the utils folder located withing the repository for this application.

## Questions


For any questions, please view my github account:

https://github.com/nreece6

or you can reach me at:

reece.nick24@gmail.com