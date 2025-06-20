import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2E27',
    justifyContent: 'center',
    
    padding: 24,
  },
  intro:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  introTexts:{
    color: '#fff',
    fontSize: 25,
    marginBottom: 6

  },
  introTexts1: {
    color: "white"
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#66bb6a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  links: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: '#2e7d32',
    textDecorationLine: 'underline',
  },
  image:{
    width: 200,
    height: 200,

  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -2
  },
  opcional:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    
  },
  opcionalText:{
    color: 'gray',
    fontSize: 15,
    fontWeight: 600
  },
  close:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  closeTexts:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 18,
    maxWidth: 300
  }
})





