import frameRouter from "../framework/router";
import appRouter from "../appRouter";

const allRouter = [...frameRouter, ...appRouter];

export default allRouter;
