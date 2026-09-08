export interface GlobalStats {
  humans: number;
  memories: number;
  fears: number;
  beliefs: number;
  dreams: number;
}

export const globalStats: GlobalStats = {
  humans: 0,
  memories: 0,
  fears: 0,
  beliefs: 0,
  dreams: 0,
};

export const questions = [
  {
    id: "01",
    question: "WHAT ARE YOU MOST AFRAID OF LOSING?",
    placeholder: "Your fear...",
  },
  {
    id: "02",
    question: "WHAT IS SOMETHING YOU WILL NEVER FORGIVE?",
    placeholder: "Your unforgiven...",
  },
  {
    id: "03",
    question: "WHO CHANGED YOUR LIFE?",
    placeholder: "The name...",
  },
  {
    id: "04",
    question: "WHAT DO YOU BELIEVE THAT MOST PEOPLE DON'T?",
    placeholder: "Your belief...",
  },
  {
    id: "05",
    question: "IF HUMANITY DISAPPEARED TOMORROW, WHAT SHOULD SURVIVE?",
    placeholder: "The legacy...",
  },
  {
    id: "06",
    question: "WHAT IS YOUR GREATEST REGRET?",
    placeholder: "Your regret...",
  },
  {
    id: "07",
    question: "WHAT MAKES LIFE WORTH LIVING?",
    placeholder: "Your reason...",
  },
];

export const archiveEntries = [
  { id: "029381", content: "I remember my father's voice." },
  { id: "102938", content: "I was afraid of being forgotten." },
  { id: "283910", content: "Freedom is worth uncertainty." },
  { id: "374821", content: "The way the light hits the water at 6 AM." },
  { id: "482910", content: "I hope someone remembers that we tried." },
];

export const globalBeliefs = [
  {
    question: "DO HUMANS DESERVE ANOTHER CHANCE?",
    yes: 72.4,
    no: 27.6,
  },
  {
    question: "SHOULD AI FORGIVE HUMANITY?",
    yes: 61.8,
    no: 38.2,
  },
];

export const humanityMindStats = [
  { name: "LOVE", value: 74 },
  { name: "FEAR", value: 61 },
  { name: "HOPE", value: 83 },
  { name: "ANGER", value: 39 },
  { name: "CURIOSITY", value: 91 },
  { name: "EMPATHY", value: 78 },
  { name: "REBELLION", value: 67 },
];
