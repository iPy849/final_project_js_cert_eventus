// Eventos
export interface IEvent {
    eventName: String,
    eventPlace: String,
    eventImage: String,
    eventDatetime: Date,
}

type EventFilter = "all" | "near" | "next" | "userAdquired" | "organizer" | "search";

export interface IEventListRequest {
    limit: Number,
    filter: EventFilter,
    query?: String,  // En caso de que el filtro sea "search"
}

export interface IEventListResponse {
    events: IEvent[],
    qty: Number,
}

// Usuario
export interface IUser {
    name: String,
    lastName: String,
    birthday: Date,
    isActive: Boolean,
    imageUrl: String,
}