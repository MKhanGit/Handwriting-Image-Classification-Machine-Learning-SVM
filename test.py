#!/usr/bin/python3
import glob
import imageio
import numpy as np
from sklearn import svm
import pickle
import sys
try:
    #print(sys.argv[1])
    TEST_IMG = sys.argv[1]
except:
    #"./7_5bed0bd1012b3.png"
    print("enter path for image.")
    sys.exit(0)

np.set_printoptions(threshold=np.inf)
def png2array(IMAGE_PATH):
    im = np.asarray(imageio.imread(IMAGE_PATH))
    im_mono = im[:][:].T[0]/255
    im_mono_1d = im_mono.ravel()
    train = im_mono_1d
    target = IMAGE_PATH.split("/")[-1].split("_")[0]
    return((train,target))

svm_data_file=open('svm_data_digits.pkl','rb')
clf = pickle.load(svm_data_file)
svm_data_file.close()

X,Y=png2array(TEST_IMG)
#print("Prediction: ", clf.predict([X])[0])
print(clf.predict([X])[0])
