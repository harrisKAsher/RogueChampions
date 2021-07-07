import {Wasp as Exp} from "@/consts/expansions";
import {Wasp} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard} from "@/lib/upgrades";

export const RedRoomTraining = generateUpgradeCard({
	name: 'Is that all you got?',
	card: `Red Room Training`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: '',
})

export const BioSyntheticWings = generateUpgradeCard({
	name: 'Small, Fast, and Arial',
	card: `Bio-Synthetic Wings`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: ''
})


export const WaspsHelmet : any = {
	name: 'Wasp\'s Helmet',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Wasp.name,
	repeat (level: number) : string {
		return ['in hand', 'in play exhausted', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put Wasp's Helmet ${this.repeat(this.level)}`
	},
	levelUpMessage () {
		return `On setup place Wasp's Helmet <strong>` + this.repeat(this.level+1) + '</strong> instead of ' + this.repeat(this.level) + '.'
	},
	category: 'Heroic'
}


export const AntMan = generateAllyCard({
	name: 'He Can Do That Too',
	card: 'Ant-Man',
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
	requiresHero: Wasp.name,
	pronoun: 'him',
	category: 'Heroic',
})

export const Upgrades = [
	RedRoomTraining,
	BioSyntheticWings,
	WaspsHelmet,
	AntMan
]
