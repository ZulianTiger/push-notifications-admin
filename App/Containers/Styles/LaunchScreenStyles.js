import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2b2d35",
    },
    Button: {
        height: 65,
        width: "60%",
        marginLeft: "20%",
        marginTop: 100,
        backgroundColor: "#cc0c1c",
        borderRadius: 25,
    },
    ButtonText: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 22,
        color: "#fafafa",
        fontWeight: "bold",
        letterSpacing: 1.1,
    }
})
