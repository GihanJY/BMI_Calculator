import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StylesSheet } from '../Style/StylesSheet';

function HealthyScreen() {
    const healthData = [
        {
            title: 'Health Risks',
            data: [
                'Maintaining a healthy BMI can reduce the risk of developing chronic diseases such as type 2 diabetes, heart disease, stroke, hypertension, and certain types of cancer.',
                'Excess weight can put strain on joints and increase the risk of conditions like osteoarthritis.',
                'Obesity and high BMI can contribute to respiratory problems like sleep apnea and asthma.',
            ]
        },

        {
            title: 'Be Healthy',
            data: [
                'Follow a Balanced Diet Plan',
                'Regular Exercise',
                'Practice Portion Control',
                'Stay Hydrated',
                'Limit Sugary Beverages',
                'Get Sufficient Sleep',
            ]
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text style={StylesSheet.AreaText}>{`\u25CF ${item}`}</Text>
            </View>
        );
    };

    return (
        <View style={StylesSheet.container}>
            <FlatList
                data={healthData}
                renderItem={({ item }) => (
                    <View style={StylesSheet.Area}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={StylesSheet.AreaTitle}>{item.title}</Text>
                        </View>
                        <FlatList
                            data={item.data}
                            renderItem={({ item }) => renderItem({ item })}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default HealthyScreen;
