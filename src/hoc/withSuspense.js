import React, { Suspense } from 'react';
import PreLoader from '../components/common/PreLoader/PreLoader';

export const withSuspense = (Compoment) => {
	return (props) => {
		return (<Suspense fallback={<PreLoader />}>
			<Compoment {...props} />
		</Suspense>);
	};
}