import { StyleSheet } from "react-native";
import { store } from "../../../redux/store";
const {theme} = store.getState()
export default StyleSheet.create({
    list : {
        flexDirection : "row",
        marginTop:-8,
        paddingTop: 0,
    },
    header : {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent : 'space-between',
        padding: theme.spacing.s,
        margin: theme.spacing.s,
        marginBottom : 0,
        backgroundColor: theme.pallete.c2,
        // borderRadius: theme.spacing.m,
        borderTopRightRadius: theme.spacing.m,
        borderTopLeftRadius: theme.spacing.m,

    },
    wrapper : {
        marginVertical: theme.spacing.m,
    },
    viewAll : {
        // paddingLeft: theme.spacing.xl
    }
})