import { test } from "uvu";
import { expect } from "expect";

import FruitsPlugin from "../index.js";

let fruitsPlugin;

test.before.each(() => {
  fruitsPlugin = new FruitsPlugin();
});

test("FruitsPlugin#build", () => {
  const items = fruitsPlugin.build();

  expect(items).toEqual(
    expect.arrayContaining([
      { definition: expect.anything(), word: expect.anything() },
    ])
  );
});

test.run();
