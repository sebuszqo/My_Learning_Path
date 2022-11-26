export enum RestaurantEvents {
    Open ='open',
    Close ='close',
    TableCountUpdate='tableCountUpdate'
}

export type RestaurantEvent = (eventName: RestaurantEvents) => boolean
export type RestaurantTableCountChangeEvent = (eventName: RestaurantEvents.TableCountUpdate, incDec:number) => boolean

// export type RestaurantTableCountChangeCallback = (incDec:number) => void;