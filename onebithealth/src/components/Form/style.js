import reactDom from 'react-dom';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        weight: "100%",
        justifyContent: "space-around",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: 20,
        paddingTop: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    boxCalculatorButton: {
        alignItems: "center",
    },
    buttonCalculator: {
        fontSize: 20,
        backgroundColor: "#ff0043",
        alignItems: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
        borderRadius: 50,
    },
    textButtonCalculator: {
        color: "#ffffff",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 24,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItemList: {
        fontSize: 26,
        color: "red",
    }
});

export default styles;