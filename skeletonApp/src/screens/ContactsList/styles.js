import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10
    },
    containerHeader: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#025FA6'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerCard: {
        margin: 4,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    },
    containerImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    containerName: {
        flex: 1,
        paddingHorizontal: 10
    },
    textName: {
        fontSize: 16
    },
    textPhone: {
        fontSize: 14
    },
    containerContact: {
        flexDirection: 'row'
    },
    iconPhone: {
        marginLeft: 12
    },
    iconMessage:{ 
        marginLeft: 14 
    },
    itemSeparator: {
        borderColor: '#f6f6f6', 
        borderWidth: 1
    }
});

export default styles;