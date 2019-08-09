import * as React from "react";

import { ICity } from "../stores/cities/iCity";

import { City } from "./city";

interface ICitiesProps {
    readonly cities: readonly ICity[];
}

export class Cities extends React.PureComponent<ICitiesProps> {

    public render() {
        return this.props.cities.map((city) => {

            const { name, timezone } = city;

            return (
                <City
                    key={name}
                    name={name}
                    timezone={timezone} />
            );
        });
    }
}
