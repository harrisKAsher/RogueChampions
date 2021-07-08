import {Drax as Exp} from "@/consts/expansions";
import {Drax} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

export const DraxsKnife = generateUpgradeCard({
	name: 'This will do nicely...',
	card: `Drax's Knife`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const DraxsOtherKnife = generateUpgradeCard({
	name: 'You thought I only have one?',
	card: `Drax's Other Knife`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const DWITheetMastery = generateUpgradeCard({
	name: 'There is more where this came from',
	card: `DWI Theet Mastery`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const TooStubbornToDie = generateUpgradeCard({
	name: 'Is that all you got?',
	card: `Too Stubborn to Die`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})


export const Mantis  = generateExhaustedCardInPlay({
	name: 'Finally, someone who gets me!',
	card: `Mantis`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
	they: 'she',
	pronoun: 'her',
})


export const Upgrades : Upgrade[] = [
	DraxsKnife,
	DraxsOtherKnife,
	DWITheetMastery,
	TooStubbornToDie,
	Mantis
]
