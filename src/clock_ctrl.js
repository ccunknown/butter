import {PanelCtrl} from 'app/plugins/sdk';
import moment from 'moment';
import './css/toggle-checkbox.css!';

var panelDefaults = {
  title: 'Panel Title',
  butter:[
    {
      butterType: 'on/off button',
      label: 'Label 0',
      initial:[
        {
          method: 'GET',
          url: `https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/on`,
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
          },
          onstring:'{"on":true}',
          body:''
        }
      ],
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
    this.edmShowButterInitial = false;
    this.edmRequestIndex = -1;
    //this.butter();

    this.init_butterstate();
    this.initialAllButterState();
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    //this.events.on('panel-initialized', this.render.bind(this));

    this.updateButter();
  }

  onInitEditMode(){
    this.init_edmShowButter();
    this.addEditorTab('Options', 'public/plugins/grafana-butter-panel/editor.html', 2);
  }

  init_butterstate(){
    var len = this.panel.butter.length;
    for(var i;i < len;i++)
      this.butterstate[i] = false;
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
    if(this.edmShowButterOn){
      this.edmShowButterOff = false;
      this.edmShowButterInitial = false;
    }
    console.log("edmShowButterOn > "+this.edmShowButterOn);
  }

  edmToggleButterOff(){
    this.edmRequestIndex = -1;
    this.edmShowButterOff = !this.edmShowButterOff;
    if(this.edmShowButterOff){
      this.edmShowButterOn = false;
      this.edmShowButterInitial = false;
    }
    console.log("edmShowButterOff > "+this.edmShowButterOff);
  }

  edmToggleButterInitial(){
    this.edmRequestIndex = -1;
    this.edmShowButterInitial = !this.edmShowButterInitial;
    if(this.edmShowButterInitial){
      this.edmShowButterOn = false;
      this.edmShowButterOff = false;
    }
    console.log("edmShowButterInitial > "+this.edmShowButterInitial);
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
        off:[],
        initial:[]
      });
  }

  addRequest(bindex, mode){
    var data = {
      method: 'GET',
      url: '',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:''
    };

    console.log('Add new '+mode+' request of butter'+bindex);

    if(mode == 'initial'){
      data['onstring'] = '';
    }
    this.panel.butter[bindex][mode].push(data);
  }

  removeRequest(bindex, mode, index){
    console.log('Remove '+mode+' request of butter'+bindex);
    this.panel.butter[bindex][mode].splice(index, 1);
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

    this.panel.butter[bindex][mode][index].headers[headerkey] = headervalue;
  }

  removeRequestHeader(bindex, mode, index, headerkey){
    console.log("Remove request header "+index);
    console.log("> bindex : "+bindex);
    console.log("> mode : "+mode);
    console.log("> index : "+index);
    console.log("> headerkey : "+headerkey);

    delete this.panel.butter[bindex][mode][index].headers[headerkey];
  }

  initialAllButterState(){
    var len = this.panel.butter.length;
    console.log("Butter : "+JSON.stringify(this.panel.butter));
    for(var i = 0;i < len;i++){
      this.initialButterState(i);
    }
  }

  setbutterfunc(arr, len, bindex){
    console.log("array : "+JSON.stringify(arr));
    var on = true;
    for(var i = 0;i < len;i++){
      console.log("meter : "+this.panel.butter[bindex].initial[i].onstring);
      console.log("result : "+JSON.stringify(arr[i]));
      if(JSON.stringify(arr[i]) != this.panel.butter[bindex].initial[i].onstring)
        on = false;
    }
    this.butterstate[bindex] = on;
  }

  checkarr(arr, len, bindex){
    console.log("checkarr > len : "+arr.length);
    if(arr.length < len)
      this.$timeout(() => { this.checkarr(arr, len, bindex); }, 250);
    else
      this.setbutterfunc(arr, len, bindex);
  }

  initialButterState(bindex){
    console.log("initial bindex : "+bindex);
    var len = this.panel.butter[bindex].initial.length;
    var i;
    var arr = [];

    for(i = 0;i < len;i++){
      this.sendRequest(bindex, 'initial', i)
        .then(data => {
          console.log("iReturned : "+JSON.stringify(data));
          arr.push(data);
        })
        .catch(error => console.error(error));
    }

    this.$timeout(() => { this.checkarr(arr, len, bindex); }, 250);
    //setTimeout(function(){this.checkarr(arr, len, bindex);},250);
  }

  butter(bindex) {
  // Default options are marked with *
    console.log("Butter index : "+bindex);

    var len = 0;
    var mode;
    if(this.butterstate[bindex]){
      len = this.panel.butter[bindex].on.length;
      mode = 'on';
    }
    else{
      len = this.panel.butter[bindex].off.length;
      mode = 'off';
    }

    for(var i=0;  i < len;  i++){
      this.sendRequest(bindex, mode, i)
        .then(data => {
          console.log("Returned : "+JSON.stringify(data))
          this.initialAllButterState();
        })
        //.catch(error => console.error(error));
        .catch(error =>{
          console.error(error);
          this.butterstate[bindex] = !this.butterstate[bindex];
        });
    }
  }

  sendRequest(bindex, mode, cindex){
    console.log("sendRequest > butterstate : "+this.butterstate[bindex]);
    console.log("sendRequest > bindex : "+bindex);
    console.log("sendRequest > mode : "+mode);
    console.log("sendRequest > cindex : "+cindex);

    //console.log("Make Request : "+JSON.stringify(this.panel.butter[bindex][mode][cindex]));
    //console.log("Default Request : "+JSON.stringify(panelDefaults.butter[0][mode][0]));
    //console.log("Body : "+JSON.stringify(this.panel.butter[bindex][mode][cindex].body));

    var rurl = this.panel.butter[bindex][mode][cindex].url;
    var rmethod = this.panel.butter[bindex][mode][cindex].method;
    var rheaders = this.panel.butter[bindex][mode][cindex].headers;
    var rbody = this.panel.butter[bindex][mode][cindex].body;

    if(this.panel.butter[bindex][mode][cindex].url == '')
      return ;

    if(rmethod == 'GET')
      return fetch(rurl, {
        method: rmethod, // *GET, POST, PUT, DELETE, etc.
        headers: rheaders
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
    else
      return fetch(rurl, {
        method: rmethod, // *GET, POST, PUT, DELETE, etc.
        headers: rheaders,
        body: rbody // body data type must match "Content-Type" header
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }
}

ClockCtrl.templateUrl = 'module.html';

