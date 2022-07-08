import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

import Index from "../index";
import appStore from "../../../stateManager/store";
import mockData from "./mockData.json";

/* @ts-ignore: Unreachable code error*/
const Wrapper = ({ children }) => (
  /* @ts-ignore: Unreachable code error*/
  <Provider store={appStore}>{children}</Provider>
);

const server = setupServer(
  rest.get("https://snappfood.ir/mobile/v3/restaurant/vendors-list", (req, res, ctx) => {
    return res(ctx.json(mockData))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("loads and displays greeting", async () => {
  const { findAllByText } = await render(<Index />, { wrapper: Wrapper });

  await waitFor(async () => {
    /*
امکان تست نوشتن وجود نداشت چون از پکیج react-window استفاده کردم و مشکل داره
https://github.com/bvaughn/react-window/issues/454
*/
    expect(await findAllByText("سالاد بار ارگانیکاپرس (سالم و رژیمی)")).not.toHaveLength(0);
  })

})
