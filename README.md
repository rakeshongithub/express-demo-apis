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
`npm install -g nodemon`

`npm install` to get the dependencies

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Routes Available within the Application

1. Home or Book lists [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
2. Book lists [http://localhost:3000/#!/books](http://localhost:3000/#!/books) to view all available books in store.<br>
4. Book detail [http://localhost:3000/#!/books/detail/id](http://localhost:3000/#!/books/detail/id).<br>
3. Add new book [http://localhost:3000/#!/books/add](http://localhost:3000/#!/books/add).<br>
4. Edit existing book info [http://localhost:3000/#!/books/edit/id](http://localhost:3000/#!/books/edit/id).


# APIs Expose from Node
### Books
1. Books list. `GET` [http://localhost:3000/api/books](http://localhost:3000/api/books).<br>
2. Book Detail. `GET` [http://localhost:3000/api/books/id](http://localhost:3000/api/books/:id).<br>
3. Add Book. `POST` [http://localhost:3000/api/books/](http://localhost:3000/api/books/).<br>
4. Edit Book. `PUT` [http://localhost:3000/api/books/id](http://localhost:3000/api/books/:id).<br>
5. Delete Book. `DELETE` [http://localhost:3000/api/books/id](http://localhost:3000/api/books/:id).<br>

### Geners
1. Geners list. `GET` [http://localhost:3000/api/geners](http://localhost:3000/api/geners).<br>
2. Gener Detail. `GET` [http://localhost:3000/api/geners/id](http://localhost:3000/api/geners/:id).<br>
3. Add Gener. `POST` [http://localhost:3000/api/geners/](http://localhost:3000/api/geners/).<br>
4. Edit Gener. `PUT` [http://localhost:3000/api/geners/id](http://localhost:3000/api/geners/:id).<br>
5. Delete Gener. `DELETE` [http://localhost:3000/api/geners/id](http://localhost:3000/api/geners/:id).




