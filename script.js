const data = {
    labels: [
      "Google.com",
      "Youtube.com",
      "Facebook.com",
      "twitter.com",
      "instagram.com",
      "baidu.com",
      "wikipidia.org",
      "yandex.ru",
      "yahoo.com",
      "whatsapp.com",
      "xvideos.com",
      "pornhub.com",
      "amazon.com",
      "xnxx.com",
      "live.com",
      "Tiktok.com",
      "docomo.ne.jp",
      "yahoo.co.jp",
      "linkedin.com",
      "reddit.com"
    ],
    datasets: [
      {
        label: "Monthly Visits",
        data: [
          88620000000,
          32620000000,
          17600000000,
          6613000000,
          6423000000,
          4944000000,
          4734000000,
          3545000000,
          3398000000,
          3034000000,
          2862000000,
          2548000000,
          2359000000,
          2281000000,
          2165000000,
          1952000000,
          1818000000,
          1779000000,
          1761000000,
          1740000000
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      },
      {
        label: "CO2 Emissions (tons)",
        data: [
          3544800,
          22507800,
          1760000,
          5290400,
          3275730,
          642720,
          94680,
          2410600,
          1155320,
          1668700,
          1087560,
          1605240,
          2075920,
          638680,
          1212400,
          2440000,
          2708820,
          604860,
          193710,
          2262000
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };
  
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  
  var myChart = new Chart(document.getElementById("chart"), config);
  