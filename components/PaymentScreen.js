import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      {/* Nút Back */}
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Success')}>
        <Icon name="arrow-left" size={20} color="#00A86B" />
    </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Container bo tròn chứa tiêu đề và giá tiền */}
        <View style={styles.paymentHeader}>
        <View style={styles.header}>
    <View style={styles.titleContainer}>
        <Text style={styles.title}>
            Checkout <FontAwesome name="credit-card" size={18} color="#333" />
        </Text>
    </View>

    <View style={styles.space} /> {/* View này để tạo khoảng cách */}

    <View style={styles.priceContainer}>
        <Text style={styles.price}>₹ 1,527</Text>
        <Text style={styles.subtext}>Including GST (18%)</Text>
    </View>
</View>

<View style={styles.paymentMethods}>
  <View style={styles.paymentButtonsContainer}>
    <TouchableOpacity style={[styles.paymentButton, styles.activeButton, styles.creditCardButton]}>
      <FontAwesome name="credit-card" size={20} color="#fff" />
      <Text style={[styles.paymentText, { color: '#fff' }]}> Credit card</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.paymentButton, styles.applePayButton]}>
      <FontAwesome name="apple" size={20} color="#000" />
      <Text style={styles.paymentText}> Apple Pay</Text>
    </TouchableOpacity>
  </View>
</View>


        </View>

        {/* Nhập thông tin thẻ */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card number</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="5261 4141 0151 8472"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="qr-code-scanner" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Cardholder name</Text>
          <TextInput style={styles.input} placeholder="Christie Doe" />

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Expiry date</Text>
              <TextInput style={styles.input} placeholder="06 / 2024" keyboardType="numeric" />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.label}>CVV / CVC</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="915"
                  keyboardType="numeric"
                  secureTextEntry
                />
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome name="question-circle" size={20} color="#333" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* 🔥 Dòng thông báo */}
          <Text style={styles.infoText}>
            We will send you an order details to your email after the successful payment
          </Text>
        </View>
      </ScrollView>

      {/* Nút thanh toán */}
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Success')}>
        <Text style={styles.payButtonText}>
          <FontAwesome name="lock" size={18} color="#fff" /> Pay for the order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContainer: { flexGrow: 1, paddingBottom: 20 },


  backButton: { 
    position: 'absolute', 
    top: 35, // Điều chỉnh khoảng cách từ trên xuống
    left: 20, // Điều chỉnh khoảng cách từ trái vào
    zIndex: 10, // Giúp nó nằm trên tất cả các thành phần khác
    backgroundColor: 'rgb(235, 235, 235)', // Làm nền nhẹ để dễ nhìn hơn
    padding: 15, 
    borderRadius: 15,
  },

  paymentHeader: {
    backgroundColor: '#fff',
    height: '33%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  price: { fontSize: 22, fontWeight: 'bold', color: '#2ECC71', marginTop: 5 },
  subtext: { fontSize: 14, color: '#777', marginTop: 3 },

  header: {
    flexDirection: 'row', 
    justifyContent: 'center', // Căn giữa theo chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginTop: 80,
},

titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},

space: {
    width: 40, // Điều chỉnh khoảng cách giữa 2 View
},

priceContainer: {
    alignItems: 'center',
},

  priceContainer: { 
    alignItems: 'center', 
    marginTop: 5 
  },

  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
  },

  paymentButtonsContainer: { 
  flexDirection: 'row', 
  justifyContent: 'center', // Căn giữa ngang
  alignItems: 'center', // Căn giữa dọc
  width: '100%', 
  gap: 0, // Tạo khoảng cách giữa 2 button
},

paymentButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 10,
  borderWidth: 0,
  borderColor: '#ddd',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,
},

activeButton: {
  backgroundColor: '#2ECC71',
},

  paymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
  },

  activeButton: { backgroundColor: '#2ECC71' },
  paymentText: { fontSize: 16, fontWeight: 'bold', color: '#333', marginLeft: 8 },

  inputContainer: { padding: 20, paddingTop: 60},
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  input: {
    backgroundColor: 'rgb(226, 226, 226)',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },

  inputRow: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { marginLeft: 10 },

  row: { flexDirection: 'row', justifyContent: 'space-between' },

  infoText: { 
    fontSize: 14, 
    color: '#777', 
    textAlign: 'center', 
    marginVertical: 15, 
    paddingHorizontal: 20 
  },

  payButton: { 
    backgroundColor: '#2ECC71', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20,
    marginHorizontal: 20,
  },
  payButtonText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});

export default PaymentScreen;
