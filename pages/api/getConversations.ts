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

    connection.query('SELECT * FROM Users', (err: any, rows: any, fields: any) => {
        if (err) throw err

        connection.end();

        res.send(rows);
    });

}
