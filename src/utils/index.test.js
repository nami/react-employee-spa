import { extractLabels, extractSalaries } from "./index";
import data from "../data/dummyData.json";

test("if label data is correct", () => {
  const mockLabels = jest.fn().mockImplementation(extractLabels);
  mockLabels(data);
  expect(mockLabels).toHaveBeenCalled();

  const result = mockLabels.mock.results[0].value;
  // expect 6 countries
  expect(result.length).toBe(6);
  // expect vietnam to be included
  expect(result).toEqual(expect.arrayContaining(["Vietnam"]));
});

test("if salaries are being calculated correctly", () => {
  const mockSalaries = jest.fn().mockImplementation(extractSalaries);
  mockSalaries(data);
  expect(mockSalaries).toHaveBeenCalled();

  const result = mockSalaries.mock.results[0].value;
  // result for Japan using dummy data
  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ location: "Japan", salary: 16576, delta: 4 }),
    ])
  );
  // result for Total using dummy data
  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ location: "Total", salary: 82401, delta: -19 }),
    ])
  );
});
