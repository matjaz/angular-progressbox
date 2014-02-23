$modal progressBox
==================

Simple API
----------
Create new progress box.

    var progressBox = $modal.progressBox('Importing...', 'Starting...');

Events on progress and finish.

    progressBox.$on('progress', function (progress) {
        progressBox.title += '.';
    });
    progressBox.$on('finish', function () {
        $rootScope.status = 'finished!';
    });


Update progress and message

    progressBox.progress = Math.round(count / total * 100);
    progressBox.message  = 'Imported ' + count + ' of ' + total + ' items.';