import { Product } from "@component/interfaces/product";
import axios from "axios";
import Papa from "papaparse";

export default {
    list:async (): Promise<Product[]> => {
        return axios
        .get(`https://docs.google.com/spreadsheets/d/e/2PACX-1vTWm9rXcI32IEeJBIymLZ61EbjwFFk7i6ed0TMR--gVOIY9238uaUn1p8zAP1MIYrpcKNsjlbe8Y1uw/pub?output=csv`,
        {
            responseType: 'blob',
        },
        )
        .then(
            (response) =>
            new Promise<Product[]>((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: (results) => {
                        const products = results.data as Product[];

                        return resolve(
                            products.map((product) => ({
                            ...product,
                            price: Number(product.price),
                        })),
                        );
                },
                error: (error) => reject(error.message),
                });
            }),
        );
    },
};