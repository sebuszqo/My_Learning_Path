import {ChildRecord} from "../records/child.record";

test('Are children defined in dataBase', async () => {
    const children = await ChildRecord.listAll()
    console.log(children)
    expect(children).toBeDefined();
});

test('Not inserted ChildRecord should have no id', async () => {
    const newChild = new ChildRecord({
        name: "Michal", giftId: ""
    })
});