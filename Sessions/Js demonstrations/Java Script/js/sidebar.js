const sidebarControl = document.getElementById('sidebarControl');
const sidebar = document.getElementById('sidebar');
const dashboard = document.getElementById('dashboard');
const expandMode = document.querySelectorAll('.expand');
const expandedDivs = document.querySelectorAll('.hidden1');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        dashboard.innerHTML = `<span class="material-symbols-outlined cursor" title="Menu">menu</span>`;
    } else {
        dashboard.innerHTML = `<span class="material-symbols-outlined cursor" title="Menu">more_vert</span>`;
    }
});

function toggleExpandMode(target) {
    if (target.classList.contains('expand')) {
        const listItem = target.closest('div');

        if (listItem) {
            const nestedList = listItem.nextElementSibling;

            if (nestedList.classList.contains('hidden1')) {
                nestedList.style.display = (nestedList.style.display === 'none' || !nestedList.style.display) ? 'block' : 'none';
            }
        }
    }

    if (target.classList.contains('expand')) {
        const listItem = target.closest('.info');
        if (listItem) {
            const arrows = listItem.querySelectorAll('.arrow');
            arrows.forEach(arrowItem => {
                arrowItem.classList.toggle('rotate');
            })
        }
    }
}

expandMode.forEach(item => {
    item.addEventListener('click', () => {
        toggleExpandMode(item);
    });
});
