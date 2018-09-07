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
          _this.edmShowButter = [];
          _this.edmShowButterOn = false;
          _this.edmShowButterOff = false;
          _this.edmRequestIndex = -1;
          //this.butter();

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
          key: 'init_edmShowButter',
          value: function init_edmShowButter() {
            this.edmShowButter = [];
            var len = this.panel.butter.length;
            for (var i = 0; i < len; i++) {
              this.edmShowButter[i] = false;
            }
          }
        }, {
          key: 'edmToggleButter',
          value: function edmToggleButter(index) {
            this.edmRequestIndex = -1;
            this.edmShowButterOn = false;
            this.edmShowButterOff = false;
            this.edmShowButter[index] = !this.edmShowButter[index];
            console.log("edmToggleButter > " + this.edmShowButter[index]);
          }
        }, {
          key: 'edmToggleButterOn',
          value: function edmToggleButterOn() {
            this.edmRequestIndex = -1;
            this.edmShowButterOn = !this.edmShowButterOn;
            console.log("edmShowButterOn > " + this.edmShowButterOn);
          }
        }, {
          key: 'edmToggleButterOff',
          value: function edmToggleButterOff() {
            this.edmRequestIndex = -1;
            this.edmShowButterOff = !this.edmShowButterOff;
            console.log("edmShowButterOff > " + this.edmShowButterOff);
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
          key: 'butter',
          value: function butter(bindex) {
            // Default options are marked with *
            console.log("Butter index : " + bindex);

            var len = 0;
            if (this.butterstate[bindex]) len = this.panel.butter[bindex].on.length;else len = this.panel.butter[bindex].off.length;

            var reversebutter = function reversebutter() {
              this.butterstate[bindex] = !this.butterstate[bindex];
            };

            for (var i = 0; i < len; i++) {
              this.sendRequest(bindex, i).then(function (data) {
                return console.log(JSON.stringify(data));
              })
              //.catch(error => console.error(error));
              .catch(function (error) {
                console.error(error);
                reversebutter();
              });
            }
          }
        }, {
          key: 'sendRequest',
          value: function sendRequest(bindex, cindex) {
            console.log("butterstatus : " + this.butterstate[bindex]);
            console.log("cindex : " + cindex);
            if (this.butterstate[bindex]) {
              console.log("In true condition.");
              return fetch(this.panel.butter[bindex].on[cindex].url, {
                method: this.panel.butter[bindex].on[cindex].method, // *GET, POST, PUT, DELETE, etc.
                headers: this.panel.butter[bindex].on[cindex].headers,
                body: this.panel.butter[0].on[cindex].body // body data type must match "Content-Type" header
                //body: JSON.stringify(data) // body data type must match "Content-Type" header
              }).then(function (response) {
                return response.json();
              }); // parses response to JSON
            } else {
              console.log("In false condition.");
              return fetch(this.panel.butter[bindex].off[cindex].url, {
                method: this.panel.butter[bindex].off[cindex].method, // *GET, POST, PUT, DELETE, etc.
                headers: this.panel.butter[bindex].off[cindex].headers,
                body: this.panel.butter[0].off[cindex].body // body data type must match "Content-Type" header
              }).then(function (response) {
                return response.json();
              }); // parses response to JSON
            }
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
