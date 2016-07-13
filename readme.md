# Abstract-Value

Is used as helper to define any kind of value as abstract value type.  
Also allows to add any properties to values, even to String and Number.


```js
const Value = require( 'abstract-value' )( 'Value' );

var values = [
    123,
    '123',
    Value( 123, { add: 456 } ),
    Value( '123', { changeTo: '456' } ),
    Value( [ 123, 789 ] )
];

for ( var i = 0; i < values.length; ++i ) {
    
    if ( values[ i ] instanceof Value ) {
        // change value
        if ( values[ i ].changeTo ) values[ i ].set( values[ i ].changeTo );
        // operation on value
        if ( values[ i ].add ) values[ i ] += values[ i ].add;
        // get value
        console.log( values[ i ].valueOf() );
    } else {
        console.log( values[ i ] );
    }
}

Output:
123
"123"
579
"456"
Array [123, 789]
```

Also you can chain some methods ( "set", "setProperties" ):

```js
const Value = require( 'abstract-value' )( 'Value' );

var val = Value( 123 );

console.log( val );
console.log( val.set( 124 ).valueOf() );
console.log( val.setProperties({ t: 1 }).t );

Output:
Value {__value: 123}
124
1
```