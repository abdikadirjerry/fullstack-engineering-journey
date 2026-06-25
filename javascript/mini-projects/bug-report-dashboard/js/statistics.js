function updateStatistics(bugs) {

    document.getElementById(
        "total-bugs"
    ).textContent =
        bugs.length;

    document.getElementById(
        "open-bugs"
    ).textContent =
        bugs.filter(
            bug =>
                bug.status ===
                "Open"
        ).length;

    document.getElementById(
        "fixed-bugs"
    ).textContent =
        bugs.filter(
            bug =>
                bug.status ===
                "Fixed"
        ).length;
}