# systemic-mongodb
A [systemic](https://github.com/guidesmiths/systemic) mongodb component

## Usage
```js
const System = require('systemic')
const mongodb = require('systemic-mongodb')

new System()
    .configure({
        mongodb: {
            url: 'mongodb://127.0.0.1/example',
            options: {
                server: {
                    poolSize: 5
                }
            },
            showConnectionString: false 
        }
    })
    .add('logger', console)
    .add('mongodb', mongodb()).dependsOn('config', 'logger')
    .start((err, components) => {
        // Do stuff with components.mongodb
    })
```

### Parameters
- **url** Use *mongodb://* [connection string](https://docs.mongodb.com/manual/reference/connection-string/)
- **showConnectionString** Show connection string on logs, **false** by default
- **options** Options passed to [MongoClient](https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html)
