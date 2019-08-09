import { inject, observer } from "mobx-react";
import * as moment from "moment-timezone";
import * as React from "react";

import { ITimeStore } from "../stores/time/iTimeStore";

interface ILocalTimeProps {
    readonly timeStore?: ITimeStore;
    readonly timezone: string;
}

@inject("timeStore")
@observer
export class LocalTime extends React.Component<ILocalTimeProps> {
    public render() {

        const { timezone, timeStore } = this.props;

        return (
            <h2 className="city-time">
                {
                    moment(timeStore!.now)
                        .tz(timezone)
                        .format("HH:mm")
                }
            </h2>
        );
    }
}
