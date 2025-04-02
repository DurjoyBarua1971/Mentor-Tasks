// A function signature in TypeScript describes the structure of a function: its parameters, their types, and its return type. Think of it as a contract that a function must follow. Function signatures help TypeScript ensure that functions are called correctly and return expected values, catching errors at compile time.

type ActionType = "start" | "stop" | "pause";
type ActionHandler = (actionId: string, details?: string) => void;
type ActionProcessor = (action: ActionType) => ActionHandler;

function createProcessor(action: ActionType): ActionHandler {
  return (actionId, details) => {
    console.log(`[${action}] ${actionId}: ${details ?? "none"}`);
  };
}

const startHandler = createProcessor("start");
const stopHandler = createProcessor("stop");

startHandler("A001", "Initiated"); // [start] A001: Initiated
startHandler("A002"); // [start] A002: none
stopHandler("A003", "Halted"); // [stop] A003: Halted
// createProcessor("resume"); // Error: Argument of type '"resume"' is not assignable to type 'ActionType'