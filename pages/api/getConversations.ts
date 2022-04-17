// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from "mysql";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'MessagingApp'
    });

    connection.connect();

    connection.query("SELECT id, Username FROM Users WHERE id = (SELECT `User 1` FROM Conversations WHERE id = (SELECT id FROM Users WHERE Username = 'Daniel')) OR id = (SELECT `User 2` FROM Conversations WHERE id = (SELECT id FROM Users WHERE Username = 'Daniel'));", (err: any, rows: any, fields: any) => {
        if (err) throw err

        connection.end();

        res.send(rows);
    });
    // "SELECT `User 1`, `User 2` FROM WHERE "
    // "SELECT Username FROM Users WHERE id = (SELECT `User 1` FROM Conversations WHERE id = (SELECT id FROM Users WHERE Username = `Daniel`))"

}
