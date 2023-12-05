import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export const Form2 = () => {
    const [selectedValue, setSelectedValue] = useState('java');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const [formData, setFormData] = useState({
        date: '',
        group: '',
        name: '',
        bcAmount: '',
        intNo: '',
        percentage: '',
        amount: ''
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(currentDate);
        handleChange('date', currentDate.toDateString())
    };

    const showDatepicker = () => {
        setShowPicker(true);
    };

    const handleSubmit = async() => {

        console.log(formData)
        //alert(formData.date)
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
           };
    
        try {
           const { data } = await axios.post('http://172.24.0.168:5000/create-form2', formData)
            // const {data}=await axios({
            //     method: 'POST',
            //     url: 'http://http://172.24.0.168:5000/create-form2',
            //     data: formData,
            //     headers:headers
            //   })
              
            const { message, success } = data;
            if (success) {
                setFormData({
                    date: '',
                    group: '',
                    name: '',
                    bcAmount: '',
                    intNo: '',
                    percentage: '',
                    amount: ''
            
                })
                alert("data saved")

            }
        } catch (error) {
            console.error('Error:', error.message);

        }


    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>New Form</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>Date</Text>
                <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
                    <Text>{date.toDateString()}</Text>
                </TouchableOpacity>
            </View>
            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}


            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Group</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue)
                        handleChange('group', itemValue)
                    }}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Python" value="python" />
                    <Picker.Item label="C#" value="csharp" />
                    <Picker.Item label="Ruby" value="ruby" />
                </Picker>
                {/* <Text>Selected Value: {selectedValue}</Text> */}
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => handleChange('name', text)}
                value={formData.name}
            />
            <TextInput
                style={styles.input}
                placeholder="BC Amount"
                onChangeText={(text) => handleChange('bcAmount', text)}
                value={formData.bcAmount}
            />
            <TextInput
                style={styles.input}
                placeholder="Int No"
                onChangeText={(text) => handleChange('intNo', text)}
                value={formData.intNo}
            />
            <TextInput
                style={styles.input}
                placeholder="%"
                onChangeText={(text) => handleChange('percentage', text)}
                value={formData.percentage}
            />

            <TextInput
                style={styles.input}
                placeholder="Amount"
                onChangeText={(text) => handleChange('amount', text)}
                value={formData.amount}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={""} >
                    <Text style={styles.buttonText}>New</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderColor: "red"
    },
    heading: {
        fontSize: 24,
        //fontWeight: 'bold',
        marginBottom: 20,
        color: '#0c3761',
        fontWeight: '500',
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        flex: 1,
        marginRight: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    photoPreview: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    dateLabel: {
        flex: 1,
        fontSize: 16,
    },
    dateButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
},
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    
  },


});


