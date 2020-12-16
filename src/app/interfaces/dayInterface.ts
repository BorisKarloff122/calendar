import {HourMarkInterface} from './hourMarkInterface';

export interface DayInterface {
    name: string;
    hourMarks: HourMarkInterface[];
    calPerDay: number;
}
