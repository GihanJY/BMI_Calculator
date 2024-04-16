import {View ,Text, ScrollView} from 'react-native';
import {StylesSheet} from '../Style/StylesSheet';

function AboutScreen(){
    return(
        <View style={StylesSheet.container}>
            <ScrollView>
                <View style={StylesSheet.Area}>
                    <View style={{marginBottom: 20}}>
                        <Text style={StylesSheet.AreaTitle}>Purpose</Text>
                    </View>
                    <View>
                        <Text style={StylesSheet.AreaText}>This Calculator app calculates Body Mass Index (BMI) based on user-provided height and weight measurements.</Text>
                        <View style={{backgroundColor: '#aabbff', borderRadius: 10, margin: 20, padding: 10}}>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>BMI = Weight / (Height)^2</Text>
                        </View>
                        <Text style={StylesSheet.AreaText}>Our BMI calculator app serves as a tool to determine users' weight status and provides valuable insights into their health condition. By accurately calculating Body Mass Index (BMI), users gain a deeper understanding of their health status, empowering them to take proactive steps in minimizing potential health risks. Our app facilitates informed decision-making, guiding users towards healthier lifestyle choices and improved well-being.</Text>
                    </View>
                </View>
                <View style={StylesSheet.Area}>
                    <Text style={{textAlign: 'center'}}>Developed By: GihanJY</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default AboutScreen;