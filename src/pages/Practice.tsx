import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowDownUp, Filter, Shuffle, GitCompare } from 'lucide-react';

const exercises = [
  {
    id: 1,
    name: 'Binary Search Implementation',
    description: 'Implement binary search algorithm',
    icon: Search,
    template: `function binarySearch(arr, target) {
  // Your code here
  let left = /*FILL*/;
  let right = /*FILL*/;
  
  while (/*FILL*/) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (/*FILL*/) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`,
    solution: {
      'FILL1': '0',
      'FILL2': 'arr.length - 1',
      'FILL3': 'left <= right',
      'FILL4': 'arr[mid] < target'
    },
    hints: [
      'The left pointer should start at the beginning of the array',
      'The right pointer should start at the end of the array',
      'The while loop should continue as long as the pointers haven\'t crossed',
      'Compare the middle element with the target to decide which half to search'
    ]
  },
  {
    id: 2,
    name: 'Quick Sort Implementation',
    description: 'Implement the partition function for Quick Sort',
    icon: ArrowDownUp,
    template: `function partition(arr, low, high) {
  const pivot = /*FILL*/;
  let i = /*FILL*/;
  
  for (let j = low; j < high; j++) {
    if (/*FILL*/) {
      i++;
      /*FILL*/
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
    solution: {
      'FILL1': 'arr[high]',
      'FILL2': 'low - 1',
      'FILL3': 'arr[j] <= pivot',
      'FILL4': '[arr[i], arr[j]] = [arr[j], arr[i]]'
    },
    hints: [
      'The pivot is typically chosen as the last element',
      'Initialize i as one position before the starting index',
      'Compare each element with the pivot',
      'Swap elements when necessary to maintain the partition'
    ]
  },
  {
    id: 3,
    name: 'Linear Search Implementation',
    description: 'Implement linear search algorithm',
    icon: Filter,
    template: `function linearSearch(arr, target) {
  /*FILL*/
  for (/*FILL*/; i < arr.length; /*FILL*/) {
    if (/*FILL*/) return i;
  }
  return -1;
}`,
    solution: {
      'FILL1': 'let i = 0',
      'FILL2': 'i',
      'FILL3': 'i++',
      'FILL4': 'arr[i] === target'
    },
    hints: [
      'Initialize a counter variable',
      'Loop through each element in the array',
      'Increment the counter in each iteration',
      'Check if the current element matches the target'
    ]
  },
  {
    id: 4,
    name: 'Bubble Sort Implementation',
    description: 'Implement bubble sort algorithm',
    icon: Shuffle,
    template: `function bubbleSort(arr) {
  const n = /*FILL*/;
  for (let i = 0; i < /*FILL*/; i++) {
    for (let j = 0; j < /*FILL*/; j++) {
      if (/*FILL*/) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    solution: {
      'FILL1': 'arr.length',
      'FILL2': 'n - 1',
      'FILL3': 'n - i - 1',
      'FILL4': 'arr[j] > arr[j + 1]'
    },
    hints: [
      'Get the length of the array',
      'Outer loop runs n-1 times',
      'Inner loop runs fewer times in each iteration',
      'Compare adjacent elements and swap if needed'
    ]
  },
  {
    id: 5,
    name: 'Merge Sort Implementation',
    description: 'Implement the merge function for Merge Sort',
    icon: GitCompare,
    template: `function merge(left, right) {
  const result = /*FILL*/;
  let i = /*FILL*/, j = /*FILL*/;
  
  while (/*FILL*/) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
    solution: {
      'FILL1': '[]',
      'FILL2': '0',
      'FILL3': '0',
      'FILL4': 'i < left.length && j < right.length'
    },
    hints: [
      'Initialize an empty array for the result',
      'Start with the first element of the left array',
      'Start with the first element of the right array',
      'Continue while both arrays have elements to compare'
    ]
  }
];

const Practice = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkSolution = () => {
    // Check if all fill-in-the-blanks match the solution
    const fillRegex = /\/\*FILL\*\//g;
    const userFills = userCode.match(fillRegex);
    const solution = selectedExercise.solution;
    
    let correct = true;
    Object.values(solution).forEach((value, index) => {
      if (!userCode.includes(value)) {
        correct = false;
      }
    });

    setIsCorrect(correct);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Practice Algorithms</h1>

      {!selectedExercise ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <motion.div
              key={exercise.id}
              whileHover={{ scale: 1.02 }}
              className="card cursor-pointer"
              onClick={() => {
                setSelectedExercise(exercise);
                setUserCode(exercise.template);
                setIsCorrect(false);
                setShowHint(false);
              }}
            >
              <div className="flex items-center mb-4">
                <exercise.icon className="w-8 h-8 text-[var(--primary-100)]" />
                <h3 className="text-xl font-bold ml-2">{exercise.name}</h3>
              </div>
              <p className="text-[var(--text-200)]">{exercise.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <button
            onClick={() => setSelectedExercise(null)}
            className="text-[var(--primary-100)] hover:text-[var(--primary-200)]"
          >
            ← Back to exercises
          </button>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">{selectedExercise.name}</h2>
            <p className="mb-4">{selectedExercise.description}</p>
            
            <textarea
              value={userCode}
              onChange={(e) => {
                setUserCode(e.target.value);
                setIsCorrect(false);
              }}
              className="w-full h-64 font-mono p-4 bg-[var(--bg-200)] rounded-lg mb-4"
            />

            <div className="flex space-x-4">
              <button
                onClick={checkSolution}
                className="btn-primary"
              >
                Check Solution
              </button>
              <button
                onClick={() => setShowHint(true)}
                className="text-[var(--text-200)] hover:text-[var(--primary-100)]"
              >
                Show Hint
              </button>
            </div>

            {showHint && (
              <div className="mt-4 p-4 bg-[var(--accent-200)] rounded-lg">
                <p className="text-[var(--text-100)]">{selectedExercise.hints[0]}</p>
              </div>
            )}

            {isCorrect && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                Congratulations! Your solution is correct! 🎉
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Practice;