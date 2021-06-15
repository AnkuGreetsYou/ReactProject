import React from 'react';
import css from '../Footer/Footer.module.css';

const Footer = () => {
	return (
		<footer className={css.footer}>
			<div className={css.copyright}>
				Copyright React from ITKamasutra.com
			</div>
			<div className={css.rights}>
				2021.All rights Reserved
			</div>
		</footer>
	);
}

export default Footer;