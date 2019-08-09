import { inject, observer } from "mobx-react";
import * as React from "react";
import FlexView from "react-flexview";

import { ICityStore } from "../stores/cities/iCityStore";

import { Cities } from "./cities";

interface IAppProps {
    readonly cityStore?: ICityStore;
}

@inject("cityStore")
@observer
export class App extends React.Component<IAppProps> {
    public render() {
        return (
            <FlexView
                className="cities-container"
                grow
                shrink
                basis="0"
                wrap
                hAlignContent="center"
                vAlignContent="top">
                <Cities cities={this.props.cityStore!.cities} />
            </FlexView>
        );
    }
}
