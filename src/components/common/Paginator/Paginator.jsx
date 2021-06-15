import React, { useState } from 'react';
import css from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({ totalCount, pageSize, currentPage, onPageChanged, portionSize = 10, }) => {

	let pagesCount = Math.ceil(totalCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	};
	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;


	return (
		<div className={css.paginator}>
			{ portionNumber > 1 &&
				<button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
			{pages
				.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
				.map((page) => {
					return <span
						className={cn({
							[css.selectedPage]: currentPage === page
						}, css.pageNumber)}
						key={page}
						onClick={(e) => { onPageChanged(page) }}
					>
						{page}
					</span>
				})}
			{
				portionCount > portionNumber &&
				<button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
			}


		</div>
	);
}


export default Paginator;