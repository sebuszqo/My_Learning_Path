import { ChildRecord } from "../records/child.record";
import { pool } from "../utils/db";

afterAll(async () => {
  await pool.end();
});

test("Are children defined in dataBase", async () => {
  const children = await ChildRecord.listAll();
  expect(children).toBeDefined();
});

test("Not inserted ChildRecord should have no id", async () => {
  const newChild = new ChildRecord({
    name: "Michal",
    giftId: "",
  });
});
