export interface DatePicerProps{
    id: string,
    label: string,
    selectedDate: Date | null,
    setSelectedDate(date: Date | null): any,
    error: boolean
}