import React from 'react';
import {StyleSheet, View,  ScrollView,Image } from 'react-native';
import { Icon,Card,Button, Text, Block} from 'galio-framework';
import { LinearGradient } from 'expo';
import {Badge} from 'react-native-elements';

class Screen1 extends React.Component {
    render() {
      return (
        
    <View style={styles.container}>
        <LinearGradient 
            style={styles.gradient} 
            colors={['#61045f', '#20011f',]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}>

        <Text style={styles.profileText}>Profile</Text>

        <LinearGradient 
        style={styles.gradientJob} 
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }} 
        colors={['#61045f', '#20011f',]}>
       
        
        <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%'}}>
        <Image 
                style={styles.firstCardImg}
                source={require('../Images/5.jpg')} />
       <View style={{flexDirection:'row'}}>
       <View style={{flexDirection:'colum'}}>
            <Text h5 style={styles.Mao}>Hippie Mao</Text>
            <Text h6 style={styles.Designer}>{'UI/UX Designer Job \nhunting'}</Text>
        </View>
        <Icon
                    style={styles.maoIcon} 
                    name="chevron-small-right" 
                    family="Entypo" 
                    color={'#fff'} 
                    size={35}         
                    />
        </View>
        </View>
        
    
        </LinearGradient>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        
        <Text h5 style={styles.horizontalText}>You make know </Text>
        <Text h5 style={styles.textRow1}>More</Text>
        </View>

        <View style={{height:'4%',}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            
            <Button  
                size='small'
                shadowless
                style={styles.horizontalButton}
                onPress={() => this.props.navigation.navigate('Screen2')}>
                <Image 
                style={styles.img1S1}
                source={require('../Images/5.jpg')} ></Image>
            </Button>
            
            <Button  
                size='small'
                shadowless
                style={styles.horizontalButton}
                onPress={() => this.props.navigation.navigate('Screen2')}>
                <Image 
                style={styles.img1S1}
                source={require('../Images/5.jpg')} />
            </Button>
            <Button  
                size='small'
                shadowless
                style={styles.horizontalButton}
                onPress={() => this.props.navigation.navigate('Screen2')}>
                <Image 
                style={styles.img1S1}
                source={require('../Images/5.jpg')} />
            </Button>
            <Button  
                size='small'
                shadowless
                style={styles.horizontalButton}
                onPress={() => this.props.navigation.navigate('Screen2')}>
                <Image 
                style={styles.img1S1}
                source={require('../Images/5.jpg')} />
            </Button>
        </View>
        </View>
        
        
        <View style={{marginTop:60,flexDirection:'row',}}>
            <Text h5 style={styles.MessageText}>Message </Text>
            <Badge style={styles.badge} value="99+" status="error" /> 
        </View>
        <View style={{alignSelf:'flex-end',marginTop:'-9%'}}>
        <Text h5 style={styles.textRow2}>More</Text>  
        </View>

        <ScrollView>
        <View style={{marginTop:'2%'}}>
            
                <View 
                    style={{
                        flexDirection:'row',
                        backgroundColor:'#5a0e54',
                        marginLeft:'5%',
                        marginRight:'5%',
                        borderRadius:'10%',
                        marginBottom:'3%',     
                    }}>
                <Icon
                    style={styles.loginIcon} 
                    name="user-circle" 
                    family="FontAwesome" 
                    color={'#fc408a'} 
                    size={35}         
                    />
                <Text style={styles.textLogin}>{'We detected an unusal\n Login attempt'}</Text> 
                </View>   
    
            <View style={{
                        flexDirection:'row',
                        backgroundColor:'#5a0e54',
                        marginLeft:'5%',
                        marginRight:'5%',
                        borderRadius:'10%',
                        paddingBottom:'5%'
                     }}>
                <Icon
                    style={styles.locationIcon} 
                    name="location-pin" 
                    family="Entypo" 
                    color={'#4ec5f9'} 
                    size={35}         
                     />
                  <Text style={styles.locationText}>{'Pleas turn on real-time position \nto ensure that your friends can \ninteract with you at any time '}</Text>  
            </View>      
           
        </View>
        </ScrollView>
</LinearGradient>
</View>
        );
    }
  }

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    gradient:{
        flex:1
    },
    gradientJob:{
        marginLeft:'5%',
        marginRight:'5%',
        height:'20%',
        borderRadius:15
    },
    profileText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',
        marginTop:'13%',
        marginLeft:'5%',
        marginBottom:'2%'
    },
    jobCard:{
        height:'100%',
        borderColor:'transparent',
        
    },
    horizontalText:{
        fontWeight:'700',
        color:'#fff',
        marginLeft:'5%',
        marginTop:'3%',
        paddingBottom:'3%',

    },  
    horizontalButton:{
        borderRadius:230,
        width:'5%',
        justifyContent:'space-between',
        marginTop:'1%',
    },  
    img1S1:{
        height:75,
        width:75,
        borderRadius:35,
      
    },
    MessageText:{
        alignSelf:'flex-start',
        fontWeight:'700',
       
        color:'#fff',
        marginLeft:'5%',
        marginTop:'2%',
            
    },
    loginCard:{
        marginLeft:'5%',
        marginRight:'5%',
        backgroundColor:'#680d64',
        borderColor:'transparent'

    },
    loginIcon:{
       paddingLeft:'7%',
       marginBottom:'5%',
       marginTop:'5%' 
       
    },
    textLogin:{
        fontSize:15,
        fontWeight:'400',
        color:'grey',
        alignSelf:'center',
        paddingLeft:'5%',
        marginBottom:'3%',
    },
    locationCard:{
        marginLeft:'5%',
        marginRight:'5%',
        backgroundColor:'#680d64',
        borderColor:'transparent'
    },
    locationIcon:{
        paddingLeft:'7%',
        marginTop:'6%' 
    },
    locationText:{
        fontSize:15,
        fontWeight:'400',
        color:'grey',
        alignSelf:'center',
        marginTop:'2%',
        paddingLeft:'5%'
    },
    textRow1:{
        color:'grey',
        marginRight:'5%',
        marginTop:'3%',
        paddingBottom:'3%',
        fontWeight:'bold'
    },
    textRow2:{
        color:'grey',
        marginRight:'5%',
        marginTop:'3%',
        paddingBottom:'3%',
        fontWeight:'bold'
    },
    firstCardImg:{
        borderRadius:25,
        marginLeft:'5%',
        width: 50,
        height: 50 
    },
    Mao:{
        color:'#fff',
        fontWeight:'bold',
        marginLeft:'15%',
        // paddingTop:'2%'
    },
    maoIcon:{
        // paddingBottom:'40%',
        // marginTop:'2%'
    },
    Designer:{
        color:'grey',
        marginLeft:'15%',
        marginBottom:'25%',
    },
    badge:{
        // marginTop:'5%'
    },  
});

export default Screen1; 

