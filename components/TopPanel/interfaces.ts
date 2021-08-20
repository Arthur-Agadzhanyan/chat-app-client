export interface TopPanelProps{
    countries: string[],
    changeCountry(e: any, newValue: string | null):void,
    changeAge(e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>):void,
    advancedForm:{
        name: string,
        location: string,
        ageFrom: string,
        ageTo: string
    },
    title?: string,
    search?: string
}