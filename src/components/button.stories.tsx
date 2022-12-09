import {Button} from "./button";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        onClick: {action: true}
    }
}

export const Primary = {
    args: {
        children: <>Click me!</>
    }
}