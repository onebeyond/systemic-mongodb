# systemic-mongodb
A [systemic](https://github.com/guidesmiths/systemic) mongodb component

## TL;DR
```js
const System = require('systemic')
const confabulous = require('./components/confabulous')
const mongodb = require('systemic-mongodb')

new System()
    .configure({
        mongodb: {
            url: 'mongodb://127.0.0.1/example',
            options: {
                server: {
                    poolSize: 5
                }
            }
        }
    })
    .add('logger', console)
    .add('mongodb', mongodb()).dependsOn('config', 'logger')
    .start(function(err, components) {
        // Do stuff with components.mongodb
    })
```
