let scores = [45, 78, 23, 89, 56, 91, 34];

scores.sort(function(a,b) {return a - b});
console.log(scores);
scores.sort(function(a, b){return b - a;})
console.log(scores);