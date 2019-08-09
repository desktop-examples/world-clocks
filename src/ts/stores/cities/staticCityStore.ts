import { ICityStore } from "./iCityStore";

export class StaticCityStore implements ICityStore {
    public cities = [
        {
            name: "New York",
            timezone: "America/New_York",
        },
        {
            name: "London",
            timezone: "Europe/London",
        },
        {
            name: "Tokyo",
            timezone: "Asia/Tokyo",
        },
    ];
}
