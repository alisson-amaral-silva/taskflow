const MOCK_TASKS = [
  {
    id: 1,
    title: "Create EventBus.js",
    status: "todo",
    meta: "core · Observer Pattern",
  },
  {
    id: 2,
    title: "Code TaskService fake",
    status: "todo",
    meta: "services · Event Loop",
  },
  {
    id: 3,
    title: "Config debounce search",
    status: "todo",
    meta: "components · Event Loop",
  },
  {
    id: 4,
    title: "Static board",
    status: "doing",
    meta: "ui · Step 1",
  },
  {
    id: 5,
    title: "Build Execution Console",
    status: "doing",
    meta: "ui · Event Loop",
  },
  {
    id: 6,
    title: "Create repo and publish the skeleton",
    status: "done",
    meta: "setup · Step 0",
  },
  {
    id: 7,
    title: "Choose arch",
    status: "done",
    meta: "setup · Step 0",
  },
];

const FAKE_LATENCY_MS = 800;

export function getTasks() {
  console.log(
    "[TaskService] getTasks() Call — this is sync. run before any .then()",
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        "[TaskService] setTimeout call — solving with Promise",
        MOCK_TASKS.length,
        "tasks",
      );
      resolve(MOCK_TASKS);
    }, FAKE_LATENCY_MS);
  });
}
