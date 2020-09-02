const trafficCanvas = document.getElementById('trafficChart');

//Traffic Data
let monthlyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"
    ],
    datasets: [{
        data: [300, 1250, 2500, 2000, 1500, 1750, 2650, 1850, 2250, 1700,
            1500
        ],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

const weeklyTrafficData = {
    labels: ['Sun, 16', 'Mon, 17', 'Tues, 18', 'Wed, 19', 'Thurs, 20', 'Fri, 21', 'Sat, 22'],
    datasets: [{
        label: '# of hits',
        data: [20, 40, 75, 45, 200, 100, 150],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1
    }]
}

const dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [30, 200, 175, 150, 125, 200, 50],
        backgroundColor: 'rgba(115, 119, 191, 1)',
        borderWidth: 1
    }]
};

const hourlyTrafficData = {
    labels: [
        '24:00',
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
    ],
    datasets: [{
        label: '# of hits',
        data: [2, 1, 2, 3, 2, 5, 5, 4, 6, 10, 2, 3, 4, 1, 2, 4, 4, 4, 4, 1, 2, 3, 1, 1],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1
    }]
};



//Daily Data
const dailyCanvas = document.getElementById("dailyTrafficChart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7377bf',
        borderWidth: 1
    }]
};

const dailyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

//Mobile Data
const mobileCanvas = document.getElementById("mobileUsersChart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [1500, 800, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7377bf',
            '#81c98f',
            '#74b1bf'
        ]
    }]
};

const mobileOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'right',
        labels: {
            boxWidth: 10,
            fontStyle: 'bold'
        }
    }
}

//Create Traffic Chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: weeklyTrafficData,
    options: trafficOptions
});

//Creates Daily Chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//Create Mobile Chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//////////////////////////////alert////////////////////////////////////

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
    `<div class="alert-text">
    <h5>Alert</h5>
    <p>Main message for aler ekfjerl fkjerljf</p>
  </div>
  <div class="alert-sign">
  <img class="alert-x" src="icons/remove-symbol.png" alt="" />
  </div>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-x")) {
        alertBanner.style.display = "none";
    }
});


////////////////////////////messaging/////////////////////////////////////

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out 
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});