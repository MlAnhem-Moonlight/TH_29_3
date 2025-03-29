import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="rgb(44, 36, 255)" />
      </TouchableOpacity>

      {/* Hình ảnh thanh toán thành công */}
      <Image source={require('../assets/success.png')} style={styles.image} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>
        We will send order details and invoice in your contact no. and registered email
      </Text>

      {/* Nút Check Details */}
      <TouchableOpacity onPress={() => {}} style={styles.linkContainer}>
        <Text style={styles.linkText}>Check Details →</Text>
      </TouchableOpacity>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 20, justifyContent: 'center', alignItems: 'center' },
  backButton: { 
    position: 'absolute', 
    top: 35, // Điều chỉnh khoảng cách từ trên xuống
    left: 20, // Điều chỉnh khoảng cách từ trái vào
    zIndex: 10, // Giúp nó nằm trên tất cả các thành phần khác
    backgroundColor: 'rgb(235, 235, 235)', // Làm nền nhẹ để dễ nhìn hơn
    padding: 15, 
    borderRadius: 15,
  },
  backText: { fontSize: 20, color: '#555' },
  image: { width: 200, height: 200, marginVertical: 20, resizeMode: 'contain' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', marginVertical: 10, paddingHorizontal: 20 },
  linkContainer: { marginVertical: 10 },
  linkText: { fontSize: 16, color: '#007BFF', fontWeight: 'bold' },
  downloadButton: { backgroundColor: '#5A67D8', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', marginTop: 20 },
  downloadText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SuccessScreen;
