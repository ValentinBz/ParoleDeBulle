import React, { PureComponent } from 'react';
import Logo from 'assets/bubbleLogo.png';
import 'css/Header.css';

class Header extends PureComponent {
	render() {
		return (
			<div className={'headerContainer'}>
				<div className={'headerContentContainer'}>
					<img className={'headerLogo'} src={Logo} alt={'bubbleLogo'}/>
					<div className={'headerContent'}>
						<h3 className={'headerContentTitle'}>PAROLE DE BULLE</h3>
						<p className={'headerContentText'}>Mission de lutte contre le harcèlement scolaire</p>
					</div>
				</div>
				<div className={'headerContactContainer'}>
					<div className={'headerContactButton'}>
						<div className={'headerContactButtonText'}>Contact</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
