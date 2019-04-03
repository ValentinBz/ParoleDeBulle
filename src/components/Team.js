import React, { PureComponent } from 'react';
import {
	antoineIcon,
	cloeIcon,
} from 'constants/Images';
import 'css/Team.css';



class Team extends PureComponent {

	_renderFirstCharacter = () => {
		return (
			<div className={'teamCharacterBlock'}>
				<img src={antoineIcon} className={'teamAvatar'} alt={'antoineIcon'} />
				<h3 className={'teamCharacterName'}>ROYANEZ ANTOINE</h3>
				<p className={'teamCharacterDescription'}>Antoine est un jeune bachelier actuellement en année de césure et qui souhaiterait par la suite devenir soigneur animalier. N’ayant pas pu intégrer l'école de soigneur à cause de son jeune âge, faire un service civique était pour lui, au-delà d’un engagement de huit mois, l’opportunité de monter son propre projet tout en luttant pour une cause qui lui est chère.</p>
			</div>
		);
	};

	_renderSecondCharacter = () => {
		return (
			<div className={'teamCharacterBlock'}>
				<img src={cloeIcon} className={'teamAvatar'} alt={'cloeIcon'} />
				<h3 className={'teamCharacterName'}>BERBUDEAU CLOË</h3>
				<p className={'teamCharacterDescription'}>Cloë est une étudiante en reconversion. Ayant débuté une licence en Sciences de la Terre et de l’Environnement à l’université de Bordeaux, c’est finalement vers la bioélectrophotonique au sein de l’IUMAB qu’elle s’est tournée. Cette nouvelle formation étant dispensée en discontinue et bénévole dans diverses associations depuis l’âge de ses huit ans, il paraissait donc évident pour elle de s’engager en service civique.</p>
			</div>
		);
	};

	render() {
		return (
			<div className={'teamContainer'}>
				<div className={'teamHeader'}>
					<h1>L'ÉQUIPE DE LA BULLE</h1>
					<p>Volontaires en service civique dans le cadre du programme Rêve & Réalise au sein d'Unis-Cité</p>
				</div>
				<div className={'teamCharactersContainer'}>
					{this._renderFirstCharacter()}
					{this._renderSecondCharacter()}
				</div>
			</div>
		);
	}
}

export default Team;
