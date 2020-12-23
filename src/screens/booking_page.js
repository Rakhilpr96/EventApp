import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, TouchableWithoutFeedbackBase, TouchableOpacity } from 'react-native';

import DatePicker from 'react-native-date-picker'

const EventBookingScreen = () => {
    const [startdate, setStartDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Book Your Event</Text>
                <View>
                    <Text style={styles.subHeading}>Event Title</Text>
                    <TextInput style={styles.inputbox} placeholder="eg : Music Event" />

                    <Text style={styles.subHeading}>Event Details</Text>
                    <TextInput style={styles.inputbox} placeholder="Event Description" multiline={true} />

                    <Text style={styles.subHeading}>Seats</Text>
                    <TextInput keyboardType='numeric' style={[styles.inputbox, { width: 100 }]} placeholder="eg : 100" />

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.subHeading}>Starts</Text>
                            <TouchableWithoutFeedback onPress={() => setModal1Visible(true)}>
                                <View style={styles.datePicker}>
                                    <Text style={{ color: '#fff' }}>{startdate.toDateString()}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.subHeading}>Ends</Text>
                            <TouchableWithoutFeedback onPress={() => setModal2Visible(true)}>
                                <View style={styles.datePicker}>
                                    <Text style={{ color: '#fff' }}>{enddate.toDateString()}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                </View>
                <Modal
                    visible={modal1Visible}
                    transparent={true}
                >
                    <TouchableWithoutFeedback onPress={() => setModal1Visible(false)}>
                        <View style={styles.modalContainer}>
                            <DatePicker
                                date={startdate}
                                onDateChange={setStartDate}
                                style={styles.datepickerModal}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <Modal
                    visible={modal2Visible}
                    transparent={true}
                >
                    <TouchableWithoutFeedback onPress={() => setModal2Visible(false)}>
                        <View style={styles.modalContainer}>
                            <DatePicker
                                date={startdate}
                                onDateChange={setEndDate}
                                style={styles.datepickerModal}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Booked Successfully')}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    subHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 10
    },
    inputbox: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 40
    },
    datePicker: {
        backgroundColor: '#5d0404',
        paddingVertical: 5,
        marginRight: 20,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    datepickerModal: {
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    buttonContainer: {
        backgroundColor: 'green',
        marginHorizontal: 30,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default EventBookingScreen;