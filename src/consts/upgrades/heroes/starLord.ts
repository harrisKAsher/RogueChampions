import {StarLord as Exp} from "@/consts/expansions";
import {StarLord} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";


export const JetBoots : any = {
	name: 'Jet Boots',
	level: 1,
	maxLevel: 2,
	requires: Exp.name,
	requiresHero: StarLord.name,
	repeat (level: number) : string {
		return ['in hand', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put ${this.name} ${this.repeat(this.level)}.`
	},
	levelUpMessage () {
		return `On setup place ${this.name} <strong>${this.repeat(this.level+1)}</strong> instead of ${this.repeat(this.level)}`
	},
	category: 'Heroic'
}

export const LeaderOfTheGuardians : any = {
	name: 'Leader of the Guardians',
	level: 1,
	maxLevel: 2,
	requires: Exp.name,
	requiresHero: StarLord.name,
	repeat (level: number) : string {
		return ['in hand', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put ${this.name} ${this.repeat(this.level)}.`
	},
	levelUpMessage () {
		return `On setup place ${this.name} <strong>${this.repeat(this.level+1)}</strong> instead of ${this.repeat(this.level)}`
	},
	category: 'Heroic'
}

export const StarLordsHelmet : any = {
	name: 'Star-Lord\'s Helmet',
	level: 1,
	maxLevel: 2,
	requires: Exp.name,
	requiresHero: StarLord.name,
	repeat (level: number) : string {
		return ['in hand', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put ${this.name} ${this.repeat(this.level)}.`
	},
	levelUpMessage () {
		return `On setup place ${this.name} <strong>${this.repeat(this.level+1)}</strong> instead of ${this.repeat(this.level)}`
	},
	category: 'Heroic'
}

export const ElementGun : any = {
	name: 'Element Gun',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: StarLord.name,
	repeat (level: number) : string {
		return ['in hand', 'in play exhausted', 'in play'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Put ${this.name} ${this.repeat(this.level)}.`
	},
	levelUpMessage () {
		return `On setup place ${this.name} <strong>${this.repeat(this.level+1)}</strong> instead of ${this.repeat(this.level)}`
	},
	category: 'Heroic'
}


export const Upgrades : Upgrade[] = [
	JetBoots,
	LeaderOfTheGuardians,
	StarLordsHelmet,
	ElementGun
]
