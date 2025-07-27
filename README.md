## **MovieDB Mobile App**

A cross-platform mobile application built with **React**, **Expo Go**, **Tailwind CSS**, and **TMDB API** that displays a self-updating movie database. It fetches real-time data from **The Movie Database (TMDB)** API and allows users to browse trending, popular, and upcoming movies.

---

### **Features**

* Live movie database updated automatically using **TMDB API**
* Built with **React** and **Expo Go** for cross-platform compatibility
* Styled with **Tailwind CSS** for fast UI development
* Works seamlessly on **Android** (tested via Android Studio Emulator)
* Clean, modular code using **JS, HTML, and CSS**
* Responsive and optimized for performance

---

### **Tech Stack**

* **React (CRA + Hooks)**
* **Expo Go** (for easy development and testing)
* **Tailwind CSS** (via `nativewind`)
* **Android Studio** (emulator for testing)
* **TMDB API** (data source)
* **JavaScript, HTML, CSS**

---

### **Installation**

#### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/moviedb-mobile.git
cd moviedb-mobile
```

#### 2. **Install dependencies**

```bash
npm install
```

#### 3. **Set up environment variables**

Create a `.env` file in the root directory:

```
TMDB_API_KEY=your_tmdb_api_key_here
```

> Get your API key from [TMDB](https://www.themoviedb.org/documentation/api)

#### 4. **Run the development server**

```bash
npx expo start
```

* Scan the QR code in the Expo Go app (on your phone) **OR**
* Press `a` to open the **Android Studio Emulator**

---

### **API Integration**

We use the **TMDB API** for fetching real-time movie data:

Example request:

```javascript
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return await res.json();
}
```

---

### **Styling with Tailwind CSS**

This project uses `nativewind` to apply Tailwind classes directly in React Native components:

```bash
npm install nativewind tailwindcss
npx tailwindcss init
```

Example:

```jsx
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View className="bg-black p-4">
      <Text className="text-white text-xl font-bold">MovieDB</Text>
    </View>
  );
}
```

---

### **Build for Android**

1. Install **Android Studio** and configure the emulator
2. Run:

   ```bash
   npx expo run:android
   ```
3. Alternatively, generate an APK:

   ```bash
   eas build -p android --profile preview
   ```

---

### **Project Structure**

```
moviedb-mobile/
├── src/
│   ├── api/          # API functions
│   ├── components/   # Reusable UI components
│   ├── screens/      # App screens (Home, Details, Search)
│   └── styles/       # Tailwind config and global styles
├── assets/           # Images and icons
├── App.js            # Main entry point
├── tailwind.config.js
├── package.json
└── .env
```

---

### **Future Features**

* User authentication with Firebase/Auth0
* Favorite/watchlist movies
* Offline caching with AsyncStorage
* Push notifications for new releases

---

### **License**

This project is licensed under the MIT License.
