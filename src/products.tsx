/* Noah Klein */

interface Product {
    name: string;
    imageUrl: string;
    description: string;
}

const clkr: Product = {
    name: 'clkr',
    imageUrl: '/CLKR.png',
    description: 'this is the clkr!',
}

const ndaLogo: Product = {
    name: 'NDA',
    imageUrl: '/NDA-logo.jpg',
    description: 'this is the NDA?',
}

const vite: Product = {
    name: 'vite',
    imageUrl: '/vite.svg',
    description: 'This is vite',
}


// ! Products should always contain at least 5 objects, repeats are fine if required.
const products: Array<Product> = [clkr, ndaLogo, clkr, ndaLogo, vite]

export default products;
