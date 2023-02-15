import {GiftEntity} from "./gitf.entity";

export type CreateGiftRequest = Omit<GiftEntity, 'id'>

export interface GetSingleGiftRes {
    gift: GiftEntity;
    givenCount: number;
}