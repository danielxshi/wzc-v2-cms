import React from "react";
import { render } from "react-dom";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap"

const KeysToComponentMap = {
    ArticleTitle: CardTitle,
    Image: CardImg,
    Text: CardText
};

function renderer(config) {
    if (typeof KeysToComponentMap[config.component] !== "undefined"){
        return React.createElement(
            KeysToComponentMap[config.component],
            {
                src: config.src
            },
            config.children &&
            (typeof config.children === "string"
                ? config.children
                : config.children.map(c => renderer(c))   
            )
        );
    }
}

export default render;