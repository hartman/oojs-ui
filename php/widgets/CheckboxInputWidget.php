<?php

namespace OOUI;

/**
 * Checkbox input widget.
 */
class CheckboxInputWidget extends InputWidget {

	/**
	 * @param array $config Configuration options
	 * @param boolean $config['selected'] Whether the checkbox is initially selected
	 *   (default: false)
	 */
	public function __construct( array $config = array() ) {
		// Parent constructor
		parent::__construct( $config );

		// Initialization
		$this->addClasses( array( 'oo-ui-checkboxInputWidget' ) );
		$this->setSelected( isset( $config['selected'] ) ? $config['selected'] : false );
	}

	protected function getInputElement( $config ) {
		$input = new Tag( 'input' );
		$input->setAttributes( array( 'type' => 'checkbox' ) );
		return $input;
	}

	/**
	 * Set selection state of this checkbox.
	 *
	 * @param boolean $state Whether the checkbox is selected
	 */
	public function setSelected( $state ) {
		$this->selected = (bool)$state;
		if ( $this->selected ) {
			$this->input->setAttributes( array( 'checked' => 'checked' ) );
		} else {
			$this->input->removeAttributes( array( 'checked' ) );
		}
		return $this;
	}

	/**
	 * Check if this checkbox is selected.
	 *
	 * @return boolean Checkbox is selected
	 */
	public function isSelected() {
		return $this->selected;
	}
}
