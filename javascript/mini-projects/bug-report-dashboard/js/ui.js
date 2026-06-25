function renderBugs(bugs) {

    const bugList =
        document.getElementById(
            "bug-list"
        );

    bugList.innerHTML = "";

    if (bugs.length === 0) {

        bugList.innerHTML = `
            <tr>
                <td colspan="4">
                    No bugs found
                </td>
            </tr>
        `;

        updateStatistics([]);

        return;
    }

    bugs.forEach(bug => {

        const row =
            document.createElement(
                "tr"
            );

        row.innerHTML = `
            <td>${bug.title}</td>
            <td>${bug.priority}</td>
            <td>${bug.status}</td>
            <td>
                <button
                    class="delete-btn"
                    data-id="${bug.id}"
                >
                    Delete
                </button>
            </td>
        `;

        bugList.appendChild(
            row
        );
    });

    updateStatistics(
        bugs
    );
}