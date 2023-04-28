import React, { useState } from 'react';
import { TextInput, Text, View, Image } from 'react-native';
import styles from './style';

interface PrimaryInputProps {
    placeholder: string;
    errorMsg: string;
    value: string;
    secureTextEntry?: boolean;
    icon?: any;
    error?: boolean;
    onChangeText: ((text: string) => void) | undefined;
}


const PrimaryInput = ({ placeholder, errorMsg, secureTextEntry, icon, value, error, onChangeText, ...props }: PrimaryInputProps) => {



    //Checks if there is an error or not, if there is, it displays the error and adds the border
    const borderColor = error ? '#FF4B4B' : '#656262';
    const displayError = error ? 'flex' : 'none';

    const handleOnChangeText = (text: string) => {
        // Check if there is an error and update the state variable accordingly

        // Call the onChangeText function provided by the parent component
        onChangeText && onChangeText(text);
    };

    return (
        <View style={[styles.primaryInputContainer]}>
            <View style={[styles.inputBackground, { borderColor }]}>
                {icon && <Image source={icon} style={styles.icon} />}
                <TextInput
                    style={{ flex: 1 }}
                    placeholder={placeholder}
                    placeholderTextColor={'#a8a8a8'}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={handleOnChangeText}
                    {...props}
                />
            </View>
            <View style={{ display: displayError }}>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            </View>
        </View>
    );
};

export default PrimaryInput;
