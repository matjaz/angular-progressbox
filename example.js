angular.module('example', ['ui.bootstrap.modal', 'ui.bootstrap.tpls'])
.run(function($timeout, $modal, $rootScope) {
    $rootScope.start = function() {
        $rootScope.status = '';
        var progressBox = $modal.progressBox('Importing...', 'Starting...');
        progressBox.$on('progress', function (progress) {
            progressBox.title += '.';
        });
        progressBox.$on('finish', function () {
            $rootScope.status = 'finished!';
        });

        // simulate some progress
        var total = Math.floor(Math.random() * 500 + 500),
            count = 0;
        function Import() {
            count += Math.floor(Math.random() * 300);
            progressBox.progress = Math.round(count / total * 100);
            progressBox.message   = 'Imported ' + count + ' of ' + total + ' items.';
            if (progressBox.progress < 100) {
              $timeout(Import, 300 + Math.random() * 2000);
            }
        }
        $timeout(Import, 2000);
    };
});
