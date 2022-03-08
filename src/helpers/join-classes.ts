
export function joinClasses(...classes: (string | undefined)[]): string {
    return classes
            .filter(Boolean)
            .filter(x => x !== "undefined")
            .join(" ")
}