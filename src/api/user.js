import { request } from "./client";

export const getUserStatus = () => request("/api/users/status");
