# Machine Learning SVM Classifier
An interactive web app which uses an HTML5 front-end to pass images to a python back-end, which trains a Support Vector Machine to classify the given images.

## Deployed Example
<a href="https://theoryofgravity.ca/draw/" target="_blank">Click to see this Machine Learning App in action</a>

## Requirements
* A web server or development environment, capable of executing Python/PHP and serving HTML pages.
* Python 3
* Python libraries: sci-kit learn, numpy, imageio

## Setup Guide
1. Install Apache2 (or equivalent web server), PHP & Python 3.
2. Install Python libraries.
3. Place all repository files into a web accessable HTML folder.
4. Ensure Execute permissions are set correctly for the PHP & Python scripts
5. Ensure Read/Write permissions are set correctly for the "test", "submissions" & "train" folders.
6. (optional) If wish to train the SVM or update the training data, populate the "train" folder and execute "train.py" on the server.
7. Navigate to index.html and draw a digit on the 100x100 canvas. Query the SVM to receive a prediction from the SVM back-end.


