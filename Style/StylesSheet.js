import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const StylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    bgText: {
        fontWeight: 'bold',
        color: 'yellow',
    },
    inputArea: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputAreaText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a3f6a',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonArea: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#C9E1F9',
        margin: 15,
        alignItems: 'center',
    },
    smallButton: {
        backgroundColor: '#1a3f6a',
        margin: 10,
        borderRadius: 75,
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    longButton: {
        backgroundColor: '#1a3f6a',
        margin: 20,
        borderRadius: 50,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bmiText: {
        fontSize: 30,
        color: '#ff9e00',
        fontWeight: 'bold',
    },
    varText: {
        fontSize: 30,
        color: '#1a3f6a',
        fontWeight: 'bold',
    },
    table: {
        borderRadius: 20,
        backgroundColor: '#C9E1F9',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cell: {
        padding: 5,
        width: windowWidth * 0.4,
        height: windowHeight * 0.06,
        textAlign: 'center',
        fontSize: 18,
    },
    cell_text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1a3f6a',
    },
    Area: {
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#C9E1F9',
        margin: 15,
        padding: 15,
    },
    AreaTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1a3f6a',
    },
    AreaText: {
        fontSize: 20,
        textAlign: 'justify',
    },

    //Welcome page styles
    BackgroundImage:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    welcomeButton:{
        backgroundColor: '#C9E1F1',
        marginBottom: 50,
        borderRadius: 50,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    WelcomeButtonText:{
        color: '#1a3f6a',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
