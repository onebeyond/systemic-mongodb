[![Maintainability](https://api.codeclimate.com/v1/badges/88bb5737814cba7db3e5/maintainability)](https://codeclimate.com/github/onebeyond/systemic-mongodb/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/88bb5737814cba7db3e5/test_coverage)](https://codeclimate.com/github/onebeyond/systemic-mongodb/test_coverage)

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
