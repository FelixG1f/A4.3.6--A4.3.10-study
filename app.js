document.addEventListener('alpine:init', () => {
  // SLIDES DATA & LOGIC (43 Detailed Slides)
  Alpine.data('slidesModule', () => ({
    active: 0,
    slides: [
      // --- SECTION 1: A4.3.6 REINFORCEMENT LEARNING (8 Slides) ---
      { 
        id: 'A4.3.6-01', 
        title: 'RL Overview & The Agent', 
        content: 'Reinforcement Learning (RL) trains models through sequences of decisions. Central to this is the Agent: the machine learning model that interacts with an environment and makes the decisions on what actions to take.' 
      },
      { 
        id: 'A4.3.6-02', 
        title: 'Defining Environment & State', 
        content: 'Environment: The world as perceived by the agent. State: A snapshot in time of the world containing data that communicates the current situation. Accurately defining what state data is given is critical to properly train a model suited for a specific task.' 
      },
      { 
        id: 'A4.3.6-03', 
        title: 'Actions & Rewards', 
        content: 'Action: An operation or behavior the agent can perform within the environment. Reward: The immediate response provided by the environment based on the agent\'s actions. This can be positive reinforcement or negative (a punishment).' 
      },
      { 
        id: 'A4.3.6-04', 
        title: 'Policies: Mapping States to Actions', 
        content: 'Policies represent the strategic plans that an agent uses to determine its behavior. A policy maps the current observed state of the environment to the action the agent should take.' 
      },
      { 
        id: 'A4.3.6-05', 
        title: 'Exploration vs Exploitation', 
        content: 'Exploration: The agent ignores its learned policy to try something new. Exploitation: The agent follows its plan and behaves according to what it learned. Training typically begins with high exploration, which helps measure how much the model is progressing.' 
      },
      { 
        id: 'A4.3.6-06', 
        title: 'The RL Process Loop', 
        content: '1. Agent starts with a randomized policy. 2. Surveys the environment to take action. 3. Performs the selected action. 4. Environment transitions to a new state. 5. Environment rewards/punishes the agent. 6. Policy updates. 7. Process repeats.' 
      },
      { 
        id: 'A4.3.6-07', 
        title: 'Preserving Knowledge: Q-Learning', 
        content: 'Q-learning is the most common method for preserving what an agent learns. It uses a 2D array (or similar data structure) holding every possible state-action combination, storing the predicted reward for each permutation.' 
      },
      { 
        id: 'A4.3.6-08', 
        title: 'Deep Q-Networks (DQN)', 
        content: 'The downside of standard Q-learning is that it produces huge files that cannot be physically stored. Instead, Neural Networks are used to make generalizations of the state and resulting output actions. This approach is called a Deep Q-Network.' 
      },

      // --- SECTION 2: A4.3.7 GENETIC ALGORITHMS (8 Slides) ---
      { 
        id: 'A4.3.7-01', 
        title: 'Genetic Algorithms Overview', 
        content: 'Genetic Algorithms are evolutionary algorithms that learn through optimization based on natural selection. The process starts with a population of possible solutions to the problem, often represented as an array of randomly generated strings.' 
      },
      { 
        id: 'A4.3.7-02', 
        title: 'Evaluating Solutions: Fitness Function', 
        content: 'Every candidate solution within the population is evaluated using a Fitness Function. This function calculates and returns a specific metric reflecting how good the possible solution is.' 
      },
      { 
        id: 'A4.3.7-03', 
        title: 'Parent Selection & Randomization', 
        content: 'Selection uses weighted randomization to pick pairs for reproduction. Better fitness scores grant a higher likelihood of selection, but maintaining randomness is critical to prevent the algorithm from getting trapped in a local maximum.' 
      },
      { 
        id: 'A4.3.7-04', 
        title: 'Reproduction: Crossover Functions', 
        content: 'Crossover algorithms define the reproduction step. They take two input solutions and mix them together—selecting parts of the genetic code of each parent and combining them to produce a "child" (a new possible solution).' 
      },
      { 
        id: 'A4.3.7-05', 
        title: 'Maintaining Diversity: Mutation', 
        content: 'Random number functions dictate that a small percentage of offspring undergo mutation. Mutants have parts of their genetic code randomly altered. This introduces a random factor to maintain diversity and avoid getting stuck on similar routes.' 
      },
      { 
        id: 'A4.3.7-06', 
        title: 'The Evolutionary Loop', 
        content: 'Once offspring are generated, they become the current generation. The process loops: calculate fitness → select parents → reproduce via crossover → apply mutation. This repeats until a specific base case condition is satisfied.' 
      },
      { 
        id: 'A4.3.7-07', 
        title: 'Use Cases: Planning & Scheduling', 
        content: 'Route Planning: Solving the Traveling Salesperson Problem (e.g., visiting 50 cities) to find a "good enough" solution. Timetabling: Allocating students to preferred classes while managing constraints on teachers, rooms, and class availability.' 
      },
      { 
        id: 'A4.3.7-08', 
        title: 'Use Cases: Engineering & Finance', 
        content: 'Civil/Mechanical Engineering: Optimizing bridge/vehicle designs based on durability and cost. Robotics: Optimizing controller stability. Finance: Balancing risk vs reward in portfolios. ML: Selecting relevant features from a dataset to improve accuracy.' 
      },

      // --- SECTION 3: A4.3.8 ARTIFICIAL NEURAL NETWORKS (14 Slides) ---
      { 
        id: 'A4.3.8-01', 
        title: 'ANN Overview', 
        content: 'Artificial Neural Networks (ANN) are algorithms that learn to make decisions by finding patterns in data, using an approach modeled on the biological brain. They are made up of a system of nodes (perceptrons) transmitting data.' 
      },
      { 
        id: 'A4.3.8-02', 
        title: 'Network Architecture: Input Layer', 
        content: 'The Input Layer receives the initial values the network is being asked to process. Each feature of the model requires its own input perceptron. Importantly, these inputs must be purely numeric (e.g., a float or an integer).' 
      },
      { 
        id: 'A4.3.8-03', 
        title: 'Network Architecture: Hidden Layers', 
        content: 'ANNs usually have 1 or more hidden layers. Perceptrons here identify patterns and make generalizations useful to the next layer. They receive previous values, perform calculations, and pass the results forward.' 
      },
      { 
        id: 'A4.3.8-04', 
        title: 'Network Architecture: Output Layer', 
        content: 'The Output Layer is where the ANN produces its final "answer," which acts as the ultimate value or prediction generated by the network.' 
      },
      { 
        id: 'A4.3.8-05', 
        title: 'Perceptron Mechanics: Input & Weight', 
        content: 'Input: The perceptron receives a value from every node in the previous layer. Weight: Each input has a weight determining its importance (usually initialized as a random number between -1 and 1, changing as the model trains).' 
      },
      { 
        id: 'A4.3.8-06', 
        title: 'Perceptron Mechanics: Summation & Bias', 
        content: 'Summation: The product of each input value and its respective weight are summed together. Bias: Added to the summation before activation to shift the decision boundary along the curve (initialized between -1.0 and 1.0).' 
      },
      { 
        id: 'A4.3.8-07', 
        title: 'Perceptron Mechanics: Activation & Output', 
        content: 'Activation: Determines if the neuron should be "active" (an inactive neuron outputs 0). This introduces non-linearity, forcing neurons to make a decision. Output: The resulting value is sent onward to the next layer.' 
      },
      { 
        id: 'A4.3.8-08', 
        title: 'Activation Functions: ReLU', 
        content: 'ReLU (Rectified Linear Unit) is often the default choice. Function: f(x) = max(0,x). It zeroes out negative values while treating positives normally, making it highly computationally efficient and useful for Boolean classification.' 
      },
      { 
        id: 'A4.3.8-09', 
        title: 'The Vanishing Gradient Problem', 
        content: 'ANNs rely on backpropagation multiplying derivatives. If a derivative is < 1 (like Sigmoid\'s max 0.25), multiplying these over hidden layers causes gradients to drop exponentially to zero, preventing early layers from updating.' 
      },
      { 
        id: 'A4.3.8-10', 
        title: 'Activation Functions: Sigmoid', 
        content: 'Sigmoid [f(x) = 1/(1+e^-x)] maps to a distribution between 0 and 1. It is common in output layers for binary classification (medical diagnoses, spam). It is rarely used in hidden layers due to the vanishing gradient and only handles inputs of -4 to 4 well.' 
      },
      { 
        id: 'A4.3.8-11', 
        title: 'Activation Functions: Softmax & Tanh', 
        content: 'Softmax produces a probability distribution summing to 1 across N outcomes, ideal for multiclass classification. Tanh maps between -1.0 and 1.0. While it has a vanishing gradient, it is centered around 0, making learning easier for hidden layers than Sigmoid.' 
      },
      { 
        id: 'A4.3.8-12', 
        title: 'Generating a Prediction (Feed Forward)', 
        content: 'Using an ANN to generate a result requires performing calculations on all perceptrons in one layer, then feeding those results forward to the next layer. This continues until the output layer is reached.' 
      },
      { 
        id: 'A4.3.8-13', 
        title: 'Training: Backpropagation & Loss', 
        content: 'Backpropagation calculates output errors against target values using a Loss Function (Mean Squared Error for regression, Cross Entropy for classification). Gradient Descent calculates how far weights/biases contributed to the error to adjust them.' 
      },
      { 
        id: 'A4.3.8-14', 
        title: 'Training: Learning Rate, Epochs & Use Cases', 
        content: 'Adjustments are multiplied by a Learning Rate hyperparameter to prevent overcorrection. The process works backwards from output to input. One complete pass is an Epoch. Examples: Logic gates, California housing dataset (Regression), MNIST dataset (Classification).' 
      },

      // --- SECTION 4: A4.3.9 CONVOLUTIONAL NEURAL NETWORKS (7 Slides) ---
      { 
        id: 'A4.3.9-01', 
        title: 'CNN Overview', 
        content: 'Convolutional Neural Networks (CNNs) build on ANN architecture by using additional layers of calculations prior to processing the data through a fully connected ANN. They are best suited for image data, video analysis, NLP, and audio processing.' 
      },
      { 
        id: 'A4.3.9-02', 
        title: 'What is Convolution?', 
        content: 'Convolution is a mathematical operation that combines two functions to produce a third. In image processing, it applies filtering functions to the pixels in an input image to compute and extract distinctive features from the raw data.' 
      },
      { 
        id: 'A4.3.9-03', 
        title: 'CNN Input Layer', 
        content: 'The input layer comprises the raw pixel data. The number of input nodes is based on: image width × image height × color depth. Because image data can be massively large, convolution and pooling are used to reduce size and focus the network on noteworthy details.' 
      },
      { 
        id: 'A4.3.9-04', 
        title: 'Convolution Layer (Feature Extraction)', 
        content: 'These layers serve as feature extractors. As the network trains, it develops filters (kernels) that learn to detect important patterns. These range from simple edge detection and textures to complex shapes, sharpening filters, and blur filters.' 
      },
      { 
        id: 'A4.3.9-05', 
        title: 'Activation & Non-Linearity in CNNs', 
        content: 'Convolutional operations (dot products between kernels and pixels) are linear transformations. Stacking them still results in a linear function. Therefore, the data must run through an activation function to introduce non-linearity, enabling complex classification.' 
      },
      { 
        id: 'A4.3.9-06', 
        title: 'Pooling Layer (Down-Sampling)', 
        content: 'After activation, data passes through Pooling Layers which down-sample and reduce data dimensions. This reduces computational workload and helps negate minor irrelevant changes in pixels (image noise), heavily mitigating the risk of overfitting.' 
      },
      { 
        id: 'A4.3.9-07', 
        title: 'Fully Connected Layer & Datasets', 
        content: 'Finally, the processed data is fed into a fully connected ANN. This ANN takes the high-level features extracted by the convolution and pooling layers and performs the final classification or regression task. Example Dataset: CIFAR-10.' 
      },

      // --- SECTION 5: A4.3.10 MODEL SELECTION (6 Slides) ---
      { 
        id: 'A4.3.10-01', 
        title: 'Model Selection: Task & Output Type', 
        content: 'Before selecting a model, ask what your output needs to be. Regression: Predicting a continuous output (e.g., house price). Classification: Categorizing data into predefined discrete classes (e.g., spam vs not spam).' 
      },
      { 
        id: 'A4.3.10-02', 
        title: 'Linear vs Non-Linear Relationships', 
        content: 'Does the data have a linear relationship? Linear regression is quick and simple, but fails on complex non-linear data (e.g., comparing goals scored vs player position). Non-linear data usually requires more complex models like an ANN.' 
      },
      { 
        id: 'A4.3.10-03', 
        title: 'Data Volume & Dimensionality', 
        content: 'Deep learning ANNs require enormous volumes of training data; without it, you risk severe overfitting. If you have a small dataset (low volume), models like Decision Trees or K-Nearest Neighbors (KNN) are better suited. Dimensionality refers to how many features must be processed.' 
      },
      { 
        id: 'A4.3.10-04', 
        title: 'Feature Independence & Accuracy', 
        content: 'Do your features interact with each other? If variables are highly interdependent, Neural Networks or Decision Trees are superior. Regarding accuracy: more complex models paired with massive training data generally yield the best results.' 
      },
      { 
        id: 'A4.3.10-05', 
        title: 'Training Time & Computational Resources', 
        content: 'Deep ANNs require massive GPU power and vast amounts of time to train. If you are limited to consumer-grade hardware or require fast training, Linear Regression or shallow Decision Trees are far more appropriate.' 
      },
      { 
        id: 'A4.3.10-06', 
        title: 'Transparency vs The Black Box', 
        content: 'ANNs operate as a "black box"—it is extremely difficult to explain exactly how they reached a decision. In fields requiring transparency and accountability (military, medical diagnostics, finance), clear algorithms like Decision Trees or Linear Regression are preferred.' 
      }
    ],
    next() {
      if (this.active < this.slides.length - 1) this.active++;
    },
    prev() {
      if (this.active > 0) this.active--;
    }
  }));

  // QUIZ DATA & LOGIC (46 Questions)
  Alpine.data('quizModule', () => ({
    quizzes: [
      // RL QUESTIONS
      { id: '01', question: 'What is the ML model that makes decisions in Reinforcement Learning called?', options: ['Environment', 'Agent', 'Perceptron', 'Fitness Function'], answer: 1, selected: null },
      { id: '02', question: 'What represents a snapshot in time of the world data in RL?', options: ['Action', 'Policy', 'State', 'Reward'], answer: 2, selected: null },
      { id: '03', question: 'What is the immediate response sent by the environment after an agent acts?', options: ['Reward (positive or negative)', 'Policy shift', 'Crossover step', 'Mutation score'], answer: 0, selected: null },
      { id: '04', question: 'What are the strategies used by an agent to map states to actions?', options: ['Biases', 'Policies', 'Generations', 'Weights'], answer: 1, selected: null },
      { id: '05', question: 'What happens when an agent performs "exploration"?', options: ['It strictly follows its plan', 'It ignores its learned policy to try something new', 'It zeros its neural network', 'It terminates the loop'], answer: 1, selected: null },
      { id: '06', question: 'How does an agent select its actions at the very start of RL training?', options: ['Using a fully trained Q-table', 'Using 100% exploitation', 'Using a randomized policy', 'Using a mutation function'], answer: 2, selected: null },
      { id: '07', question: 'What data structure is traditionally used in Q-learning to store state-action values?', options: ['1D Array', '2D Array / Matrix', 'Linked List', 'Binary Search Tree'], answer: 1, selected: null },
      { id: '08', question: 'Why are Deep Q-Networks (DQN) used instead of standard Q-tables?', options: ['Full state-action Q-tables become too large to physically store', 'Q-tables cannot process positive rewards', 'Neural Networks eliminate exploration', 'Q-learning cannot handle integers'], answer: 0, selected: null },
      
      // GA QUESTIONS
      { id: '09', question: 'Genetic Algorithms learn through optimization based on what principles?', options: ['Gradient Descent', 'Natural Selection', 'Backpropagation', 'Supervised Labeling'], answer: 1, selected: null },
      { id: '10', question: 'What component evaluates how good a candidate solution is in a Genetic Algorithm?', options: ['Fitness Function', 'Activation Function', 'Summation Node', 'Exploitation Step'], answer: 0, selected: null },
      { id: '11', question: 'Why is weighted randomization used during the parent selection phase?', options: ['To ensure only the worst solutions reproduce', 'To prevent getting trapped in a local maximum', 'To bypass crossover', 'To force all offspring to mutate'], answer: 1, selected: null },
      { id: '12', question: 'Which process combines genetic code from two parent solutions to create a child?', options: ['Mutation', 'Crossover', 'Activation', 'Summation'], answer: 1, selected: null },
      { id: '13', question: 'What is the main function of random mutation in offspring?', options: ['To evaluate the state snapshot', 'To maintain genetic diversity and avoid similar sub-optimal routes', 'To convert floating numbers', 'To reset the policy'], answer: 1, selected: null },
      { id: '14', question: 'Which problem is a classic route-planning use case for Genetic Algorithms?', options: ['Traveling Salesperson Problem', 'Sorting an Array', 'Binary Search', 'Linear Regression'], answer: 0, selected: null },
      { id: '15', question: 'Which GA use case focuses on allocating students to preferred classes while managing constraints on rooms and teachers?', options: ['Robotics control optimization', 'Timetabling', 'Financial portfolio selection', 'Feature extraction'], answer: 1, selected: null },
      
      // ANN BASICS QUESTIONS
      { id: '16', question: 'What are the individual processing nodes in an Artificial Neural Network called?', options: ['Agents', 'Perceptrons', 'Policies', 'Offspring'], answer: 1, selected: null },
      { id: '17', question: 'What data types are required as inputs for an ANN input layer perceptron?', options: ['Strings or Boolean flags', 'Numeric values (floats or integers)', 'Raw image files', 'Arrays of functions'], answer: 1, selected: null },
      { id: '18', question: 'What range are initial weights and biases typically set to before training?', options: ['Between 0 and 100', 'Between -1.0 and 1.0', 'Exactly 0', 'Between -100 and 0'], answer: 1, selected: null },
      { id: '19', question: 'What calculation is performed during the summation step in a perceptron?', options: ['Product of each input value and its weight summed together', 'Division of total inputs by total layers', 'Random selection of inputs', 'Subtraction of bias'], answer: 0, selected: null },
      { id: '20', question: 'What is the purpose of adding a bias to the summation value?', options: ['To convert the output to text', 'To shift the decision boundary along the curve of the activation function', 'To delete inactive neurons', 'To replace the fitness function'], answer: 1, selected: null },
      { id: '21', question: 'Why is an Activation Function used in a perceptron?', options: ['To introduce non-linearity and determine if the neuron should fire', 'To generate random solutions', 'To store 2D Q-tables on disk', 'To connect agent to environment'], answer: 0, selected: null },
      
      // ANN ACTIVATION & TRAINING QUESTIONS
      { id: '22', question: 'Which activation function is often the default choice because it zeroes negative values and avoids the vanishing gradient?', options: ['Sigmoid', 'Softmax', 'ReLU (Rectified Linear Unit)', 'Tanh'], answer: 2, selected: null },
      { id: '23', question: 'What is the mathematical function for the ReLU activation function?', options: ['f(x) = 1/(1+e^-x)', 'f(x) = max(0, x)', 'f(x) = x^2', 'f(x) = (e^x - e^-x) / (e^x + e^-x)'], answer: 1, selected: null },
      { id: '24', question: 'What is the Vanishing Gradient problem?', options: ['When negative rewards delete the agent policy', 'When small derivatives multiply over hidden layers causing gradients to drop exponentially to zero', 'When a GA runs out of mutations', 'When image pixels vanish'], answer: 1, selected: null },
      { id: '25', question: 'What is the typical input range that Sigmoid can effectively handle before the gradient tends to 0?', options: ['-1.0 to 1.0', '-100 to 100', '-4 to 4', '0 to infinity'], answer: 2, selected: null },
      { id: '26', question: 'Which activation function is used in the output layer for Multiclass Classification because it produces a probability distribution summing to 1?', options: ['Sigmoid', 'ReLU', 'Tanh', 'Softmax'], answer: 3, selected: null },
      { id: '27', question: 'Why is Tanh considered better than Sigmoid for hidden layers, despite both having a vanishing gradient?', options: ['It is immune to mathematics', 'It maps to a distribution of exactly 0 to 1', 'It is centered around 0 (-1.0 to 1.0), making learning easier for the next layer', 'It deletes inactive neurons completely'], answer: 2, selected: null },
      { id: '28', question: 'What loss function is commonly used to calculate error for Regression tasks?', options: ['Mean Squared Error', 'Cross Entropy Loss', 'Fitness Evaluation', 'Q-Table Summation'], answer: 0, selected: null },
      { id: '29', question: 'Which term refers to adjusting parameters in the opposite direction of the gradient to reduce error?', options: ['Crossover', 'Gradient Descent', 'Exploration', 'Linear interpolation'], answer: 1, selected: null },
      { id: '30', question: 'What is the purpose of the Learning Rate hyperparameter?', options: ['To increase the speed of the CPU processor', 'To map boolean logic gates', 'To prevent overcorrecting and designing the network around a single piece of training data', 'To enforce a vanishing gradient'], answer: 2, selected: null },
      { id: '31', question: 'What is one complete loop of the backpropagation training process through the entire network called?', options: ['An Environment', 'An Epoch', 'An Exploitation', 'A Generation'], answer: 1, selected: null },
      { id: '32', question: 'Which dataset is a classic example of using ANNs for classification tasks?', options: ['California Housing Dataset', 'Traveling Salesperson Dataset', 'MNIST Number Recognition Dataset', 'Logic Gates Array'], answer: 2, selected: null },

      // NEW CNN QUESTIONS
      { id: '33', question: 'What additional architecture distinguishes a CNN from a standard ANN?', options: ['It removes hidden layers entirely', 'It uses additional layers of calculations prior to processing data through a fully connected ANN', 'It replaces perceptrons with genetic strings', 'It uses Q-Tables instead of weights'], answer: 1, selected: null },
      { id: '34', question: 'Which data domains are CNNs best suited for?', options: ['Spreadsheets and tabular financial data', 'Binary sorting and searching', 'Image data, video analysis, NLP, and audio processing', 'Logic gate mapping'], answer: 2, selected: null },
      { id: '35', question: 'In image processing, what does the convolution operation apply to pixels?', options: ['Randomized weights for exploration', 'A crossover function with other images', 'Filtering functions (kernels) to compute distinctive features', 'A fitness function evaluation'], answer: 2, selected: null },
      { id: '36', question: 'How is the number of input nodes calculated for a CNN processing an image?', options: ['Image width + image height', 'Image width × image height × color depth', 'Number of pixels divided by layers', 'A fixed 256 nodes always'], answer: 1, selected: null },
      { id: '37', question: 'What is the main purpose of the convolution layer?', options: ['To act as feature extractors looking for patterns like edges and textures', 'To sum all weights to zero', 'To down-sample the image dimensions', 'To perform the final classification output'], answer: 0, selected: null },
      { id: '38', question: 'Why is an activation function necessary immediately after the convolution layer?', options: ['To convert floating numbers to text', 'Because convolution is a linear transformation, and non-linearity is needed to separate complex data', 'To reset the image color depth', 'To act as a secondary loss function'], answer: 1, selected: null },
      { id: '39', question: 'What is the primary purpose of a Pooling Layer?', options: ['To up-sample the image', 'To increase the number of mathematical parameters', 'To down-sample the data, reducing dimensions and computational workload', 'To convert the network into a Q-table'], answer: 2, selected: null },
      { id: '40', question: 'How does a pooling layer help mitigate the risk of overfitting?', options: ['By deleting the network weights', 'By introducing random genetic mutations', 'By negating minor changes in individual pixels (image noise)', 'By increasing the learning rate hyperparameter'], answer: 2, selected: null },
      { id: '41', question: 'Which dataset is a classic example used for training Convolutional Neural Networks?', options: ['CIFAR-10', 'California Housing', 'Traveling Salesperson', 'Q-learning matrix'], answer: 0, selected: null },

      // NEW MODEL SELECTION QUESTIONS
      { id: '42', question: 'If your goal is to predict a continuous numerical output, what type of model task is this?', options: ['Classification', 'Regression', 'Clustering', 'Crossover'], answer: 1, selected: null },
      { id: '43', question: 'If you are categorizing data into predefined classes (like spam vs not spam), what type of model task is this?', options: ['Regression', 'Summation', 'Classification', 'Backpropagation'], answer: 2, selected: null },
      { id: '44', question: 'Why should you avoid using Deep Learning ANNs if you have a very small volume of data?', options: ['They train too quickly on small data', 'They require large amounts of data to be accurate, otherwise they risk severe overfitting', 'They cannot process integers', 'They will convert the data into images'], answer: 1, selected: null },
      { id: '45', question: 'What type of model should you favor if your data has low volume to prevent overfitting?', options: ['Deep Q-Networks', 'Deep Convolutional Networks', 'Decision Trees or K-Nearest Neighbors', 'Multi-layer Perceptrons'], answer: 2, selected: null },
      { id: '46', question: 'Why might an Artificial Neural Network be rejected for use in a medical or military setting?', options: ['They require genetic crossover', 'They lack transparency due to their "black box" nature, making it hard to explain their decisions', 'They can only perform linear regression', 'They require boolean logic gates only'], answer: 1, selected: null }
    ],
    selectOption(quizIndex, optionIndex) {
      if (this.quizzes[quizIndex].selected === null) {
        this.quizzes[quizIndex].selected = optionIndex;
      }
    }
  }));
});