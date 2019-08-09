import * as React from "react";
import FlexView from "react-flexview";

import { LocalTime } from "./localTime";

interface ICityProps {
    readonly name: string;
    readonly timezone: string;
}

export class City extends React.PureComponent<ICityProps> {
    public render() {

        const { name, timezone } = this.props;

        return (
            <FlexView
                className="city"
                column
                hAlignContent="center">
                <h4 className="city-name">
                    {name}
                </h4>
                <LocalTime timezone={timezone} />
            </FlexView>
        );
    }
}
