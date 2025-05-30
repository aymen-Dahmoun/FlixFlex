# FlixFlex

FlixFlex is a mobile application that allows users to explore and discover movies and series from The Movie Database (TMDb) API. The app provides a seamless and intuitive experience, displaying trending movies, upcoming films, top-rated content, and much more. It features robust authentication, favorite management, search functionality, and detailed movie/series profiles with related content.

## Features

### 1. **Movies Screen**

* Displays a list of trending movies.
* Shows upcoming movies.
* Displays the top 5 rated movies in a dedicated section.
* A discover section with various movie categories.

### 2. **Series Screen**

* Displays a list of trending series.
* Shows upcoming series to watch next week.
* Displays the top 5 rated series.
* A discover section with various series categories.

### 3. **Favorites Screen**

* Allows users to store their favorite movies or series by clicking a heart icon on the movie/series poster.
* The favorite items are stored locally using `AsyncStorage`.

### 4. **Detail Screen**

* Displays detailed information about a movie or series.
* Shows images, the trailer, and the production companies involved.
* Provides related or similar content recommendations.

### 5. **Search Screen**

* Allows users to search for movies and series by title or keywords.
* Displays matching results from the TMDb API.

### 6. **Authentication**

* Users can sign up and log in using **Firebase Authentication** with email.

### 7. **UI/UX Design**

* The app provides an optimized, smooth, and responsive user interface.
* Seamless scrolling and navigation for a top-notch experience.

## Installation

### Prerequisites

Ensure you have the following installed:

* **Node.js** and **npm** (or **yarn**)
* **React Native** environment set up on your machine (Android/iOS)
* **Firebase** project configured for authentication
* **TMDb API Key** (create a free account on [TMDb](https://www.themoviedb.org/))

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/FlixFlex.git
   cd FlixFlex
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the Firebase project:

   * Create a Firebase project on [Firebase Console](https://console.firebase.google.com/).
   * Enable **Firebase Authentication** with email/password sign-in.
   * Add the Firebase configuration to your app (follow Firebase setup instructions).
   * Install Firebase SDK:

     ```bash
     npm install firebase
     ```

4. Set up the TMDb API:

   * Go to [TMDb API](https://www.themoviedb.org/documentation/api) and get your API key.
   * Replace the placeholder in your code with your API key.

5. Run the app:

   * For Android:

     ```bash
     npx react-native run-android
     ```
   * For iOS:

     ```bash
     npx react-native run-ios
     ```

## Usage

1. **Sign Up/Log In**: Use Firebase email authentication to sign up or log in.
2. **Explore Movies and Series**: Browse through trending, upcoming, top-rated, and discover sections on the Movies and Series screens.
3. **Add to Favorites**: Tap the heart icon on any movie or series poster to add it to your favorites.
4. **Search**: Use the search feature to find movies or series by name or keywords.
5. **View Movie/Series Details**: Click on any movie or series to view detailed information, trailers, and related content.

## Optimizations

* The app is designed to be **highly optimized** for smooth scrolling, fast data fetching, and efficient memory usage.
* Uses **pagination** and **lazy loading** to avoid excessive data loading and to enhance user experience.
* **AsyncStorage** is used for local storage of favorites, ensuring data is saved even when the app is closed.

## UI/UX Design

* The app follows modern **Material Design** principles for an intuitive and responsive layout.
* Seamless transitions and smooth animations provide a fluid user experience.
* Optimized for both **phones** and **tablets**.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
