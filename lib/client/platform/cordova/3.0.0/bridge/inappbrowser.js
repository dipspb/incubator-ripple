/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var emulatorBridge = ripple('emulatorBridge'),
    browser = ripple("ui/plugins/browser");

module.exports = {
    open: function (win, fail, args) {
        var url = args[0],
            target = args[1],
            options = args[2];

        browser.show(url);
        window.setTimeout(function () {
            //win({type: "loadstart", url: url});
            //win({type: "loadstop", url: url});
        }, 100);
    },

    show: function (win, fail, args) {
        console.log(args);
    },

    close: function (win, fail, args) {
        console.log(args);
    },

    injectScriptCode: function (win, fail, args) {
        console.log(args);
    },

    injectScriptFile: function (win, fail, args) {
        console.log(args);
    },

    injectStyleCode: function (win, fail, args) {
        console.log(args);
    },

    injectStyleFile: function (win, fail, args) {
        console.log(args);
    }
};