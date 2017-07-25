# MEAN Demo App
This is a sample MEAN demo app with full CRUD functionality.

# Mongo
Download and Install [https://www.mongodb.com/](Mongodb) in local system if not available and following the below steps.

1. Create db named `bookstore` and collections name `books` & `geners`.<br>
2. Run the `mongod`. It will `waiting for connections on port 27017`.

As soon as application will run mongodb will connect with node backend services.

# Available Scripts
In the project directory, you can run:

Install nodemon globally.
`yarn add global nodemon`

`yarn` or `yarn install` to get the dependencies

### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `yarn lint`
For code linting (used eslint recommended rules). Check against `'app.js' 'route.js' 'config.js' 'server/**/*.js' 'public/**/*.js'`
0 Errors || 0 Warning


# Routes Available within the Application

1. Home or Book lists [http://localhost:8000](http://localhost:8000) to view it in the browser.<br>
2. Book lists [http://localhost:8000/#!/books](http://localhost:8000/#!/books) to view all available books in store.<br>
4. Book detail [http://localhost:8000/#!/books/detail/id](http://localhost:8000/#!/books/detail/id).<br>
3. Add new book [http://localhost:8000/#!/books/add](http://localhost:8000/#!/books/add).<br>
4. Edit existing book info [http://localhost:8000/#!/books/edit/id](http://localhost:8000/#!/books/edit/id).


# APIs Expose from Node
### Books
1. Books list. `GET` [http://localhost:8000/thesys/api/books](http://localhost:8000/thesys/api/books).<br>
2. Book Detail. `GET` [http://localhost:8000/thesys/api/book/id](http://localhost:8000/thesys/api/book/5964609e9d6991085acec4c2).<br>
3. Add Book. `POST` [http://localhost:8000/thesys/api/book/](http://localhost:8000/thesys/api/book/).<br>
4. Edit Book. `PUT` [http://localhost:8000/thesys/api/book/id](http://localhost:8000/thesys/api/book/5964609e9d6991085acec4c2).<br>
5. Delete Book. `DELETE` [http://localhost:8000/thesys/api/book/id](http://localhost:8000/thesys/api/book/5964609e9d6991085acec4c2).<br>



