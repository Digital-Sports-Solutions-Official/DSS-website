/* Noah Klein */

interface Product {
    name: string;
    imageUrl: string;
    description: string;
}

const clkr: Product = {
    name: 'clkr',
    imageUrl: '/CLKR.png',
    description: 'this is the clkr! Fusce morbi consectetur habitant commodo curabitur purus. Tortor ex ultricies quis interdum iaculis; maecenas nascetur scelerisque cras. Penatibus habitant consequat luctus viverra curae eros maecenas metus class. Quisque mollis volutpat nisi vehicula maecenas penatibus fusce. Purus iaculis parturient aliquam phasellus ipsum ligula. Blandit ipsum eu sociosqu; vivamus et sodales maecenas? Tincidunt vehicula ex bibendum, taciti condimentum eleifend senectus? Vitae nulla dictumst urna pellentesque blandit quisque habitasse. Vel amet morbi penatibus parturient; dapibus adipiscing varius odio.',
}

const ndaLogo: Product = {
    name: 'NDA',
    imageUrl: '/NDA-logo.jpg',
    description: 'this is the NDA?',
}

const vite: Product = {
    name: 'vite',
    imageUrl: '/vite.svg',
    description: 'Fringilla nunc suscipit augue facilisi tellus aliquet ipsum. Dui porta elementum class natoque platea nam curae id malesuada. Vitae auctor venenatis felis a at auctor. Neque sem euismod posuere nullam tempus vitae aenean nostra. Vel suspendisse class nulla vivamus quam consectetur semper. Auctor est aliquet magna ultrices tellus vel lacus ex feugiat. Ad penatibus amet suspendisse dapibus mollis sociosqu. Porttitor a pulvinar penatibus habitasse mi ultricies ex.',
}


// ! Products should always contain at least 5 objects, repeats are fine if required.
const products: Array<Product> = [clkr, ndaLogo, vite, vite, clkr, ndaLogo, vite]

export default products;
