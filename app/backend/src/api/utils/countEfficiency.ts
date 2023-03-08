export default (totalPoints: number, totalGames: number): string => {
  const a = totalGames * 3;
  const b = totalPoints / a;
  const totalEfficiency = b * 100;

  return totalEfficiency.toFixed(2);
};
