/*!
 * Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * The Parameter Value Class
 *
 * @name ParameterValue
 * @class
 * @property {String} type The java type of the Parameter Value
 * @property {String} label The label of the Parameter Value
 * @property {Boolean} selected True if the Parameter Value is selected, False otherwise
 * @property {Object} value The value of the Parameter Value
 */
define([], function () {
  return function () {
    return {
      type: undefined,
      label: undefined,
      selected: false,
      value: undefined
    };
  }
});
