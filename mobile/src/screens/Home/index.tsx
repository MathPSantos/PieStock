import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const Home = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View>
                    {/* Header */}
                </View>
                <View style={styles.main}>
                    {/* Main Content */}
                    <View style={styles.titleContainer}>
                        {/* Title Container */}
                        <Text style={styles.title}>Home</Text>
                        <Text>
                            <Text style={styles.piesNumber}>136 </Text>
                            <Text style={styles.piesDesc}>empadas vendidas*</Text>
                        </Text>
                    </View>
                    <View style={styles.section}>
                        {/* Orders */}
                        <Text style={styles.secTitle}>Pedidos pendentes</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingTop: 20,
                                paddingBottom: 8,
                                paddingRight: 20,
                                paddingLeft: 8
                            }}
                        >
                            {/* Pending Orders */}
                            <View style={[styles.card, { marginLeft: 0 }]}>
                                {/* Orders Card */}
                                <View style={styles.cardData}>
                                    {/* Data Container */}
                                    <View style={styles.cardDataContent}>
                                        {/* Data 1 */}
                                        <Text style={styles.cardTitle}>Cliente:</Text>
                                        <Text style={styles.cardValue}>Matheus Pires Santos</Text>
                                        <Text style={[styles.cardTitle, { marginTop: 10 }]}>Valor:</Text>
                                        <Text style={styles.cardValue}>R$ 24,00</Text>
                                    </View>
                                    <View style={styles.cardDataContent}>
                                        {/* Data 2 */}
                                        <Text style={styles.cardTitle}>Empadas:</Text>
                                        <Text style={styles.cardValue}>4 Carne Seca</Text>
                                    </View>
                                </View>
                                <View style={styles.cardDetail}>
                                    {/* ToDetail */}
                                    <Text style={styles.cardDetailTitle}>Detalhes</Text>
                                    <Icon name='arrow-right' color='#EA9C1B' size={16} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                {/* Orders Card */}
                                <View style={styles.cardData}>
                                    {/* Data Container */}
                                    <View style={styles.cardDataContent}>
                                        {/* Data 1 */}
                                        <Text style={styles.cardTitle}>Cliente:</Text>
                                        <Text style={styles.cardValue}>Matheus Pires Santos</Text>
                                        <Text style={[styles.cardTitle, { marginTop: 10 }]}>Valor:</Text>
                                        <Text style={styles.cardValue}>R$ 24,00</Text>
                                    </View>
                                    <View style={styles.cardDataContent}>
                                        {/* Data 2 */}
                                        <Text style={styles.cardTitle}>Empadas:</Text>
                                        <Text style={styles.cardValue}>4 Carne Seca</Text>
                                    </View>
                                </View>
                                <View style={styles.cardDetail}>
                                    {/* ToDetail */}
                                    <Text style={styles.cardDetailTitle}>Detalhes</Text>
                                    <Icon name='arrow-right' color='#EA9C1B' size={16} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                {/* Orders Card */}
                                <View style={styles.cardData}>
                                    {/* Data Container */}
                                    <View style={styles.cardDataContent}>
                                        {/* Data 1 */}
                                        <Text style={styles.cardTitle}>Cliente:</Text>
                                        <Text style={styles.cardValue}>Matheus Pires Santos</Text>
                                        <Text style={[styles.cardTitle, { marginTop: 10 }]}>Valor:</Text>
                                        <Text style={styles.cardValue}>R$ 24,00</Text>
                                    </View>
                                    <View style={styles.cardDataContent}>
                                        {/* Data 2 */}
                                        <Text style={styles.cardTitle}>Empadas:</Text>
                                        <Text style={styles.cardValue}>4 Carne Seca</Text>
                                    </View>
                                </View>
                                <View style={styles.cardDetail}>
                                    {/* ToDetail */}
                                    <Text style={styles.cardDetailTitle}>Detalhes</Text>
                                    <Icon name='arrow-right' color='#EA9C1B' size={16} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                {/* Orders Card */}
                                <View style={styles.cardData}>
                                    {/* Data Container */}
                                    <View style={styles.cardDataContent}>
                                        {/* Data 1 */}
                                        <Text style={styles.cardTitle}>Cliente:</Text>
                                        <Text style={styles.cardValue}>Matheus Pires Santos</Text>
                                        <Text style={[styles.cardTitle, { marginTop: 10 }]}>Valor:</Text>
                                        <Text style={styles.cardValue}>R$ 24,00</Text>
                                    </View>
                                    <View style={styles.cardDataContent}>
                                        {/* Data 2 */}
                                        <Text style={styles.cardTitle}>Empadas:</Text>
                                        <Text style={styles.cardValue}>4 Carne Seca</Text>
                                    </View>
                                </View>
                                <View style={styles.cardDetail}>
                                    {/* ToDetail */}
                                    <Text style={styles.cardDetailTitle}>Detalhes</Text>
                                    <Icon name='arrow-right' color='#EA9C1B' size={16} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.section}>
                        {/* Pies */}
                        <Text style={styles.secTitle}>Empadas e Estoque</Text>
                        <View style={styles.piesList}>
                            <View style={styles.pieCard}>
                                <Text style={styles.cardPieTitle}>Frango Catupiry</Text>
                                <Text>
                                    <Text style={styles.piesCardNumber}>30 </Text>
                                    <Text style={styles.piesCardDesc}>unid.</Text>
                                </Text>
                            </View>
                            <View style={styles.pieCard}>
                                <Text style={styles.cardPieTitle}>Palmito</Text>
                                <Text>
                                    <Text style={styles.piesCardNumber}>15 </Text>
                                    <Text style={styles.piesCardDesc}>unid.</Text>
                                </Text>
                            </View>
                            <View style={styles.pieCard}>
                                <Text style={styles.cardPieTitle}>Calabresa</Text>
                                <Text>
                                    <Text style={styles.piesCardNumber}>32 </Text>
                                    <Text style={styles.piesCardDesc}>unid.</Text>
                                </Text>
                            </View>
                            <View style={styles.pieCard}>
                                <Text style={styles.cardPieTitle}>Carne Seca</Text>
                                <Text>
                                    <Text style={styles.piesCardNumber}>8 </Text>
                                    <Text style={styles.piesCardDesc}>unid.</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        paddingBottom: 10,
        paddingHorizontal: 24,
        backgroundColor: '#F6F6F6',
    },

    main: {
        flex: 1,
    },

    section: {
        marginTop: 32,
    },

    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        color: '#A76C21',
        fontFamily: 'Roboto_900Black',
        fontSize: 35,
    },

    secTitle: {
        color: '#A76C21',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
    },

    cardTitle: {
        color: '#232621',
        fontFamily: 'Roboto_700Bold',
        fontSize: 13,
    },

    cardValue: {
        color: '#5F685A',
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
    },

    cardPieTitle: {
        color: '#232621',
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
    },

    cardDetailTitle: {
        color: '#EA9C1B',
        fontFamily: 'Roboto_700Bold',
        fontSize: 15
    },

    piesNumber: {
        color: '#EA9C1B',
        fontFamily: 'Roboto_700Bold',
        fontSize: 15
    },

    piesCardNumber: {
        color: '#EA9C1B',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20
    },

    piesDesc: {
        color: '#EA9C1B',
        fontFamily: 'Roboto_500Medium',
        fontSize: 12
    },

    piesCardDesc: {
        color: '#EA9C1B',
        fontFamily: 'Roboto_500Medium',
        fontSize: 14
    },

    piesList: {
        justifyContent: 'center',
        paddingTop: 16,
    },

    pieCard: {
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },

    card: {
        width: 300,
        height: 170,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

        marginHorizontal: 6
    },

    cardData: {
        width: '100%',
        height: 138 - 28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    cardDataContent: {
        width: '50%',
    },

    cardDetail: {
        width: '100%',
        height: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#CCCCCC',
        borderTopWidth: 1,
        borderStyle: 'solid'
    },
});

export default Home;
