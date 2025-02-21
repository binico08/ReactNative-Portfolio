import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginBottom: '15%',
  },
  appHeader: {
    height: '11%',  
    justifyContent: 'flex-end', 
    alignItems: 'center',
    borderBottomWidth: 0.2,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  mainProfile: {
    flexDirection: 'row',
    height: '12%',
    paddingLeft: '8%',
    marginTop: '5%',
    borderBottomWidth: 0.2,
  },
  mainProfileImage: {
    height: 70,  
    width: 70,
    borderRadius: 35, 
    borderWidth: 3,
    borderColor: '#028f37', 
  },
  profileInfo: {
    flexDirection: 'column',
    marginLeft: '3%',
    marginTop: '1.8%',
  },
  myName: {
    fontSize: 25,
    fontWeight: '700',
  },
  myEmail: {
    fontSize: 18,
    opacity: 0.6,
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedItem: {
    height: 18,
    width: 18,
    marginLeft: 5,
  },
  section: {
    padding: '5%',
    borderBottomWidth: 0.2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  skills: {
    fontSize: 14,
    flex: 1,
  },
  skillImage: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  collegeName: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 5,
  },
  collegeSession: {
    fontSize: 15,
    opacity: 0.8,
  },
  collegeBranch: {
    fontSize: 15,
    flex: 1,
  },
  college: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  sectionImage: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#0dc653',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '8%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  tabIcons: {
    height: 30,
    width: 30,
  },
  flexColumn: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 10,
    color: 'black',
  },
});
