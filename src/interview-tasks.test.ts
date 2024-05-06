import InterviewTasks from "./interview-tasks";

const interviewTasks = new InterviewTasks();

test("fibonacci", () => {
  expect(interviewTasks.fibonacci(0)).toEqual([]);
  expect(interviewTasks.fibonacci(1)).toEqual([1]);
  expect(interviewTasks.fibonacci(2)).toEqual([1, 1]);
  expect(interviewTasks.fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
});

test("anagram", () => {
  expect(interviewTasks.anagram("fried", "fired")).toBeTruthy();
  expect(interviewTasks.anagram("gainly", "laying")).toBeTruthy();
  expect(interviewTasks.anagram("sadder", "dreads")).toBeTruthy();
  expect(interviewTasks.anagram("listen", "silent")).toBeTruthy();
  expect(interviewTasks.anagram("orange", "apple")).toBeFalsy();
});
