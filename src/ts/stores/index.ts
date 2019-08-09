import { StaticCityStore } from "./cities/staticCityStore";
import { ServiceWorkerStore } from "./service-worker/serviceWorkerStore";
import { TimeStore } from "./time/timeStore";

export const stores = {
    cityStore: new StaticCityStore(),
    serviceWorkerStore: new ServiceWorkerStore(),
    timeStore: new TimeStore(),
};
