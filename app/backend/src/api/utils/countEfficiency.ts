export default (totalPoints: number, totalGames: number): number => {
  const a = totalGames * 3;
  const b = totalPoints / a;
  const totalEfficiency = b * 100;

  return Number(totalEfficiency.toFixed(2));
};
