
/* --------------------------------- Module Exports --------------------------------- */

module.exports = Value;


/* --------------------------------- Get Value Module  --------------------------------- */

function Value( value ) {

	if ( !( this instanceof Value ) ) return new Value( value );

	this._value = value;
}

Object.defineProperties( Value.prototype, {

	valueOf: { value: function () { return this._value } }
});