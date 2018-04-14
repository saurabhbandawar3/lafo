import { ItemListPage } from './../item-list/item-list';
import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { storage } from 'firebase';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';


  //   import { FirebaseApp } from '@firebase/app-types';
  // import { FirebaseService } from '@firebase/app-types/private';
@IonicPage()
@Component({
  selector: 'page-item-form',
  templateUrl: 'item-form.html',
})
export class ItemFormPage {
  result;
  image;
  pictures;
  constructor(
    private camera :Camera,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private aDatabase:AngularFireDatabase, ) 
    {
      // this.aDatabase.list("/items/").subscribe(_data=>{
      //   this.item = _data;
      //   console.log(this.item);
      // })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemFormPage');
  }
  url:any;

  async takePhoto(){
    try{
     // Camera Options 
      const options : CameraOptions ={
        quality : 50,
        targetHeight : 600,
        targetWidth : 600,
        destinationType :   this.camera.DestinationType.DATA_URL,
        encodingType : this.camera.EncodingType.JPEG,
        mediaType : this.camera.MediaType.PICTURE,
        correctOrientation : true
      }
      this.result = await this.camera.getPicture(options);
      this.image = `data:image/jpeg;base64, ${this.result}`
      this.pictures = storage().ref('pictures/myPhoto'+ this.generateId());
      this.pictures.putString(this.image, `data_url`);
      console.log(this.pictures.getDownloadURL);
      this.pictures.getDownloadURL().then(url => this.url = url);
    }
    catch(e){
      console.error(e);
    }
  }
  

  generateId(){
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  public onFileFromStorageChosen(filesEvent: any) {
    this.processFileFromStorage(filesEvent);
  }
  public processFileFromStorage(event: any) {
    let file = event.target.files[0];
    console.log(file);
    alert("Picture Uploaded");
    this.readfile(file);
  }

//this one reads the contents of the file as a URL that contains its data:

  public readfile(file: any): void {
    let reader = new FileReader();
    reader.onload = (e) => {
      let dataUrl = reader.result;
      console.log(dataUrl);
      this.image = `${dataUrl}`
      this.pictures = storage().ref('pictures/myPhoto' + this.generateId());
      this.pictures.putString(this.image, `data_url`);
      
    };
    reader.readAsDataURL(file);
  }

  item = {} as Item;

  createItem(){
    console.log(this.url)
    this.aDatabase.list("/items/").push(this.item).then(()=>{
      this.navCtrl.push(ItemListPage);
    })
  }
  
}



