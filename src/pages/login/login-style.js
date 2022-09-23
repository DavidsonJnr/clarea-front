import { StyleSheet } from "react-native";
import { theme } from "../../../app-style";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ddacc9fa"
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        color: "#e566b2fa",
        justifyContent: "center",
        alignItems: "center"
    },
    cardBtn: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0
    },
    icon: {
        color: theme.colors.primary
    }
})