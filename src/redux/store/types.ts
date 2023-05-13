import { store } from "./store";

export type AppDispathc = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
