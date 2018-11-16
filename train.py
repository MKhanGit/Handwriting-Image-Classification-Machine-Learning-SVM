#!/usr/bin/python3
import glob
import imageio
import numpy as np
from sklearn import svm
import pickle

np.set_printoptions(threshold=np.inf)

def png2array(IMAGE_PATH):
    im = np.asarray(imageio.imread(IMAGE_PATH))
    im_mono = im[:][:].T[0]/255
    im_mono_1d = im_mono.ravel()
    train = im_mono_1d
    target = IMAGE_PATH.split("/")[-1].split("_")[0]
    return((train,target))

clf = svm.SVC(gamma=0.001, C=100.)
TRAIN_DATA=[]
TARGET_DATA=[]

for image_path in glob.glob("./train/*.png"):
    #print(image_path)
    train, target = png2array(image_path)
    TRAIN_DATA.append(train)
    TARGET_DATA.append(target)

clf.fit(TRAIN_DATA, TARGET_DATA)
output = open("svm_data_digits.pkl",'wb')
pickle.dump(clf, output)
output.close()
