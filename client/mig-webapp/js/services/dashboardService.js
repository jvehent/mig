app.factory('dashboardService', function ($resource) {
    return $resource('http://localhost:12345/api/v1/dashboard');
});