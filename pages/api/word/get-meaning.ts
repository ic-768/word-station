import type { NextApiRequest, NextApiResponse } from "next";
import { getDictionaryReponse } from "../../../utils/api/getDictionaryResponse";
import { parseDictionaryMeanings } from "../../../utils/api/parseDictionaryMeanings";

type Data = {
  word: string;
  meanings: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  try {
    const word = req.body;
    const dictionaryResult = await getDictionaryReponse(word);
    const meanings = parseDictionaryMeanings(dictionaryResult);

    res.status(200).json({ word, meanings });
  } catch {
    res.status(404).send("Couldn't get word");
  }
}
