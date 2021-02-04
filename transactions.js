import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class Transaction extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal' 
        }
    }
    handleBarcodeScanned=async({type,data})=>{
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }

    getCameraPermissions=async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions: status==="granted",
            buttonState: 'clicked'
        })
    }

    render(){
        const hasCameraPermissions= this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if(buttonState==='clicked' && hasCameraPermissions){
            return(
            <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned = {scanned?undefined:this.handleBarcodeScanned}></BarCodeScanner>
            )
        }

        else if(buttonState==='normal'){
            return(
                <View>
                    <Text>
                    {hasCameraPermissions===true?this.state.scannedData:'Requesting Camera Permissions'}
                    </Text>
                    <TouchableOpacity onPress ={this.getCameraPermissions}>
                        <Text>
                            Scan QR code!
                        </Text>
                        </TouchableOpacity>
                </View>
            )
        }

        
    }
}