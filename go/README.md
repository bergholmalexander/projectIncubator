# Work in Progress - Documentation on how to install all dependencies

### Golang  
Download golang from here https://golang.org/ execute as needed.  
Add the following two lines to your `.bash_profile` file or to your pathing in Windows (not sure how to do that, sorry Kenrick)  
`export GOROOT=/usr/local/go`  
`export GOPATH=/path_to_git_repo/projectIncubator/go`
I believe the first line is not too important as long as you choose a desired location. GOPATH *must* be where the go folder in the repo is.
In `/path_to_git_repo/projectIncubator/go`, type the following commands
`go get github.com/gorilla/mux`
`go get github.com/dgrijalva/jwt-go`
`go get go.mongodb.org/mongo-driver/`

### Mongodb
Install mongodb https://docs.mongodb.com/manual/installation/ (not sure if this is actually required?)  
Within `/Users/bergholm/projects/projectIncubator/go` do the following
`mkdir db`  
Start up the mongodb database using
`mongod -dbpath="./db"`  
We can later discuss what path we want the "db" directory to be in.

### Starting up the Server  
From within `/Users/bergholm/projects/projectIncubator/go` run `go run main.go` the terminal should prompt
`Starting the application...` to show that the server is now listening and waiting for requests.

### Server Endpoints
The localhost currently hosts the server on port 12345. We can later choose this to be something else.  
Description | REST Type | Endpoint | Input  
------------ | ------------ | ------------- | -------------  
SignIn - Used to get the JWT Token | POST | `localhost:12345/signin` | `{"username":"user1","password":"password1"}`  
Welcome - | GET | `localhost:12345/welcome` | None - Uses the cookie formed from SignIn  
Refresh - Used by client to get new JWT when near expiry | GET | `localhost:12345/welcome` | None - Uses the JWT from SignIn  
Person - Creates a Person in the MongoDB collection | POST | `localhost:12345/person` | {"firstname": "Kenrick", "lastname": "Yap"} - Creates objectID  
People - Gets all people in MDB collection | GET | `localhost:12345/people` | None  
Person/{id} - Gets a person using an MongoDB ObjectID | GET | `localhost:12345/people/{id}` | None  

# Resources followed

https://www.sohamkamani.com/blog/golang/2019-01-01-jwt-authentication/  
https://www.thepolyglotdeveloper.com/2019/02/developing-restful-api-golang-mongodb-nosql-database/
