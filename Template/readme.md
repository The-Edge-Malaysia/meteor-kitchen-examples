## Meteor Kitchen How-to

Meteor Kitchen is an AWESOME tool! Wanna make it even cooler?!
Follow these instructions to make your scaffolding easier to digest and make you expand the possibilities.

### Structure

In the folder directory you will find a bunch of JSON files.
These files are the Meteor Kitchen objects broken down into bite-size pieces.
Go through each file, refer to the [Docs](http://www.meteorkitchen.com/object_reference), and start filling them out.

Once you have them all filled out you will need to compile them into a single JSON file.
Open /scripts/merge.js and make each of your JSON files a requireJS variable, as shown with other files.
Next make sure your files are being merged. Right now the DeepMerge engine only allows for pairs.
So you will need to create multiple merges. If you can improve this code, please do.

Once complete run in your terminal `node merge.js` then `meteor-kitchen compiled.json <output_directory>`.

Enjoy!