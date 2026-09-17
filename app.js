document.addEventListener('alpine:init', () => {
  // SLIDES DATA & LOGIC (21 Slides)
  Alpine.data('slidesModule', () => ({
    active: 0,
    slides: [
      // --- SECTION 1: A4.3.6 REINFORCEMENT LEARNING ---
      { 
        id: 'A4.3.6-01', 
        title: 'RL Overview & Agent', 
        content: 'Reinforcement Learning (RL) focuses on training models to make sequences of decisions. An Agent is the machine learning model that interacts with an environment and makes decisions on what actions to take.' 
      },
      { 
        id: 'A4.3.6-02', 
        title: 'Environment & State', 
        content: 'Environment: The world as perceived by the agent. State: A snapshot in time of the world containing data that communicates the current situation. Accurately defining state data is critical to train models effectively for specific tasks.' 
      },
      { 
        id: 'A4.3.6-03', 
        title: 'Actions & Rewards', 
        content: 'Action: An operation or behavior the agent can perform within the environment. Reward: Immediate feedback returned by the environment in response to an action (can be positive reinforcement or negative punishment).' 
      },
      { 
        id: 'A4.3.6-04', 
        title: 'Policies', 
        content: 'Policies represent the strategic plans or mapping functions that an agent uses to determine which action to take based on its current observed state.' 
      },
      { 
        id: 'A4.3.6-05', 
        title: 'Exploration vs Exploitation', 
        content: 'Exploration: The agent ignores its learned policy to try new actions. Exploitation: The agent follows its plan based on past learning. Training typically begins with high exploration, shifting toward exploitation as learning progresses.' 
      },
      { 
        id: 'A4.3.6-06', 
        title: 'The Reinforcement Learning Loop', 
        content: '1. Agent starts with a randomized policy → 2. Surveys environment & selects action → 3. Performs action → 4. Environment transitions to a new state → 5. Environment provides reward feedback → 6. Policy updates and process repeats.' 
      },
      { 
        id: 'A4.3.6-07', 
        title: 'Q-Learning & Q-Tables', 
        content: 'Q-learning preserves learned values in a 2D array or matrix holding state-action combinations. It stores expected values for each pair to predict rewards. However, these tables grow too large to physically store for complex tasks.' 
      },
      { 
        id: 'A4.3.6-08', 
        title: 'Deep Q-Networks (DQN)', 
        content: 'Because standard Q-tables become impossibly massive, Neural Networks are used to generalize states and predict output actions instead. Using a neural network for Q-learning is called a Deep Q-Network.' 
      },

      // --- SECTION 2: A4.3.7 GENETIC ALGORITHMS ---
      { 
        id: 'A4.3.7-01', 
        title: 'Genetic Algorithms Overview', 
        content: 'Genetic Algorithms are evolutionary optimization algorithms based on natural selection. They start with a population of randomly generated possible candidate solutions (e.g., an array of strings).' 
      },
      { 
        id: 'A4.3.7-02', 
        title: 'Fitness Function', 
        content: 'Every candidate solution within a population is evaluated using a Fitness Function, which calculates and returns a specific score/metric reflecting how good that solution is at solving the target problem.' 
      },
      { 
        id: 'A4.3.7-03', 
        title: 'Selection Functions', 
        content: 'Selection uses weighted randomization to pick pairs for reproduction. While solutions with higher fitness scores are more likely to be chosen, maintaining randomness is critical to prevent getting stuck in local maxima.' 
      },
      { 
        id: 'A4.3.7-04', 
        title: 'Crossover Functions', 
        content: 'Crossover algorithms define reproduction by combining portions of genetic code from two parent solutions to create a new valid child solution ("offspring").' 
      },
      { 
        id: 'A4.3.7-05', 
        title: 'Mutation Functions', 
        content: 'Random number functions assign a small percentage of offspring to undergo mutation. Mutants have parts of their genetic code randomly altered to introduce diversity and avoid converging on local sub-optimal routes.' 
      },
      { 
        id: 'A4.3.7-06', 
        title: 'Evolutionary Process Loop', 
        content: '1. Evaluate population via fitness function → 2. Select weighted pairs → 3. Perform crossover → 4. Apply random mutation → 5. Offspring form the new generation → 6. Loop repeats until a base case condition is met.' 
      },
      { 
        id: 'A4.3.7-07', 
        title: 'Genetic Algorithm Applications', 
        content: 'Common use cases include Route Planning (Traveling Salesperson Problem), Timetabling with resource constraints, Engineering structure design, Control systems/robotics, Financial portfolio optimization, and ML Feature Selection.' 
      },

      // --- SECTION 3: A4.3.8 ARTIFICIAL NEURAL NETWORKS ---
      { 
        id: 'A4.3.8-01', 
        title: 'ANN Overview', 
        content: 'An Artificial Neural Network (ANN) finds patterns in data using interconnected nodes (perceptrons) modeled on the biological brain.' 
      },
      { 
        id: 'A4.3.8-02', 
        title: 'Input, Hidden & Output Layers', 
        content: 'Input Layer: Receives numeric feature data (floats/ints). Hidden Layers: Identify patterns and make generalizations passed to subsequent layers. Output Layer: Returns the final decision or prediction.' 
      },
      { 
        id: 'A4.3.8-03', 
        title: 'Perceptrons: Inputs & Weights', 
        content: 'Each perceptron receives values from all nodes in the preceding layer. Inputs are multiplied by Weights, which determine importance (initialized randomly between -1.0 and 1.0, adjusted during training).' 
      },
      { 
        id: 'A4.3.8-04', 
        title: 'Summation & Bias', 
        content: 'Summation: Calculates the sum of all input × weight products. Bias: A supplemental value (initialized -1.0 to 1.0) added to the sum to shift the decision boundary along the curve of the activation function.' 
      },
      { 
        id: 'A4.3.8-05', 
        title: 'Activation Functions', 
        content: 'Activation functions introduce non-linearity, forcing neurons to make decisions. They determine whether a neuron fires or stays inactive (returning an output value of 0).' 
      },
      { 
        id: 'A4.3.8-06', 
        title: 'Perceptron Output Flow', 
        content: 'The resulting value calculated by the activation function is transmitted forward as the input for neurons in the next layer or sent directly to the external system output.' 
      }
    ],
    next() {
      if (this.active < this.slides.length - 1) this.active++;
    },
    prev() {
      if (this.active > 0) this.active--;
    }
  }));

  // QUIZ DATA & LOGIC (20 Questions)
  Alpine.data('quizModule', () => ({
    quizzes: [
      // REINFORCEMENT LEARNING QUIZZES
      {
        id: '01',
        question: 'What is the ML model that makes decisions in Reinforcement Learning called?',
        options: ['Environment', 'Agent', 'Perceptron', 'Fitness Function'],
        answer: 1,
        selected: null
      },
      {
        id: '02',
        question: 'What represents a snapshot in time of the world data in RL?',
        options: ['Action', 'Policy', 'State', 'Reward'],
        answer: 2,
        selected: null
      },
      {
        id: '03',
        question: 'What is the immediate response sent by the environment after an agent acts?',
        options: ['Reward (positive or negative)', 'Policy shift', 'Crossover step', 'Mutation score'],
        answer: 0,
        selected: null
      },
      {
        id: '04',
        question: 'What are the strategies used by an agent to map states to actions?',
        options: ['Biases', 'Policies', 'Generations', 'Weights'],
        answer: 1,
        selected: null
      },
      {
        id: '05',
        question: 'What happens when an agent performs "exploration"?',
        options: [
          'It follows its learned plan strictly', 
          'It ignores its learned policy to try something new', 
          'It updates its neural network weights to zero', 
          'It terminates the environment loop'
        ],
        answer: 1,
        selected: null
      },
      {
        id: '06',
        question: 'How does an agent select its actions at the very start of RL training?',
        options: ['Using a fully trained Q-table', 'Using 100% exploitation', 'Using a randomized policy', 'Using a mutation function'],
        answer: 2,
        selected: null
      },
      {
        id: '07',
        question: 'What data structure is traditionally used in Q-learning to store state-action values?',
        options: ['1D Array', '2D Array / Matrix', 'Linked List', 'Binary Search Tree'],
        answer: 1,
        selected: null
      },
      {
        id: '08',
        question: 'Why are Deep Q-Networks (DQN) used instead of standard Q-tables?',
        options: [
          'Full state-action Q-tables become too large to physically store', 
          'Q-tables cannot process positive rewards', 
          'Neural Networks eliminate the need for exploration', 
          'Q-learning cannot handle integer states'
        ],
        answer: 0,
        selected: null
      },

      // GENETIC ALGORITHM QUIZZES
      {
        id: '09',
        question: 'Genetic Algorithms learn through optimization based on what principles?',
        options: ['Gradient Descent', 'Natural Selection', 'Backpropagation', 'Supervised Labeling'],
        answer: 1,
        selected: null
      },
      {
        id: '10',
        question: 'What component evaluates how good a candidate solution is in a Genetic Algorithm?',
        options: ['Fitness Function', 'Activation Function', 'Summation Node', 'Exploitation Step'],
        answer: 0,
        selected: null
      },
      {
        id: '11',
        question: 'Why is weighted randomization used during the parent selection phase?',
        options: [
          'To ensure only the worst solutions reproduce', 
          'To prevent getting trapped in a local maximum', 
          'To bypass the need for crossover', 
          'To force all offspring to mutate'
        ],
        answer: 1,
        selected: null
      },
      {
        id: '12',
        question: 'Which process combines genetic code from two parent solutions to create a child?',
        options: ['Mutation', 'Crossover', 'Activation', 'Summation'],
        answer: 1,
        selected: null
      },
      {
        id: '13',
        question: 'What is the main function of random mutation in offspring?',
        options: [
          'To evaluate the state snapshot', 
          'To maintain genetic diversity and avoid similar sub-optimal routes', 
          'To convert floating numbers to integers', 
          'To reset the policy back to zero'
        ],
        answer: 1,
        selected: null
      },
      {
        id: '14',
        question: 'Which problem is a classic route-planning use case for Genetic Algorithms?',
        options: ['Traveling Salesperson Problem', 'Sorting an Array', 'Binary Search', 'Linear Regression'],
        answer: 0,
        selected: null
      },

      // ARTIFICIAL NEURAL NETWORK QUIZZES
      {
        id: '15',
        question: 'What are the individual processing nodes in an Artificial Neural Network called?',
        options: ['Agents', 'Perceptrons', 'Policies', 'Offspring'],
        answer: 1,
        selected: null
      },
      {
        id: '16',
        question: 'What data types are required as inputs for an ANN input layer perceptron?',
        options: ['Strings or Boolean flags', 'Numeric values (floats or integers)', 'Raw image files', 'Arrays of functions'],
        answer: 1,
        selected: null
      },
      {
        id: '17',
        question: 'What range are initial weights and biases typically set to before training?',
        options: ['Between 0 and 100', 'Between -1.0 and 1.0', 'Exactly 0', 'Between -100 and 0'],
        answer: 1,
        selected: null
      },
      {
        id: '18',
        question: 'What calculation is performed during the summation step in a perceptron?',
        options: [
          'Product of each input value and its weight summed together', 
          'Division of total inputs by total layers', 
          'Random selection of inputs', 
          'Subtraction of bias from total weights'
        ],
        answer: 0,
        selected: null
      },
      {
        id: '19',
        question: 'What is the purpose of adding a bias to the summation value?',
        options: [
          'To convert the output to text', 
          'To shift the decision boundary along the curve of the activation function', 
          'To delete inactive neurons', 
          'To replace the fitness function'
        ],
        answer: 1,
        selected: null
      },
      {
        id: '20',
        question: 'Why is an Activation Function used in a perceptron?',
        options: [
          'To introduce non-linearity and determine if the neuron should fire', 
          'To generate random solutions for the population', 
          'To store 2D Q-tables on disk', 
          'To connect the agent to the environment'
        ],
        answer: 0,
        selected: null
      }
    ],
    selectOption(quizIndex, optionIndex) {
      if (this.quizzes[quizIndex].selected === null) {
        this.quizzes[quizIndex].selected = optionIndex;
      }
    }
  }));
});