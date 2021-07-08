import {Gamora as Exp} from "@/consts/expansions";
import {Gamora} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

export const ConditioningRoom = generateUpgradeCard({
	name: 'I\'m always prepared',
	card: `Conditioning Room`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
})

export const Nebula = generateExhaustedCardInPlay({
	name: 'A Sisterly Bond?',
	card: `Nebula`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
	they: 'she',
	pronoun: 'her',
})

export const KeenInstincts = generateExhaustedCardInPlay({
	name: 'I Know Exactly What is Going On',
	card: `Keen Instincts`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const GamorasSword : any = {
	name: 'Gamora\'s Sword',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Gamora.name,
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
	ConditioningRoom,
	Nebula,
	KeenInstincts,
	GamorasSword
]
