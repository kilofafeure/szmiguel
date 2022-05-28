import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

class Obligatorio extends React.PureComponent<any, any> {
    render() {
        return (
            <span data-title-right='Obligatorio'>
            &nbsp;
            <FontAwesomeIcon className="cursor-none" icon={faAsterisk} color='red' size="sm" />
        </span>
        );
    }
}

export default (Obligatorio);
