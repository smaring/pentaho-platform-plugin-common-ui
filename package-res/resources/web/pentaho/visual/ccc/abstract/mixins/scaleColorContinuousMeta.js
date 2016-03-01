/*!
 * Copyright 2010 - 2016 Pentaho Corporation. All rights reserved.
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
 */
define([
  "../types/colorSet",
  "../types/pattern"
], function(colorSetFactory, patternFactory) {

  "use strict";

  // Used by: HG, Scatter
  return {
    props: [
      {
        name: "pattern",
        type: patternFactory,
        required: true
      },
      {
        name: "colorSet",
        type: colorSetFactory,
        required: true
      },
      {
        name: "reverseColors",
        type: "boolean",
        required: true
      }
    ]
  };
});