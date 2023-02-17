import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";
import {before} from "node:test";

beforeAll(() => {
    // 1. Clean whole tested table of database
    // 2. Return data (defined data)
})

afterAll(async () => {
    await pool.end();
})

test('Not inserted GiftRecord should have no id', async () => {
    const newGift = new GiftRecord({
        count: 2, name: "Testowy produkt"
    })
    expect(newGift.id).toBeUndefined();
});

test('Inserted GiftRecord should have an id', async () => {
    const newGift = new GiftRecord({
        count: 2, name: "Testowy produkt"
    })
    await newGift.insert()
    expect(newGift.id).toBeDefined();
    expect(newGift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
    await newGift.deleteOne()
});
