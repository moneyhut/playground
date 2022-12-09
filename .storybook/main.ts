import {StorybookConfig} from "@storybook/html-vite"

const config: StorybookConfig = {
    stories: ["../src"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/html-vite",
        options: {}
    },
    features: {
        interactionsDebugger: true
    },
    core: {
        disableTelemetry: true,
    },
    docs: {
        enabled: true
    },
}

export default config;