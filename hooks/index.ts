import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { AuthTokenContext } from "@/contexts/AuthTokenContext";
// import { DBContext } from "../contexts/db/DBContext";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const useAuthToken = () => {
    const context = useContext(AuthTokenContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthTokenProvider");
    }

    return context;
};
// export const useDBOperations = () => useContext(DBContext);