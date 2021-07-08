import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {RocketRaccoon} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";



export const CyberneticSkeleton = generateUpgradeCard({
	name: 'Yeah, and how do you like me now?',
	card: `Cybernetic Skeleton`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
})

export const ThrusterBoots = generateUpgradeCard({
	name: 'Can\'t Catch Me!',
	card: `Thruster Boots`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
})

export const RocketsPistol = generateExhaustedCardInPlay({
	name: 'Ready for Anything',
	card: `Rocket's Pistol`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const RocketLauncher : any = {
	name: 'Rocket Launcher',
	level: 1,
	maxLevel: 3,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
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

export const ParticleCannon : any = {
	name: 'Particle Cannon',
	level: 1,
	maxLevel: 3,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
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

export const BatteryPack : any = {
	name: 'Battery Pack',
	level: 1,
	maxLevel: 2,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	description () {
		return `<strong>Setup:</strong> Put ${this.level} ${this.name} in play.`
	},
	levelUpMessage () {
		return `On setup place <strong> ${this.level + 1} ${this.name} </strong> instead of ${this.level}.`
	},
	category: 'Heroic'
}

export const Upgrades : Upgrade[] = [
	CyberneticSkeleton,
	ThrusterBoots,
	RocketsPistol,
	RocketLauncher,
	ParticleCannon,
	BatteryPack
]
