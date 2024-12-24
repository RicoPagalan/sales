// Sidebar Toggle
const navbar = document.getElementById('navbar');
const content = document.getElementById('content');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('collapsed');
  content.classList.toggle('collapsed');
});

// Render Charts
if (document.getElementById('pieChart')) {
  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [12, 19, 10, 5, 15],
          backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c', '#f1c40f'],
        },
      ],
    },
  });
}

if (document.getElementById('barChart')) {
  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Yearly Sales',
          data: [5000, 10000, 15000, 20000, 25000],
          backgroundColor: '#3498db',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
