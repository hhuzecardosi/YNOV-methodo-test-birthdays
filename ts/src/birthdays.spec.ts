import { BirthdayNotebook } from "./birthdays";

describe("birthdays", function () {

  let notebook: BirthdayNotebook;

  beforeAll(() => {
    notebook = new BirthdayNotebook();
  });

  it("should return empty array when no birthday is set", () => {
    expect(notebook.getBirthdays(new Date())).toHaveLength(0);
  });

  it("should return the number of person which have birthday set on this date", () => {
    notebook.addBirthday("Alice", new Date(2000, 0, 1));
    expect(notebook.getBirthdays(new Date(2000, 0, 1))).toEqual(["Alice"]);
  });

  it("should return the number of persons when multiple birthdays are set on this date", () => {
    notebook.addBirthday("Bob", new Date(2000, 0, 1));
    expect(notebook.getBirthdays(new Date(2000, 0, 1))).toHaveLength(2);
  });

  it("should return the number of persons when multiple birthdays are set on different dates", () => {
    notebook.addBirthday("Jim", new Date(2000, 0, 2));
    expect(notebook.getBirthdays(new Date(2000, 0, 1))).toHaveLength(2);
    expect(notebook.getBirthdays(new Date(2000, 0, 2))).toHaveLength(1);
  });
});
