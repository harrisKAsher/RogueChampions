export type Villain = {
	name: string
	difficulty: number
	key: string
	sets: string[],
	extraSets: number,
	noExtraSets?: boolean // Basically only for Wrecking Crew
}
