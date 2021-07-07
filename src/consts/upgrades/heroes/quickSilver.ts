import {QuickSilver as Exp} from "@/consts/expansions";
import {QuickSilver} from "@/consts/heroes";
import {generateUpgradeCard} from "@/lib/upgrades";


export const acceleratedReflex = generateUpgradeCard({
	name: 'Run Faster',
	card: `Accelerated Reflex`,
	requires: Exp.name,
	requiresHero: QuickSilver.name,
	category: 'Heroic',
	article: '',
})

export const HyperPerception = generateUpgradeCard({
	name: 'Think Fast',
	card: `Hyper Perception`,
	requires: Exp.name,
	requiresHero: QuickSilver.name,
	category: 'Heroic',
	article: '',
})

export const reinforcedSinew = generateUpgradeCard({
	name: 'The faster you run the harder they fall',
	card: `Reinforced Sinew`,
	requires: Exp.name,
	requiresHero: QuickSilver.name,
	category: 'Heroic',
	article: ''
})

export const frictionResistance : any = {
	name: 'Friction Resistance',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: QuickSilver.name,
	repeat (level: number) : string {
		return ['in hand', 'in play exhausted', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put Friction Resistance ${this.repeat(this.level)}`
	},
	levelUpMessage () {
		return `On setup place Friction Resistance <strong>` + this.repeat(this.level+1) + '</strong> instead of ' + this.repeat(this.level) + '.'
	},
	category: 'Heroic'
}


export const Upgrades = [
	acceleratedReflex,
	HyperPerception,
	reinforcedSinew,
	frictionResistance
]
