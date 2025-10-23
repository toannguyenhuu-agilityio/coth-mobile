# 🔔 Hướng dẫn Test Push Notifications

## Các cách test:

### 1. **Test với Expo Push Notification Tool** (Khuyến nghị)

**Bước 1:** Mở app trên điện thoại thật (Android hoặc iOS)

**Bước 2:** Vào tab "🔔 Test" trong app, copy **Push Token** hiển thị

**Bước 3:** Mở trình duyệt và vào: https://expo.dev/notifications

**Bước 4:** Paste Push Token vào ô "Expo Push Token"

**Bước 5:** Điền thông tin:

- Title: "Test từ Expo Tool"
- Message: "Hello from Expo!"
- (Optional) JSON Data: `{"page": "home", "action": "view"}`

**Bước 6:** Click "Send a Notification"

**Kết quả:** Notification sẽ xuất hiện trên điện thoại trong vài giây

---

### 2. **Test với Button trong App**

**Bước 1:** Mở app, vào tab "🔔 Test"

**Bước 2:** Nhấn button **"📤 Send Push Notification"**

- App sẽ tự động gửi notification cho chính nó
- Notification xuất hiện ngay lập tức

**Bước 3:** Nhấn button **"⏰ Schedule Local (5s)"**

- Notification sẽ xuất hiện sau 5 giây
- Không cần internet, chạy local trên device

---

### 3. **Test Badge Count** (iOS)

**Bước 1:** Nhấn **"➕ Set Badge to 5"**

- App icon sẽ hiển thị số 5

**Bước 2:** Nhấn **"🔢 Get Badge Count"**

- Hiển thị alert với số badge hiện tại

**Bước 3:** Nhấn **"🧹 Clear Badge"**

- Badge trên icon biến mất

---

## Các trường hợp test:

### ✅ App đang mở (Foreground)

- Notification hiển thị dạng banner ở đầu màn hình
- Console log hiển thị notification data
- Last Notification section trong app được update

### ✅ App đang chạy background

- Notification hiển thị trong notification tray
- Tap vào notification sẽ mở app
- Console log khi user tap vào notification

### ✅ App đã đóng hoàn toàn

- Notification vẫn hiển thị trong notification tray
- Tap vào notification sẽ mở app
- App khởi động và xử lý notification data

---

## Debug & Troubleshooting:

### 🔍 Check Console Logs:

```
# Tìm các log sau:
- "Expo Push Token: ExponentPushToken[...]"
- "Notification received: {...}"
- "Notification response: {...}"
```

### ⚠️ Lỗi thường gặp:

1. **"Must use physical device"**
   - Push notifications không work trên emulator/simulator
   - Cần test trên điện thoại thật

2. **"Permission not granted"**
   - Đi vào Settings > Apps > COTH > Notifications
   - Bật quyền notifications

3. **"Project ID not found"**
   - Cần setup EAS project: `eas init`
   - Hoặc thêm projectId vào app.json

4. **"DeviceNotRegistered"**
   - Token đã hết hạn hoặc không hợp lệ
   - Uninstall app và cài lại

---

## Expected Behavior:

### ✨ Khi mở app lần đầu:

1. App yêu cầu quyền notification
2. User chấp nhận → Push Token được tạo
3. Token hiển thị trong tab "🔔 Test"
4. Console log ra token

### ✨ Khi nhận notification:

1. **App foreground:** Banner hiển thị ở đầu màn hình
2. **App background/closed:** Notification trong tray
3. Tap notification → App mở → Log ra data

### ✨ Console Output mẫu:

```
Expo Push Token: ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
Notification received: {
  request: {
    content: {
      title: "Test Notification",
      body: "This is a test",
      data: { testData: "Hello" }
    }
  }
}
```

---

## 🎯 Test Checklist:

- [ ] App build và chạy thành công
- [ ] Push Token hiển thị trong app
- [ ] Gửi notification từ Expo Tool → nhận được
- [ ] Nhấn "Send Push Notification" → nhận được
- [ ] Schedule local notification → nhận sau 5s
- [ ] Tap vào notification → app mở và log data
- [ ] Badge count hoạt động đúng (iOS)
- [ ] Test cả foreground và background
- [ ] Test với app đã đóng hoàn toàn

---

## 📱 Lưu ý:

- **Android:** Notifications work ngay trên physical device
- **iOS:** Cần physical device, không work trên Simulator
- **Development build:** Phải rebuild app sau khi add expo-notifications
- **Production:** Cần setup credentials trên EAS (FCM cho Android, APNs cho iOS)
