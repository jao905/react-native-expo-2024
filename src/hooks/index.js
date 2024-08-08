import { Children } from "react";
import { FontProvider } from "./Font";

export function AppProvider({children}) {
    return <FontProvider>{children}</FontProvider>
}