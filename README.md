# Machine Learning

# Natural Language Processing
A Natural Language Processing (NLP) model is a type of artificial intelligence designed to understand, interpret, and generate human language. These models process and analyze large amounts of natural language data to extract meaningful insights and patterns. NLP models play a crucial role in bridging the gap between human communication and computer understanding, enabling machines to comprehend and respond to text or speech in a way that is both meaningful and contextually appropriate.
![Photo](https://github.com/SultanFahdMBY/ML_Capstone_MentalHealth/blob/master/Flow%20NLP.png)


# Dataset
We are using a dataset that is available on Kaggle. Using a dataset available on Kaggle can be an excellent way to implement and experiment with NLP models.
## 1. [Emotions](https://www.kaggle.com/datasets/nelgiriyewithana/emotions/data)
  "Emotions" dataset – a collection of English Twitter messages meticulously annotated with six fundamental emotions: anger, fear, joy, love, sadness, and surprise. This dataset serves as    a valuable resource for understanding and analyzing the diverse spectrum of emotions expressed in short-form text on social media.

## 2. [Emotion Detection from Text](https://www.kaggle.com/datasets/pashupatigupta/emotion-detection-from-text)
  The data that we have is having 13 different emotion 40000 records. So it's challenging to build an efficient multiclass classification model. We may need to logically reduce the number     of classes here and use some advanced methods to build efficient model.
   
## 3. [Emotion in Text](https://www.kaggle.com/datasets/ishantjuyal/emotions-in-text)
  There are two columns, Text and Emotions. Quite self explanatory right. The Emotions column has various categories ranging from happiness to sadness to love and fear.

# Model Machine Learning
## Convolutional Neural Networks for Text
The main difference between using CNNs for images and sequences is the shape of the data. Images come in 2-dimensions (height x width) where as sequences are often 1-dimensional (a string of text). So to use CNNs with sequences, we use a 1-dimensional convolution instead of a 2-dimensional convolution. A typical CNN architecture for sequences will look like the following:
```
Inputs (text) -> Tokenization -> Embedding -> Layers -> Outputs (class probabilities)
```
The difference again is in the layers component. Instead of using an LSTM or GRU cell, we're going to use a [`tensorflow.keras.layers.Conv1D()`](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Conv1D) layer followed by a [`tensorflow.keras.layers.GlobablMaxPool1D()`](https://www.tensorflow.org/api_docs/python/tf/keras/layers/GlobalMaxPool1D) layer
1. 1-dimensional convolving filters are used as ngram detectors, each filter specializing in a closely-related family of ngrams (an ngram is a collection of n-words, for example, an ngram of 5 might result in "hello, my name is Sultan Fahd").
2. Max-pooling over time extracts the relevant ngrams for making a decision.
3. The rest of the network classifies the text based on this information.

## Results
    - `accuracy: 94%`
    - `loss : 18%`
    - `Validation_loss: 36%`
    - `Validation_accuracy: 84%`

# Prerequisites
Function dependencies used in this project:
- keras==2.7.0
- numpy==1.20.3
- pandas==1.3.4
- tensorflow==2.7.0
