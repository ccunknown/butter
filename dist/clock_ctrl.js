'use strict';

System.register(['app/plugins/sdk', 'moment', './css/toggle-checkbox.css!'], function (_export, _context) {
  "use strict";

  var PanelCtrl, moment, _createClass, panelDefaults, ClockCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_moment) {
      moment = _moment.default;
    }, function (_cssToggleCheckboxCss) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        title: 'Panel Title',
        butter: [{
          butterType: 'on/off button',
          label: 'Label 0',
          initial: [{
            method: 'GET',
            url: 'https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/on',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
            },
            onstring: '{"on":true}',
            body: ''
          }],
          on: [{
            method: 'PUT',
            url: 'https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/on',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
            },
            body: '{"on":true}'
          }, {
            method: 'PUT',
            url: 'https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/level',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
            },
            body: '{"level":65}'
          }],
          off: [{
            method: 'PUT',
            url: 'https://httpillwww.mozilla-iot.org/things/http---192.168.43.62-things-lamp1/properties/on',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYWMzMWQzLWUxMjAtNGJiMy04NWQzLTdlNTYwOGNiNjBmMyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNTM2MjA4MzI5fQ.d1f9-4LE7KJTDr6b04xAynwHdGl_TZCYhQTsurYR4dPH5KFUXLpzwrUrokODzelam8M1EmemB_AYzVNC9dHyCw'
            },
            body: '{"on":false}'
          }]
        }]
      };

      _export('ClockCtrl', ClockCtrl = function (_PanelCtrl) {
        _inherits(ClockCtrl, _PanelCtrl);

        function ClockCtrl($scope, $injector) {
          _classCallCheck(this, ClockCtrl);

          var _this = _possibleConstructorReturn(this, (ClockCtrl.__proto__ || Object.getPrototypeOf(ClockCtrl)).call(this, $scope, $injector));

          _.defaultsDeep(_this.panel, panelDefaults);
          //this.updateClock();

          _this.headtxt = "";
          _this.butterstate = {};
          _this.edmShowButter = -1;
          _this.edmShowButterOn = false;
          _this.edmShowButterOff = false;
          _this.edmShowButterInitial = false;
          _this.edmRequestIndex = -1;
          //this.butter();

          _this.init_butterstate();
          _this.initialAllButterState();
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          //this.events.on('panel-initialized', this.render.bind(this));

          _this.updateButter();
          return _this;
        }

        _createClass(ClockCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.init_edmShowButter();
            this.addEditorTab('Options', 'public/plugins/grafana-butter-panel/editor.html', 2);
          }
        }, {
          key: 'init_butterstate',
          value: function init_butterstate() {
            var len = this.panel.butter.length;
            for (var i; i < len; i++) {
              this.butterstate[i] = false;
            }
          }
        }, {
          key: 'init_edmShowButter',
          value: function init_edmShowButter() {
            this.edmShowButter = -1;
          }
        }, {
          key: 'edmToggleButter',
          value: function edmToggleButter(index) {
            this.edmRequestIndex = -1;
            this.edmShowButterOn = false;
            this.edmShowButterOff = false;
            if (this.edmShowButter == index) this.edmShowButter = -1;else this.edmShowButter = index;
            console.log("edmToggleButter > " + this.edmShowButter);
          }
        }, {
          key: 'edmToggleButterOn',
          value: function edmToggleButterOn() {
            this.edmRequestIndex = -1;
            this.edmShowButterOn = !this.edmShowButterOn;
            if (this.edmShowButterOn) {
              this.edmShowButterOff = false;
              this.edmShowButterInitial = false;
            }
            console.log("edmShowButterOn > " + this.edmShowButterOn);
          }
        }, {
          key: 'edmToggleButterOff',
          value: function edmToggleButterOff() {
            this.edmRequestIndex = -1;
            this.edmShowButterOff = !this.edmShowButterOff;
            if (this.edmShowButterOff) {
              this.edmShowButterOn = false;
              this.edmShowButterInitial = false;
            }
            console.log("edmShowButterOff > " + this.edmShowButterOff);
          }
        }, {
          key: 'edmToggleButterInitial',
          value: function edmToggleButterInitial() {
            this.edmRequestIndex = -1;
            this.edmShowButterInitial = !this.edmShowButterInitial;
            if (this.edmShowButterInitial) {
              this.edmShowButterOn = false;
              this.edmShowButterOff = false;
            }
            console.log("edmShowButterInitial > " + this.edmShowButterInitial);
          }
        }, {
          key: 'edmToggleRequest',
          value: function edmToggleRequest(index) {
            if (this.edmRequestIndex == index) {
              this.edmRequestIndex = -1;
            } else {
              this.edmRequestIndex = index;
            }
            console.log("edmRequestIndex > " + this.edmRequestIndex);
          }
        }, {
          key: 'updateButter',
          value: function updateButter() {
            var _this2 = this;

            this.tea = "Label : " + this.headtxt;
            this.$timeout(function () {
              _this2.updateButter();
            }, 1000);
          }
        }, {
          key: 'removeButter',
          value: function removeButter(index) {
            console.log("Remove Butter " + index);
            this.panel.butter.splice(index, 1);
          }
        }, {
          key: 'addButter',
          value: function addButter() {
            console.log("Add Butter ");
            this.panel.butter.push({
              butterType: 'on/off button',
              label: '',
              on: [],
              off: [],
              initial: []
            });
          }
        }, {
          key: 'addRequest',
          value: function addRequest(bindex, mode) {
            var data = {
              method: 'GET',
              url: '',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: ''
            };

            console.log('Add new ' + mode + ' request of butter' + bindex);

            if (mode == 'initial') {
              data['onstring'] = '';
            }
            this.panel.butter[bindex][mode].push(data);
          }
        }, {
          key: 'removeRequest',
          value: function removeRequest(bindex, mode, index) {
            console.log('Remove ' + mode + ' request of butter' + bindex);
            this.panel.butter[bindex][mode].splice(index, 1);
          }
        }, {
          key: 'addRequestHeader',
          value: function addRequestHeader(bindex, mode, index, headerkey, headervalue) {
            console.log("Add request header");
            console.log("> bindex : " + bindex);
            console.log("> mode : " + mode);
            console.log("> index : " + index);
            console.log("> headerkey : " + headerkey);
            console.log("> headervalue : " + headervalue);

            if (headerkey == undefined || headerkey == '') return;

            this.panel.butter[bindex][mode][index].headers[headerkey] = headervalue;
          }
        }, {
          key: 'removeRequestHeader',
          value: function removeRequestHeader(bindex, mode, index, headerkey) {
            console.log("Remove request header " + index);
            console.log("> bindex : " + bindex);
            console.log("> mode : " + mode);
            console.log("> index : " + index);
            console.log("> headerkey : " + headerkey);

            delete this.panel.butter[bindex][mode][index].headers[headerkey];
          }
        }, {
          key: 'initialAllButterState',
          value: function initialAllButterState() {
            var len = this.panel.butter.length;
            console.log("Butter : " + JSON.stringify(this.panel.butter));
            for (var i = 0; i < len; i++) {
              this.initialButterState(i);
            }
          }
        }, {
          key: 'setbutterfunc',
          value: function setbutterfunc(arr, len, bindex) {
            console.log("array : " + JSON.stringify(arr));
            var on = true;
            for (var i = 0; i < len; i++) {
              console.log("meter : " + this.panel.butter[bindex].initial[i].onstring);
              console.log("result : " + JSON.stringify(arr[i]));
              if (JSON.stringify(arr[i]) != this.panel.butter[bindex].initial[i].onstring) on = false;
            }
            this.butterstate[bindex] = on;
          }
        }, {
          key: 'checkarr',
          value: function checkarr(arr, len, bindex) {
            var _this3 = this;

            console.log("checkarr > len : " + arr.length);
            if (arr.length < len) this.$timeout(function () {
              _this3.checkarr(arr, len, bindex);
            }, 250);else this.setbutterfunc(arr, len, bindex);
          }
        }, {
          key: 'initialButterState',
          value: function initialButterState(bindex) {
            var _this4 = this;

            console.log("initial bindex : " + bindex);
            var len = this.panel.butter[bindex].initial.length;
            var i;
            var arr = [];

            for (i = 0; i < len; i++) {
              this.sendRequest(bindex, 'initial', i).then(function (data) {
                console.log("iReturned : " + JSON.stringify(data));
                arr.push(data);
              }).catch(function (error) {
                return console.error(error);
              });
            }

            this.$timeout(function () {
              _this4.checkarr(arr, len, bindex);
            }, 250);
            //setTimeout(function(){this.checkarr(arr, len, bindex);},250);
          }
        }, {
          key: 'butter',
          value: function butter(bindex) {
            var _this5 = this;

            // Default options are marked with *
            console.log("Butter index : " + bindex);

            var len = 0;
            var mode;
            if (this.butterstate[bindex]) {
              len = this.panel.butter[bindex].on.length;
              mode = 'on';
            } else {
              len = this.panel.butter[bindex].off.length;
              mode = 'off';
            }

            for (var i = 0; i < len; i++) {
              this.sendRequest(bindex, mode, i).then(function (data) {
                console.log("Returned : " + JSON.stringify(data));
                _this5.initialAllButterState();
              })
              //.catch(error => console.error(error));
              .catch(function (error) {
                console.error(error);
                _this5.butterstate[bindex] = !_this5.butterstate[bindex];
              });
            }
          }
        }, {
          key: 'sendRequest',
          value: function sendRequest(bindex, mode, cindex) {
            console.log("sendRequest > butterstate : " + this.butterstate[bindex]);
            console.log("sendRequest > bindex : " + bindex);
            console.log("sendRequest > mode : " + mode);
            console.log("sendRequest > cindex : " + cindex);

            //console.log("Make Request : "+JSON.stringify(this.panel.butter[bindex][mode][cindex]));
            //console.log("Default Request : "+JSON.stringify(panelDefaults.butter[0][mode][0]));
            //console.log("Body : "+JSON.stringify(this.panel.butter[bindex][mode][cindex].body));

            var rurl = this.panel.butter[bindex][mode][cindex].url;
            var rmethod = this.panel.butter[bindex][mode][cindex].method;
            var rheaders = this.panel.butter[bindex][mode][cindex].headers;
            var rbody = this.panel.butter[bindex][mode][cindex].body;

            if (this.panel.butter[bindex][mode][cindex].url == '') return;

            if (rmethod == 'GET') return fetch(rurl, {
              method: rmethod, // *GET, POST, PUT, DELETE, etc.
              headers: rheaders
              //body: JSON.stringify(data) // body data type must match "Content-Type" header
            }).then(function (response) {
              return response.json();
            }); // parses response to JSON
            else return fetch(rurl, {
                method: rmethod, // *GET, POST, PUT, DELETE, etc.
                headers: rheaders,
                body: rbody // body data type must match "Content-Type" header
                //body: JSON.stringify(data) // body data type must match "Content-Type" header
              }).then(function (response) {
                return response.json();
              }); // parses response to JSON
          }
        }]);

        return ClockCtrl;
      }(PanelCtrl));

      _export('ClockCtrl', ClockCtrl);

      ClockCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=clock_ctrl.js.map
