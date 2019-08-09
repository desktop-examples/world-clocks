import { StaticCityStore } from "../stores/cities/staticCityStore";

describe("cities", () => {

    describe("should return", () => {

        test("3", () => {
            const store = new StaticCityStore();

            const expectedCities = 3;

            expect(store.cities.length)
                .toBe(expectedCities);
        });
    });
});
