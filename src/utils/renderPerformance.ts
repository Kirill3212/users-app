export function renderPerformance(
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  console.table([
    `id: ${id}`,
    `phase: ${phase}`,
    `actualDuration: ${actualDuration}`,
    `baseDuration: ${baseDuration}`,
    `startTime: ${startTime}`,
    `commitTime: ${commitTime}`,
  ]);
}
