import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export

export async function getData(){
  
}

export default async function latest(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM soilSensor WHERE id=(SELECT MAX(id) FROM soilSensor)";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
  }
}