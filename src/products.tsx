/* Noah Klein */

interface Product {
    name: string;
    imageUrl: string;
    description: string;
}

const dualDigitShotClock: Product = {
    name: 'Dual-Digit shotClock',
    imageUrl: '/Double-Digit-Shot-Clock.png',
    description: 'Track every possession with confidence using the Dual-Digit shotClock. Featuring two seven-segment displays separated by a single decimal point and equipped with multi-color RGB LEDs, this innovative shot clock provides a dynamic range of colors to clearly indicate various game states, ensuring players, coaches, and fans are always in sync with every moment of the match.',
}

const miniGameClock: Product = {
    name: 'Mini gameClock',
    imageUrl: '/Full-Mini-Game-Clock.PNG',
    description: 'Keep your matches running smoothly with the Mini gameClock. Designed with four seven-segment displays separated by a colon and equipped with multi-color RGB LEDs, this compact clock provides a clear and vibrant display of game times and states. Its small form factor ensures it fits seamlessly into any setting while delivering maximum visibility and precision.',
}

const clkBox: Product = {
    name: 'clkBox',
    imageUrl: '/clkBox.PNG',
    description: 'Get your clkr hardware modules online with the clkBox. Effortlessly connect and manage your devices for quick, accurate match data presentation, with real-time data and statistics uploaded to your league\'s database. Easily customize and update your Clkr module layout directly on the device, allowing you to run your events smoothly and confidently every time.',
}


// ! Products should always contain at least 5 objects, repeats are fine if required.
const products: Array<Product> = [dualDigitShotClock, miniGameClock, clkBox, dualDigitShotClock, miniGameClock, clkBox]

export default products;

//TODO make components take products as a prop
