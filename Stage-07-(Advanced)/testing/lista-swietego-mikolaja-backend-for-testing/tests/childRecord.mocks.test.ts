import {ChildRecord} from "../records/child.record";

//static method
const myMock1 = jest
    .spyOn(ChildRecord, 'getOne')
    .mockImplementation(async (id: string) => {
        return new ChildRecord({id, giftId: "123", name: "Testowy"});
    });

test("every child with id exists", async () => {
    const child = await ChildRecord.getOne('555');
    console.log(child)
    expect(child).toBeDefined();
    expect(child.id).toEqual("555")
})

const myMock2 = jest
    .spyOn(ChildRecord.prototype, 'update')
    .mockImplementation(async () => {
    });

test("every child with id exists", async () => {
    const child = await ChildRecord.getOne('555');
    console.log(child)
    expect(child).toBeDefined();
    expect(child.id).toEqual("555")
})