import {PanelCtrl} from 'app/plugins/sdk';
import moment from 'moment';
import './css/toggle-checkbox.css!';

var panelDefaults = {
  title: 'Panel Title',
  butter:[
    {
      butterType: 'on/off button',
      label: 'Label 0',
      on:[
        {
          method: 'PUT',
          url: `https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/on`,
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
          },
          body:'{"on":true}'
        },
        {
          method: 'PUT',
          url: `https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/level`,
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
          },
          body:'{"level":65}'
        }
      ],
      off:[
        {
          method: 'PUT',
          url: `https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/on`,
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
          },
          body:'{"on":false}'
        }
      ]
    }
  ]
};

export class ClockCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaultsDeep(this.panel, panelDefaults);
    //this.updateClock();

    this.headtxt = "";
    this.butterstate = {};
    this.edmShowButter = -1;
    this.edmShowButterOn = false;
    this.edmShowButterOff = false;
    this.edmRequestIndex = -1;
    //this.butter();

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    //this.events.on('panel-initialized', this.render.bind(this));

    this.updateButter();
  }

  onInitEditMode(){
    this.init_edmShowButter();
    this.addEditorTab('Options', 'public/plugins/grafana-butter-panel/editor.html', 2);
  }

  init_edmShowButter(){
    this.edmShowButter = -1;
  }

  edmToggleButter(index){
    this.edmRequestIndex = -1;
    this.edmShowButterOn = false;
    this.edmShowButterOff = false;
    if(this.edmShowButter == index)
      this.edmShowButter = -1;
    else
      this.edmShowButter = index;
    console.log("edmToggleButter > "+this.edmShowButter);
  }

  edmToggleButterOn(){
    this.edmRequestIndex = -1;
    this.edmShowButterOn = !this.edmShowButterOn;
    if(this.edmShowButterOn)
      this.edmShowButterOff = false;
    console.log("edmShowButterOn > "+this.edmShowButterOn);
  }

  edmToggleButterOff(){
    this.edmRequestIndex = -1;
    this.edmShowButterOff = !this.edmShowButterOff;
    if(this.edmShowButterOff)
      this.edmShowButterOn = false;
    console.log("edmShowButterOff > "+this.edmShowButterOff);
  }

  edmToggleRequest(index){
    if(this.edmRequestIndex == index){
      this.edmRequestIndex = -1;
    }
    else{
      this.edmRequestIndex = index;
    }
    console.log("edmRequestIndex > "+this.edmRequestIndex);
  }

  updateButter() {
    this.tea = "Label : "+this.headtxt;
    this.$timeout(() => { this.updateButter(); }, 1000);
  }

  removeButter(index) {
    console.log("Remove Butter "+index);
    this.panel.butter.splice(index, 1);
  }

  addButter(){
    console.log("Add Butter ");
    this.panel.butter.push(
      {
        butterType:'on/off button',
        label:'',
        on:[],
        off:[]
      });
  }

  addRequest(bindex, mode){
    if(mode == 'on'){
      console.log('Add new on request of butter'+bindex);
      this.panel.butter[bindex].on.push(
        {
          method: 'GET',
          url: '',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': ''
          },
          body:''
        }
      );
    }
    else{
      console.log('Add new off request of butter'+bindex);
      this.panel.butter[bindex].off.push(
        {
          method: 'GET',
          url: '',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': ''
          },
          body:''
        }
      );
    }
  }

  removeRequest(bindex, mode, index){
    if(mode == 'on'){
      console.log('Remove on request of butter'+bindex);
      this.panel.butter[bindex].on.splice(index, 1);
    }
    else{
      console.log('Remove off request of butter'+bindex);
      this.panel.butter[bindex].off.splice(index, 1);
    }
  }

  addRequestHeader(bindex, mode, index, headerkey, headervalue){
    console.log("Add request header");
    console.log("> bindex : "+bindex);
    console.log("> mode : "+mode);
    console.log("> index : "+index);
    console.log("> headerkey : "+headerkey);
    console.log("> headervalue : "+headervalue);

    if(headerkey == undefined || headerkey == '')
      return ;

    if(mode == 'on')
      this.panel.butter[bindex].on[index].headers[headerkey] = headervalue;
    else
      this.panel.butter[bindex].off[index].headers[headerkey] = headervalue;
  }

  removeRequestHeader(bindex, mode, index, headerkey){
    console.log("Remove request header "+index);
    console.log("> bindex : "+bindex);
    console.log("> mode : "+mode);
    console.log("> index : "+index);
    console.log("> headerkey : "+headerkey);

    if(mode == 'on')
      delete this.panel.butter[bindex].on[index].headers[headerkey];
    else
      delete this.panel.butter[bindex].off[index].headers[headerkey];
  }

  butter(bindex) {
  // Default options are marked with *
    console.log("Butter index : "+bindex);

    var len = 0;
    if(this.butterstate[bindex])
      len = this.panel.butter[bindex].on.length;
    else
      len = this.panel.butter[bindex].off.length;

    var reversebutter = function(){
      this.butterstate[bindex] = !this.butterstate[bindex];
    }

    for(var i=0;  i < len;  i++){
      this.sendRequest(bindex,i)
        .then(data => console.log(JSON.stringify(data)))
        //.catch(error => console.error(error));
        .catch(function(error){
          console.error(error);
          reversebutter();
        });
    }
  }

  sendRequest(bindex, cindex){
    console.log("butterstatus : "+this.butterstate[bindex]);
    console.log("cindex : "+cindex);

    console.log("Make Request : "+JSON.stringify(this.panel.butter[bindex].on[cindex]));
    console.log("Default Request : "+JSON.stringify(panelDefaults.butter[0].on[0]));
    console.log("Body : "+JSON.stringify(this.panel.butter[bindex].on[cindex].body));

    if(this.butterstate[bindex]){
      console.log("In true condition.");
      if(this.panel.butter[bindex].on[cindex].url == '')
        return ;
      return fetch(this.panel.butter[bindex].on[cindex].url, {
        method: this.panel.butter[bindex].on[cindex].method, // *GET, POST, PUT, DELETE, etc.
        headers: this.panel.butter[bindex].on[cindex].headers,
        body: this.panel.butter[0].on[cindex].body // body data type must match "Content-Type" header
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
    }
    else{
      console.log("In false condition.");
      if(this.panel.butter[bindex].off[cindex].url == '')
        return ;
      return fetch(this.panel.butter[bindex].off[cindex].url, {
        method: this.panel.butter[bindex].off[cindex].method, // *GET, POST, PUT, DELETE, etc.
        headers: this.panel.butter[bindex].off[cindex].headers,
        body: this.panel.butter[0].off[cindex].body // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
    }
  }
}

ClockCtrl.templateUrl = 'module.html';

