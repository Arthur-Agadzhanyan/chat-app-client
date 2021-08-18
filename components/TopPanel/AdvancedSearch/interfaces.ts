export interface AdvancedSearchProps{
    // open: boolean,
    countries: string[],
    changeCountry(e: any, newValue: string | null):void,
    changeAge(e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>):void,
    advancedForm:{
        location: string,
        ageFrom: string,
        ageTo: string
    }
}