import { createPool } from "mysql2/promise";
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_santa_gifts',
    namedPlaceholders: true,
    decimalNumbers: true,
});
//# sourceMappingURL=db.js.map