import React from "react";
import { GetStaticProps } from "next";
import {Product} from "../../interfaces/product";
import api from "../api/products";
import Link from "next/link";
import Image from "next/image";

interface Props {
    products: Product[];
}

export const getStaticProps: GetStaticProps = async () => {
    const products = await api.list()

    return {
        props: {
            products,
        },
        revalidate: 10
    };
};

const IndexRoute: React.FC<Props> = ({products}) => {
    const [cart, setCart] = React.useState<Product[]>([]);
    const text = React.useMemo(
        () =>
            cart
                .reduce(
                    (message, product) => message.concat(`* ${product.title} - $${product.price}\n`),``,
                )
                .concat(`\nTotal: ${cart.reduce((total, product) => total + product.price, 0)}`),[cart],
    )

    function parseCurrency(value: number): string {
        return value.toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
        });
    }

    return (
        <>
        <main className="min-h-screen items-center justify-between p-24">

        <div id="logo" className="fixed mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
                className="flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0"
                href="https://github.com/dcalenzani/"
                rel="noopener noreferrer"
                >
                By{' '}
                <Image
                src="/logo.svg"
                alt="Personal D.C logo"
                className="dark:invert"
                width={100}
                height={24}
                priority />
            </a>
        </div>

        <div id="HomePseudoButton" className="top-0 text-xl text-center pt-6">
          <a href="/" className="">&#8962; Home</a> 
        </div>

        <div className="mt-12 m-6 grid grid-auto-fit-lg gap-8">
            {products.map((product) => (
            <div key={product.id} className="grid text-white p-3 mx-2 gap-2 border border-purple-700 justify-center rounded-lg">
                    <Image src={product.image} 
                        alt={product.description}
                        className="dark:normal"
                        width={100}
                        height={24}/>
                    <p/>{product.title}
                    <p className="text-center">{parseCurrency(product.price)}</p>
                    <button onClick={() => setCart(cart => cart.concat(product))}
                        className="bg-purple-900 rounded-sm p-2 text-center hover:bg-purple-300 hover:text-gray-800">
                            Agregar
                    </button>
            </div>
            ))}
        </div>
        <div className="text-white text-right mb-32 my- 10 bg-slate-900">
        <Link href={`https://wa.me/51999888777?text=${encodeURIComponent(text)}`} isExternal>
        <button>
            Completar pedido ({cart.length} productos)
        </button>
        </Link>
        </div>
        </main>
        </>
    );
};

export default IndexRoute;