import React, { PureComponent } from 'react';
import Carousel from 'nuka-carousel';
import {
	guide,
	origine,
	pourquoi,
} from 'constants/Images';
import 'css/Project.css';

class Project extends PureComponent {
	state = {
		slide: 1,
	};

	_changeSlide = (slide) => {
		// const { slide } = this.state;
		console.log('slide : ', slide)
	};

	_renderProjectIntro = () => {
		return (
			<div className={'projectIntroContainer'}>
				<h2 className={'projectIntroTitle'}>LE PROJET</h2>
				<p className={'projectIntroText'}>Un guide de ressources locales</p>
				<p className={'projectIntroText'}>
					Notre guide Parole de Bulle a pour but de créer un déclic chez le lecteur, de lui faire prendre conscience de sa situation, afin qu’il réalise que celle-ci, n’étant pas normale, doit cesser. C’est à cette fin que nous mettons à sa disposition tous les contacts dont il pourrait avoir besoin.
				</p>
			</div>
		);
	};

	_renderGuide = () => {
		return (
			<div className={'projectGuideContainer'}>
				<div className={'projectGuideContent'}>
					<p>LE GUIDE : PAROLE DE BULLE</p>
					<p>Le contenu</p>
					<p>
						Ce guide dispose de plusieurs rubriques dont une cartographie des acteurs locaux et nationaux, comprenant tous les centres d'accueils, des professionnels (psychologues, profs de théâtre, etc.) et les numéros verts d’appel, des “jeux” (dans un intérêt pédagogique), des témoignages, afin qu’ils puissent s’identifier à une situation de harcèlement, une présentation de notre projet, avec nos coordonnées (mail, numéro de téléphone, réseaux sociaux, site internet, etc.), des protocoles comportementaux, afin que la personne puisse savoir quoi faire et comment réagir dans cette situation. Ceci nous permettra de fournir des conseils, des astuces et des encouragements nécessaires à la prise d’initiative de l’adolescent.
					</p>
				</div>
				<div className={'projectGuideImage'}>
					<img className={'projectImageSlider'} src={guide} alt={'guide'} />
				</div>
			</div>
		);
	};

	_renderOrigine = () => {
		return (
			<div className={'projectGuideContainer'}>
				<div className={'projectGuideContent'}>
					<p>L'ORIGINE DU PROJET</p>
					<p>Deux idées complémentaires</p>
					<p>
						Au départ, nous avions chacun une idée de projet à mettre en place :
						- La création d’un espace de parole, où les jeunes pourraient parler de leur problèmes (scolaires ou non) et y trouver toutes les ressources dont un adolescent pourrait avoir besoin, portant le nom de La Bulle.
						- La lutte contre la phobie scolaire.
						Ces deux idées n’étant pas incompatibles, il paraissait donc intuitif de travailler ensemble contre le harcèlement scolaire.					</p>
				</div>
				<div className={'projectGuideImage'}>
					<img className={'projectImageSlider'} src={origine} alt={'origine'} />
				</div>
			</div>
		);
	};

	_renderWhy = () => {
		return (
			<div className={'projectGuideContainer'}>
				<div className={'projectGuideContent'}>
					<p>POURQUOI LA BULLE ?</p>
					<p>Faire le lien entre les solutions</p>
					<p>
						La Bulle est née d’un désir commun : lutter contre le harcèlement scolaire. Car avant de se confier, avant de lutter contre ses conséquences (comme la phobie ou la dépression), il faut commencer par en parler. Notre idée est donc de fournir une bulle d’oxygène au milieu des problèmes, un temps de pause, de protection, une possibilité de replis sur soi pour mieux prendre son élan. Une lueur d’espoir, qui peut apparaître comme un mirage pour certains mais qui en réalité découle surtout d’un manque d’accès. Nous voulons, en plus des initiatives mises actuellement en place en France, donner accès à toutes les solutions locales disponibles.
						Selon nous, la souffrance d’un adolescent vient de plusieurs critères majeurs : l'incompréhension, l’ignorance et le manque de confiance et de communication. C’est donc pour palier à ces critères que l’idée d’un guide ressources est née.
						Nous souhaitons faire le lien entre les solutions déjà existantes et les collégiens qui pourraient en avoir besoin, ainsi qu’à leurs proches.					</p>
				</div>
				<div className={'projectGuideImage'}>
					<img className={'projectImageSlider'} src={pourquoi} alt={'origine'} />
				</div>
			</div>
		);
	};

	_renderCarousel = () => {
		const { slide } = this.state;

		return (
			<Carousel
				slideIndex={slide}
				// autoplay={true}
				wrapAround={true}
				autoplayInterval={3000}
				speed={1000}
				width={'80%'}
				className={'projectCarousel'}>
				{this._renderGuide()}
				{this._renderOrigine()}
				{this._renderWhy()}
			</Carousel>
		);
	};

	render() {
		return (
			<div className={'projectContainer'}>
				{this._renderProjectIntro()}
				{this._renderCarousel()}
			</div>
		);
	}
}

export default Project;
