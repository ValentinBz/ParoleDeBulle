import React, { PureComponent } from 'react';
import 'css/Home.css';

class Home extends PureComponent {

	_handleClick = (index) => () => {
		const { onClick } = this.props;
		onClick(index);
	};

	_renderWelcome = () => {
		return (
			<div className={'homeWelcomeContainer'}>
				<div className={'homeWelcomeImage'}>

				</div>
				<div className={'homeWelcomeContent'}>
					<h2>BIENVENU</h2>
					<p>
						Sur ce site, vous trouverez toutes les informations dont vous pourriez avoir besoin en cas de harcèlement scolaire : contacts, conseils, témoignages, etc.
						Ces informations sont à l'intention de tous, et également disponible sous la forme d'un guide téléchargeable (lien ci-dessous).
					</p>
				</div>
			</div>
		);
	};

	_renderExplication = () => {
		return (
			<div className={'homeExplicationContainer'}>
				<h2>LE HARCÈLEMENT SCOLAIRE, C'EST QUOI ?</h2>
				<p>
					Il s'agit d'agissements malveillants et répétés (moraux, physiques, psychologiques et/ou sexuels), provenant d'une personne ou d'un groupe de personnes, à l'origine de pressions sociales, provoquant une déstabilisation de la personne visée. Celle-ci peut par la suite souffrir d'isolement, d'une baisse d'estime et de confiance en soi, ainsi qu'une dégradation des conditions de vie et de travail (baisse du niveau scolaire, sentiment de mal-être, dépression, etc.).
				</p>
				<p>
					Par exemple, si dans ta classe ou ton collège, un de tes camarades – ou toi-même - est souvent moqué, appelé avec des surnoms méchants, si les autres rigolent lorsqu’il participe en classe, s’il retrouve ses affaires abîmées ou volées, s’il est bousculé, si ses camarades refusent qu’il soit dans le groupe de travail, ne veulent pas jouer ou manger avec lui à la cantine, il peut se sentir mis de côté.
				</p>
				<p>
					Si ces violences sont répétées, il est victime de harcèlement. Le harcèlement n’est pas un jeu : c’est grave pour celui qui le subit. S’il est victime de faits semblables sur Internet, on parle alors de cyberharcèlement.
				</p>
			</div>
		);
	};

	_renderInfos = () => {
		return (
			<div className={'homeInfosContainer'}>
				<div className={'homeInfosContent'}>
					<h2>CE QU'IL FAUT SAVOIR</h2>
					<p>
						Le harcèlement est un <b>délit</b>. Il est donc <b>condamnable</b> par la loi. Cet acte, d'apparence anodine vu de l'extérieur, peut avoir de <b>graves conséquences</b> pour la personne qui le subit. Les adultes doivent te <b>protéger</b> et <b>t’aider</b>. Ne pas aider une personne qui en a besoin peut également être considéré comme un délit. La violence n’est <b>pas normale</b> : il faut réagir et l'arrêter. Aucun enfant ne mérite de subir ces traitements. C’est <b>injuste</b> : tu ne dois pas garder le silence. Tu peux <b>agir</b>, car ne rien faire risque de laisser la situation empirer.
					</p>
					<p>
						Attention cependant à ne pas aggraver la situation : il ne faut pas vouloir régler la situation soi-même.
					</p>
					<p>
						Pour cela il faut en parler autour de toi : à un adulte de l’établissement, à tes parents, à un membre de ta famille ou de ton entourage proche. Tu peux également te confier à l’un de tes amis en qui tu as confiance ; il pourra à son tour en parler à un adulte.
						Si tu ne te sens pas à l’aise pour parler à quelqu’un de ton collège ou de ta famille, tu peux également faire appel à des personnes dont c’est le métier de venir en aide aux adolescents harcelés.
					</p>
				</div>
				<button onClick={this._handleClick(3)} className={'homeInfosButtonContainer'}>
					A qui s'adresser
				</button>
			</div>
		);
	};

	_renderContact = () => {
		return (
			<div>

			</div>
		);
	};

	render() {
		return (
			<div className={'homeContainer'}>
				{this._renderWelcome()}
				{this._renderExplication()}
				{this._renderInfos()}
				{this._renderContact()}
			</div>
		);
	}
}

export default Home;
