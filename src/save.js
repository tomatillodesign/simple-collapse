import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    
	const blockProps = useBlockProps.save();
	console.log(blockProps.className);
	console.log(attributes);

	const wrapperId = attributes.uniqueId;
	const collapsibleId = "clb-collapsible-" + wrapperId;

	return (
		<div { ...blockProps }>
			<input id={ collapsibleId } class="clb-simple-toggle-input" type="checkbox" /> 
			<label for={ collapsibleId } class="clb-simple-collapse-toggle-label">{ attributes.title }</label>
				<div class="clb-simple-collapsible-content">
					<div class="clb-simple-collapsible-content-inner">
						<InnerBlocks.Content />
					</div>
				</div>
		</div>
	);

}