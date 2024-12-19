export function formatDate(date: Date): { month: string; day: number; year: number; time: string } {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error("Invalid date provided to formatDate");
    }

    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12; // Convert to 12-hour format

    const time = `${hours}:${minutes}${amPm}`;

    return { month, day, year, time };
}
