import React from "react";

import {RouteWithSubRoutes} from "./routings/routings";
import _ from "lodash";

export const App = ({routes}) => {
    return (
        <React.Fragment>
            {_.map(routes, (route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </React.Fragment>
    )
}

