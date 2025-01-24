import React from 'react';

const Projects = () => (
  <section className="projects" id="projects">
    <h2>My Projects</h2>
    <p>Below are some of the key projects I have developed, showcasing my skills in software development, machine learning, and problem-solving:</p>
    <ul>
      <li>
        <h3>Music Streaming Service</h3>
        <p>
          A console-based music streaming application developed using Java. This project integrates a music streaming API to allow users to listen to their favorite songs. It also includes features like creating playlists, managing user accounts, and storing user preferences. A database management system (DBMS) is implemented for storing user data, such as login credentials, playlists, and music metadata. The app supports various music formats and allows users to search for tracks, albums, and artists, creating a personalized listening experience. 
        </p>
        <p>
          **Technologies Used**: Java, SQL, JDBC, Music API (e.g., Spotify API), Hibernate (for ORM), JavaFX (for UI)
        </p>
      </li>
      <li>
        <h3>Collaborative Rescue</h3>
        <p>
          Collaborative Rescue is a disaster management platform created with Flutter. The app aims to improve community collaboration during emergencies such as natural disasters, fires, or other large-scale incidents. Users can report an emergency or request help, and the system will notify nearby users who can offer assistance. The app integrates real-time geolocation tracking to show the locations of the users in need of help and the rescuers. It also includes a map interface with pinpoints, displaying live updates of ongoing rescue operations and areas affected by the disaster.
        </p>
        <p>
          **Technologies Used**: Flutter, Firebase, Google Maps API, Dart, Cloud Functions, Geolocation API
        </p>
      </li>
      <li>
        <h3>E-Commerce Product Delivery Prediction</h3>
        <p>
          This project focuses on predicting the delivery times of products ordered through an e-commerce platform. I utilized machine learning algorithms to analyze historical order data, including delivery times, locations, order sizes, and types of products. The goal is to predict the time it will take for a product to be delivered once the order is placed. The project involved applying various classification techniques, including Decision Tree Classifier, Random Forest, Logistic Regression, K-Nearest Neighbors, and Gradient Boosting. The model’s predictions are visualized to give users insights into potential delivery delays and help businesses optimize their delivery systems.
        </p>
        <p>
          **Technologies Used**: Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Machine Learning (Classification algorithms)
        </p>
      </li>
      
    </ul>
  </section>
);

export default Projects;
