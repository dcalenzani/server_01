import axios from "axios";
import Papa from "papaparse";
import { Form } from "@/interfaces/form";

export default {
    list: async (): Promise<Form[]> => {
        const response = await axios.post(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWm9rXcI32IEeJBIymLZ61EbjwFFk7i6ed0TMR--gVOIY9238uaUn1p8zAP1MIYrpcKNsjlbe8Y1uw/pub?output=csv",
            {},
            {
                responseType: "blob",
            }
        );
        
        return new Promise<Form[]>((resolve, reject) => {
            Papa.parse(response.data, {
                header: true,
                complete: (results) => {
                    const Forms = results.data as Form[];

                    resolve(
                        Forms.map((Form) => ({
                            ...Form,
                        }))
                    );
                },
                error: (error) => reject(error.message),
            });
        });
    },
};
