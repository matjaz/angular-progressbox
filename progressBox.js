angular.module('ui.bootstrap.modal')
.run(function($rootScope, $modal) {
    $modal.progressBox = function(title, message) {
        var scope = angular.extend($rootScope.$new(true), {
                title    : title,
                message  : message,
                progress : 0
            }),
            dialog = $modal.open({
                templateUrl : 'progressBox.html',
                backdrop    : 'static',
                keyboard    : false,
                scope       : scope,
            });
        scope.$watch('progress', function (progress) {
            if (progress > 100) {
                scope.progress = 100;
            } else if (progress === 100) {
                dialog.close();
                scope.$broadcast('finish');
                scope.$evalAsync(function(){
                  scope.$destroy();
                });
            } else {
                scope.$broadcast('progress', progress);
            }
        });
        return scope;
    };
});