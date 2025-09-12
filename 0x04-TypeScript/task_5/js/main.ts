// task_5/js/main.ts

// 1 Branded interfaces
interface MajorCredits {
  credits: number;
  brand: "Major"; // unique brand to prevent mixing
}

interface MinorCredits {
  credits: number;
  brand: "Minor"; // unique brand
}

// 2 Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major",
  };
}

// 3 Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  };
}

// 4 Example usage (optional, for testing)
const math: MajorCredits = { credits: 5, brand: "Major" };
const physics: MajorCredits = { credits: 4, brand: "Major" };

const art: MinorCredits = { credits: 3, brand: "Minor" };
const music: MinorCredits = { credits: 2, brand: "Minor" };

console.log(sumMajorCredits(math, physics)); // { credits: 9, brand: "Major" }
console.log(sumMinorCredits(art, music)); // { credits: 5, brand: "Minor" }
