const ctx = document.getElementById('monthlySales').getContext('2d');
const pieCtx = document.getElementById('deptSales').getContext('2d');
const yearlyLabel = document.getElementById('yearlyTotal');

let monthlySales = Array.of(100,9000,3000,2342);
let monthlyLabels = Array.of('Sep', 'Oct', 'Nov');

let deptSales = Array.of(12,9,4);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let sepNums = Array.of(200,9000,1000);
let octNums = Array.of(2200,3000,2000);
let novNums = Array.of(1500,7000,3000);

let yearlyTotal = 0;

function addYearlyTotal(x) {
    yearlyTotal += x;
}

monthlySales.forEach(addYearlyTotal);

function findOver1000() {
    let firstThousand = monthlySales.findIndex(element => element > 1000);
    alert(firstThousand);
}

function resetNum() {
    monthlySales.fill(0);
    monthlySalesChart.update();
}

yearlyLabel.innerHTML = `$${yearlyTotal}`;

// Bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})