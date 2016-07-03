
var base = "";
if(Meteor.isServer){
  base = process.env.PWD;
}

// console.log(base);
Images = new FS.Collection('images', {
  stores: [new FS.Store.FileSystem('images', {path: base + '/.media/images'})],
  filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

Images.allow({
    insert: function() {
        return true
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    },
    download: function() {
        return true;
    },
    fetch: []
});

//cover image 815x315
var coverStore = new FS.Store.FileSystem('cover-image', {
        path: base + '/.media/images/covers',
        transformWrite: function(fileObj, readStream, writeStream) {
          // Transform the image into a 815x315px cover image
          gm(readStream, fileObj.name()).resize(815, 315 + '^').gravity('Center').extent(815, 315).stream().pipe(writeStream);
        }
    });

//thumbnails 180x180
var thumbStore = new FS.Store.FileSystem('thumbnail', {
        path: base + '/.media/images/thumbs',
        transformWrite: function(fileObj, readStream, writeStream) {
          // Transform the image into a 180x180px thumbnail
          gm(readStream, fileObj.name()).resize(180, 180 + '^').gravity('Center').extent(180, 180).stream().pipe(writeStream);
        }
    });
//display images 222x150 
var displayStore = new FS.Store.FileSystem('display-image', {
        path: base + '/.media/images/display',
        transformWrite: function(fileObj, readStream, writeStream) {
          // Transform the image into a 222x150px thumbnail
          gm(readStream, fileObj.name()).resize(222, 150 + '^').gravity('Center').extent(222, 150).stream().pipe(writeStream);
        }

    })

//cover Image for @ 
CoverImage = new FS.Collection('coverimage', {
  stores: [coverStore, displayStore, thumbStore],
  filter: {
        allow: {
            maxSize: 120000, // 1MB
            contentTypes: ['image/*']
        }
    }
});

CoverImage.allow({
    insert: function() {
        return true
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    },
    download: function() {
        return true;
    }
});