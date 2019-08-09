import { observable, runInAction } from "mobx";

import { ITimeStore } from "./iTimeStore";

export class TimeStore implements ITimeStore {
    @observable
    public now = new Date();

    private readonly interval = 1_000;

    public constructor() {
        setInterval(() => {
            runInAction(() => {
                this.now = new Date();
            });
        }, this.interval);
    }
}
