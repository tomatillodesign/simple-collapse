import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, getColorClassesAndStyles } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes, isSelected } ) {

	/////// CLB Helper Functions JS

	

	// declare all characters
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	function generateString(length) {
		let result = '';
		const charactersLength = characters.length;
		for ( let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	}

	function clbSlugify(input) {
		if (!input)
			return '';
	
		// make lower case and trim
		var slug = input.toLowerCase().trim();
	
		// remove accents from charaters
		slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	
		// replace invalid chars with spaces
		slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
	
		// replace multiple spaces or hyphens with a single hyphen
		slug = slug.replace(/[\s-]+/g, '-');
	
		return slug + '-' + generateString(8);
	
	}

	////////////////////////////////////////////////////

	// console.log(attributes);

    return (
        <div { ...useBlockProps() }>
            <TextControl
                label={ 'Title' }
                value={ attributes.title }
                onChange={ ( val ) => setAttributes( { title: val, uniqueId: clbSlugify(val) } ) }
            />
			<InnerBlocks />
        </div>
    );
}