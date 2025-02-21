import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import ProfileImage from './assets/Villegas.png';

const App = () => {
  return (
    <View style={styles.container}>
      {/* This is my header */}
      <View style={styles.appHeader}>
        <Text style={styles.headerText}>MY PORTFOLIO</Text>
      </View>

      {/* This is for Main Content of my portfolio */}
      <ScrollView style={styles.scroll}>
        {/* For the Profile Section ko */}
        <View style={styles.mainProfile}>
          <Image style={styles.mainProfileImage} source={ProfileImage} />
          <View style={styles.profileInfo}>
            <View style={styles.profileName}>
              <Text style={styles.myName}>Elwyn Nicole</Text>
              <Image
                source={{
                  uri: 'https://i.ya-webdesign.com/images/instagram-verified-badge-png.png',
                }}
                style={styles.verifiedItem}
              />
            </View>
            <Text style={styles.myEmail}>elwynnicole07@gmail.com</Text>
            <Text style={styles.myEmail}>Mob.:+6392067069041</Text>
            <Text style={styles.myEmail}>elwynnicole07@gmail.com</Text>
          </View>
        </View>

        {/* Tagline & Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TAGLINE</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skills}>  
              C, C++, Python, JavaScript, TypeScript, React Native, UI/UX, Web
              Development
            </Text>
            <Image
              style={styles.skillImage}
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-128.png',
              }}
            />
          </View>
        </View>

        {/* Education Section */}
        <InfoSection
          title="EDUCATION"
          name="De La Salle Lipa"
          session="(2023-Current)"
          details="Bachelor of Science in Computer Science Engineering"
        />

        {/* Work Section */}
        <InfoSection
          title="WORK"
          name="Junior Philippine Computer Society - DLSL Chapter"
          session="(2024-Present)"
          details="Project Head for Internal Affairs"
        />

        {/* Projects Section */}
        <InfoSection
          title="PROJECTS"
          name="Portfolio"
          session="(Oct 2024 - Dec 2024)"
          details="Developed using React JS"
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.tabBar}>
        <TabItem
          icon="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-128.png"
          label="Startups"
        />
        <TabItem
          icon="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/44-web_essential-512.png"
          label="Startups"
        />
        <TabItem
          icon="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/01-web_essential-512.png"
          label="Startups"
        />
      </View>
    </View>
  );
};

/* Reusable InfoSection Component */
const InfoSection = ({ title, name, session, details }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.collegeName}>{name}</Text>
    <Text style={styles.collegeSession}>{session}</Text>
    <View style={styles.college}>
      <Text style={styles.collegeBranch}>{details}</Text>
      <Image
        style={styles.sectionImage}
        source={{
          uri: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/new-24-128.png',
        }}
      />
    </View>
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>+ ADD</Text>
    </TouchableOpacity>
  </View>
);

/* Reusable Tab Item Component */
const TabItem = ({ icon, label }) => (
  <View style={styles.flexColumn}>
    <Image source={{ uri: icon }} style={styles.tabIcons} />
    <Text style={styles.tabText}>{label}</Text>
  </View>
);

export default App;
