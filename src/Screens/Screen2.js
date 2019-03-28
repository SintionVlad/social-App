import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import { Icon,Card,Button,  Block} from 'galio-framework';
import { LinearGradient } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

class Screen2 extends React.Component {
    render() {
      return (

        <View style={styles.container}>
        
          <LinearGradient style={styles.gradient} colors={['#61045f', '#20011f',]}>
            {/*<Card style={styles.cardSelena}></Card>*/}
          <View>
            <Image source={require('../Images/5.jpg')} 
            style={styles.imageSS}/>
          </View>

            <Text style={styles.textSelena}>Selena Gomez</Text>
            <Text style={styles.designer}>Designer</Text>
            
            
            <ScrollView>
            <View style={{justifyContent:'space-around'}}>
            <View style={styles.cards12}>
            <Card style={styles.cards1}>
            <LinearGradient 
                style={styles.LinearGradient1} 
                start={{ x: 1, y: 1 }}
                 end={{ x: 0, y: 0 }} 
                 colors={['#61045f', '#20011f',]}>
              
              
              <Icon
              style={styles.icon1} 
              name="user-circle" 
              family="FontAwesome" 
              color={'#43bff9'} 
              size={45}         
              />
              
              <Text h1 style={styles.textNr1}>2853</Text>
              <Text h1 style={styles.Followers}>Followers</Text>
             
              </LinearGradient>
              </Card>

              <Card style={styles.cards2}>
              <LinearGradient 
                style={styles.LinearGradient2} 
                start={{ x: 1, y: 1 }}
                 end={{ x: 0, y: 0 }} 
                 colors={['#61045f', '#20011f',]}>
           

              <Icon
              style={styles.star} 
              name="stars" 
              family="MaterialIcons" 
              color={'#fc408a'} 
              size={45}         
              />  
              <Text h1 style={styles.textNr2}>3252</Text>
              <Text h1 style={styles.Collection}>Collection</Text>
           
              </LinearGradient>
              </Card>
            </View>

            <View style={styles.cards34}>
            <Card style={styles.cards3}>
            <LinearGradient 
                style={styles.LinearGradient3} 
                start={{ x: 1, y: 1 }}
                 end={{ x: 0, y: 0 }} 
                 colors={['#61045f', '#20011f',]}>
              

              <Icon
              style={styles.heart} 
              name="heart-circle" 
              family="MaterialCommunityIcons" 
              color={'red'} 
              size={45}         
              />  

              <Text h1 style={styles.textNr3}>123K</Text>
              <Text h1 style={styles.Likes}>  Likes you </Text>
              
              </LinearGradient>
              </Card>

              <Card style={styles.cards4}>
              <LinearGradient 
              style={styles.LinearGradient4} 
              start={{ x: 1, y: 1 }}
               end={{ x: 0, y: 0 }} 
               colors={['#61045f', '#20011f',]}>
             
              
              <Icon
              style={styles.comment} 
              name="comment-text" 
              family="MaterialCommunityIcons" 
              color={'#7a52d1'} 
              size={45}         
              />  
              <Text h1 style={styles.textNr4}>337</Text>
              <Text h1 style={styles.Comments}>Comments</Text>
             
              </LinearGradient>
              </Card>
            </View>
            </View>
            </ScrollView>
            
            <View style={styles.friendsView}>
              <Button 
              size='small'
              shadowless
              color='#fc408a'
              style={styles.friends}
              onPress={() => this.props.navigation.navigate('Screen1')}>
              Add to friends</Button>
            </View>
          
            </LinearGradient>
        </View>

        
        );
    }
  }

  const styles = StyleSheet.create({

    container:{
      flex:1,
      // marginTop:'65%',
      
    },
    gradient:{
      flex:1
    },
    cardSelena:{
      borderColor:'#fff',
      padding:'15%',
      borderRadius:450,
      marginLeft:'32%',
      marginRight:'32%',
      marginTop:'11%',
      marginBottom:'2%',
    },
    textSelena:{
      fontSize:29,
      fontWeight:'bold',
      alignSelf:'center',
      color:'#fff',
      
    },
    designer:{
      color:'#00d8ff',
      alignSelf:'center',
      fontSize:20,
      fontWeight:'500',
      marginTop:'1%',
      
    },
    cards12:{
      flexDirection:'row',
      justifyContent:'space-around',
      
    },
    cards1:{
      // paddingBottom:'25%',
     
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
    },

    cards2:{
      // paddingBottom:'25%',
      // marginTop:'-1%',
      
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
      
    },
    cards34:{
      flexDirection:'row',
      justifyContent:'space-around',
      // marginTop:'12%'
    },
    cards3:{
      // paddingBottom:'35%',
      // marginTop:'2%',
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
    }, 
    cards4:{
      // paddingTop:'20%',
      // marginTop:'2%',
      paddingLeft:'16%',
      paddingRight:'16%',
      backgroundColor:'transparent',
      borderColor:'transparent',
      
    },
    friendsView:{
      marginTop:'1%',
      paddingBottom:'5%'
    },
    friends:{
      borderRadius:100,
      alignSelf:'center',
      // marginTop:'4%',
    },
    imageSS:{
      alignSelf:'center',
      marginTop:'20%',
      marginBottom:'5%',
      // height:'50%',
      // width:'25%',
      borderRadius:50
    },
    icon1:{
    //   // marginTop:'-45%',
      alignSelf:'center',
      paddingTop:'10%',
      

    },
    textNr1:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    Followers:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'-5%'
    },  
    star:{
      alignSelf:'center',
      paddingTop:'10%'
    },  
    textNr2:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    Collection:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'-5%'
    },
    heart:{
      alignSelf:'center',
      paddingTop:'10%'
    },  
    textNr3:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },
    Likes:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'5%'
    },
    comment:{
      alignSelf:'center',
      paddingTop:'10%'
    },  
    textNr4:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20,
      alignSelf:'center'
    },  
    Comments:{
      color:'grey',
      alignSelf:'center',
      paddingTop:'1%',
      paddingBottom:'5%'
    },
    LinearGradient1:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'12%',
      paddingRight:'12%',
      paddingBottom:'15%',
      marginLeft:'-2%'
      
    },
    LinearGradient2:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'12%',
      paddingRight:'12%',
      paddingBottom:'15%',
      marginLeft:'-2%'
      
    },
    LinearGradient3:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'11%',
      paddingRight:'11%',
      paddingBottom:'5%',
      // marginBottom:'3%'
      marginLeft:'-2%'
    },
    LinearGradient4:{
      borderRadius:5,
      // padding:'5%',
      paddingLeft:'11%',
      paddingRight:'11%',
      paddingBottom:'5%',
      marginLeft:'-2%'
     
    },
  });
    export default Screen2;