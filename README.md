## Flux - Cat  

Description: implement a small app that displays photos from the Cat API:  https://docs.thecatapi.com/  

*Details:*  
Your app should provide a page which allows the user to indicate a breed, and cycle one-by-one through the available images of that breed. All breed and photo info should be retrieved from the API, not hardcoded.

Your app should provide another page to load 10 images of a user-specified breed. Then let user specify a “slot” size of width and height in pixels, e.g. 300x200. Rank the 10 images by how well each image can fit into the slot, determined by the two rules below:
* Aspect ratio: the closer an image’s aspect ratio is to the slot size, the better. E.g, if the slot size is 200x200, a 500x400 image is better than a 600x400 image.
* Image size: if two images have the same aspect ratio, the closer an image’s size is to the slot size, the better. E.g., if the slot size is 200x200, a 400x400 image is better than a 600x600 image.

Display all images in the ranked order, preferably in the size of the slot and the original aspect ratio of the image, with white space padding.

Feel free to use frameworks such as Vue.js/React/Angular/jQuery or vanilla JS as you see fit.

Estimated time to spend: _4 hours_.

### CheckList 

[x] Create two pages  
[x] Create a page that allows you to cycle through photos by selected breed.   
[x] Create a page that allows you to render a page of ten images. This page should also allow you to sort by Ascending or Descending. This should also allow you to choose by breed.

[ ] Provide an input to allow a user to provide a slot for functionality which allows for width and height 
[ ]Functionality that compares image aspect ratio to provided aspect ratio.
[ ]Functionality that compares images to provided width and height

### Concerns  
I implimented the sort functionality but it does not actually sort the current listing of cats. It makes a request and provides a sorted query. I would refactor this. 

I would take more time to setup a visual system. I have utilized both scss and styled componenets to show that I am adept at using both. I would however use one or the other and not both.

I have some additional questions regarding choosing the slot for the aspect ratio. I am having a bit of difficulty with the functionality for the aspect ratio comparison and I would have been able to figure out if I had more time. 

