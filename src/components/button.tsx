import {FlowProps} from "solid-js";

type Props = {
    intent: "primary" | "secondary" | "accent"
    onClick: () => void
}

export function Button(props: FlowProps<Props>) {
    return <button class={props.intent} onClick={props.onClick}>{props.children}</button>
}