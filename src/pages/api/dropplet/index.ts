import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM soilSensor";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }

    case "POST":
      try {
        /*
        console.log(body);
        return res.json(body);
        */
        const { humidity, input } = body;
        const query =
        "INSERT INTO soilSensor(humidity, input) VALUES ($1, $2) RETURNING *";
        const values = [humidity, input];
        const response = await conn.query(query, values);
        return res.json(response.rows[0]);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
      default:
        return res.status(400).json({ message: "Method are not supported" });
  }
}