import React from 'react';
import { useState } from 'react';

import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { StylesSheet } from '../Style/StylesSheet';

function HomeScreen(){
    let person_height = 150;
    let person_weight = 60;
    let bmi_value = 26.75;

    const [personHeight, setPersonHeight] = useState(person_height);

    const increaseHeight = () => {
        setPersonHeight(personHeight + 1);
    }
    const decreaseHeight = () => {
        setPersonHeight(personHeight - 1);
    }


    const [personWeight, setPersonWeight] = useState(person_weight);

    const increaseWeight = () => {
        setPersonWeight(personWeight + 1);
    }
    const decreaseWeight = () => {
        setPersonWeight(personWeight - 1);
    }


    const [bmiValue, setBMIValue] = useState(bmi_value);

    const calculateBMI = () => {
        const calcBMI = (personWeight/ ((personHeight * personHeight)/10000));
        setBMIValue(Number(calcBMI.toFixed(2)));
    }

    return(
        <View style={StylesSheet.container}>
            <ScrollView>
                <View style={StylesSheet.inputArea}>
                    <View style={StylesSheet.buttonArea}>
                        <Text style={StylesSheet.inputAreaText}>Weight</Text>
                        <Text style={StylesSheet.varText}>{personWeight}</Text>
                        <Text>kg</Text>
                        <View style={StylesSheet.buttonContainer}>
                            <TouchableOpacity style={StylesSheet.smallButton} onPress={decreaseWeight}>
                                <Text style={StylesSheet.buttonText}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StylesSheet.smallButton} onPress={increaseWeight}>
                                <Text style={StylesSheet.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={StylesSheet.buttonArea}>
                        <Text style={StylesSheet.inputAreaText}>Height</Text>
                        <Text style={StylesSheet.varText}>{personHeight}</Text>
                        <Text>cm</Text>
                        <View style={StylesSheet.buttonContainer}>
                            <TouchableOpacity style={StylesSheet.smallButton} onPress={decreaseHeight}>
                                <Text style={StylesSheet.buttonText}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StylesSheet.smallButton} onPress={increaseHeight}>
                                <Text style={StylesSheet.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={StylesSheet.buttonArea}>
                    <Text style={StylesSheet.inputAreaText}>BMI Value</Text>
                    <Text style={StylesSheet.bmiText}>{bmiValue}</Text>
                    <View style={StylesSheet.buttonContainer}>
                        <TouchableOpacity style={StylesSheet.longButton} onPress={calculateBMI}>
                            <Text style={StylesSheet.buttonText}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={StylesSheet.Area}>
                    <View style={StylesSheet.table}>

                        <View style={StylesSheet.row}>
                            <Text style={[StylesSheet.cell, StylesSheet.cell_text]}>BMI Value</Text>
                            <Text style={[StylesSheet.cell, StylesSheet.cell_text]}>Status</Text>
                        </View>
                        <View style={StylesSheet.row}>
                            <Text style={StylesSheet.cell}>Below 18.5</Text>
                            <Text style={StylesSheet.cell}>Under weight</Text>
                        </View>
                        <View style={StylesSheet.row}>
                            <Text style={StylesSheet.cell}>18.5 - 24.9</Text>
                            <Text style={StylesSheet.cell}>Normal</Text>
                        </View>
                        <View style={StylesSheet.row}>
                            <Text style={StylesSheet.cell}>25 - 29.9</Text>
                            <Text style={StylesSheet.cell}>Overweight</Text>
                        </View>
                        <View style={StylesSheet.row}>
                            <Text style={StylesSheet.cell}>30 and above</Text>
                            <Text style={StylesSheet.cell}>Obese</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;