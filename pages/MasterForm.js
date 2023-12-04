import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export const MasterForm = () => {
  const [formData, setFormData] = useState({
    code: '',
    groupbc: '',
    rrnumber: '',
    name: '',
    cast: '',
    mobileno: '',
    id: '',
    photo: null,

  });
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });
  //console.log(result.assets[0].uri)
      // Use "canceled" instead of "cancelled"
      if (!result.canceled) {
        // Use the "assets" array to access selected assets
        if (result.assets && result.assets.length > 0) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            photo: result.assets[0].uri,
          }));
        }
      } else {
        console.log('Image selection cancelled');
      }
    } catch (error) {
      console.error('Error selecting photo:', error);
    }
  };
  
  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();

      // Append form fields to FormData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // If formData.photo is a valid URI to an image file
      if (formData.photo) {
        formDataToSend.append('photo', {
          uri: formData.photo,
        //type: 'image/png', // Adjust the type based on the image format
        //name: 'photo.png',
        });

      }

      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      //console.log("jj",formDataToSend)

      const response = await axios.post('https://reactnativeserver.vercel.app/upload', formDataToSend, { headers });

      const { data } = response;
      const { success, message } = data;

      if (success) {
        setFormData({
          code: '',
          groupbc: '',
          rrnumber: '',
          name: '',
          cast: '',
          mobileno: '',
          id: '',
          photo: null,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Master Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Code"
        onChangeText={(text) => handleChange('code', text)}
        value={formData.code}
      />
      <TextInput
        style={styles.input}
        placeholder="Group BC"
        onChangeText={(text) => handleChange('groupbc', text)}
        value={formData.groupbd}
      />
      <TextInput
        style={styles.input}
        placeholder="RR Number"
        onChangeText={(text) => handleChange('rrnumber', text)}
        value={formData.rrnumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => handleChange('name', text)}
        value={formData.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Cast"
        onChangeText={(text) => handleChange('cast', text)}
        value={formData.cast}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        onChangeText={(text) => handleChange('mobileno', text)}
        value={formData.mobileno}
      />
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={(text) => handleChange('id', text)}
        value={formData.id}
      />
      <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={[styles.buttonText, { fontWeight: 'normal' }]}>Choose Photo</Text>
        </TouchableOpacity>
        {formData.photo && (
        <Image source={{ uri: formData.photo }} style={styles.photoPreview} />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit} >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

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

});