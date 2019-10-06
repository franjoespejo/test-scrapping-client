import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as parser from './scrappingLinkedin';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

constructor(private iab: InAppBrowser) {}
	
	go() {		
   	const browser = this.iab.create('https://ionicframework.com/', '_blank');
 	browser.on('loadstop').subscribe(function(event) {
    	browser.executeScript({ code: this.code } );
    	console.log("browser_loadstop");
    	//browser.executeScript({ file: "./scrappingLinkedin.js" }, this.executeScriptCallBack);
    });

  	}
  	code(){	
  		console.log("code");
  		var a="alert('a');";
  		//parser.a();
  		//console.log(a);
  		return a;
  	}

  	executeScriptCallBack(params) {
	    console.log(params[0].something);
	}
}
