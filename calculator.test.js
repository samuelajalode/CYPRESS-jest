//import mathOperations from "./calculator";

//const { describe, it } = require('node:test');

// Arrange and Act
const mathOperations = require ('./calculator.js');

describe ("Calulator test", () => {
    // Arrange and Act
    it ("Adding numbers together", () => {
        // Assert
        expect(mathOperations.sum(1,2)).toBe(3);
        
    }
    );
    test("Subtracting numbers", () => {
        expect(mathOperations.diff(1,2)).toBe(-1);
    }
    );

    test("Multiplying numbers", () => {
        expect(mathOperations.Product(1,2)).toBe(2);
    }
    );
    test ("truthy operator", () => {
        const name = "Software engineering is soft money";
        const n = null
        expect(n).toBeNull();
        expect(name).not.toBeNull();
        // name has a valide value
        expect(name).toBeTruthy();
        expect(n).toBeFalsy();
    });

    // Number matchers
    test("numeric operators", () => {
        const num1 = 100;
        const num2 = -20;
        const num3 = 0;

        // greater than
        expect(num1).toBeGreaterThan(22);
        expect(num2).toBeLessThanOrEqual(0);
        expect(num3).toBeGreaterThanOrEqual(0);
    });

    // String matchers

    test("String operators", () => {
        const name = "Software engineering is soft money";
        expect(name).toMatch(/money/);
    }   
    );

    // Array matchers
    
    test("Array operators", () => {
        const names = ["Software", "engineering", "is", "soft", "money"];
        expect(names).toContain("money");
    });

    // Object matchers

    test("Object operators", () => {
        const person = {
            name: "Software engineering is soft money",
            age: 100
        };
        expect(person).toHaveProperty("name");
        expect(person).toHaveProperty("name", "Software engineering is soft money");
    });

    // Async matchers

    test("Async operators", () => {
        const fetchData = () => {
            return new Promise((resolve, reject) => {
                resolve("Software engineering is soft money");
            });
        };
        expect(fetchData()).resolves.toBe("Software engineering is soft money");
    });
});


