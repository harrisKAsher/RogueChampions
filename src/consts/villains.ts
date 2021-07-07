import {Villain} from "@/types/villain";
import {EncounterSetsMap, MutagenFormula, RiskyBusiness} from "@/consts/encountersets";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_MED} from "@/consts/difficulty";

// BASE GAME
export const Ultron : Villain = {
	name: 'Ultron',
	difficulty: DF_BASE + DF_STEP_LARGE,
	key: 'ultron',
	sets: [EncounterSetsMap.Ultron.name],
	extraSets: 0,
}

export const Rhino : Villain = {
	name: 'Rhino',
	key: 'rhino',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Rhino.name],
	extraSets: 0,
}

export const Klaw : Villain = {
	name: 'Klaw',
	key: 'klaw',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap.Klaw.name],
	extraSets: 0,
}

// VILLAIN PACKS
export const WreckingCrew : Villain = {
	name: 'Wrecking Crew',
	key: 'WreckingCrew',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap['Wrecking Crew'].name],
	noExtraSets: true,
	extraSets: 0,
}

export const GreenGoblin : Villain = {
	name: 'Green Goblin',
	key: 'GreenGoblin',
	difficulty: DF_BASE,
	sets: [MutagenFormula.name],
	extraSets: 0,
}

export const NormanOsborn : Villain = {
	name: 'Norman Osborn',
	key: 'NormanOsborn',
	difficulty: DF_BASE,
	sets: [RiskyBusiness.name],
	extraSets: 0,
}

export const Kang : Villain = {
	name: 'The Once and Future Kang',
	key: 'Kang',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Kang.name],
	extraSets: 0,
}

// THE RISE OF RED SKULL
export const Crossbones : Villain = {
	name: 'Crossbones',
	key: 'Crossbones',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Crossbones.name],
	extraSets: 3,
}

export const AbsorbingMan : Villain = {
	name: 'Absorbing Man',
	key: 'AbsorbingMan',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap['Absorbing Man'].name],
	extraSets: 0,
}

export const Taskmaster : Villain = {
	name: 'Taskmaster',
	key: 'Taskmaster',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Taskmaster.name],
	extraSets: 0,
}
export const Zola : Villain = {
	name: 'Zola',
	key: 'Zola',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap.Zola.name],
	extraSets: 0,
}
export const RedSkull : Villain = {
	name: 'Red Skull',
	key: 'RedSkull',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [EncounterSetsMap['Red Skull'].name],
	extraSets: 0,
}
export const VillainsMap : Record<string, Villain> = {
	[Ultron.name]: Ultron,
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,
	[WreckingCrew.name]: WreckingCrew,
	[GreenGoblin.name]: GreenGoblin,
	[NormanOsborn.name]: NormanOsborn,
	[Crossbones.name]: Crossbones,
	[AbsorbingMan.name]: AbsorbingMan,
	[Taskmaster.name]: Taskmaster,
	[Zola.name]: Zola,
	[RedSkull.name]: RedSkull,
	[Kang.name]: Kang,
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

