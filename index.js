
/* --------------------------------- Module Exports --------------------------------- */

module.exports = Value;


/* --------------------------------- Get Value Module  --------------------------------- */

function Value( value, properties ) {

	if ( !( this instanceof Value ) ) return new Value( value, properties );

	this.__value = value;

	if ( properties ) for ( var i in properties ) this[ i ] = properties[ i ];
}

Object.defineProperties( Value.prototype, {

	valueOf: { value: function () { return this.__value } },

	set: { value: function ( newValue ) { this.__value = newValue } }
});