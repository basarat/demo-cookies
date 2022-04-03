export function getExperimentAB() {
  if (typeof window === 'undefined') {
    console.log('SSR');
    return 'A'; // SSR 
  } else {
    console.log('CSR');
    return 'B'; // CSR
  }
}