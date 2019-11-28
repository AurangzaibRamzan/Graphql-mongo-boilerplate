# Graphql-mongo-boilerplate


## tecnologies 

- Apollo-Server 
- Graphql
- Mongodb

Commands  :

## Install NodeModules
  - `yarn install`

## Starts the development server.
   - `yarn watch`

## Builds the app for production.
  - `yarn build`

## Runs the built app in production mode.
  - `yarn start`

## Runs the linter.
  - `yarn lint`
  
  - `yarn lint-fix`

🚀 Server ready at http://localhost:4000/


#### Test Mutation
```js
 mutation{
  addUser(name:"GrapQL User"){
    error
    data{
      name
    }
  }
}

 ```
 
 #### Test Query 
```js
query{
  users{
    error
    data{
      name
    }
  }
}

 ```