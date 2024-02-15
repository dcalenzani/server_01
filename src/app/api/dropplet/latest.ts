import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export

export async function getData(){
  const query = "SELECT * FROM soilSensor WHERE id=(SELECT MAX(id) FROM soilSensor)";
  const response = await conn.query(query);
  const jsonData = response.rows;
  return jsonData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await getData();
  res.status(200).json(jsonData)
}