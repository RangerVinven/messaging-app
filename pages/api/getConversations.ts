// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from "mysql";

type Data = {
  conversationIDs: [
      {
          id: Number
      }
  ]
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
    
    // Gets the id and Username for all the people the user has a conversation with
    connection.query("SELECT id, Username FROM Users WHERE id IN (SELECT `User 1` FROM Conversations WHERE `User 2` = 1) OR id IN (SELECT `User 2` FROM Conversations WHERE `User 1` = 1);", (err: any, rows: any, fields: any) => {
        if (err) throw err
        connection.end();
        res.send(rows);
    })

    connection.end();
}
