
/* --------------------------------- Module Exports --------------------------------- */

module.exports = AbstractValueGenerator;


/* --------------------------------- AbstractValue Generator --------------------------------- */

/**
 * Returns new abstract value constructor with defined className
 * Allows using instanceof className instead of AbstractValue
 * This prevents errors when using in multiple modules with different abstractions
 * @param (String) className
 * @return ({className constructor})
 */
function AbstractValueGenerator( className ) {

    var AbstractValueConstructor =
        	Function( 'return ' + AbstractValue.toString().replace( nameRegExp, className ) )();

    setupPrototype( AbstractValueConstructor );

    return AbstractValueConstructor;
}


/* --------------------------------- AbstractValue --------------------------------- */

function AbstractValue( value, properties ) {

    if ( value instanceof AbstractValue ) {
        return
	        // clone abstract value getting all properties
	        AbstractValue( value.valueOf(), Object.assign( {}, value ) )
	            // update properties if defined and return new abstract value
	            .setProperties( properties );
    }

    if ( !( this instanceof AbstractValue ) ) return new AbstractValue( value, properties );

    Object.defineProperty( this, '__value', {
        value: value || {},
        enumerable: false,
        writable: true
    });

    this.setProperties( properties );
}


/* --------------------------------- AbstractValue Prototype --------------------------------- */

function setupPrototype( AbstractValueConstructor ) {

    Object.defineProperties( AbstractValueConstructor.prototype, {

        set: { value: function( newValue ) { this.__value = newValue; return this } },

        setProperties: {
            value: function( properties ) {
                if ( properties ) Object.assign( this, properties );

                return this;
            }
        },

        valueOf: { value: function() { return this.__value } }
    });
}


/* --------------------------------- Helpers --------------------------------- */

const nameRegExp = /AbstractValue/g;
