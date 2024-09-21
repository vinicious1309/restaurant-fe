import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../restaurant/restaurant-backend/src/routers/restaurantRouter";
export const trpc = createTRPCReact<AppRouter>();
