import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowDownUp, Filter, Shuffle, GitCompare } from 'lucide-react';

const algorithms = [
  {
    id: 1,
    name: 'Binary Search',
    description: 'A searching algorithm that finds the position of a target value within a sorted array.',
    videoUrl: 'https://www.youtube.com/watch?v=P3YID7liBug',
    icon: Search,
    code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`
  },
  {
    id: 2,
    name: 'Quick Sort',
    description: 'An efficient, in-place sorting algorithm that uses divide and conquer strategy.',
    videoUrl: 'https://www.youtube.com/watch?v=Hoixgm4-P4M',
    icon: ArrowDownUp,
    code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`
  },
  {
    id: 3,
    name: 'Linear Search',
    description: 'A simple search algorithm that checks each element in sequence.',
    videoUrl: 'https://www.youtube.com/watch?v=CX2CYIJLwfg',
    icon: Filter,
    code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
  },
  {
    id: 4,
    name: 'Bubble Sort',
    description: 'A simple sorting algorithm that repeatedly steps through the list.',
    videoUrl: 'https://www.youtube.com/watch?v=xli_FI7CuzA',
    icon: Shuffle,
    code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
  },
  {
    id: 5,
    name: 'Merge Sort',
    description: 'An efficient sorting algorithm that uses divide and conquer strategy.',
    videoUrl: 'https://www.youtube.com/watch?v=4VqmGXwpLqc',
    icon: GitCompare,
    code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`
  }
];

const Learn = () => {
  const [selectedAlgo, setSelectedAlgo] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Learn Algorithms</h1>
      
      {!selectedAlgo ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {algorithms.map((algo) => (
            <motion.div
              key={algo.id}
              whileHover={{ scale: 1.02 }}
              className="card cursor-pointer"
              onClick={() => setSelectedAlgo(algo)}
            >
              <div className="flex items-center mb-4">
                <algo.icon className="w-8 h-8 text-[var(--primary-100)]" />
                <h3 className="text-xl font-bold ml-2">{algo.name}</h3>
              </div>
              <p className="text-[var(--text-200)]">{algo.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <button
            onClick={() => setSelectedAlgo(null)}
            className="text-[var(--primary-100)] hover:text-[var(--primary-200)]"
          >
            ← Back to algorithms
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">{selectedAlgo.name}</h2>
              <pre className="bg-[var(--bg-200)] p-4 rounded-lg overflow-x-auto">
                <code>{selectedAlgo.code}</code>
              </pre>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Video Tutorial</h3>
              <a
                href={selectedAlgo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;