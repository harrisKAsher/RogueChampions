import {AntMan as Exp} from "@/consts/expansions";
import {AntMan} from "@/consts/heroes";
import {generateAllyCard, generateExhaustedCardInPlay} from "@/lib/upgrades";

export const WristGauntlets = generateExhaustedCardInPlay({
	name: 'How about you don\'t do that?',
	card: `Wrist Gauntlets`,
	requires: Exp.name,
	requiresHero: AntMan.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it'
})


export const antMansHelmet : any = {
	name: 'Ant-Man\'s Helmet',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: AntMan.name,
	repeat (level: number) : string {
		return ['in hand', 'in play exhausted', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put Ant-Man's Helmet ${this.repeat(this.level)}`
	},
	levelUpMessage () {
		return `On setup place Ant-Man's Helmet <strong>` + this.repeat(this.level+1) + '</strong> instead of ' + this.repeat(this.level) + '.'
	},
	category: 'Heroic'
}

export const ArmyOfAnts : any = {
	name: 'Army of Ants',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: AntMan.name,
	description () {
		return `<strong>Setup:</strong> Place ${this.level} Army of Ants cards in play exhausted.`
	},
	levelUpMessage () {
		return `On setup have <strong>` + (this.level + 1) + `</strong> Army of Ants cards in play instead of ${this.level}.`
	},
	category: 'Heroic'
}

export const Wasp = generateAllyCard({
	name: 'She Can Do That Too',
	card: 'Wasp',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: AntMan.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Upgrades = [
	ArmyOfAnts,
	WristGauntlets,
	antMansHelmet,
	Wasp
]
