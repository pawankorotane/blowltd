"use strict";

var app = angular.module('blow', ['ui.bootstrap']).constant('config', {
    url: 'http://localhost:3000/'
});

app.controller('bookingCtrl', function ($scope, $http, config) {
    $scope.appointment = {};
    $scope.time = [];
    for (var i = 0; i <= 24; i++) {
        if (i < 12) {
            $scope.time.push(i + '.00 AM');
        } else {
            $scope.time.push(i + '.00 PM');
        }
    }


    $scope.bookAppointment = function () {
        $http.post(config.url + 'api/bookings', $scope.appointment).success(function (data) {
             alert('Booking is created successfully');
             $scope.appointment  = {};
             
        }).error(function (err) {
            console.log(err);
            alert('Error in loading beauticians from server');
            return;
        });
    };


    $scope.today = function () {
        $scope.date = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.options = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true


    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
                mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.options.minDate = new Date();
    };

    $scope.toggleMin();

    $scope.setDate = function (year, month, day) {

        $scope.dt = new Date(year, month, day);
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
                mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
});

