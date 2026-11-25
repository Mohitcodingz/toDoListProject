
export function taskStats(task = []) {
    const total = task.length;
    const completed = task.filter((e) => {
        const status = e.status?.toLowerCase();
        return (status === "completed" ||
            status === "done")
    }).length
    const inProgress = task.filter((item) => {
        const status = item.status?.toLowerCase();
        return (
            status === "in-progress" ||
            status === "in_progress" ||
            status === "inprogress" ||
            status === "progress"
        );
    }).length;
    const overDue = task.filter((item) => {
        const status = task.status?.toLowerCase();
        const finished = status === "completed" ||
            status === "done";
        const overDue = status === "overDue" || status === "due" || status === "pending";
        const isPastDue = item.dueDate && new Date(`${item.dueDate}T23:59:59`) < new Date();
        return !finished && (overDue || isPastDue);
    }).length;
    const todo = Math.max(0, total - completed - inProgress);
    return {
        total,
        completed,
        inProgress,
        overDue,
        todo,
    };
}