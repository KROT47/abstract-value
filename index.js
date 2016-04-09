
/* --------------------------------- Module Exports --------------------------------- */

module.exports = AbstractValue;


/* --------------------------------- AbstractValue --------------------------------- */

function AbstractValue( value, properties ) {

	if ( value instanceof AbstractValue ) {
		// get all properties from old value
		var	oldProperties = {}, i;
		for ( i in value ) oldProperties[ i ] = value[ i ];

		// generate new value from old one
		var newAbstractValue = AbstractValue( value.valueOf(), oldProperties );

		// update properties if defined and return new abstract value
		return newAbstractValue.setProperties( properties );
	}

	if ( !( this instanceof AbstractValue ) ) return new AbstractValue( value, properties );
	
	Object.defineProperty( this, '__value', { value: value, enumerable: false, writable: true } );

	this.setProperties( properties );
}


/* --------------------------------- AbstractValue Prototype --------------------------------- */

Object.defineProperties( AbstractValue.prototype, {

	set: { value: function ( newValue ) { this.__value = newValue; return this } },

	setProperties: {
		value: function ( properties ) {
			if ( properties ) for ( var i in properties ) this[ i ] = properties[ i ];

			return this;
		}
	},

	valueOf: { value: function () { return this.__value } }

});