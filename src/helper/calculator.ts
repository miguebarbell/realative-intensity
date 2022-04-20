// Contains all the function to calculate the intensity
// for sets with repetitions less than 5, use eplay.
// TODO add more formulas
function epleyFormula(strain: number, reps: number): number {
    if (reps === 0) return 0;
    else if (reps === 1) return strain;
    return Math.round(strain * (1 + (reps/30)));
}
function brzyckiFormula(strain: number, reps: number): number {
    return Math.round(strain * (36/(37 - reps)));
}

export default function calculateRelativeIntensity(strain: number, reps: number): number {
    if (reps === 0) return 0;
    else if (reps === 1) return strain;
    else if (reps >= 5) return brzyckiFormula(strain, reps)
    return epleyFormula(strain, reps)
}

export {epleyFormula, brzyckiFormula}
