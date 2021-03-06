/*
Copyright 2016 The Eyra Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

File author/s:
    Matthias Petursson <oldschool01123@gmail.com>
*/

(function () {
'use strict';

angular.module('daApp')
.controller('RecordingAgreementController', RecordingAgreementController);

RecordingAgreementController.$inject = ['$document', '$location', '$scope', '$rootScope', 'dataService', 'logger', 'utilityService'];

function RecordingAgreementController($document, $location, $scope, $rootScope, dataService, logger, utilityService) {
  var agrCtrl = this;
  var util = utilityService;

  agrCtrl.submit = submit;

  agrCtrl.fullName = '';
  agrCtrl.email = '';

  $scope.msg = '';
  $scope.fullNameText = util.getConstant('FULLNAMETEXT');
  $scope.emailText = util.getConstant('EMAILTEXT');
  $scope.acceptText = util.getConstant('ACCEPTTEXT');
  $scope.declineText = util.getConstant('DECLINETEXT');
  $scope.emailPlaceholder = util.getConstant('EMAILPLACEHOLDERTEXT');
  $scope.fullnamePlaceholder = util.getConstant('FULLNAMEPLACEHOLDERTEXT');

  var agreementId = $document[0].getElementById('agreement-id').attributes['agreement-id'].value;
  dataService.set('agreementId', agreementId);

  $rootScope.isLoaded = true;
  
  //////////

  function submit(choice) {
    if (!agrCtrl.fullName || !agrCtrl.email) {
      $scope.msg = util.getConstant('NAMEANDEMAILMISSINGMSG');;
      return;
    }

    if (choice === 'accept') {
      dataService.set('fullName', agrCtrl.fullName);
      dataService.set('email', agrCtrl.email);

      logger.log('Agreement accepted.');
      $rootScope.agreementSigned = true;

      $location.path('/start');
    } else {
      logger.log('Agreement declined, cannot record unless accepted.');
      $rootScope.agreementSigned = false;

      $scope.msg = util.getConstant('MUSTACCEPTMSG');;
    }
  }
}
}());
