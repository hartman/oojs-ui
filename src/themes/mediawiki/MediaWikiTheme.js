/**
 * @class
 * @extends OO.ui.Theme
 *
 * @constructor
 */
OO.ui.MediaWikiTheme = function OoUiMediaWikiTheme() {
	// Parent constructor
	OO.ui.MediaWikiTheme.super.call( this );
};

/* Setup */

OO.inheritClass( OO.ui.MediaWikiTheme, OO.ui.Theme );

/* Methods */

/**
 * @inheritdoc
 */
OO.ui.MediaWikiTheme.prototype.getElementClasses = function ( element ) {
	// Parent method
	var variant,
		variants = {
			invert: false,
			progressive: false,
			constructive: false,
			destructive: false
		},
		// Parent method
		classes = OO.ui.MediaWikiTheme.super.prototype.getElementClasses.call( this, element );

	if ( element.supports( [ 'isFramed', 'isDisabled', 'hasFlag' ] ) ) {
		if ( !element.isDisabled() && element.isFramed() && element.hasFlag( 'primary' ) ) {
			variants.invert = true;
		} else {
			variants.progressive = element.hasFlag( 'progressive' );
			variants.constructive = element.hasFlag( 'constructive' );
			variants.destructive = element.hasFlag( 'destructive' );
		}
	}

	for ( variant in variants ) {
		classes[ variants[ variant ] ? 'on' : 'off' ].push( 'oo-ui-image-' + variant );
	}

	return classes;
};

/* Instantiation */

OO.ui.theme = new OO.ui.MediaWikiTheme();
