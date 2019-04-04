import generateEntitiesRanges from "../index";

const exampleWords = [
  {
    start: 13.02,
    confidence: 0.68,
    end: 13.17,
    word: "there",
    punct: "There",
    index: 0
  },
  {
    start: 13.17,
    confidence: 0.61,
    end: 13.38,
    word: "is",
    punct: "is",
    index: 1
  },
  {
    start: 13.38,
    confidence: 0.99,
    end: 13.44,
    word: "a",
    punct: "a",
    index: 2
  },
  {
    start: 13.44,
    confidence: 1,
    end: 13.86,
    word: "day",
    punct: "day.",
    index: 3
  }
];

// ignoring autogenerated id
// see" 2. Ignoring values, relative to current time"
// https://medium.com/@boriscoder/the-hidden-power-of-jest-matchers-f3d86d8101b0
const expectedValue = [
  {
    start: 13.02,
    end: 13.17,
    confidence: 0.68,
    text: "There",
    offset: 0,
    length: 5,
    key: expect.any(String) // "sjagsma"
  },
  {
    start: 13.17,
    end: 13.38,
    confidence: 0.61,
    text: "is",
    offset: 6,
    length: 2,
    key: expect.any(String) // "xuyej3b"
  },
  {
    start: 13.38,
    end: 13.44,
    confidence: 0.99,
    text: "a",
    offset: 9,
    length: 1,
    key: expect.any(String) // "8fyva5"
  },
  {
    start: 13.44,
    end: 13.86,
    confidence: 1,
    text: "day.",
    offset: 11,
    length: 4,
    key: expect.any(String) // "ss8pm4p"
  }
];

describe("Generate Entity Ranges", () => {
  const result = generateEntitiesRanges(exampleWords, "punct");
  const resultFirstElement = result[0];
  it("Should be defined", () => {
    expect(result).toBeDefined();
  });

  it("Should return a list of entities", () => {
    expect(result).toEqual(expectedValue);
  });
  it("Should have expected attributes", () => {
    expect(resultFirstElement).toHaveProperty("start");
    expect(resultFirstElement).toHaveProperty("end");
    expect(resultFirstElement).toHaveProperty("confidence");
    expect(resultFirstElement).toHaveProperty("text");
    expect(resultFirstElement).toHaveProperty("offset");
    expect(resultFirstElement).toHaveProperty("length");
    expect(resultFirstElement).toHaveProperty("key");
  });

  it("Should return a list of entities", () => {
    expect(typeof resultFirstElement.key).toBe("string");
  });
});
