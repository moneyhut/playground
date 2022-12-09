import {Counter} from "./counter";
import {userEvent, within} from "@storybook/testing-library";

export default {
    title: "Counter",
    component: Counter
}

export const Play = {
    play: async ({canvasElement}) => {
      const canvas = await within(canvasElement);
      const decrementButton = canvas.getByText("-1");
      const incrementButton = canvas.getByText("+1");

      await userEvent.click(incrementButton)
      await userEvent.click(incrementButton)
      await userEvent.click(incrementButton)
      await userEvent.click(incrementButton)
      await userEvent.click(incrementButton)
      await userEvent.click(decrementButton)
      await userEvent.click(decrementButton)
      await userEvent.click(decrementButton)
    }
}