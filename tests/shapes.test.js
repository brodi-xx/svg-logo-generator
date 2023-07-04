
const Circle = require('../Circle.js');
const Square = require('../Square.js');
const Triangle = require('../Triangle.js');


describe('Circle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const circle = new Circle('red','bjl','black');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="red" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="black">bjl</text>
        </svg>
        `
        );
    });
});

  describe('Square', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const square = new Square('red','bjl','black');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="black">bjl</text>
        </svg>
        `
        );
    });
});

describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('red','bjl','black');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="red"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="black">bjl</text>
        </svg>
        `
        );
    });
});