import React from "react";
import { GetStaticProps } from "next";
import {Product} from "../../interfaces/product";
import api from "../api/products";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    products: Product[];
}

const handleExternalLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      window.open(href, "_blank");
    }
  };

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
                    (message, product) => message.concat(`* ${product.title} - $${product.price}\n`),'',
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
        <div className="flex min-h-screen flex-col items-center justify-between p-24">

            <div id = "pseudoNavbar" className="z-10 my-2 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div id="HomePseudoButton" className="fixed pl-2 left-0 top-0 flex w-full justify-center border-t border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-transparent lg:p-4 lg:dark:hover:bg-zinc-800/30">
                    <a href="/">
                        &#8962; Home
                    </a> 
                </div>

                <div className="fixed mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
            </div>

            <div className="">
                <div className="mt-12 m-6 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4 min-w-screen justify-center text-center">
                    {products.map((product) => (
                        
                        <div key={product.id} className="grid p-3 mx-2 gap-2 border border-slate-800 hover:border-slate-500 justify-center rounded-lg">
                        
                        <div className="relative h-240 w-240 before:rounded-full before:bg-gradient-radial before:absolute">
                            <Image src={product.image} 
                                alt={product.description}
                                className="relative object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] filter grayscale dark:grayscale-2"
                                width={240}
                                height={240}/>
                        </div>

                        <p>{product.title}</p>
                        <p>{parseCurrency(product.price)}</p>
                        <button onClick={() => setCart(cart => cart.concat(product))}
                            className="bg-slate-900 rounded-sm p-2 text-center hover:bg-slate-300 hover:text-slate-800">
                                Agregar
                        </button>

                    </div>
                    
                    ))}
                </div>

                <div className="text-white text-right mb-32 my-10 bg-slate-900">
                    <a href={`https://wa.me/51971192413?text=${encodeURIComponent(text)}`} 
                    onClick={handleExternalLink}>
                        <button>
                            Completar pedido ({cart.length} productos)
                        </button>
                    </a>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default IndexRoute;