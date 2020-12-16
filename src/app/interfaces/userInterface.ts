import {DayInterface} from './dayInterface';


export interface CalendarUser {

    gender: string;
    weight: number;
    height: number;
    calendar: Array<DayInterface[]>;
    minCal: number;
    maxCal: number;
}
