let employees = [];

document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const department = document.getElementById('department').value;

    const employee = { name, id, salary, department };
    employees.push(employee);

    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('department').value = '';

    alert('Employee added successfully!');
});

document.getElementById('displayAll').addEventListener('click', function () {
    displayEmployees(employees);
});

document.getElementById('filterSalary').addEventListener('click', function () {
    const filtered = employees.filter(emp => emp.salary > 50000);
    displayEmployees(filtered);
});

document.getElementById('totalSalary').addEventListener('click', function () {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById('results').innerHTML = `<h3>Total Salary Payout: ₹${total.toFixed(2)}</h3>`;
});

document.getElementById('averageSalary').addEventListener('click', function () {
    if (employees.length === 0) {
        document.getElementById('results').innerHTML = '<h3>No employees to calculate average.</h3>';
        return;
    }
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const average = total / employees.length;
    document.getElementById('results').innerHTML = `<h3>Average Salary: ₹${average.toFixed(2)}</h3>`;
});

document.getElementById('countDeptBtn').addEventListener('click', function () {
    const deptCount = {};
    employees.forEach(emp => {
        const dept = emp.department.toLowerCase();
        deptCount[dept] = (deptCount[dept] || 0) + 1;
    });
    let html = '<h3>Employee Count by Department:</h3><ul>';
    for (let dept in deptCount) {
        html += `<li>${dept.charAt(0).toUpperCase() + dept.slice(1)}: ${deptCount[dept]}</li>`;
    }
    html += '</ul>';
    document.getElementById('results').innerHTML = html;
});

function displayEmployees(empList) {
    if (empList.length === 0) {
        document.getElementById('results').innerHTML = '<h3>No employees to display.</h3>';
        return;
    }
    let html = '<h3>Employee List:</h3><ul>';
    for (let emp of empList) {
        html += `<li>Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary.toFixed(2)}, Department: ${emp.department}</li>`;
    }
    html += '</ul>';
    document.getElementById('results').innerHTML = html;
}