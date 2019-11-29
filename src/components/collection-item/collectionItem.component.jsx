import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem = ({ id, price, imageUrl }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="collection-footer">
			<span className='to-do' />
		</div>
	</div>
);

export default CollectionItem;
