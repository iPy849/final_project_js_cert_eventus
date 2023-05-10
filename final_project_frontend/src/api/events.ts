import { axiosInstance } from '.'
import { IEvent } from './types'

function GetHottestEvent(): IEvent {
    // axiosInstance.get()
    return {
        eventName: "Nombre del evento",
        eventPlace: "Lugar del evento",
        eventImage: "/img/landing_hero.jpg",
        eventDatetime: new Date(Date.now()),
    }
}

function GetNextEvents(n: number): IEvent[] {
    const result: IEvent[] = [];
    for (let i = 0; i < n; i++) {
        result.push(GetHottestEvent())
    }
    return result;
}

export default {
    GetHottestEvent,
    GetNextEvents,
}