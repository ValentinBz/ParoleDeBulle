import React, { PureComponent } from 'react';
import 'css/Navigation.css';

const links = [
	'Accueil',
	'L\'équipe',
	'Le projet',
	'A qui s\'adresser',
	'Vos témoignages',
	'Vos avis'
];

class Navigation extends PureComponent {
	state = {
		index: 2,
	};

	_handleClick = (index) => () => {
		const { onClick } = this.props;
		this.setState({ index }, () => onClick(index));
	};

	_renderLinks = () => {
		const { index } = this.state;
		return links.map((item, idx) => {
			const style = (idx === index) ? 'navigationTabs navigationTabsActive' : 'navigationTabs';
			return <p className={style} onClick={this._handleClick(idx)}>{item}</p>
		});
	};

	render() {
		return (
			<div className={'navigationContainer'}>
				<div className={'navigationTabsContainer'}>
					{this._renderLinks()}
				</div>
				<div className={'navigationLinksContainer'}>
					<a className={'navigationLinks'} href="mailto:labulle.bordeaux33@gmail.com">labulle.bordeaux33@gmail.com</a>
					<i className={'fab fa-facebook-f navigationIcons'} />
					<i className={'fab fa-twitter navigationIcons'} />
				</div>
			</div>
		);
	}
}

export default Navigation;
