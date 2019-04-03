import React, { PureComponent } from 'react';
import 'css/Footer.css';

class Footer extends PureComponent {

	_renderInfos = () => {
		return (
			<div className={'footerContainer'}>
				<div>
					<i className={'fab fa-facebook-f navigationIcons'} />
					<i className={'fab fa-twitter navigationIcons'} />
				</div>
				<div>
					<a className={'navigationLinks'} href="mailto:labulle.bordeaux33@gmail.com">labulle.bordeaux33@gmail.com</a>
				</div>
				<div>
					<p>17 Cours des Aubiers</p>
					<p>Bordeaux, 33300</p>
					<p>France</p>
				</div>
			</div>
		);
	};

	_renderFooter = () => {
		return (
			<div className={'footerLastBlock'}>
				<p className={'footerLastText'}>© 2019 by La Bulle. Created by ValentinBz</p>
			</div>
		);
	};

	render() {
		return (
			<div className={'footerMainContainer'}>
				{this._renderInfos()}
				{this._renderFooter()}
			</div>
		);
	}
}

export default Footer;
